# 🔥 Daily Challenge App

A lightweight, user-friendly web application that delivers a new challenge every day to help users build positive habits such as coding practice, fitness, mindfulness, and continuous learning. The app tracks daily completion and maintains a streak to encourage consistency and accountability.

This project is built as a clean, beginner-to-intermediate portfolio piece that demonstrates core front-end development skills, client-side state management, and thoughtful product design.

---

## 🧭 Overview

The **Daily Challenge App** is a single-page web application that presents users with one randomized challenge per calendar day. Users can mark the challenge as completed, and the app maintains a streak counter to reinforce habit formation. The application uses browser `localStorage` to persist daily state without requiring authentication or a backend service.

This project emphasizes:
- Clean UI/UX
- Deterministic daily challenge logic
- Client-side state persistence
- Maintainable and readable code structure

---

## ✨ Features

- ✅ One unique challenge per day  
- 🔁 Daily reset based on the current date  
- 🔥 Streak tracking for completed challenges  
- 💾 Persistent state using browser localStorage  
- 🎨 Minimal, responsive user interface  
- ⚡ No external dependencies or build tools  

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **State Management:** Browser localStorage  
- **Styling:** Custom CSS (no UI frameworks)  
- **Deployment (Optional):** GitHub Pages, Netlify, or Vercel  

---

## 🧩 Architecture & Design

The application is implemented as a simple client-side single-page app:

- `index.html` – Application structure and layout  
- `style.css` – Global styles and responsive layout  
- `script.js` – Core application logic, daily challenge generation, streak tracking, and persistence  

Design principles:
- Separation of concerns between structure, style, and logic  
- Deterministic daily state based on the calendar date  
- Minimal global state  
- Easy extensibility for future backend integration  

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daily-challenge-app.git

    Navigate to the project directory:

    cd daily-challenge-app

    Open index.html in your browser:

        Double-click the file

        Or run:

        open index.html

No additional setup is required.
▶️ Usage

    Open the application in your browser.

    View the challenge generated for the current day.

    Complete the challenge during the day.

    Click “Mark as Completed” to update your streak.

    Return the next day to receive a new challenge.