# Task Management System
A web-based application for managing tasks efficiently. The system allows users to create, edit, delete, and manage tasks with priority levels. It also supports user authentication and authorization to ensure secure access.
## Features
  + Task Creation: Users can create new tasks with a title, description, and due date.
  + Task Management:
    +   View a list of tasks with pagination.
      +  Edit task details (title, description, and due date).
        + Delete tasks with a confirmation prompt.
    + Update task statuses (e.g., pending, completed).
  + Priority Management:
     + Tasks can be assigned priority levels.
     + Move tasks between different priority categories.
+ User Authentication:
    + Register and login securely using hashed passwords.
    +   Authorization to ensure only logged-in users can access tasks.
+ Visual Representation:
    + Color-coded priority lists for easy distinction.
    + Responsive Design:
    +  Optimized for both desktop and mobile devices.

## Tech Stack
+ Frontend:
    + HTML, CSS, JavaScript (with React.js)
+ Backend:
   + Node.js, Express.js
+ Database:
    + MongoDB
+ Authentication:
  + JWT (JSON Web Tokens)
+ Styling:
  + CSS with a clean and responsive design
+ Development Tools:
    + Visual Studio Code
    + Postman (for API testing)
 
## Installation and Setup
Follow these steps to set up the project locally:
#### 1. Clone the Repository
    git clone https://github.com/<your-username>/task-management-system.git
    cd task-management-system
#### 2. Install Dependencies
Install both frontend and backend dependencies:
 <!---  Navigate to the frontend directory -->
    cd frontend
    npm install

 <!-- Navigate to the backend directory -->
      cd ../backend
      npm install
### 3. Configure Environment Variables
 Create a .env file in the backend directory and add the following: 
 
    PORT=5000
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key




