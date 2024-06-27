# Lendsqr Frontend Test

This repository contains the frontend test project for Lendsqr, built using React, TypeScript, SCSS, Vitest, React Testing Library, and TanStack React Query.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)

## Introduction
This project demonstrates a frontend application using modern web development technologies and best practices. It aims to provide a scalable and maintainable codebase, featuring a robust testing setup and efficient state management.

## Technologies Used
- **React**: For building user interfaces.
- **TypeScript**: For type safety and reducing bugs.
- **SCSS**: For enhanced and maintainable styling.
- **Vitest**: For fast and efficient testing.
- **React Testing Library**: For testing React components.
- **TanStack React Query**: For powerful server state management.

## Project Structure

```bash
lendsqr-fe-test/
├── public/ # Public assets
│ └── index.html # Main HTML file
├── src/ # Source files
│ ├── api/ # Server calls assets
│ ├── assets/ # Static assets
│ ├── context # Provider for handling caching
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom hooks
│ ├── layouts/ # UI hooks
│ ├── pages/ # Page components
│ ├── _colors.scss # SCSS colors
│ ├── App.test.tsx # Test for Main App Component
│ ├── App.tsx # Main App component
│ ├── fonts.scss # Define fonts
│ ├── global.scss # Global style for app
│ ├── main.tsx # Entry point of app
│ ├── setupTests.ts # Setup for testing
│ ├── setupTests.d.ts # Setup TypeScript for testing
│ └── vite-env.d.ts # Vite type definition
├── .eslintrc.cjs # ESLint configuration
├── .gitignore # Git ignore file
├── .prettierrc # Prettier configuration
├── index.html
├── package-lock.json # Project dependencies and scripts
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript 

configuration
├── tsconfig.node.json # TypeScript configuration
└── vite.config.ts # Vite configuration

```

## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DavidBolaji/lendsqr-fe-test.git
   cd lendsqr-fe-test
  ```

2. **Install dependencies**:
   ```bash
   npm install
  ```

3. **Run the development server**:
   ```bash
   npm run dev
  ```

4. **Build the project**:
   ```bash
   npm run build
  ```

5. **Preview the production build**:
   ```bash
   npm run preview
  ```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint for code linting.
- `npm run format`: Formats the code using Prettier.

## Testing
The project uses Vitest and React Testing Library for testing. Tests are located in the src/tests directory. To run the tests, use the following command:

5. **Preview the production build**:
   ```bash
   npm run test
  ```
## Conclusion

This project setup ensures a modern, efficient, and maintainable frontend application. The combination of React, TypeScript, SCSS, Vitest, React Testing Library, and TanStack React Query provides a solid foundation for scalable web development.

For more details on each section of the code, refer to the inline comments and documentation within the source files.
