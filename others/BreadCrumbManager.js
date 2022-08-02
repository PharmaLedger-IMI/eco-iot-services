const { WebcController } = WebCardinal.controllers;

class BreadCrumbManager extends WebcController {

    constructor(...props) {
        super(...props);

        const prevState = this.getState() || {};
        this.getState = () => this.state;
        const { breadcrumb, ...state } = prevState;
        this.breadcrumb = breadcrumb;
        this.state = state;
        this.breadcrumbHandler();
    }

    setBreadCrumb( breadcrumbData ) {
        this.breadcrumb.push({
            label: breadcrumbData.label,
            tag: breadcrumbData.tag,
            state: this.state
        });
        this.updateBreadcrumb();
        return JSON.parse(JSON.stringify(this.breadcrumb));
    }

    updateBreadcrumb() {
        let breadCrumbs = this.breadcrumb;

        for (let i = 0; i < breadCrumbs.length - 1; i++) {
            for (let k = i + 1; k < breadCrumbs.length; k++) {
                if (breadCrumbs[i].tag === breadCrumbs[k].tag) {
                    breadCrumbs[i].state = breadCrumbs[k].state;
                    breadCrumbs.splice(i + 1, breadCrumbs.length);
                    break;
                }
            }
        }

        breadCrumbs.forEach((segment, index) => {
            segment.disabled = index === breadCrumbs.length - 1;
        })

    }

    breadcrumbHandler() {
        this.onTagClick("breadcrumb-click", (segmentModel) => {

            let spliceIndex = this.breadcrumb.findIndex(segment => {
                return segment.tag === segmentModel.tag;
            })

            if (spliceIndex > -1) {
                if(this.breadcrumb[spliceIndex].state.hasOwnProperty('message')) {
                    this.breadcrumb[spliceIndex].state.message = {};
                    if(segmentModel.state.hasOwnProperty('message')) {
                        segmentModel.state.message = {};
                    }
                }

                this.breadcrumb.splice(spliceIndex);
            }

            this.navigateToPageTag(segmentModel.tag, { ...segmentModel.state, breadcrumb: this.breadcrumb });
        })
    }

}

module.exports = BreadCrumbManager;