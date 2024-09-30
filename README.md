# React-TailwindCSS Project

This project is a React application styled with TailwindCSS. It includes a `SearchResults` component that serves as the main file, importing various other components like `SearchResultNavbar`, `SearchResultCards`, `SearchResultFilters`, `SearchResultText`, and `SearchResultPagination`.

## Getting Started
Follow these instructions to set up the project on your local machine.

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn** (v1 or higher)

### Installation

1. **Create React App:**

   ```bash
   npx create-react-app my-app
   cd my-app
   ```

2. **Install TailwindCSS:**

   Install the necessary TailwindCSS dependencies:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

   Initialize the TailwindCSS configuration file:

   ```bash
   npx tailwindcss init -p
   ```

   **Replace** the content of your `tailwind.config.js` with:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Configure Tailwind in CSS:**

   In `src/index.css`, replace the existing code with the following:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Install Additional Dependencies:**

   - Install **MUI (Material UI)** for tooltips:

     ```bash
     npm install @mui/material @emotion/react @emotion/styled
     ```

   - Install **React Slider** for the slider used in `SearchResultFilters.jsx` component:

     ```bash
     npm install react-slider
     ```

5. **Run the Development Server:**

   After completing the above steps, you can start the development server by running:

   ```bash
   npm start
   ```

   This will start the application at `http://localhost:3000`.

## Project Structure

- **`SearchResultsComponents/`**: Contains key components for search results functionality:
  - **`SearchResultNavbar.jsx`**: Handles the search bar and vendor type selection.
  - **`SearchResultFilters.jsx`**: Manages vendor filtering options.
  - **`SearchResultCards.jsx`**: Displays vendor cards in the search results.
  - **`SearchResultText.jsx`**: Shows a summary of the search query and the number of results.
  - **`SearchResultPagination.jsx`**: Provides pagination for the results.

## Features
- **Search by Services**: Search vendors by the services they offer.
- **Search by City**: Filter vendors by their office location in a specific city.
- **Filter by Vendor Type**: Filter vendors based on vendor type.
- **Verified Vendor Filter**: Display only verified vendors.
- **Contact Information Modal**: View contact details of vendors in a modal.
- **Pagination**: Displays 5 vendors per page and supports pagination.
- **Filter Tips**: Displays the currently applied filters at the top of the search results.
- **Inactive Footer Buttons**: The footer buttons for "Join as Vendor", "Login", and "Signup" remain inactive.

## License
This project is licensed under the MIT License.
```

### Additions:
- The **installation steps** for TailwindCSS, MUI, and React Slider are included.
- I've adjusted the structure of the file for clarity.

Feel free to modify this `README.md` to match the exact details of your project. Let me know if you need any further changes!
