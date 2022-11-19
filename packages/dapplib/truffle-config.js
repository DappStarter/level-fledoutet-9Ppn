require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stool curtain night mistake install permit fringe genuine'; 
let testAccounts = [
"0xeae62f0507c3acec4fb6555609048abe3086182c4b1a7b94aca98a58624c0962",
"0xa90219f04a405c37fd222f331c6d3841173a9caa2f9d772f05e0b171109b78aa",
"0xa1451b482bf06172621d4a79959a232aff0d0a38d158eb33d0eb74a4aa9749bd",
"0xcadd9ddb8f7c6700e26160f93739a206fb3c3d7f3777b822fe94743fc0b6e0d9",
"0x7f78079ecfc6671e007b42fbb430b9328b31d39e80ef74f2144953eb5c1d5688",
"0xa90c724ec1e300ea4e50071ac164b4317fbc11f44343254022a0c6c9955096df",
"0x94cb38c982eca8eb2163e6c69890fcf673ba5719b4e795b7a2d504dd37957948",
"0x69672329f94f13ae9b2c7445008a5e171911b455fafcfb06d19bdd73699835d0",
"0x9d5213ec2455c43a1ff3b757b42da88bca0c0c7984572d8ab4e6ba1021d5f700",
"0x893b6712a5ad4b6bae7477668bee03d6720332919791663b8b9845620a28f4b9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

