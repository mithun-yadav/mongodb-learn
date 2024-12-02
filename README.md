# Express-Mongo API

A production-ready, scalable REST API built with **Node.js**, **Express**, and **MongoDB**. This API includes best practices for security, performance, and maintainability.

## Features

- Modular structure for scalability.
- RESTful endpoints with Express.
- MongoDB integration with Mongoose.
- Environment variable management using `dotenv`.
- Secure with `helmet` and `compression`.
- Logging with `morgan`.
- Error handling middleware.
- CORS support for cross-origin resource sharing.

---

## Installation

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-mongo-api.git
   cd express-mongo-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/express-mongo-api
   NODE_ENV=development
   ```

4. Start the application:
   - **Development mode:**
     ```bash
     npm run dev
     ```
   - **Production mode:**
     ```bash
     npm start
     ```

---

## Usage

### Welcome Route
- **GET /**
  - Response:
    ```json
    {
      "message": "Welcome to the Express-Mongo API!"
    }
    ```

### User Routes
- **GET /api/users**
  - Fetch all users.

- **POST /api/users**
  - Create a new user.
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "securepassword123"
    }
    ```

---

## Project Structure

```
express-mongo-api/
├── src/
│   ├── config/         # Database connection
│   ├── controllers/    # Route handlers
│   ├── middlewares/    # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── app.js          # Main Express app
│   └── server.js       # Server entry point
├── .env                # Environment variables
├── .gitignore          # Ignored files for Git
├── package.json        # Project metadata
├── README.md           # Project documentation
```

---

## Dependencies

### Core
- [Express](https://expressjs.com/) - Web framework.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling.
- [dotenv](https://github.com/motdotla/dotenv) - Environment variable management.

### Security
- [helmet](https://helmetjs.github.io/) - Security headers.
- [compression](https://github.com/expressjs/compression) - Response compression.
- [cors](https://github.com/expressjs/cors) - Cross-Origin Resource Sharing.

### Logging
- [morgan](https://github.com/expressjs/morgan) - HTTP request logging.

---

## Development Tools

- [Nodemon](https://nodemon.io/) - Automatically restarts the server during development.
- [ESLint](https://eslint.org/) - Linter for code quality.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For inquiries or feedback, please reach out to **Your Name** at [your.email@example.com](mailto:your.email@example.com).
