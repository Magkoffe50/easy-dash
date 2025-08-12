# Easy Dash

A modern dashboard built with Next.js and Feature Sliced Design (FSD) architecture.

## 🏗️ Architecture

This project follows the **Feature Sliced Design (FSD)** methodology, which provides a structured approach to organizing code based on business features and technical concerns.

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root page
│   └── styles/            # Global styles
├── shared/                # Shared layer (reusable across all layers)
│   ├── ui/               # UI components (Button, Card, Input, etc.)
│   ├── lib/              # Utilities and helpers
│   ├── api/              # API client and types
│   └── config/           # Configuration files
├── entities/             # Business entities
│   ├── user/             # User entity
│   └── dashboard/        # Dashboard entity
├── features/             # Business features
│   ├── auth/             # Authentication feature
│   └── dashboard/        # Dashboard feature
├── widgets/              # Composite UI blocks
│   ├── Header/           # Header widget
│   ├── Sidebar/          # Sidebar widget
│   └── DashboardStats/   # Dashboard stats widget
└── pages/                # Page components
    ├── HomePage/         # Home page
    ├── DashboardPage/    # Dashboard page
    └── LoginPage/        # Login page
```

### Layer Dependencies

FSD enforces a strict dependency rule: **higher layers can import from lower layers, but not vice versa**.

```
pages → widgets → features → entities → shared
```

- **shared**: No dependencies on other layers
- **entities**: Can only import from `shared`
- **features**: Can import from `entities` and `shared`
- **widgets**: Can import from `features`, `entities`, and `shared`
- **pages**: Can import from `widgets`, `features`, `entities`, and `shared`

### Import Aliases

The project uses TypeScript path mapping for clean imports:

- `@/*` → `src/*`
- `@/shared/*` → `src/shared/*`
- `@/entities/*` → `src/entities/*`
- `@/features/*` → `src/features/*`
- `@/widgets/*` → `src/widgets/*`
- `@/pages/*` → `src/pages/*`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building

```bash
npm run build
```

### Production

```bash
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Architecture**: Feature Sliced Design (FSD)
- **UI Components**: Custom component library
- **Icons**: SVG icons

## 📁 Key Components

### Shared Layer

- **UI Components**: Reusable UI primitives (Button, Card, Input)
- **Utilities**: Common helper functions (classNames, formatDate, etc.)
- **API Client**: Centralized API communication
- **Configuration**: App-wide configuration and constants

### Entities Layer

- **User Entity**: User-related types and UI components
- **Dashboard Entity**: Dashboard-related types and components

### Features Layer

- **Auth Feature**: Authentication logic and UI
- **Dashboard Feature**: Dashboard-specific functionality

### Widgets Layer

- **Header**: Application header with navigation
- **Sidebar**: Navigation sidebar
- **DashboardStats**: Dashboard statistics display

## 🎨 Design System

The project includes a consistent design system with:

- **Color Palette**: Primary, secondary, success, warning, error colors
- **Typography**: Consistent font sizes and weights
- **Spacing**: Standardized spacing scale
- **Components**: Reusable UI components with variants

## 📝 Contributing

When adding new features:

1. **Identify the layer**: Determine which FSD layer your code belongs to
2. **Follow dependencies**: Only import from lower layers
3. **Use aliases**: Import using the `@/` alias pattern
4. **Create index files**: Export components from index files for clean imports
5. **Add types**: Define TypeScript interfaces for all data structures

## 📚 Resources

- [Feature Sliced Design Methodology](https://feature-sliced.design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License.
