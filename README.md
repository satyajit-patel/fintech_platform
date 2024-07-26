# Fintech Platform Backend

This is a basic backend for a fintech platform, allowing users to manage their accounts and perform transactions like deposits using Node.js, Hasura, and PostgreSQL.

## Objective:
Develop a basic fintech platform that allows users to manage their accounts and perform simple transactions like deposits and withdrawals, using Node.js, Hasura, and a simple frontend (HTML/CSS/JavaScript).

### Requirements:
Database Setup with Docker
GraphQL API with Hasura
Business Logic with Node.js

## Table of Contents
- [Folder Structure](#folder-structure)
- [Libraries Used](#libraries-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

## Folder Structure
```
backend/
├── config/
│ └── config.js
├── controllers/
│ └── transactionController.js
├── models/
│ └── transactionModel.js
├── routes/
│ └── transactionRoutes.js
├── server.js
├── package.json
└── .env
```


- **config/**: Contains configuration files.
- **controllers/**: Contains the business logic for the application.
- **models/**: Contains functions to interact with the Hasura API.
- **routes/**: Defines API routes.
- **server.js**: Entry point of the application.

## Libraries Used

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **axios**: Promise-based HTTP client for the browser and Node.js.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **hasura**: CLI to manage Hasura GraphQL engine projects.


## Getting Started

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

PORT=your-port
HASURA_ENDPOINT=http://your-hasura-instance/v1/graphql
HASURA_SECRET=your-hasura-secret


- **PORT**: The port on which the server will run.
- **HASURA_ENDPOINT**: The endpoint URL for the Hasura GraphQL API.
- **HASURA_SECRET**: The admin secret for Hasura.

## Running the Application

1. **Start the server**:
    ```bash
    npm start
    ```

The server will start on the port specified in the `.env` file (default is 3000).

## API Endpoints

### Deposit

- **URL**: `/api/v1/deposit`
- **Method**: `POST`
- **Body**:
    ```json
    {
        "accountId": 3,
        "amount": 300.00
    }
    ```
- **Response**:
    ```json
    {
        "data": {
            "insert_fintechDB": {
                "returning": [
                    {
                        "accountId": 3
                    }
                ]
            }
        }
    }
    ```
