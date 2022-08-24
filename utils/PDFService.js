const DSUService = require('../services/DSUService.js');
const FileDownloaderService = require('./FileDownloaderService.js');

class PDFService extends DSUService {
    constructor(DSUStorage) {
        super();

        this.DSUStorage = DSUStorage;
        this.fileDownloaderService = new FileDownloaderService(DSUStorage);

        this.pdfModel = {
            currentPage: 1,
            pagesNo: 0
        };
    }

    onFileReadComplete(callback) {
        if (this.isFileRead) {
            return callback();
        }

        this.fileReadCallback = callback;
    }

    triggerFileReadComplete() {
        if (this.fileReadCallback) {
            return this.fileReadCallback();
        }

        this.isFileRead = true;
    }

    async displayPDF(filePath, fileName, options) {
        if (!options) {
            options = {};
        }
        this.pdfModel = {...this.pdfModel, ...options};

        await this.fileDownloaderService.prepareDownloadFromDsu(filePath, fileName);
        let fileBlob = this.fileDownloaderService.getFileBlob(fileName);
        this.rawBlob = fileBlob.rawBlob;
        this.mimeType = fileBlob.mimeType;
        this.blob = new Blob([this.rawBlob], {
            type: this.mimeType,
        });

        this._loadPdfOrTextFile();
    };

    _loadPdfOrTextFile() {
        const reader = new FileReader();
        reader.readAsDataURL(this.blob);
        reader.onloadend = () => {
            let base64data = reader.result;
            this._initPDF(base64data.substr(base64data.indexOf(',') + 1));
        };
    };

    _initPDF(pdfData) {
        pdfData = atob(pdfData);
        let pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'scripts/third-parties/pdf.worker.js';

        this.loadingTask = pdfjsLib.getDocument({data: pdfData});
        this._renderPage(this.pdfModel.currentPage);
        window.WebCardinal.loader.hidden = true;
    }

    _renderPage(pageNo) {
        this.loadingTask.promise.then(
            (pdf) => {
                this.pdfModel.pagesNo = pdf.numPages;
                pdf.getPage(pageNo).then((result) => this._handlePages(pdf, result));
            },
            (reason) => console.error(reason)
        );
    };

    _handlePages(thePDF, page) {
        const scale = this.pdfModel.scale || 1.5;
        const viewport = page.getViewport({scale: scale});
        let canvas = document.createElement('canvas');
        canvas.style.display = 'block';
        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page.render({canvasContext: context, viewport: viewport});
        document.getElementById('canvas-parent').appendChild(canvas);

        this.pdfModel.currentPage = this.pdfModel.currentPage + 1;
        let currPage = this.pdfModel.currentPage;
        if (thePDF !== null && currPage <= this.pdfModel.pagesNo) {
            thePDF.getPage(currPage).then((result) => this._handlePages(thePDF, result));
        }

        const pdfWrapper = document.getElementById("pdf-wrapper");
        let checkOffset = (container) => {
            if (Math.ceil(container.offsetHeight + container.scrollTop) >= container.scrollHeight) {
                this.triggerFileReadComplete();
            }
        }

        window.addEventListener("scroll", (event) => {
            if (event.target === pdfWrapper) {
                checkOffset(pdfWrapper);
            }
        }, {capture: true});

        checkOffset(pdfWrapper);
    };
}

module.exports = PDFService;