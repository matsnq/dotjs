# Project Setup Guide

## Table of Contents

1. [Requirements](#requirements)
2. [Intalling Python](#1-installing-python)
3. [Clone The Repository](#2-clone-the-repository)
4. [Install Frontend Dependencies](#3-install-frontend-dependencies-pnpm--nodejs)
5. [Install Backend Dependencies](#4-install-backend-dependencies-python)
6. [Setting Up Environment Variables](#5-set-up-environment-variables-if-required)
7. [Running Frontend](#6-build-and-run-the-frontend)
8. [Running Backend](#7-run-the-backend)
9. [How Stop Server](#8-stopping-servers)
10. [Quick Start](#quickstart-tldr)

## Requirements

* **Node.js** (v18+ recommended)
* **pnpm** (Node.js package manager)
* **Python** (recommended 3.11+; see install instructions below)
* **pip** (usually comes with Python)

---



## 1. Installing Python

### Windows

1. Go to [python.org/downloads](https://www.python.org/downloads/windows/)
2. Download and install **Python 3.11 or later**.
3. Make sure to check **"Add Python to PATH"** during installation!

Check your version in Terminal/PowerShell:

```powershell
python --version
# or
python3 --version
```

### macOS

Open Terminal and run:

```bash
brew install python
```

Or download from [python.org/downloads](https://www.python.org/downloads/macos/).

Check version:

```bash
python3 --version
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install python3 python3-venv python3-pip
python3 --version
```

---

## 2. Clone the repository

```bash
git clone https://gitea.kood.tech/romangadjak/frontend-framework.git
cd frontend-framework
```

---

## 3. Install frontend dependencies (pnpm + Node.js)

### 3.1. Install Node.js

* [nodejs.org/download](https://nodejs.org/)

  ```bash
  node --version
  ```

### 3.2. Install pnpm

```bash
npm install -g pnpm
# Check:
pnpm --version
```

### 3.3. Install project JS dependencies

From the project root:

```bash
pnpm install
```

---

## 4. Install backend dependencies (Python)

```bash
cd example/backend
```

### (Recommended) Create a virtual environment:

#### Windows:

```powershell
python -m venv venv
venv\Scripts\activate
```

#### macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install Python dependencies:

```bash
pip install -r resources/requirements.txt
```

---

## 5. Set up environment variables (if required)

Create a `.env` file in the backend folder:

```
DB_PATH=resources/main.db
```

---

## 6. Build and run the frontend

Go back to the project root (if you’re not already there):

```bash
cd ../../..   # navigate from example/backend to repo root
pnpm build    # Build the framework (runtime)
pnpm dev      # Start the dev server for the frontend example
```

* Open [http://localhost:5173/](http://localhost:5173/) in your browser

---

## 7. Run the backend

In a new terminal/tab:

```bash
cd example/backend
# Activate the virtual environment if not already activated:
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

python main.py  
```
#### Demonstration
![backend](gif/backend.gif)

* The backend will usually be available at [http://localhost:8000/](http://localhost:8000/)

---

## 8. Stopping servers

* To stop the backend and frontend, use `Ctrl + C` in each respective terminal.

---

## Quickstart (TL;DR)

```bash
# Clone the repo
git clone https://gitea.kood.tech/romangadjak/frontend-framework.git
cd frontend-framework

# Install frontend dependencies
pnpm install

# Build and run the frontend
pnpm build
pnpm dev

# In a new terminal:
cd example/backend
python3 -m venv venv
source venv/bin/activate      # (venv\Scripts\activate on Windows)
pip install -r resources/requirements.txt

# (Create .env if necessary)
python main.py
```

---
