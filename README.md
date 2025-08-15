<img src="https://res.cloudinary.com/bekzod-tiny-house/image/upload/v1755250616/Screenshot_from_2025-08-15_14-10-56_j5lo5f.png" alt="Project Banner" />

# 🌟 Finance SaaS Platform 💹

> 💸 A professional, AI-powered financial management system built with the MERN stack and TypeScript, designed to deliver robust analytics, automation, and a premium user experience. 🚀✨📊

---

## 📖 Project Description 📝

Finance SaaS Platform is a modern, cloud-based personal and business finance management application. It empowers users to track 💳 transactions, analyze 📈 spending patterns, automate 🔁 recurring payments, and receive 🤖 AI-assisted insights. The platform combines advanced backend data processing with a sleek, responsive frontend, delivering a seamless experience for individuals and organizations alike. With features like AI-powered receipt scanning 🧾, monthly automated reports 📅, and rich data visualizations 📊, it helps users make informed financial decisions with minimal effort.

---

## 🚀 Core Features 🌐

- 🔒 **Authentication & Security:** Email + Password login, JWT-based authentication with refresh tokens.
- 💳 **Transaction Management:** Create, edit, duplicate, bulk delete transactions with ease.
- 🤖 **AI-Driven Receipt Scanning:** Integrates Google AI to automatically extract transaction data from receipts.
- 📊 **Advanced Analytics:** MongoDB Aggregation Pipelines for real-time, data-rich dashboards.
- 📈 **Data Visualization:** Expense breakdown pie charts, income/expense trend lines, and interactive tables.
- 📅 **Date Range Filtering:** Customizable ranges, including presets such as last 30 days.
- 🔁 **Recurring Transactions:** Automated scheduling via cron jobs.
- 📧 **Automated Monthly Reports:** Generated and sent to users via email.
- 📥 **Data Import & Export:** CSV transaction import with column mapping.
- 👤 **Profile Management:** Cloudinary-powered profile photo uploads.

---

## 📂 Project Structure 📁

```
finance-saas/
├── backend/                                  # API server built with Node.js, Express, and MongoDB
│   ├── src/
│   │   ├── config/                           # Environment, database, and third-party configurations
│   │   ├── controllers/                      # Request handling and response logic
│   │   ├── cron/                             # Scheduled jobs and task scheduling
│   │   ├── enums/                            # Application-wide constants and enumerations
│   │   ├── mailers/                          # Email sending logic and templates
│   │   ├── middlewares/                      # Request validation, error handling, authentication
│   │   ├── models/                           # Mongoose schemas for data persistence
│   │   ├── routes/                           # API endpoint definitions
│   │   ├── services/                         # Business logic and reusable modules
│   │   ├── utils/                            # Utility functions (date helpers, currency formatters, etc.)
│   │   └── validators/                       # Data validation schemas
│   ├── package.json
│   └── tsconfig.json
│
├── client/                                   # Web application built with React, TypeScript, and TailwindCSS
│   ├── src/
│   │   ├── app/                              # Global state management and API client configuration
│   │   ├── assets/                           # Images, icons, and static media
│   │   ├── components/                       # Reusable UI components and widgets
│   │   ├── features/                         # Redux slices and feature-specific logic
│   │   ├── hooks/                            # Custom React hooks
│   │   ├── layouts/                          # Page layouts for consistent UI structure
│   │   ├── pages/                            # Page-level components
│   │   ├── routes/                           # Route configuration and protected routes
│   ├── public/                               # Publicly accessible static files
│   ├── package.json
│   └── vite.config.ts
```

---

## 🔧 Backend Environment Variables ⚙️

```env
PORT="*"
NODE_ENV="*"

MONGO_URI="*"

JWT_SECRET="*"
JWT_EXPIRES_IN="*"

JWT_REFRESH_SECRET="*"
JWT_REFRESH_EXPIRES_IN="*"

GEMINI_API_KEY="*"

CLOUDINARY_CLOUD_NAME="*"
CLOUDINARY_API_KEY="*"
CLOUDINARY_API_SECRET="*"

RESEND_API_KEY="*"
RESEND_MAILER_SENDER="*"

FRONTEND_ORIGIN="*"
```

## 🎨 Frontend Environment Variables 🎯

```env
VITE_API_URL="*"
VITE_REDUX_PERSIST_SECRET_KEY="*"
```

---

## 🛠️ Technology Stack 🧩

**Frontend:**

- ⚛️ React 18 for building a performant, component-driven UI.
- 📝 TypeScript for type-safe, maintainable codebases.
- 🎨 TailwindCSS for utility-first, responsive styling.
- 🖌️ Shadcn UI for accessible, production-ready UI components.
- 📦 Redux Toolkit for state management and API data caching.
- 📊 @tanstack/react-table for advanced, customizable, and performant data tables.

**Backend:**

- 🟩 Node.js (v18+) for scalable, event-driven server logic.
- 🛠️ Express.js for structured and maintainable RESTful APIs.
- 📝 TypeScript for backend code consistency and safety.
- 🍃 MongoDB with Mongoose for flexible, schema-based data persistence.
- 🔐 JSON Web Tokens (JWT) for secure authentication.
- ⏲️ Node-cron for task automation.

**AI & Cloud Integrations:**

- 🤖 Google Gemini API for intelligent document parsing and data extraction.
- ☁️ Cloudinary for optimized media storage and delivery.
- 📧 Resend for transactional and automated email services.

---

## 📦 Installation 📥

```bash
git clone https://github.com/BernieTv/Finance-SAAS-Platform.git
cd Finance-SAAS-Platform

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../client && npm install
```

---

## ▶️ Running Locally 💻

```bash
# Start backend
cd backend && npm run dev

# Start frontend
cd ../client && npm run dev
```

> ⚠️ Ensure `.env` files are correctly configured before running.
