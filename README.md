# Visarena: Visa Navigator Portal

**Visarena** is a modern and user-friendly web application designed to streamline the visa application process. From checking visa requirements to applying and tracking your applications, Visarena offers a comprehensive solution for navigating the complexities of international travel.

## Purpose

The purpose of **Visarena** is to simplify the visa process by providing users with a centralized platform for managing visa applications. Whether you're applying for the first time or tracking your existing applications, Visarena ensures a seamless experience.

## Live URL
🔗 [Visit Visarena](https://visarena-auth.web.app/)

---

## Key Features

- **User Authentication**: Secure login and signup functionality powered by Firebase.
- **Dynamic Visa Management**: Users can add, update, and delete visas and view their applications.
- **Responsive Design**: Fully optimized for devices of all sizes, with light and dark mode themes for user comfort.
- **Interactive Animations**: Engaging animations and visual feedback using libraries like Lottie, React Awesome Reveal, and more.
- **Custom Notifications**: Alert users of important actions such as successful updates or errors.
- **Protected Routes**: Ensures data security by restricting access to user-specific pages like “My Added Visas.”
- **User Dashboard**: Personal dashboard to track all user-added visas and manage them easily.

---

## Pages and Navigation

- **Home Page:**
  - An engaging introduction to the platform with animations.
  - Provides easy navigation links to explore features.

- **All Visa Page:**
  - Displays all publicly available visa types.
  - Dynamic, card-based design for easy browsing.

- **My Added Visas Page:**
  - Displays only visas added by the logged-in user.
  - Includes options to update or delete individual visas.

- **Add Visa Page:**
  - Form-based interface for users to add new visa details.
  - Ensures robust validation for form inputs.

- **Applied Visas Page:**
  - Lists visas the user has applied for with detailed status updates.

- **Update Visa Modal:**
  - Allows users to quickly update visa details through an interactive modal.

- **404 Error Page:**
  - Custom-designed error page for invalid routes with a “Back to Home” button.

---

## Technologies & NPM Packages Used

```bash
- React Router: For routing and navigation.
- Tailwind CSS & DaisyUI: For a modern and consistent UI design.
- Firebase Authentication: For secure user login and registration.
- MongoDB: Backend integration for dynamic visa management.
- React Simple Typewriter: For dynamic text animations on the homepage.
- React: For lightweight, engaging vector animations.
- React Tooltip: For interactive and informative tooltips on hover actions.


## 🏃 How to Run Locally

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**

### Steps to Run Locally

**Clone the Repository**  
   Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/mdhasanshuvo/Visarena.git
   cd haven-hotel-and-suites
