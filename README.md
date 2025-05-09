🎓 Welcome to 3 Idiots Academy
3 Idiots Academy is an online educational platform that connects students with courses and instructors worldwide.

🔗 Visit the live version of the project here.

🚀 Features
User Authentication: Students can sign up, log in, and manage their profiles.

Course Enrollment: Browse courses, enroll in them, and track your progress.

Instructor Requests: Potential instructors can apply to teach courses and manage their applications.

Payment Integration: Secure course purchases through Stripe payment gateway.

Feedback System: Students can provide feedback for courses and instructors.

Responsive Design: Mobile-friendly design for seamless experience across devices.

Admin Panel: Admins can manage users, courses, and instructor applications.

Search & Filter: Search and filter courses based on categories, prices, and more.

Real-time Updates: Firebase for real-time database updates and notifications.

Interactive Learning: Quizzes, assignments, and live sessions for an engaging learning experience.

🛠 Technologies Used
React.js – Frontend development and state management.

Firebase – Backend services (Firestore for database, Firebase Authentication, and Firebase Hosting).

Stripe – Payment gateway for secure course purchases.

Vercel – Hosting and deployment platform.

React Query – Efficient data fetching and synchronization with the backend.

Tailwind CSS – Utility-first CSS framework for responsive design.

⚙️ Setup & Deployment Instructions
1️⃣ Server Code Setup
Clone the Server Repository:

git clone https://github.com/mohammad-salim-23/Edumanage-server-side.git

Install Dependencies:

npm install

Set Up Environment Variables:

Create a .env file in the root of the server project and add the following environment variables:


DATABASE_URL=your_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
FIREBASE_API_KEY=your_firebase_api_key
Start the Server:

npm run dev

The server will run on http://localhost:5000.

2️⃣ Frontend Client Setup

Clone the Frontend Repository:


git clone https://github.com/mohammad-salim-23/Edumanage-client-side.git

Install Dependencies:


npm install
Set Up Environment Variables:

Create a .env file and add the following variables:


VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain

Start the Client:

npm run dev

The client will run on http://localhost:5173.

3️⃣ Firebase Setup
Create Firebase Project:

Go to the Firebase Console.

Create a new Firebase project.

Enable Firebase Authentication, Firestore, and Firebase Hosting.

Firebase Configuration:

Obtain your Firebase API keys and configuration from the Firebase Console.

Store the Firebase config in your .env file:


REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
4️⃣ Stripe Payment Integration
Sign Up for Stripe: Create a Stripe account here.

Obtain API Keys: Get your Stripe API keys from the Stripe Dashboard.

Integrate Stripe:

Use Stripe Checkout or Stripe Elements to handle course payments securely in your React app.

5️⃣ Deploy to Vercel
Sign Up/Login to Vercel: Create an account or log in at Vercel.

Link GitHub Repo: Connect your GitHub repository to Vercel.

Deploy: Set up Vercel to build and deploy the app on every commit to the main branch.

6️⃣ Environment Variables for Vercel
Configure Vercel Environment Variables:

Go to the Vercel Dashboard.

Define your Firebase and Stripe configuration details as environment variables.

7️⃣ Continuous Integration/Continuous Deployment (CI/CD)
Set Up CI/CD: Use Vercel’s GitHub integration or CLI for continuous deployment.

Ensure that your project is automatically deployed on every new commit or change in the repository.

🔐 Admin Credentials
Email: admin@example.com

Password: Admin123@

✨ Contributors
Mohammad Salim – Full Stack Developer

