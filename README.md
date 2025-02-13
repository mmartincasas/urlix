# BitUrl

> 🚧 **WIP (Work In Progress)** 🚧  
> This project is under development. Stay tuned for more features! 👀


BitUrl is a **simple and efficient URL shortener** built with **Angular** and a backend service for URL management. This project provides a clean, user-friendly interface for shortening long URLs quickly and sharing them with ease.

## 🚀 Features
- Shorten long URLs in seconds.
- Minimalist and responsive design.
- Built with **Angular** for the frontend and **Node.js** for the backend.
- Utilizes **TailwindCSS** for styling.
- Backend integrated with **Supabase** for URL storage.
- Ready for deployment on **Vercel**.

---

## 🛠 Development Setup

To get the project up and running locally, follow these steps:

### 1️⃣ Clone the Repository
Start by cloning the repository to your local machine:

```bash
git clone https://github.com/mmartincasas/bit-url
```

### 2️⃣ Install Dependencies
Ensure you have **Node.js** installed, then install project dependencies:

```bash
npm install
```

### 3️⃣ Run the Backend and Frontend Locally
To start the local development server, run the following command:

```bash
npx vercel dev
```
This will start both the frontend (Angular) and backend (Node.js) locally for testing and development.

---

## 🔒 Security Considerations

### 1. **Supabase Database Setup**:
To get the project running, you need to create your own **Supabase account** and set up a database. Follow these steps:

- Go to [Supabase](https://supabase.io) and create a free account.
- Create a new project and get your **API URL** and **API Key**.
- In the **Supabase dashboard**, create a table to store your URLs. This table should have at least the following columns:
  - A column to store the **original URL**
  - A column to store the **short code**

### 2. **Creating the `.env` file**:
After setting up your Supabase project, you'll need to create a `.env` file in the root of your project with the following content:

```bash
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
BASE_URL=http://localhost:3000   # Or use your deployed URL in production
```

