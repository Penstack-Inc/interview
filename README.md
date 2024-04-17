## Getting Started

This guide details how to set up the development environment for this React project.

### Prerequisites

* Node.js (version 14 or later): [Download Node.js](https://nodejs.org/en/download)
* Git version control (optional, but recommended): [Download Git](https://git-scm.com/downloads)

### Steps

**1. Clone the Repository (if using Git)**

```Bash
git clone https://github.com/Penstack-Inc/interview.git
```

**2. Navigate to the Project Directory**

```Bash
cd technical
```

**3. Install Dependencies**

The project uses a combination of npm packages for development and production. To install them all, run:

```Bash
npm install
```

Important Note: If you encounter setup errors during installation, you might need to force a reinstall of dependencies to ensure everything resolves correctly:

```Bash
npm install --force
```

**4. Start the Development Server**

The project utilizes Vite for development. To launch the development server and see the application running in your browser, execute:

```Bash
npm run dev
```

This will typically open your default browser at http://localhost:3000/ (the exact port may vary).

Development Scripts

The package.json file defines several scripts to streamline development tasks:

npm run dev: Starts the development server using Vite.
npm run preview: Starts a preview server using Vite (exact behavior might vary depending on project configuration).


### Cypress Test Suite Documentation

### Overview

This Cypress test suite is designed to ensure the functionality and integrity of our web application. It covers various scenarios and user interactions to validate that the application behaves as expected.

### Prerequisites
Before running the tests, make sure you have the following installed:

Node.js
npm or yarn

### Installation Steps

1. navigate to the test folder in the project directory
```Bash
cd Tests
```

2. Install dependencies:
```Bash
npm install
```

3. Install cypress:
```Bash
npm install cypress
```

### Configuration
Before running the tests, ensure that the cypress.config.js file contains the correct configuration for your environment. You may need to update the base URL based on your local server URL and any other relevant configurations.

### Running Tests
To run the test suite, execute the following command:
```Bash
npx cypress open
```
or 
```Bash
npm run cypress:open
```
then navigate to the tests you want to run

### Writing Tests
Tests are located in the Tests/cypress/e2e directory. You can create new test files or modify existing ones as needed. 

Refer to the Cypress documentation for detailed information on writing tests.

### Test Coverage
This test suite covers the following scenarios:
Sign up negative and positive scenarios


Additional Notes: For more advanced usage or customization, refer to the documentation for Vite, TypeScript, ESLint, and other technologies used in this project.
By following these steps, you should be able to set up the development environment for your React project and start coding!
