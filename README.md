# Moss x - Plant Care & E-commerce Platform

A comprehensive plant care and e-commerce platform built with React Native (Expo) and a microservices architecture.

## Features

### Mobile App (Expo + React Native)

- AR Plant Recognition (Viro + Native Camera)
- E-commerce functionality
  - User authentication
  - Product listings with sorting
  - Product details with ratings and comments
  - Shopping cart
  - Wishlist
  - User profiles
- Plant Dashboard
- Payment integration (Stripe/Razorpay)

### Backend (Microservices)

- User Services (Auth, Profiles)
- Plant Services (Plant DB, Care Tips)
- Product Services (Inventory, Cart, Order Management)
- Subscription & Payment Services
- Notification & Reminder Services
- Logistics Integration

## Tech Stack

### Frontend

- React Native (Expo)
- Viro React (AR)
- Redux/Context for state management
- React Navigation

### Backend

- Node.js/Express
- SQL (Users, Orders, Plants)
- MongoDB (Plant profiles, logs)
- Redis (Caching)
- Microservices Architecture

## Project Structure

```
moss-x/
├── mobile/                 # React Native (Expo) app
├── backend/               # Backend microservices
│   ├── user-service/
│   ├── plant-service/
│   ├── product-service/
│   ├── payment-service/
│   ├── notification-service/
│   └── logistics-service/
└── docs/                  # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- Expo CLI
- Docker (for microservices)
- MongoDB
- Redis
- SQL Database

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   # Mobile app
   cd mobile
   npm install

   # Backend services
   cd ../backend
   npm install
   ```

3. Set up environment variables
4. Start the development servers:

   ```bash
   # Mobile app
   cd mobile
   expo start

   # Backend services
   cd ../backend
   npm run dev
   ```

## License

MIT
