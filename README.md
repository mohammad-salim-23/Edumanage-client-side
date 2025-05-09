🎓 Welcome to 3 Idiots Academy

3 Idiots Academy is an online educational platform connecting students with courses and instructors worldwide.

🔗 Live Demo

🚀 Features

User Authentication: Students can sign up, log in, and manage profiles.

Course Enrollment: Browse, enroll, and track progress in courses.

Instructor Requests: Instructors can apply to teach and manage applications.

Payment Integration: Secure course purchases via Stripe.

Feedback System: Students can provide feedback on courses and instructors.

Responsive Design: Mobile-optimized for seamless use on any device.

Admin Panel: Admins can manage users, courses, and instructor requests.

Search & Filter: Search and filter courses by categories, prices, and more.

Real-time Updates: Firebase for real-time database and notifications.

Interactive Learning: Quizzes, assignments, and live sessions for engagement.

🛠 Technologies Used
React.js: Frontend development & state management.

Firebase: Backend services (Firestore, Authentication, Hosting).

Stripe: Secure course payments.

Vercel: Hosting and deployment.

React Query: Efficient data fetching.

Tailwind CSS: Utility-first CSS framework.

⚙️ Setup & Deployment

1️⃣ Server Setup


Clone the server repository:

bash

git clone https://github.com/mohammad-salim-23/Edumanage-server-side.git
cd Edumanage-server-side
npm install
Create a .env file and add:

bash

DATABASE_URL=your_database_url

STRIPE_SECRET_KEY=your_stripe_secret_key

FIREBASE_API_KEY=your_firebase_api_key

Start the server:

bash

npm run dev
The server runs at http://localhost:5000.

2️⃣ Frontend Client Setup

Clone the frontend repository:

bash

git clone https://github.com/mohammad-salim-23/Edumanage-client-side.git

cd Edumanage-client-side

npm install

Create a .env file and add:

bash

VITE_API_URL=http://localhost:5000/api

VITE_FIREBASE_API_KEY=your_firebase_api_key

VITE_AUTH_DOMAIN=your_auth_domain

Start the client:

bash

npm run dev

The client runs at http://localhost:5173.

3️⃣ Firebase Setup

Go to the Firebase Console and create a project.

Enable Firebase Authentication, Firestore, and Firebase Hosting.

Add your Firebase API keys to the .env file:

bash

REACT_APP_FIREBASE_API_KEY=your_api_key

REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain

REACT_APP_FIREBASE_PROJECT_ID=your_project_id

4️⃣ Stripe Payment Integration

Sign up for Stripe and get your API keys.

Integrate Stripe Checkout or Stripe Elements for secure payments in React.

5️⃣ Deploy to Vercel

Sign up/login to Vercel and link your GitHub repo.

Vercel will automatically deploy on every push to the main branch.

6️⃣ Vercel Environment Variables

Configure your Firebase and Stripe environment variables in the Vercel Dashboard.

7️⃣ CI/CD

Set up CI/CD using Vercel's GitHub integration.

Ensure the project auto-deploys on each commit.

🔐 Admin Credentials

Email: admin@example.com

Password: Admin123@

✨ Contributors

Mohammad Salim – Full Stack Developer

🚀 Future Plans

Advanced Analytics: Add analytics for tracking student progress, course popularity, and instructor performance.

Live Mentorship: Enable live mentoring or tutoring sessions within the platform.

Certification System: Implement a certification system upon course completion.

Interactive Courses: Improve learning with interactive video content and peer collaboration.

Discussion Forums: Add forums for students and instructors to interact and share ideas.

Multi-language Support: Cater to a global audience by supporting multiple languages.

Mobile App: Develop a mobile app for an enhanced learning experience on the go.
