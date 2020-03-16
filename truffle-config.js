module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    develop: {
    port: 8545
    }
  },
  //contracts_directory: './src/contracts/',
  //contracts_build_directory: './src/abis/',
  //
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
//      evmVersion: "petersburg",
//      version: "0.4.21+commit.dfe3193c"

    }
  }
};
