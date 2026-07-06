# banking-ledger-system

A secure banking ledger backend built with **Node.js**, **Express.js**, and **MongoDB**. Features include JWT authentication, Google OAuth, email verification, account management, and secure transaction processing.

---

## Features

- JWT Authentication
- Google OAuth Login
- Email Verification
- Password Reset via Email
- User Account Management
- Banking Account Management
- Secure Money Transfers
- Transaction History
- Cookie-based Authentication
- Protected API Routes
- MongoDB Atlas Integration

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security

- JSON Web Token (JWT)
- Google OAuth
- bcrypt
- cookie-parser

### Other Packages

- Nodemailer
- dotenv

---

## Project Structure

```text
banking-ledger-system/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── services/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Hiteshdot08/banking-ledger-system.git
```

### Navigate to the project

```bash
cd banking-ledger-system
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

### Start the development server

```bash
npm run dev
```

---

## API Modules

### Authentication

- User Registration
- User Login
- Google OAuth Login
- Email Verification
- Password Reset
- Refresh Access Token
- Logout

### Accounts

- Create Account
- Update Account
- Delete Account
- View Accounts

### Transactions

- Deposit Money
- Withdraw Money
- Transfer Money
- Transaction History

---

## Authentication

This API uses **JWT-based authentication** with **Access Tokens** and **Refresh Tokens**.

Protected routes require a valid access token.

Example:

```http
Authorization: Bearer <your_access_token>
```

Authentication tokens are also securely stored in HTTP-only cookies for enhanced security.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port |
| `MONGO_URI` | MongoDB connection string |
| `ACCESS_TOKEN_SECRET` | Secret key for access token generation |
| `REFRESH_TOKEN_SECRET` | Secret key for refresh token generation |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |
| `EMAIL_USER` | Email address used to send emails |
| `EMAIL_PASS` | Email app password |

---

## Main Dependencies

- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- Passport.js
- Nodemailer
- dotenv

---

## Future Improvements

- React Frontend
- Admin Dashboard
- Analytics
- Docker Support
- Unit Testing
- Swagger API Documentation

---

## Author

**Hitesh**

GitHub: https://github.com/Hiteshdot08