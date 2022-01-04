const ConnectToPlaton = async () => {
    let provider = null;
    if (typeof window.platon !== 'undefined') {
      provider = window.platon;
      try {
        await provider.request({ method: 'platon_requestAccounts' })
      } catch (error) {
        throw new Error("User Rejected");
      }
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      throw new Error("No Web3 Provider found");
    }
    return provider;
  };
  
  export default ConnectToPlaton;