# 🥗 MERN Recipe Book

A simple **fullstack CRUD application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This project allows users to **create**, **view**, **edit**, and **delete** recipes — like a personal web-based recipe book.  

---

## 🚀 Features

- 📝 **Create** new recipes with a title, ingredients, and instructions  
- 👀 **View** all saved recipes from the MongoDB database  
- ✏️ **Update** existing recipes  
- 🗑️ **Delete** recipes  
- 💾 Persistent storage using **MongoDB Atlas**  
- ⚙️ Built with a **MERN monorepo** structure  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React |
| Backend | Node.js, Express.js |
| Database | MongoDB (hosted on MongoDB Atlas) |
---

## 📁 Project Structure

```
recipebook/
│
├── backend/              # Express server & API routes
│   ├── models/           # Mongoose schemas
│   ├── routes/           # CRUD API endpoints
│   ├── server.js         # Entry point for backend
│   └── package.json
│
├── frontend/             # React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page views (Home, Add Recipe, etc.)
│   │   └── App.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json          # Monorepo-level scripts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AshtonF04/recipebook.git
cd recipebook
```

### 2️⃣ Install dependencies
```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3️⃣ Set up environment variables

Create a `.env` file inside the **backend** folder:

```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/recipes
PORT=5000
```

> ⚠️ Make sure your `.env` file is listed in `.gitignore`.

### 4️⃣ Run the app locally
From the root directory:
```bash
npm install concurrently --save-dev
npm run dev
```

This will start both:
- **Backend:** http://localhost:5000  
- **Frontend:** http://localhost:3000  

---

## 🧪 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/recipes` | Get all recipes |
| GET | `/api/recipes/:id` | Get a single recipe |
| POST | `/api/recipes` | Create a new recipe |
| PUT | `/api/recipes/:id` | Update a recipe |
| DELETE | `/api/recipes/:id` | Delete a recipe |

Example Recipe Object:
```json
{
  "title": "Spaghetti Carbonara",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan", "Bacon"],
  "instructions": "Boil pasta, cook bacon, mix with eggs and cheese."
}
```

---

## 🧑‍💻 Author

**Ashton Franklin**  
📧 [ashtonfranklin.com]  
🔗 [GitHub Profile](https://github.com/AshtonF04)
