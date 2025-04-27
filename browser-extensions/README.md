# Frontend Mentor - Browser extensions manager UI

![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

## 🚀 Live Demo
👉 View the Project Online [URL](https://browser-extensions-app.netlify.app/)

## Welcome! 👋

This project is a Vanilla JavaScript Global State Manager with Persistence, built completely from scratch — no Redux, Zustand, or Vuex.

## ⚡ Features

Global State Management (inspired by Zustand)

Immutable Updates with deepFreeze

Persistent State via localStorage

Safe Storage Handling with error catching

- Light/Dark Theme System

- Filtering System (Active/Inactive)

- Reusable Components (Card)

- Reactive Rendering with subscribe

## 🛠 Project Structure

Path Purpose

- /store/appStore.js Main app state & filters
- /store/theme.js Theme management (dark/light)
- /components/Card.js Card UI component
- /utils/createStore.js Core logic for reactive store
- /utils/localStorage.js Safe local Storage wrapper
- /utils/fetch.js Fetch helper
- /theme/theme.js Theme switching logic

## 🧩 How It Works

- createStore: Builds a reactive store with subscribe, setState, and getState.

- StorageActions: Handles safe save, get, and remove from localStorage.

- Theme System: Auto-detects system theme; persists user preference.

- Rendering: UI auto-updates on state or filter changes.

- Error Handling: All fetch and storage actions are wrapped in try-catch.

## 🚀 Running Locally

Clone the repository

Serve the files (e.g., with Live Server in VSCode)

Open index.html

Enjoy the app!

## 🎯 Future Enhancements

Performance improvements for deepFreeze
