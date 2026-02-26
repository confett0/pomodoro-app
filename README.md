![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

# 🍅 Pomodoro Timer App

A modern Pomodoro timer built with React, based on the design from [Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G).

This project started as a simple timer and gradually evolved into a more robust application with improved timing accuracy, automatic session transitions, persistent user preferences, and accessibility considerations.

![Pomodoro Timer Screenshot](https://raw.githubusercontent.com/confett0/pomodoro-app/refs/heads/main/src/assets/screenshot.gif)

## Features

- Accurate countdown using `Date.now()` to prevent timer drift
- Automatic transition between sessions (Pomodoro → Short Break → Long Break)
- Circular progress bar
- Custom session durations (1–99 minutes)
- Customizable theme (accent color and font)
- Persistent user preferences via localStorage
- Pause and resume functions
- Sound and desktop notifications on session completion
- Basic ARIA roles and keyboard navigation for improved accessibility
- Responsive design

## Demo

**Live Demo:** [https://stylish-pomodoro-app.netlify.app/](https://stylish-pomodoro-app.netlify.app/)

---

## How It Works

### Timer Accuracy

Instead of decrementing time every second, the timer calculates the remaining time based on:

```js
const endTime = Date.now() + timeLeft * 1000;
```

This prevents drift caused by delayed intervals.

---

### Automatic Session Switching

When a session completes:

- The timer waits 3 seconds
- Determines the next session:
  - Every 4 Pomodoros → Long Break
  - Otherwise → Short Break
  - After every pause it starts a new Pomodoro

---

### Controlled Inputs Pattern

Session duration inputs use a temporary local state to:

- Allow partial user input (like empty values)
- Prevent invalid values
- Enforce a maximum of 99 minutes
- Normalize values on blur

---

## Tech Stack

- React
- JavaScript (ES6+)
- CSS
- Vite
- LocalStorage
- ESLint
- Prettier

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Project Structure

```
pomodoro-timer/
├── public/
│   └── icons/
│       └── check.svg
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   └── sounds/
│   │       └── chime.mp3
│   ├── components/
│   │   ├── CircularProgressBar.jsx
│   │   ├── ColorPicker.jsx
│   │   ├── FontPicker.jsx
│   │   ├── Footer.jsx
│   │   ├── Menu.jsx
│   │   ├── Modal.jsx
│   │   ├── SessionLengthPicker.jsx
│   │   ├── Settings.jsx
│   │   ├── SettingsButton.jsx
│   │   ├── SettingsIcon.jsx
│   │   ├── SettingsSection.jsx
│   │   ├── Timer.jsx
│   │   ├── TimerButton.jsx
│   │   └── TimerDisplay.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── defaultDurations.js
│   └── main.jsx
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
└── vite.config.js
```

---

## What I Learned

- Managing timer accuracy
- Avoiding stale closures with hooks
- When to use `useCallback` (and when not to)
- Handling controlled inputs with temporary state
- Creating a circular progress bar with svg and the stroke-dash-offset property
- Handling a complex designs with gradients (including a circular border) using a combination of Flexbox and absolute positioning
- Focus management in React with refs
- Implementing WAI-ARIA patterns and keyboard navigation for accessibility
- Creating desktop notifications

---

## Future Improvements

- Implement session statistics and analytics
- Unit tests

---

## Acknowledgments

- Design by [Frontend Mentor](https://www.frontendmentor.io/)
- Sound effect from [Pixabay](https://pixabay.com/it/)

---

## Version

Current version: **3.0**

Major milestones:

- v1 — Basic countdown
- v2 — Accurate timing with `Date.now()`
- v3 — Automatic session transitions + persistence

---

## 📜 License

MIT
