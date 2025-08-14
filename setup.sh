#!/bin/bash

echo "🚀 Setting up Easy Dash - Full Stack Application"
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd front && npm install && cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend && npm install && cd ..

# Create .env file for backend
echo "🔧 Setting up backend environment..."
cd backend
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Created .env file from env.example"
    echo "⚠️  Please update the .env file with your PostgreSQL credentials"
else
    echo "✅ .env file already exists"
fi
cd ..

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Start PostgreSQL database:"
echo "   docker-compose up -d"
echo ""
echo "2. Update backend/.env with your database credentials"
echo ""
echo "3. Start the development servers:"
echo "   npm run dev"
echo ""
echo "4. Access the applications:"
echo "   - Frontend: http://localhost:3000"
echo "   - Backend: http://localhost:3001"
echo "   - API Docs: http://localhost:3001/api"
echo "   - PgAdmin: http://localhost:5050 (admin@easydash.com / admin)"
echo ""
