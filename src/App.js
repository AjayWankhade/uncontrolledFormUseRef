import React from "react";
import "./App.css";

import WalletConnectButton from "./components/WalletConnectButton";
import AirdropForm from "./components/AirDropForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Token Airdrop</h1>
        <WalletConnectButton />
        <AirdropForm />
      </header>
    </div>
  );
}

export default App;
