require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stomach crawl scrub exchange include end army genuine'; 
let testAccounts = [
"0xac557ac403db9abf492638d2d4041aca39e1789a548d9d23364f5eca971872e0",
"0xf414c306790a997fe16bc42d013ce26c83acccdb1bad6844d622c3dad1209e26",
"0xebdbb547ad2e89837e4ccf9cf17fb4fdc70c75663a42ed53e1c1e9013972f62e",
"0x56db57b0acd92f80a7557486f13aa28264dd9cef963dae7cc348da60d4fedd36",
"0x56f69725adb58f667fd76b426a3e08ec35201b2c8e8e1fc6083386e90139ad84",
"0x77afd7274c5ffb2c039f7176a2d0d787799c213e15e04c3f261cf72415297855",
"0x93c9617bd7f8adad0097669e2cf1855ede8e1cdc5ba744e43d35d533ec763f78",
"0xbd6c90043f2dd55a96892584176a07c2a85c333db2514b9db32996227e6e9252",
"0xbf084b992b736308c4b7b55a924318029a86438f60d9e1d0126d35649b1b6877",
"0xbefd9753d4bbf1a920d3070cf651fc507cab0159dd5d34658fe3766fdd2687be"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

