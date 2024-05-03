## Frontend Exercise: Monorepo with Next.js Pokedex

### Overview

This repository is a frontend exercise focused on building a Next.js application for a Pokedex, utilizing a mono repo structure with Lerna. It comprises three distinct codebases: `components`, `utils`, and `pokedex`. The `components` and `utils` packages contain reusable code, compiled to CommonJS (CJS) or/and ECMAScript Modules (ESM) for external importability. The `pokedex` project is the main functionality, built with Next.js, Redux, next-redux-wrapper, and TypeScript.

### Features

- Integration with the [PokeAPI](https://pokeapi.co/api/v2/pokemon) to fetch Pokémon data.
- Displaying Pokémon in a data grid using `@mui/x-data-grid` with pagination.
- Client-side redirection to view detailed information about a selected Pokémon, preserving the Redux state.
- Production-ready codebase with Dockerization, clean code practices, and absence of linting issues.
- Optional addition of Storybook for the `components` package to facilitate component documentation and testing.

### Project Structure

- **`components`**: Contains reusable UI components.
- **`utils`**: Houses utility functions and helper modules.
- **`pokedex`**: Next.js application for the Pokedex functionality.

### Instructions

1. Clone the repository.
2. Install dependencies using `yarn`.
3. Start development servers for individual packages or projects.
4. Dockerize the Next.js application for deployment.
5. Ensure clean code practices and resolve any linting issues.
6. Optionally, integrate Storybook for component development and testing.

