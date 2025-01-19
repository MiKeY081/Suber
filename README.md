Suber

Suber is a ride-sharing application tailored for Nepal. It allows users to book rides, track their trips in real time, and make payments seamlessly. Suber is designed to provide affordable, reliable, and efficient transportation solutions.

🚀 Features

User-Friendly Interface: Intuitive design for riders and drivers.

Real-Time Tracking: Monitor rides with live GPS tracking.

Multiple Ride Options: Economy, premium, and bike rides to suit user preferences.

Secure Payments: Support for cash, card, and digital wallet payments.

Driver Ratings and Reviews: Maintain quality by rating rides and drivers.

Multilingual Support: Designed for Nepalese users with local language options.

Ride History: View past rides and transaction details.

🛠️ Technologies Used

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

State Management: Redux

Real-Time Communication: Socket.IO

Deployment: Docker, AWS/Heroku

📦 Installation and Setup

Follow these steps to set up Suber on your local machine:

Prerequisites

Node.js and npm installed.

MongoDB installed and running.

A .env file with the following variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/suber
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

Steps

Clone the repository:

git clone https://github.com/your-username/suber.git
cd suber

Install dependencies:

npm install
cd client
npm install

Start the backend server:

cd ..
npm run server

Start the frontend:

cd client
npm start

Access the app:

Open your browser and navigate to http://localhost:3000.

🤝 Development

Frontend Folder: /client

Backend Folder: /server

API Routes: /server/routes

🌐 API Endpoints

Authentication

POST /api/auth/register: Register a new user.

POST /api/auth/login: Login a user.

Ride Management

POST /api/rides/request: Request a ride.

GET /api/rides/:id: Get ride details.

PATCH /api/rides/:id/cancel: Cancel a ride.

🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements.

Fork the repo.

Create a branch:

git checkout -b feature-name

Commit changes:

git commit -m "Add feature-name"

Push your branch:

git push origin feature-name

Open a pull request.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

📧 Contact

For queries or suggestions, feel free to reach out:

Email: your-email@example.com

GitHub: your-username

LinkedIn: Your LinkedIn

🎯 Future Enhancements

Dynamic Pricing: Implement surge pricing based on demand.

Multi-Currency Support: Allow payments in NPR and USD.

Ride Sharing: Enable pooling for cost-effective rides.

Emergency Assistance: Add SOS features for rider safety.

