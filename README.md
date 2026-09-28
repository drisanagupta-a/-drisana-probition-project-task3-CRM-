# -drisana-probition-project-task3-CRM-
# Task CRM

A clean and responsive Customer Relationship Management (CRM) web application built using HTML, CSS, and JavaScript.

Task CRM helps users manage customers, track leads, organize follow-up tasks, and view important CRM information from a simple dashboard.

The project uses browser `localStorage` for data persistence, so it works completely on the frontend without requiring a backend or database.

---

## Project Overview

Task CRM is designed as a frontend CRM application with a professional and minimal interface.

The project focuses on:

- Customer management
- Lead tracking
- Task and follow-up management
- Dashboard statistics
- Search and filtering
- Client-side data persistence
- Responsive design
- Clean and accessible user interface

The interface follows a Swiss-inspired visual style with strong typography, structured layouts, clear spacing, and a limited accent color.

---

## Features

### Login

- Simple email and password authentication
- Demo login credentials
- Client-side validation
- Protected application pages
- Logout functionality

### Dashboard

The dashboard provides a quick overview of CRM activity.

It includes:

- Total Customers
- Total Leads
- Total Sales
- Pending Tasks
- Recent Activities
- Recent Sales
- Dynamic statistics based on stored data

### Customers

The Customers section allows users to manage customer records.

Features include:

- Customer table
- Customer name
- Email
- Phone number
- Company
- Customer status
- Search by name, email, or company
- Filter by customer status
- Add new customer
- Customer data stored in `localStorage`

Available customer statuses:

- Active
- Inactive
- Prospect

### Leads

The Leads section is used to track potential customers.

Features include:

- Lead name
- Company
- Contact information
- Lead status
- Follow-up date
- Status filtering
- Overdue follow-up detection
- Add new lead

Available lead stages:

- New
- Contacted
- Converted

### Tasks

The Tasks section helps users manage follow-ups and operational work.

Features include:

- Task description
- Due date
- Priority
- Task status
- Filtering
- Sorting
- Overdue task detection
- Add new task
- Quick task status updates

Available task statuses:

- Pending
- In Progress
- Done

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Styling

- CSS Custom Properties
- CSS Grid
- Flexbox
- Responsive Media Queries
- Inter font

### Data Storage

- Browser `localStorage`

### No Framework Required

The project does not use:

- React
- Angular
- Vue
- Bootstrap
- Tailwind CSS
- jQuery
- TypeScript
- Backend frameworks
- Database systems

The application can run directly in a modern browser.

---

## Project Structure

```text
gdgtask3CRM/
│
├── Agent/
│   ├── project_state.md
│   ├── design_system.md
│   ├── workflow.md
│   └── technology.md
│
├── Guidelines/
│   └── development_rules.md
│
├── styles/
│   ├── reset.css
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   └── patterns.css
│
├── scripts/
│   ├── helpers.js
│   ├── store.js
│   ├── view.js
│   │
│   └── pages/
│       ├── login.js
│       ├── dashboard.js
│       ├── customers.js
│       ├── leads.js
│       └── tasks.js
│
├── index.html
├── login.html
├── dashboard.html
├── customers.html
├── leads.html
├── tasks.html
└── README.md
