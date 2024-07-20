const fs = require('fs');
const ipfs = require('./ipfsClient');

async function uploadFile(filePath) {
    const file = fs.readFileSync(filePath);
    const added = await ipfs.add(file);
    console.log('File uploaded to IPFS with CID:', added.path);
}

uploadFile('path/to/your/file.txt'); //hardcode??
