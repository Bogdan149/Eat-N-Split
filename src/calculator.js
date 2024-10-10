export default function Calculator({
  selectedFriend,
  setTotalAmount,
  setUserPayment,
  setFriendPayment,
  handleSubmitPayment,
  totalAmount,
  userPayment,
  friendPayment,
  errorMessage,
}) {
  return (
    <div className="calculator">
      {selectedFriend ? (
        <h2>
          <span className="red-text">You</span> split the bill with{" "}
          <span className="green-text">{selectedFriend.name}</span>
        </h2>
      ) : (
        ""
      )}

      <h2>Total Bill 💵</h2>
      <input
        type="number"
        placeholder="Total amount"
        className="calculator-input"
        value={totalAmount}
        onChange={(e) => setTotalAmount(Number(e.target.value))}
      />

      <h2>My Payment</h2>
      <input
        type="number"
        placeholder="Amount I pay"
        className="calculator-input"
        value={userPayment}
        onChange={(e) => setUserPayment(Number(e.target.value))}
      />

      <h2>{`${selectedFriend ? selectedFriend.name : "Friend"}'s Payment`}</h2>
      <input
        type="number"
        placeholder="Amount friend pays"
        className="calculator-input"
        value={friendPayment}
        onChange={(e) => setFriendPayment(Number(e.target.value))}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button
        className="submit-button"
        onClick={() => {
          handleSubmitPayment();
        }}
      >
        Submit
      </button>
    </div>
  );
}
