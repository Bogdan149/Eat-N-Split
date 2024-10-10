import { useState } from "react";

export default function AddFriend({ onAddFriend }) {
  const [nameFriend, setNameFriend] = useState("");
  const [pictureFriend, setPictureFriend] = useState(
    "https://i.pravatar.cc/48"
  );

  function handleAddFriend() {
    if (!nameFriend || !pictureFriend) return;

    const newFriend = {
      id: Math.trunc(Math.random() * 50000),
      name: nameFriend,
      image: pictureFriend,
      balance: 0,
    };

    onAddFriend(newFriend);

    setNameFriend("");
    setPictureFriend("https://i.pravatar.cc/48");
  }

  return (
    <div className="add-friend">
      <h2>Add a friend 👦</h2>

      <h2>Your friend name</h2>
      <input
        type="text"
        placeholder="Friend name"
        maxLength={15}
        onChange={(e) => setNameFriend(e.target.value)}
      />

      <h2>Your friend picture</h2>
      <input
        type="text"
        defaultValue={"https://i.pravatar.cc/48"}
        onChange={(e) => setPictureFriend(e.target.value)}
      />

      <button
        className="submit-button second"
        onClick={() => handleAddFriend()}
      >
        Add friend
      </button>

      <div className="slogan-section">
        <h3 className="slogan">Eat and Pay</h3>
        <img src="./images/logo.png" alt="Eat and Pay logo" className="logo" />
      </div>
    </div>
  );
}
