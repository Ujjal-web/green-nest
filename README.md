# GreenNest – Indoor Plant Care & Store

<div align="center">

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />

  <br />
  
  <h3>
    <a href="https://a9-green-nest.netlify.app">Click here to visit the Live Link</a>
    <!-- <span> | </span>
    <a href="#features">Key Features</a>
    <span> | </span>
    <a href="#installation">Installation</a> -->
  </h3>
  
</div>

---

## 📖 Description

**GreenNest** is an elegant and responsive Single-Page Application (SPA) designed specifically for indoor plant enthusiasts. It provides a comprehensive platform where users can explore plant care guides, purchase a variety of indoor plants, and book expert consultations to cultivate a healthier living space.

The project features a clean, minimalist, and calming design philosophy. It leverages a secure **Firebase** backend for authentication and data management. Plant and service information is fetched dynamically from a JSON source to ensure fast load times, while sensitive routes remain protected to guarantee a personalized and secure user experience.

## ✨ Key Features

*   **🔐 Full User Authentication**
    *   Secure user registration and login.
    *   "Forgot Password" functionality to reset credentials via email.
*   **🌐 Google Sign-In**
    *   One-click social login integration using Google as a Firebase authentication provider.
*   **📂 Dynamic Data Fetching**
    *   Efficient loading of plant listings and service details from a local `plants.json` file, simulating a real-world API experience.
*   **🛡️ Protected Routes**
    *   Implements private routing logic (via React Router) to ensure that Service Details and Profile Management pages are accessible only to logged-in users.
*   **📱 Fully Responsive Design**
    *   Built with a "Mobile-First" approach using Tailwind CSS, ensuring the app looks beautiful on desktops, tablets, and smartphones.
*   **🚀 Single-Page Application (SPA)**
    *   Utilizes React Router for seamless navigation without page reloads, providing a fast and fluid user experience.
*   **🔔 Interactive Notifications**
    *   Real-time feedback for user actions (login success, errors, etc.) using React Toastify.

## 🛠️ Technologies Used

*   **Frontend Library:** [React.js](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Authentication:** [Firebase Auth](https://firebase.google.com/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📸 Screenshots

*(Screenshots of Home page, Login page, and Details page will be added here)*

## 🚀 Installation & Running Locally

To run this project locally on your machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ujjal-web/green-nest.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd green-nest
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Visit `http://localhost:5173` to view the app.



<div align="center">
  Thank you for visiting! 💚
</div>