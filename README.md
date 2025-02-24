# 🌍 **Visarena: Your Visa Navigator Portal** ✈️  

![Visarena Screenshot Placeholder](https://i.ibb.co.com/pvVcX6tf/Banner.png)  

**Visarena** is a modern, user-friendly web application designed to **simplify the visa application process**. Whether you're checking visa requirements, applying, or tracking applications, **Visarena** offers a seamless solution for navigating international travel complexities.  

With **real-time visa tracking, user authentication, and dynamic data management**, **Visarena** ensures a hassle-free experience for global travelers.  

---

## 🌐 **Live Demo**  

🔗 **[Visit Visarena](https://visarena-auth.web.app/)** 🚀  

---

## 🎯 **Project Overview**  

**Visarena** serves as a **centralized visa management system** where users can:  

✅ **Explore visa options** across different countries and categories.  
✅ **Apply for visas** through a structured, intuitive interface.  
✅ **Track applications** with real-time updates and status changes.  
✅ **Manage personal visa history** with a **secure, authenticated dashboard**.  
✅ **Enjoy a responsive, user-friendly experience** across all devices.  

---

## ✨ **Key Features**  

### 🔐 **Authentication & Security**  
- **Firebase Authentication** – Secure login/signup with Google and email-based authentication.  
- **Protected Routes** – Private pages ensure only logged-in users access their visa data.  

### 📋 **Visa Management System**  
- **Apply for visas** with an easy-to-use form.  
- **Track visa applications** in real-time.  
- **Update or delete visas** in the user dashboard.  
- **Admin controls** for managing visa listings (if applicable).  

### 🛠 **Dashboard & Navigation**  
- **🏠 Home Page** – Engaging introduction, quick navigation, and feature highlights.  
- **📋 All Visa Page** – Browse available visas in a clean, card-based UI.  
- **🙋‍♂️ My Added Visas** – Track personal visa applications with edit/delete functionality.  
- **➕ Add Visa Page** – Submit a new visa application with validation.  
- **📂 Applied Visas** – View and track submitted visa applications in a **table view**.  
- **✏️ Update Visa Modal** – Quickly update visa details via a sleek pop-up form.  
- **🗑️ Delete Visa Option** – Remove visas permanently with confirmation alerts.  
- **🚫 404 Page** – Custom error page with a **"Back to Home"** button.  

### 📜 **Additional Features**  
✅ **📄 About Page** – Provides more details about the platform and its purpose.  
✅ **📞 Contact Page** – Allows users to reach out for visa-related queries.  
✅ **📊 Table View** – For better visibility of **My Added Visas** and **My Visa Applications**.  

---

## 📸 **Screenshots**  

### 🏠 Home Page  
![Home Page Screenshot](https://i.ibb.co.com/4RjBnGP3/Home.png)  

### 📋 All Visa Listings  
![Visa Listings Screenshot](https://i.ibb.co.com/PKG0Njb/All-Visa.png)  

### 🔐 Authentication (Login & Register)  
![Login Screenshot](https://i.ibb.co.com/RTfQbp9Z/Login.png)  

### 🛠️ Dashboard 
![Added visa Screenshot](https://i.ibb.co.com/ynbHZ97Z/my-added-visa.png)  
![Applied visa Screenshot](https://i.ibb.co.com/4R1qZGkG/my-applied-visa.png)  

### 📋 About Us Page 
![About Us Page Screenshot](https://i.ibb.co.com/rKyzqSss/About.png)  

---

## 🛠 **Technology Stack**  

| Layer         | Technology |
|--------------|-----------|
| **Frontend** | React.js, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | Firebase Authentication |

---

## 📦 **Notable NPM Packages**  

| Package | Purpose |  
|---------|---------|  
| `react-router-dom` | Enables smooth client-side navigation |  
| `tailwindcss` & `daisyUI` | Modern, utility-first styling for an elegant UI |  
| `firebase` | User authentication and data management |  
| `react-simple-typewriter` | Dynamic text animations for a polished UI |  
| `react-lottie` | Lightweight, interactive vector animations |  
| `react-tooltip` | Informative tooltips for better user guidance |  

---

## 🚀 **Getting Started**  

### 📌 **Prerequisites**  
Ensure you have the following installed:  
- 🟢 **Node.js** (v14+ recommended)  
- 📦 **npm** or **yarn**  

### 🏃‍♂️ **Run the Project Locally**  

#### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/mdhasanshuvo/Visarena.git
cd Visarena
```  

#### 2️⃣ **Install Dependencies**  
```bash
npm install
# or
yarn install
```  

#### 3️⃣ **Set Up Environment Variables**  
Create a `.env` file in the root directory and add:  

```ini
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
VITE_API_KEY=your-firebase-api-key
VITE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_PROJECT_ID=your-firebase-project-id
VITE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_APP_ID=your-firebase-app-id
```
🔐 **Ensure you add `.env` to `.gitignore` to keep credentials secure.**  

#### 4️⃣ **Start the Backend Server**  
```bash
npm run server
```  

#### 5️⃣ **Start the Frontend Client**  
```bash
npm run dev
```  

---

## ❓ **Troubleshooting**  

If you encounter any issues:  
- 🔍 Check the **console/logs** for errors.  
- 📄 Ensure **environment variables** are correctly configured.  
- 🔄 Run `npm audit fix` to resolve package dependency issues.  
- 🔌 Ensure MongoDB is running and properly connected.  
- 📩 Reach out for support via **[GitHub Issues](https://github.com/mdhasanshuvo/Visarena/issues)**.  

---

## 🔥 **Final Notes**  

- **Security Best Practices:**  
  - **Never expose API keys** in the frontend.  
  - Use **environment variables** for sensitive information.  
  - Secure authentication with **JWT** for password hashing.  
- **Performance Optimization:**  
  - Implement **lazy loading** for images.  
  - Use **React Query** for efficient data fetching.  
  - Minify and compress assets for faster load times.  

---
