# banking-ledger-system
A secure banking ledger backend built with Node.js, Express.js, and MongoDB. Features include JWT authentication, Google OAuth, email verification, account management, and secure transaction processing.


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
- CORS

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
│   ├── services/
│   └── utils/
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

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
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

Protected routes require a valid JWT token.

Example:

```http
Authorization: Bearer <your_jwt_token>
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGO_URI | MongoDB Atlas Connection String |
| JWT_SECRET | Secret Key for JWT |
| GOOGLE_CLIENT_ID | Google OAuth Client ID |
| GOOGLE_CLIENT_SECRET | Google OAuth Client Secret |
| EMAIL_USER | Email Address |
| EMAIL_PASS | Email App Password |

---

## Main Dependencies

- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- Nodemailer
- Passport.js
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


**Hitesh**

GitHub: https://github.com/Hiteshdot08