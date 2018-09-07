import Web3 from 'web3';

// We need to make this a configurable item.
const providerKey ="https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q";
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(providerKey);
  web3 = new Web3(provider);
}

export default web3;