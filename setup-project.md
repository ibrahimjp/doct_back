# Complete MedTech Project Setup Guide

## 🚀 End-to-End Medical Platform

This project includes a complete medical platform with:
- **Frontend**: Patient interface for finding doctors and booking appointments
- **Dashboard**: Doctor interface for managing appointments and analytics
- **Backend**: Complete API with authentication, booking, and payment systems

---

## 📋 Prerequisites

Before running the project, ensure you have:
- **Node.js** (v16 or higher)
- **PostgreSQL** (v12 or higher)
- **npm** or **yarn**

---

## 🔧 Project Structure

```
doct/
├── frontend/                    # Patient-facing web app
├── doctoreDashboard/dashboard/  # Doctor dashboard
├── doctorBackend/nexGen_MedTech/MedTech_api/  # Backend API
└── setup-project.md           # This file
```

---

## ⚡ Quick Setup (All-in-One)

### 1. Install All Dependencies

Run these commands in separate terminals:

**Backend Setup:**
```bash
cd doctorBackend/nexGen_MedTech/MedTech_api
npm install
```

**Frontend Setup:**
```bash
cd frontend
npm install
```

**Dashboard Setup:**
```bash
cd doctoreDashboard/dashboard
npm install
```

### 2. Environment Configuration

**Backend (.env in `doctorBackend/nexGen_MedTech/MedTech_api/`):**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/medtech_db"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-here-make-it-long-and-random"

# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Legacy MongoDB (for existing AI/RAG features)
MONGOURI="mongodb://localhost:27017/medtech"
SECRET="your-session-secret-key"
```

**Frontend (.env in `frontend/`):**
```env
REACT_APP_API_URL=http://localhost:3001/api
```

**Dashboard (.env in `doctoreDashboard/dashboard/`):**
```env
REACT_APP_API_URL=http://localhost:3001/api
```

### 3. Database Setup

```bash
cd doctorBackend/nexGen_MedTech/MedTech_api

# Generate Prisma client
npm run prisma:generate

# Create and run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio
npm run prisma:studio
```

### 4. Start All Services

Open **4 separate terminals** and run:

**Terminal 1 - Backend API:**
```bash
cd doctorBackend/nexGen_MedTech/MedTech_api
npm run dev
```
→ Runs on http://localhost:3001

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
→ Runs on http://localhost:3000

**Terminal 3 - Doctor Dashboard:**
```bash
cd doctoreDashboard/dashboard
npm run dev
```
→ Runs on http://localhost:5173

**Terminal 4 - PostgreSQL:**
```bash
# Make sure PostgreSQL is running
# Windows: Start PostgreSQL service
# Mac: brew services start postgresql
# Linux: sudo systemctl start postgresql
```

---

## 🏥 Application URLs

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:3000 | Patient interface |
| **Dashboard** | http://localhost:5173 | Doctor dashboard |
| **Backend API** | http://localhost:3001 | REST API |
| **API Health** | http://localhost:3001/health | Health check |
| **Prisma Studio** | http://localhost:5555 | Database admin |

---

## 🔑 Features Implemented

### ✅ Frontend (Patient App)
- **Authentication**: Login/Register with JWT
- **Doctor Search**: Find doctors by specialty, rating, location
- **Booking System**: Book appointments with real-time availability
- **Responsive Design**: Mobile-friendly interface
- **Loading States**: Skeleton loading and error handling

### ✅ Dashboard (Doctor Portal)
- **Analytics**: Real-time appointment and earnings stats
- **Appointment Management**: View, confirm, complete bookings
- **Patient Information**: Detailed patient profiles
- **Status Updates**: Real-time booking status management

### ✅ Backend API
- **Authentication**: JWT-based auth with role management
- **Doctor Management**: Complete CRUD operations
- **Booking System**: Slot management and booking flow
- **Payment Integration**: Ready for Stripe/Razorpay
- **Real-time Data**: Live stats and analytics

---

## 📊 Database Schema

The backend uses **PostgreSQL** with **Prisma ORM** and includes:

- **Users** (patients, doctors, admins)
- **Doctors** (profiles, specialties, pricing)
- **Bookings** (appointments, status management)
- **Payments** (transaction tracking)
- **Reviews** (patient feedback)
- **Analytics** (doctor performance metrics)

---

## 🔐 Authentication Flow

### User Registration/Login:
1. User creates account on frontend
2. Backend validates and creates JWT token
3. Token stored in localStorage
4. All API requests include Bearer token
5. Backend validates token for protected routes

### Role-Based Access:
- **USER**: Book appointments, view history
- **DOCTOR**: Manage appointments, view analytics
- **ADMIN**: Full system access

---

## 🧪 Testing the Integration

### 1. Create Test User Account
1. Go to http://localhost:3000/login
2. Click "signup" tab
3. Fill in details and register
4. Login with credentials

### 2. Search for Doctors
1. Navigate to "Find Doctor" in navbar
2. Search by specialty or name
3. View doctor profiles and availability
4. Book an appointment

### 3. Doctor Dashboard
1. Login as doctor (or create doctor profile)
2. Go to http://localhost:5173
3. View appointment analytics
4. Manage booking statuses

### 4. API Testing
Test endpoints directly:
```bash
# Health check
curl http://localhost:3001/health

# Get doctors
curl http://localhost:3001/api/doctors

# Login (to get token)
curl -X POST http://localhost:3001/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

---

## 🛠️ Development Commands

### Backend Commands:
```bash
npm run dev          # Start development server
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open database admin
npm run prisma:push      # Push schema changes
```

### Frontend Commands:
```bash
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
```

### Dashboard Commands:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 🚨 Troubleshooting

### Common Issues:

**1. Database Connection Error**
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env
- Verify database exists: `createdb medtech_db`

**2. Port Already in Use**
- Kill processes: `lsof -ti:3001 | xargs kill`
- Change ports in .env files

**3. CORS Issues**
- Check FRONTEND_URL in backend .env
- Ensure all services are running on correct ports

**4. Authentication Issues**
- Clear localStorage in browser
- Check JWT_SECRET is set in backend
- Verify token format in API requests

**5. Missing Dependencies**
- Run `npm install` in each directory
- Delete node_modules and reinstall if needed

---

## 📝 API Documentation

### Authentication Endpoints:
```
POST /api/users/register  # User registration
POST /api/users/login     # User login
GET  /api/users/profile   # Get current user
PUT  /api/users/profile   # Update user profile
```

### Doctor Endpoints:
```
GET  /api/doctors         # List doctors (with filters)
GET  /api/doctors/search  # Search doctors
GET  /api/doctors/:id     # Get doctor details
POST /api/doctors         # Create doctor profile
PUT  /api/doctors/:id     # Update doctor profile
```

### Booking Endpoints:
```
POST /api/bookings                # Create booking
GET  /api/bookings/my-bookings    # User's bookings
GET  /api/bookings/doctor-bookings # Doctor's bookings
PUT  /api/bookings/:id/status     # Update booking status
PUT  /api/bookings/:id/cancel     # Cancel booking
```

---

## 🔄 Future Enhancements

The platform is ready for:
- **Payment Integration** (Stripe/Razorpay)
- **Chat System** (Real-time messaging)
- **Video Consultations** (WebRTC integration)
- **Push Notifications** (Real-time updates)
- **Mobile Apps** (React Native)
- **AI Integration** (Existing RAG system)

---

## 🎉 Success!

If everything is set up correctly, you should have:
1. **Frontend** running with doctor search and booking
2. **Dashboard** showing real appointment data
3. **Backend** handling all API requests
4. **Database** storing all information
5. **Authentication** working across all services

**Your complete medical platform is now live! 🚀**

---

## 💡 Need Help?

1. Check the console logs in each terminal
2. Verify all environment variables are set
3. Ensure all services are running on correct ports
4. Test API endpoints individually
5. Check database connectivity

**Happy coding! 👩‍⚕️👨‍⚕️**
