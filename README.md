# MedTech - Complete Healthcare Platform

A full-stack healthcare platform with doctor consultations, appointments, pharmacy, and administrative dashboards.

## 🏗️ Project Structure

```
doct/
├── doctorBackend/nexGen_MedTech/MedTech_api/    # Backend API (Node.js + Prisma + PostgreSQL)
├── frontend/                                    # Patient Frontend (React + Vite)
├── doctoreDashboard/dashboard/                  # Doctor Dashboard (React + Vite)
├── userDashboard/                              # User Dashboard (React + Vite)
├── start-all.bat                               # Windows batch script to start all servers
├── start-all.ps1                               # PowerShell script to start all servers
└── README.md                                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19+ or 22.12+ (recommended)
- PostgreSQL database
- Git

### Option 1: Use Startup Scripts (Recommended)

**Windows Command Prompt:**
```bash
start-all.bat
```

**Windows PowerShell:**
```powershell
.\start-all.ps1
```

### Option 2: Manual Setup

1. **Start Backend:**
   ```bash
   cd doctorBackend/nexGen_MedTech/MedTech_api
   npm install
   npm start
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Start Dashboard:**
   ```bash
   cd doctoreDashboard/dashboard
   npm install
   npm run dev
   ```

## 🔧 Configuration

### Backend Environment Variables
The backend uses a `.env` file with the following variables:

```env
JWT_SECRET=your_jwt_secret_here
DATABASE_URL="postgresql://postgres:password@localhost:5432/medtech_db?schema=public"
PORT=3000
```

### Database Setup
1. Install PostgreSQL
2. Create a database named `medtech_db`
3. Update the `DATABASE_URL` in `.env` with your credentials
4. Run Prisma migrations:
   ```bash
   cd doctorBackend/nexGen_MedTech/MedTech_api
   npx prisma generate
   npx prisma migrate dev
   ```

## 📱 Application URLs

- **Backend API:** http://localhost:3000
- **Frontend (Patients):** http://localhost:5173
- **Doctor Dashboard:** http://localhost:5174
- **User Dashboard:** http://localhost:5175

## 🔍 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Doctors
- `GET /api/doctors/search` - Search doctors
- `GET /api/doctors/:id` - Get doctor details
- `GET /api/doctors/:id/availability` - Get doctor availability

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/user` - Get user bookings
- `GET /api/bookings/doctor` - Get doctor bookings

### Specialties
- `GET /api/specialties` - Get all specialties

## 🏥 Features

### Frontend (Patient Portal)
- User registration/login
- Doctor search and filtering
- Appointment booking
- Pharmacy orders
- Payment processing
- User reviews

### Doctor Dashboard
- Appointment management
- Patient communications
- Analytics and statistics
- Schedule management

### Backend
- REST API with authentication
- Role-based access control (USER, DOCTOR, ADMIN)
- Database management with Prisma
- Real-time chat functionality
- Payment processing
- Analytics and reporting

## 🛠️ Development

### Linting
```bash
# Frontend
cd frontend && npm run lint

# Dashboard  
cd doctoreDashboard/dashboard && npm run lint
```

### Building
```bash
# Frontend
cd frontend && npm run build

# Dashboard
cd doctoreDashboard/dashboard && npm run build
```

## 🔧 Troubleshooting

### Common Issues

1. **Port conflicts:** Make sure ports 3000, 5173, 5174 are available
2. **Database connection:** Verify PostgreSQL is running and credentials are correct
3. **Node.js version:** Use Node.js 20.19+ for best compatibility
4. **Dependencies:** Run `npm install` in each directory if modules are missing

### Error Messages

- **"Cannot find module":** Run `npm install` in the respective directory
- **"Port already in use":** Kill the process using the port or change the port in configuration
- **"Database connection failed":** Check PostgreSQL is running and `.env` credentials are correct

## 📚 Documentation

- [Backend Setup Guide](doctorBackend/nexGen_MedTech/MedTech_api/SETUP.md)
- [API Authentication](doctorBackend/nexGen_MedTech/MedTech_api/README_AUTH.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
