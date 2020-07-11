import fs from 'fs';
import { json } from 'express';

const getManifest = () => {
	try {
		return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
	} catch (err) {
		console.log(err);
	}
};

export default getManifest;
