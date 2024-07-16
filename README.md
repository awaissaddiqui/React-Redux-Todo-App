# CRUD App with JSON Server

This project is a simple CRUD (Create, Read, Update, Delete) application built with React and Redux. It utilizes `redux-persist` for state persistence and Tailwind CSS for styling.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/awaissaddiqui/React-Redux-Todo-App.git
    React-Redux-Todo-App
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

## Project Structure
```
crud-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Home.js
│ │ ├── Create.js
│ │ └── Update.js
│ ├── reducers/
│ │ └── UserReducer.js
│ ├── store/
│ │ └── store.js
│ ├── App.js
│ ├── index.js
│ └── Data.js
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## Usage

This application allows you to:

- Create new users
- View a list of users
- Update user details
- Delete users