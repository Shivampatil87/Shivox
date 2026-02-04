# 🚀 Shivox

Shivox is a web-based real-time communication platform designed to provide seamless user interaction with a clean UI and scalable full-stack architecture. The project focuses on modern frontend development, real-time features, and reliable deployment.

🌐 **Live Demo:** https://shivoxxf.onrender.com

---

## ✨ Features

- 🔐 User authentication (Register & Login)
- ⚡ Fast and responsive user interface
- 📡 Real-time communication support
- 🎨 Modern UI built with Material UI
- 🔌 API-driven backend architecture
- 🛡️ Secure handling of environment variables
- ☁️ Deployed on cloud using Render

---

## 🛠️ Tech Stack

### 🎨 Frontend
- ⚛️ React (Vite)
- 🎨 Material UI
- 🌐 Axios
- 🧭 React Router DOM

### ⚙️ Backend
- 🟢 Node.js
- 🚀 Express.js
- 🔄 Socket.io
- 🗄️ MongoDB (Atlas)

### ☁️ Deployment
- 🚀 Render (Frontend + Backend)

---

## 📁 Project Structure

ZoomApp/
│
├── frontend/ # React + Vite frontend
├── backend/ # Node.js + Express backend
├── .gitignore
└── README.md


---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` directory and configure the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


🚫 Never commit `.env` files to GitHub.

---

## 💻 Installation & Local Setup

### 📥 Clone the repository
```bash
git clone https://github.com/Shivampatil87/Shivox.git
cd Shivox
🎨 Frontend setup
cd frontend
npm install
npm run dev
⚙️ Backend setup
cd backend
npm install
npm run dev
🚀 Deployment Details
🌍 Frontend deployed as a Render Static Site

🖥️ Backend deployed as a Render Web Service

📦 Frontend production build output: dist/

🔧 Node.js version pinned for stable builds

🔗 Live Application:
👉 https://shivoxxf.onrender.com

⚠️ Known Limitations
🚧 Some features are still under development

📈 Performance optimizations are ongoing

🧪 Error handling and validation improvements are in progress

👨‍💻 Author
Shivam Patil
🎓 B.Tech Computer Engineering (Final Year)
💡 Passionate about full-stack development and real-time web applications

📜 License
📚 This project is created for educational and learning purposes only.
