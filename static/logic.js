//Network check

Moralis.initialize("EMsXAqgbGx4iXntvl5LJljtp2NOe6fxHjLvVJzmH"); // Application ID
Moralis.serverUrl = "https://rlqmckbkqtfe.usemoralis.com:2053/server"; // Server URL

var web3;

checkWeb3();

async function checkWeb3() {
  const ethereum = window.ethereum;
  if (ethereum || ethereum.on) {
    setWeb3Environment();
  }
}

function setWeb3Environment() {
  web3 = new Web3(window.ethereum);
  getNetwork();
  monitorNetwork();
}
//80001 TestNet 137 Mainnet
async function getNetwork() {
  var chainID = await web3.eth.net.getId();
  console.log(chainID);
  if (chainID == 137) {
    MintAllow();
  } else {
    NetworkCheck();
  }
}

function monitorNetwork() {
  ethereum.on("chainChanged", (chain) => {
    window.location.reload();
  });
}
