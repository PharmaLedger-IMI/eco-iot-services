const  fetch  = require("../utils/fetch");

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

	async getDID(){
		return new Promise((resolve, reject) => {
			if(this.did){
				return resolve(this.did);
			}
			this.getUserDetails((err, userDetails)=>{
				if(err){
					return reject(err);
				}
				const did = `ssi:name:${userDetails.username}`
				this.did = did;
				resolve(did);
			})
		});
	}

	static getDidData(didString){
		const splitDid = didString.split(":");
		return {
			didType: `${splitDid[0]}:${splitDid[1]}`,
			publicName: splitDid[2]
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
