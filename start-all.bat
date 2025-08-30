@echo off
echo Starting MedTech Application...
echo.

echo Starting Backend Server...
start "Backend" cmd /k "cd doctorBackend\nexGen_MedTech\MedTech_api && npm start"

timeout /t 3 >nul

echo Starting Frontend Server...
start "Frontend" cmd /k "cd frontend && npm run dev"

timeout /t 3 >nul

echo Starting Dashboard Server...
start "Dashboard" cmd /k "cd doctoreDashboard\dashboard && npm run dev"

echo.
echo All servers are starting...
echo Backend: http://localhost:3000
echo Frontend: http://localhost:5173 (or the port shown in Frontend window)
echo Dashboard: http://localhost:5174 (or the port shown in Dashboard window)
echo.
pause
