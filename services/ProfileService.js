const  fetch  = require("../utils/fetch");
const scAPI = require("opendsu").loadAPI("sc");
class ProfileService {

	constructor() {
		this.did = null;
	}

	getUserDetails(callback) {
		fetch('/api-standard/user-details')
			.then((response) => response.json())
			.then((userDetails) => {
				callback(null, userDetails);
			})
			.catch((err) => {
				console.log(`Failed to load user-details`, err);
				callback(err);
			});
	}

	async getWalletDomain(){
		return new Promise((resolve,reject)=>{
			scAPI.getMainDSU((err, mainDSU)=>{
				if(err){
					return reject(err);
				}
				try {
					mainDSU.readFile("environment.json",(err, data)=>{
						if(err){
							return reject(err);
						}
						let environmentConfig = JSON.parse(data);
						if(environmentConfig.hasOwnProperty("workspace")){
							return resolve(environmentConfig['workspace']);
						}
						resolve("default");
					})
				}
				catch (e){
					return reject(e);
				}

			})
		})

	}

	async getDID(){
		return new Promise((resolve, reject) => {
			if(this.did){
				return resolve(this.did);
			}
			this.getUserDetails(async (err, userDetails)=>{
				if(err){
					return reject(err);
				}

				const domain = await this.getWalletDomain();
				const did = `did:ssi:name:${domain}:${userDetails.username}`
				this.did = did;
				resolve(did);
			})
		});
	}

	static getDidData(didString){
		const splitDid = didString.split(":");
		return {
			didType: `${splitDid[1]}:${splitDid[2]}`,
			publicName: splitDid[4],
			domain:splitDid[3]
		};
	}
}


let instance = null;
const getProfileServiceInstance = () => {
	if (instance === null) {
		instance = new ProfileService();
	}
	return instance;
};

module.exports = {
	getProfileServiceInstance,
	getDidData:ProfileService.getDidData
};
