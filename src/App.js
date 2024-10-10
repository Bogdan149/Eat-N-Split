import { useState } from "react";
import Sidebar from "./sidebar";
import Calculator from "./calculator";
import AddFriend from "./addfriend";

const initialFriends = [
  {
    id: 118836,
    name: "Bogdan",
    image: "https://i.pravatar.cc/48?img=68",
    balance: -7,
  },
  {
    id: 933372,
    name: "Denis",
    image: "https://i.pravatar.cc/48?img=57",
    balance: 30,
  },
  {
    id: 499476,
    name: "Roxana",
    image: "https://i.pravatar.cc/48?img=9",
    balance: 100,
  },
  {
    id: 613490,
    name: "Zina",
    image: "https://i.pravatar.cc/48?img=41",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const [totalAmount, setTotalAmount] = useState("");
  const [userPayment, setUserPayment] = useState("");
  const [friendPayment, setFriendPayment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend(friend);
    setErrorMessage("");
  };

  const handleSubmitPayment = () => {
    if (selectedFriend === null) {
      setErrorMessage("Choose a friend to split the bill with!");
      return;
    }

    if (!totalAmount || isNaN(totalAmount)) return;

    if (userPayment + friendPayment !== totalAmount) {
      setErrorMessage(
        "The sum of the payments must be equal to the total amount!"
      );
      return;
    }

    setErrorMessage("");

    const friendBalanceUpdate = (userPayment - friendPayment) / 2;

    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + friendBalanceUpdate }
          : friend
      )
    );

    setTotalAmount(0);
    setUserPayment(0);
    setFriendPayment(0);
    setSelectedFriend(null);
  };

  return (
    <div className="container">
      <Sidebar
        initialFriends={friends}
        onSelectedFriend={handleSelectedFriend}
        selectedFriend={selectedFriend}
      />
      <Calculator
        selectedFriend={selectedFriend}
        setTotalAmount={setTotalAmount}
        setUserPayment={setUserPayment}
        setFriendPayment={setFriendPayment}
        handleSubmitPayment={handleSubmitPayment}
        totalAmount={totalAmount}
        userPayment={userPayment}
        friendPayment={friendPayment}
        errorMessage={errorMessage}
      />
      <AddFriend onAddFriend={handleAddFriend} />
    </div>
  );
}
