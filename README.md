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
- **Styling**: Material-UI (MUI) with Emotion
- **Architecture**: Feature Sliced Design (FSD)
- **UI Components**: Material-UI component library
- **Icons**: Material-UI icons
- **Theming**: Light and dark theme support

## 📁 Key Components

### Shared Layer

- **UI Components**: MUI-based reusable components (Button, Card, Input, ThemeProvider)
- **Utilities**: Common helper functions (classNames, formatDate, etc.)
- **API Client**: Centralized API communication
- **Configuration**: App-wide configuration, constants, and theme configuration

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

The project uses Material-UI (MUI) design system with:

- **Themes**: Light and dark theme support with automatic switching
- **Color Palette**: Material Design color system with primary, secondary, and semantic colors
- **Typography**: Material Design typography scale
- **Spacing**: 8px base spacing unit system
- **Components**: Comprehensive MUI component library with consistent styling
- **Icons**: Material Design icon set

### MUI Integration

The project has been fully migrated to use Material-UI components:

- **Theme Provider**: Custom theme provider with light/dark mode switching
- **Component Wrappers**: Custom wrappers around MUI components for consistent API
- **Theme Configuration**: Centralized theme configuration in `src/shared/config/theme.ts`
- **Responsive Design**: Built-in responsive breakpoints and grid system
- **Accessibility**: MUI's built-in accessibility features and ARIA support

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
