# 3 Idiots Academy

Welcome to 3 Idiots Academy, an online educational platform that connects learners with courses and instructors worldwide.

Visit the live version of the project [here](https://your-project-url.com/).

## Features
- **User Authentication:** Students can sign up, log in, and manage their profiles.
- **Course Enrollment:** Users can browse courses, enroll, and manage their enrolled courses.
- **Instructor Requests:** Potential instructors can apply to become teachers and manage their applications.
- **Payment Integration:** Integrated payment methods for course purchases using Stripe.
- **Feedback System:** Users can provide feedback on courses and instructors.
- **Responsive Design:** Mobile-friendly interface for seamless access across devices.
- **Admin Panel:** Admins can manage users, courses, and instructor requests.
- **Search and Filter:** Users can search and filter courses based on categories, prices, etc.
- **Real-time Updates:** Utilizes Firebase for real-time database updates and notifications.
- **Interactive Learning:** Includes interactive elements such as quizzes, assignments, and live sessions.

## Technologies Used
- React: Frontend development and state management.
- Firebase: Backend services including Firestore for database, Firebase Authentication, and Firebase Hosting.
- Stripe: Payment gateway integration for handling course purchases securely.
- Vercel: Deployment and hosting platform for frontend application.
- React Query: For efficient data fetching and synchronization with backend services.
- Tailwind CSS: Utility-first CSS framework for responsive design and styling.

## Deployment Instructions
1. **Setup Firebase Project**:
   - Create a new Firebase project in the Firebase console.
   - Set up Firebase Authentication, Firestore, and Firebase Hosting.

2. **Configure Firebase Environment**:
   - Obtain Firebase configuration details (`apiKey`, `authDomain`, `projectId`, etc.) from Firebase console.
   - Create a `.env` file or set environment variables to securely store Firebase config.

3. **Integrate Stripe Payment**:
   - Sign up for a Stripe account and obtain API keys.
   - Implement Stripe Checkout or Elements for secure payment processing in your React app.

4. **Develop Frontend with React**:
   - Build React components for course listings, user profiles, instructor requests, etc.
   - Utilize React Router for navigation and Tailwind CSS for styling.

5. **Deploy to Vercel**:
   - Sign up or log in to Vercel and link your GitHub repository.
   - Configure deployment settings in Vercel to build and deploy on each commit to the main branch.

6. **Set Environment Variables in Vercel**:
   - Define environment variables in Vercel dashboard for Firebase and Stripe configuration.
   - Use Vercel secrets for storing sensitive API keys and configurations securely.

7. **Continuous Integration/Continuous Deployment (CI/CD)**:
   - Set up CI/CD pipelines using Vercel GitHub integration or Vercel CLI for automated deployments.
   - Ensure deployments are triggered automatically on new commits and updates.



8. **Documentation and Support**:
    - Maintain documentation for developers and users, including setup instructions and user guides.
    - Provide support channels such as FAQs, contact forms, or community forums for users and contributors.

By following these steps, you can deploy and manage 3 Idiots Academy effectively, offering a seamless educational experience with secure payments and real-time updates.
