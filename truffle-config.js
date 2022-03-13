module.exports = {
  networks: { //details for connecting to blockchain network under different environments like development, test, prod, etc. 
    development: {
      host: "127.0.0.1",
      port: 7545, // in case of local blockchain network, this is the port number on which ganache is running. 
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}