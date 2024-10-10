# Eat-N-Split 🍽️

Eat-N-Split is a simple and interactive app for splitting bills with friends. Keep track of who owes what after dining together!

## Features

- Add new friends to split bills with.
- Easily calculate how much you and your friends owe based on payments.
- Automatically adjusts balance to show who owes what after each transaction.

## Project Structure

The app is composed of several components:

1. App.js: Main component that manages the state of friends, selected friend, and payments.
2. sidebar.js: Displays the list of friends and allows selection.
3. calculator.js: Handles the bill splitting logic.
4. addFriend.js: Lets you add a new friend.
5. index.css: Styling for the components.

## Technologies Used

- **React**
- **CSS**
- **JavaScript**

## How to Run Locally

1. Clone the repository:

git clone https://github.com/Bogdan149/eat-n-split.git

2. Navigate into the project directory:

cd eat-n-split

3. Install dependencies:

npm install

4. Run the app locally:

npm start

## Usage

Add a Friend: Use the form to add a friend with their name and picture.
Select a Friend: Click "Select" on a friend from the sidebar to split a bill.
Split a Bill: Enter the total bill amount, your payment, and your friend's payment. The app will check if the payments match and adjust the balances accordingly.
