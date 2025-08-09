# Overview

This is a personal portfolio website for Ibrahim Alderini, a Senior Frontend Developer. The application is built as a full-stack web application using React for the frontend and Express for the backend, showcasing professional experience, skills, projects, and contact information in a modern, responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using TypeScript and follows a component-based architecture:

- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Organized into sections (hero, about, experience, skills, projects, contact) with reusable UI components

## Backend Architecture

The backend uses **Express.js** with TypeScript in a minimalist setup:

- **Server Framework**: Express.js with middleware for JSON parsing and request logging
- **Development Setup**: Custom Vite integration for hot module replacement in development
- **Storage Layer**: Abstracted storage interface with in-memory implementation (expandable to database)
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware

## Data Storage

Currently implements an **in-memory storage system** with plans for database integration:

- **Schema Definition**: Drizzle ORM schemas defined for PostgreSQL compatibility
- **Storage Interface**: Abstracted `IStorage` interface allowing easy swapping of storage implementations
- **User Management**: Basic user CRUD operations with username/password structure
- **Migration Support**: Drizzle Kit configured for database migrations

## Database Integration

Configured for **PostgreSQL** using modern tools:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: Neon serverless PostgreSQL (configured but not actively used)
- **Schema Management**: Drizzle Kit for migrations and schema changes
- **Connection**: Environment variable-based database URL configuration

## Development Environment

Optimized for **Replit** development with local development support:

- **Hot Reload**: Vite HMR integration with Express server
- **TypeScript**: Full TypeScript support across frontend and backend
- **Path Mapping**: Organized imports with `@/` aliases for clean code structure
- **Build Process**: Separate build processes for frontend (Vite) and backend (esbuild)

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icon support for social media and branding

## Frontend Libraries
- **React Query**: Server state management and data fetching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing solution
- **date-fns**: Date manipulation and formatting

## Backend Infrastructure
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL hosting
- **connect-pg-simple**: PostgreSQL session store

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the application
- **PostCSS**: CSS processing with Tailwind CSS
- **esbuild**: Fast JavaScript bundler for backend builds

## Replit Integration
- **Replit Vite Plugins**: Development environment optimization
- **Runtime Error Overlay**: Enhanced debugging experience
- **Cartographer**: Code navigation and analysis tools