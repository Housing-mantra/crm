#!/bin/bash

echo "🚀 Setting up Saryu CRM..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in your PATH."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed."
fi

# Function to kill backend on exit
cleanup() {
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID
    exit
}

# Trap SIGINT (Ctrl+C)
trap cleanup SIGINT

# Start the Backend Server
echo "Starting Backend Server..."
PORT=5001 node server.js &
BACKEND_PID=$!
echo "Backend running on PID $BACKEND_PID"

# Wait a moment for backend to initialize
sleep 2

# Start the Frontend Server
echo "Starting Frontend Development Server..."
echo "Open your browser to the URL shown below (usually http://localhost:5173)"
npm run dev
