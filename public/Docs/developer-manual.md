# Public Health Dashboard Developer Manual

## Table of Contents
1. [Introduction](#1-introduction)
2. [Installation](#2-installation)
   - 2.1 [Prerequisites](#21-prerequisites)
   - 2.2 [Installing Dependencies](#22-installing-dependencies)
   - 2.3 [Configuration](#23-configuration)
3. [Running the Application](#3-running-the-application)
   - 3.1 [Development Mode](#31-development-mode)
   - 3.2 [Production Mode](#32-production-mode)
4. [Running Tests](#4-running-tests)
5. [API Documentation](#5-api-documentation)
   - 5.1 [Endpoints](#51-endpoints)
      - 5.1.1 [GET Endpoints](#511-get-endpoints)
      - 5.1.2 [POST Endpoints](#512-post-endpoints)
      - 5.1.3 [PATCH Endpoints](#513-patch-endpoints)
      - 5.1.4 [DELETE Endpoints](#514-delete-endpoints)
   - 5.2 [Authentication](#52-authentication)
   - 5.3 [Error Handling](#53-error-handling)
6. [Known Bugs](#6-known-bugs)
7. [Future Development Roadmap](#7-future-development-roadmap)

## 1. Introduction
Welcome to the Public Health Dashboard developer manual. This documentation provides an overview of the application, its installation process, how to run it, and details about the API it offers.

### 1.1 Purpose
The Public Health Dashboard aims to provide real-time and user-friendly access to critical public health data, including disease prevalence, vaccination rates, healthcare facility locations, and geographical insights. It empowers health professionals, policymakers, and the general public to make informed decisions about public health.

### 1.2 Theory
Our project is guided by the theory of data democratization, which emphasizes universal access to relevant, reliable, and real-time information. By providing seamless access to crucial health data, we enable data-driven decision-making in public health management.

## 2. Installation
This section explains how to set up the application on your local machine.

### 2.1 Prerequisites
Before you begin, ensure you have the following prerequisites installed:
- Node.js
- NPM (Node Package Manager)
- [Database system, if required]
- Clone the repository to your local machine:
    - clone with HTTPS 
        ```bash
            git clone https://github.com/INST377-UMD/inst377-group-project-kgonza77.git
        ```
    - clone with HTTPS
        ```bash
            git clone git@github.com:INST377-UMD/inst377-group-project-kgonza77.git
        ```
### 2.2 Installing Dependencies
To install the required dependencies, run the following command:
```bash
- npm init
- npm install express
- npm install nodemon
- npm install @supabase/supabase-js
```
### 3. [Running the Application](#3-running-the-application)
To run the application on a local server, use the following command:
```bash
- npm start
```
This will start the development server, and you can access the application in your web browser at http://localhost:4000.

### 4. [Running Tests](#4-running-tests)
The project includes unit tests written in Jest for testing Express routes and functions. To execute all test files within the `/test` directory, use the

### 5. [API Documentation](#5-api-documentation)
The application uses the following APIs:

 - Disease.sh API: Provides real-time data on disease spread, including cases, recoveries, and fatalities.

 - Geospatial API: Used for displaying the locations of healthcare facilities, vaccination centers, and testing sites on interactive maps.

 - Leaflet API: An open-source JavaScript library for mobile-friendly interactive maps.

 - HealthCare.gov API: Provides health guidelines and educational resources.

For detailed API endpoints and their functionalities, please refer to the source documentation.
Note that these are third-party services provided by other developers; we do not own or control them. The usage of such APIs may require separate setup and usage instructions.

### 6. [Known Bugs](#6-known-bugs)

### 7. [Future Development Roadmap](#7-future-development-roadmap)
Future development plans for the Public Health Dashboard include:

 - Enhancing the user interface for better accessibility and user experience.
 - Implementing additional features such as customizable alerts and user preferences.
 - Addressing known bugs and issues reported by users.
 - Expanding the application's geographical coverage to include more regions and countries.

Contributions from the open-source community are welcome. Feel free to submit issues and pull requests to help improve the project.


## Developed by 
 - Kevin Gonzalez
 - [place-holder]
 - [place-holder]