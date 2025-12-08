# Easy Dash - Full Stack Application

A modern full-stack application with Next.js frontend and NestJS backend, featuring PostgreSQL database integration.

## Project Structure

```
easy-dash/
├── front/                 # Next.js Frontend Application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/              # NestJS Backend Application
│   ├── src/
│   ├── package.json
│   └── ...
├── package.json          # Root package.json for monorepo management
└── README.md
```

## Prerequisites

- Node.js (>= 18.0.0)
- npm (>= 8.0.0)
- PostgreSQL (>= 12.0)

## Quick Start

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend and backend dependencies
npm run install:all
```

### 2. Start Development Servers

```bash
# Start both frontend and backend in development mode
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- API Documentation: http://localhost:3001/api

## Available Scripts

### Root Level Commands

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend
- `npm run start` - Start both applications in production mode
- `npm run install:all` - Install dependencies for all packages
- `npm run clean` - Clean all node_modules and build artifacts
- `npm run lint` - Run linting for both frontend and backend

### Frontend Commands (from front/ directory)

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the Next.js application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

### Backend Commands (from backend/ directory)

- `npm run start:dev` - Start NestJS in development mode with hot reload
- `npm run build` - Build the NestJS application
- `npm run start:prod` - Start the production server
- `npm run lint` - Run ESLint

## API Documentation

Once the backend is running, you can access the Swagger API documentation at:
http://localhost:3001/api

## Development

### Frontend (Next.js)
- Built with Next.js 15
- Uses Material-UI for components
- Zustand for state management
- TypeScript for type safety

### Backend (NestJS)
- Built with NestJS framework
- TypeORM for database operations
- PostgreSQL as the database
- Swagger for API documentation
- Class-validator for request validation


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

