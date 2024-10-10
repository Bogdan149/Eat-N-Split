import userEvent from "@testing-library/user-event";
import { useState } from "react";

export default function Sidebar({ initialFriends, onSelectedFriend, selectedFriend }) {
  return (
    <div className="sidebar">
      <ul>
        <h1>Friends List 👩🏽‍🤝‍🧑🏼</h1>
        {initialFriends.map((list) => (
          <li
            className={`friend-item ${
              selectedFriend && selectedFriend.id === list.id ? "selected" : ""
            }`}
            key={list.id}
          >
            <div className="friends-info-container">
              <img src={list.image} alt={list.name} className="friend-image" />
              <div className="friend-details">
                <p>{list.name}</p>
                <span
                  style={{
                    color:
                      list.balance > 0
                        ? "var(--color-medium)"
                        : list.balance === 0
                        ? "var(--color-light)"
                        : "var(--color-debt)",
                  }}
                >
                  {list.balance > 0
                    ? `${list.name} owes you ${Math.abs(list.balance)}$`
                    : list.balance === 0
                    ? `You and ${list.name} are even`
                    : `You owe ${list.name} ${Math.abs(list.balance)}$`}
                </span>
              </div>
            </div>
            <button
              className="general-button"
              onClick={() => onSelectedFriend(list)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
