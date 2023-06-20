@echo off
cd backend
echo "Removing already existing build..."
rmdir /S /Q "build"
echo "Done."
cd ..\easeup
echo "Creating a new build..."
npm run build
echo "Done."
echo "Moving the new build..."
move "build" "..\backend"
echo "Done."
cd ..
