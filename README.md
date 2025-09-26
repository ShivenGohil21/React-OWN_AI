Purchase Order Management System

A modern web application built with React that includes input validation, integration, contact management, coordination features, and dynamic "Add Another Talent" functionality.

Component Overview

* TalentCard.jsx – Manages individual talent details and supports multiple ReqSection components
* ReqSection.jsx – Handles job requirement information collection
* TalentDetails.jsx – Central hub that coordinates all talent-related components
* PurchaseOrderDetails.jsx – Manages purchase order information with real-time feedback for form completion
* PurchaseOrderForm.jsx – Main controller for managing purchase orders and talent recruitment details


What This Project Does

This is a Purchase Order Management System designed to help companies manage procurement and talent acquisition. It replaces paper-based purchase orders with a digital solution and makes it easy to track hiring requirements.

Main Purpose

* Create purchase orders with client information, budgets, and timelines
* Manage talent requirements by adding multiple job positions and candidate details
* Track project details such as start/end dates, budgets, and contact information
* Provide dynamic form management with the ability to add or remove talent requirements


What You Can Do With This App

1. Fill Out Purchase Order Details

   * Select your client (Collabera, Acme Corp, etc.)
   * Choose purchase order type (Group PO or Individual PO)
   * Enter PO number, received date, and project timeline
   * Set project budget with currency selection
   * Add contact person details (name and email)

2. Add Job Requirements and Talent

   * Create job positions with titles (Application Development, Business Administrator, etc.)
   * Assign unique Job ID/REQ IDs for tracking
   * Add multiple talents/candidates for each job
   * Track talent details such as:

     * Contract duration
     * Bill rates and currencies
     * Standard and overtime rates
     * Multi-currency support (USD, EUR, INR)

3. Dynamic Management

   * "Add Another Talent" to add more candidates to a job requirement
   * "Add Another" to create additional job requirements
   * Form validation to ensure all required fields are completed
   * Responsive design that works across desktop, tablet, and mobile


How It Is Built

Technology Stack

* React 18 for the user interface
* Vite as the build tool and development server
* Bootstrap CSS for responsive design and styling
* JavaScript ES6+ for modern functionality

Project Structure
`
src/
├── components/
│   ├── PurchaseOrderForm.jsx      - Main form container
│   ├── PurchaseOrderDetails.jsx   - Purchase order information section
│   ├── TalentDetails.jsx          - Talent management section
│   ├── ReqSection.jsx             - Job requirement section
│   └── TalentCard.jsx             - Individual talent details
├── App.jsx                        - Main app component
├── App.css                        - Custom styling
└── main.jsx                       - App entry point


User Interface Features

Clean, Professional Design

* Card-based layout with clean white sections
* Horizontal form layout for easy viewing
* Responsive grid system that adapts to different screens
* Real-time form validation with clear error messages

Interactive Elements

* Dropdown menus for client selection, currencies, and job titles
* Date pickers for timelines and received dates
* Buttons for adding/removing talents and requirements
* Checkboxes for talent selection
* Real-time input validation


Component Breakdown

PurchaseOrderForm.jsx – Main controller

* Manages full form state
* Handles submission and validation
* Includes "Clear Form", "Save Order", and "Edit Order" functionality
* Integrates all other components

PurchaseOrderDetails.jsx – Purchase order information

* Manages client selection, PO details, and project timeline
* Handles budget, currency, and contact details

TalentDetails.jsx – Talent management hub

* Displays all job requirements
* Manages the "Add Another" functionality
* Coordinates multiple ReqSection components

ReqSection.jsx – Job requirement manager

* Handles job title/REQ name selection
* Manages Job ID/REQ ID input
* Supports multiple talents per job
* Provides "Add Another Talent" functionality

TalentCard.jsx – Individual talent details

* Tracks contract duration, rates, and currencies
* Displays talent details in a clean, horizontal layout



Getting Started

Prerequisites

* Node.js version 16 or higher
* npm or yarn package manager

Installation and Running


cd vite-project
npm install
npm run dev
npm run build


Development Server

* Local: [http://localhost:5173](http://localhost:5173)
* Network: http://[your-ip]:5173

---

Real-World Usage

HR and Recruitment Companies

* Manage job openings, candidate information, and rates
* Support multiple currencies for international clients

Consulting Firms

* Create project-based purchase orders
* Track contractor rates and timelines
* Manage project budgets

Staffing Agencies

* Organize talents by job requirements
* Manage billing rates and currencies
* Track project durations and client contact details


Key Features

User-Friendly Design

* Easy to use without technical knowledge
* Clear error and success messages
* Mobile responsive interface

Flexible Data Management

* Add unlimited talents and job requirements
* Multi-currency support for international projects

Professional Output

* Structured, print-ready data presentation
* Validated input before submission



Customization

* Update client list in PurchaseOrderDetails.jsx
* Modify job titles in ReqSection.jsx
* Add currencies in CURRENCIES arrays
* Adjust styles in App.css

Extensibility

* Add new form fields
* Integrate backend APIs
* Export to Excel or PDF
* Enable email notifications



Responsive Design

* Desktop: Full horizontal layout
* Tablet: Responsive grid adjustments
* Mobile: Stacked, thumb-friendly layout
* Print: Clean, professional appearance



This application is a complete, professional-grade solution that:

* Digitizes purchase order management
* Provides a user-friendly interface
* Uses modern web technologies
* Is fully responsive across devices
* Offers professional quality suitable for real business use
* Is well-structured and easy to maintain

Image 



