# 👔 Employee Management System

[![Spring
Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Java](https://img.shields.io/badge/Java-21-orange?logo=java)](https://www.oracle.com/java/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-blue?logo=mysql)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)](https://getbootstrap.com/)
[![License:
MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/Author-Shivansh%20Mishra-blueviolet)](https://github.com/shivanshmishra54)

------------------------------------------------------------------------

A modern, fully functional **Employee Management System** built using
**Spring Boot (Backend)** and **React.js (Frontend)**.\
Designed with scalability, clean architecture, and enterprise-style UI,
this project supports complete **CRUD operations**, making it perfect
for:

-   Recruiter portfolios\
-   College major projects\
-   Real-time HR management systems\
-   Spring Boot + React full-stack learning

------------------------------------------------------------------------

## ✨ Features Overview

### 🔧 Core Functionalities

-   📋 **Employee Dashboard** -- View all employees in a clean table
    layout\
-   ➕ **Add Employee** -- Form validation & instant data submission\
-   ✏️ **Update Employee** -- Edit employee details in real-time\
-   🗑️ **Delete Employee** -- Secure record removal\
-   🌐 **REST API Integration** -- JSON-based communication\
-   🎨 **Fully Responsive UI** -- Built with React Bootstrap

### 🚀 Technical Highlights

-   🔄 Full CRUD using Spring Boot REST APIs\
-   🧹 Clean controller-service-repository architecture\
-   🔗 CORS-enabled backend for smooth communication\
-   🗃 Hibernate auto-creating tables\
-   ⚡ High-performance React frontend

------------------------------------------------------------------------

## 📸 Screenshots

  Screen             Preview
  ------------------ -------------------------------------------------
  🏠 Dashboard       ![Dashboard](screenshots/dashboard.png)
  ➕ Add Employee    ![Add Employee](screenshots/add-employee.png)
  ✏️ Edit Employee   ![Edit Employee](screenshots/edit-employee.png)

------------------------------------------------------------------------

## 🛠 Tech Stack

  -----------------------------------------------------------------------
  Layer           Technology                 Description
  --------------- -------------------------- ----------------------------
  **Frontend**    React.js                   Component-based architecture

  **UI            Bootstrap 5 / React        Responsive styling
  Framework**     Bootstrap                  

  **Routing**     React Router DOM           SPA navigation

  **Backend**     Spring Boot 3              REST API backend

  **ORM**         Spring Data JPA            Database abstraction
                  (Hibernate)                

  **Database**    MySQL                      Relational storage

  **Build Tools** Maven, npm                 Project builds &
                                             dependencies
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 📂 Project Structure

Employee-Management-System/ ├── Backend/ \# Spring Boot Project │ ├──
src/ │ ├── pom.xml │ └── application.properties └── Frontend/ \# React
Project ├── src/ ├── package.json └── public/

------------------------------------------------------------------------

# 🚀 How to Run the Project

## 1️⃣ Prerequisites

Install the following:

-   ✔ Java **JDK 21**
-   ✔ Node.js & npm
-   ✔ MySQL Server

------------------------------------------------------------------------

## 2️⃣ Database Setup

CREATE DATABASE employee_management_system;

> **Note:** Hibernate will auto-create all tables.

------------------------------------------------------------------------

## 3️⃣ Backend Setup (Spring Boot)

cd Backend

Update MySQL credentials in:

src/main/resources/application.properties

spring.datasource.username=root spring.datasource.password=YOUR_PASSWORD

Run backend:

mvn spring-boot:run

Backend URL:

http://localhost:8080

------------------------------------------------------------------------

## 4️⃣ Frontend Setup (React)

cd Frontend

npm install\
npm start

Frontend URL:

http://localhost:3000

------------------------------------------------------------------------

## 🎯 Future Enhancements

-   [ ] JWT authentication\
-   [ ] Attendance & leave system\
-   [ ] Salary & payroll\
-   [ ] Analytics dashboard\
-   [ ] Export CSV/PDF

------------------------------------------------------------------------

## 👤 Author

Shivansh Mishra\
GitHub: https://github.com/shivanshmishra54\
LinkedIn: https://www.linkedin.com/in/shivansh-mishra54/
