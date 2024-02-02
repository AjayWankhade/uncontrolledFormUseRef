import React from "react";

function WalletConnectButton() {
  const handleConnectWallet = () => {
    // Add logic to connect wallet using Web3.js and MetaMask
  };

  return (
    <div>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
    </div>
  );
}

export default WalletConnectButton;
