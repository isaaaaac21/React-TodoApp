# React Todo App

A modern task management application built with React and Material-UI that demonstrates advanced React concepts and hooks usage.
## Features

- Create, edit, and delete tasks
- Mark tasks as completed
- Filter tasks by status (All/Completed/Not Completed)
- Persistent storage using localStorage
- Responsive Material-UI design
- Toast notifications for user actions
- Confirmation dialogs for important actions

## Technology Stack

- React 19
- Material-UI (MUI) v7
- Vite
- ESLint

## React Concepts & Hooks Used

### Hooks
- `useState` - For local state management
- `useReducer` - For complex state logic in tasks management
- `useContext` - For global state sharing (Filter, Theme, SnackBar)
- `useEffect` - For localStorage persistence
- `useMemo` - For performance optimization in task filtering
- Custom Hook (`useTodos`) - For centralized todos state management

### Context APIs
- `FilterContext` - Task filtering state
- `ReducerContext` - Todo state management
- `SnackBarContext` - Toast notifications
- `ThemeContext` - Material-UI theming

## Installation

```bash
git clone <repository-url>
cd React-TodoApp
npm install
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── Todo-app/
│   │   ├── Task/
│   │   ├── tasks/
│   │   ├── TodoList.jsx
│   │   └── ToggleButtons.jsx
│   └── pop-ups/
├── contexts/
│   ├── FilterContext.jsx
│   ├── ReducerContext.jsx
│   ├── SnackBarContext.jsx
│   └── ThemeContext.jsx
├── reducers/
│   └── todoReducer.jsx
└── App.jsx
```

## Key Features Implementation

### State Management
- Global state managed through Context API and useReducer
- Local state with useState for component-specific data
- Persistent storage using localStorage

### Performance Optimization
- Memoization with useMemo for filtered tasks
- Optimized rendering with proper component structure
- Efficient state updates using useReducer

### UI/UX
- Material Design components
- Custom theming
- Responsive layout
- Toast notifications
- Smooth animations

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

