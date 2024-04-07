# SDE API Assignment by WorkIndia - Match Management System

Welcome to the Match Management System API documentation! This system allows administrators to manage matches, teams, and players, while also providing guests access to view match details and player statistics.

## Table of Contents

- [SDE API Assignment by WorkIndia - Match Management System](#sde-api-assignment-by-workindia---match-management-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Running with Docker](#running-with-docker)
  - [Contributing](#contributing)

## Introduction

The Match Management System API is designed to facilitate the management of matches, teams, and players for sports events. It provides a secure environment for administrators to perform CRUD operations on matches, teams, and players, while also allowing guest users to view match details and player statistics.

## Features

- **Admin Panel**: Administrators can create, edit, and delete matches, teams, and players.
- **Guest Access**: Guest users can view match details and player statistics without authentication.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT) for admin access.

## Technologies Used

- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT)
- Docker

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thekavikumar/API-Submission---WorkIndia.git
```

2. Install dependencies:

```bash
cd API-Submission---WorkIndia
npm install
```

3. Configure MySQL database settings in `.env` file:

```plaintext
DB_HOST=your_database_host
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

## Usage

1. Register as an administrator to obtain an authentication token.
2. Use the obtained token to authenticate and access admin privileges.
3. Use the provided endpoints to manage matches, teams, and players.
4. Guest users can access match details and player statistics without authentication.

## API Endpoints

- **POST /api/admin/signup**: Register as an administrator.
- **POST /api/admin/login**: Login as an administrator.
- **GET /api/matches**: Retrieve all matches.
- **GET /api/matches/:id**: Retrieve match details by ID.
- **POST /api/matches**: Create a new match.
- **GET /api/teams**: Retrieve all teams.
- **GET /api/teams/:id**: Retrieve team details by ID.
- **POST /api/teams**: Create a new team.
- **GET /api/players**: Retrieve all players.
- **GET /api/players/:id**: Retrieve player details by ID.

## Authentication

- Authentication is required for accessing admin privileges.
- Use JSON Web Tokens (JWT) obtained after successful login for authentication.
- Include the JWT in the Authorization header of API requests:

```plaintext
Authorization: Bearer your_jwt_token
```

## Running with Docker

1. Make sure you have Docker installed on your machine.
2. Build the Docker image:

```bash
docker build -t cricbuzz-platform .
```

3. Run the Docker container:

```bash
docker run -p 3000:3000 -d cricbuzz-platform
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
