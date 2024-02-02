import React, { useState } from "react";

function AirdropForm() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAirdropSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle airdrop submission
  };

  return (
    <div>
      <h2>Airdrop Form</h2>
      <form onSubmit={handleAirdropSubmit}>
        <label>
          Recipient Address:
          <input
            type="text"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <button type="submit">Airdrop Tokens</button>
      </form>
    </div>
  );
}

export default AirdropForm;
