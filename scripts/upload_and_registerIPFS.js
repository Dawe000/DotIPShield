const IPFS = require('ipfs-core');

async function createIPFSClient() {
  const ipfs = await IPFS.create({
    url: 'https://ipfs.infura.io:5001',
    headers: {
      authorization: `Basic ${Buffer.from(`${process.env.IPFS_PROJECT_ID}:${process.env.IPFS_PROJECT_SECRET}`).toString('base64')}`,
    },
  });
  return ipfs;
}

async function uploadToIPFS(fileContent) {
  const ipfs = await createIPFSClient();
  try {
    const { path } = await ipfs.add(fileContent);
    return path;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw error;
  }
}

module.exports = { uploadToIPFS };
