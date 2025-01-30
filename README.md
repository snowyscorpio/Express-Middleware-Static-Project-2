# Express Middleware Static Project 2

This repository contains a solution to an Express.js exercise that serves static files and provides dynamic API responses.

## Exercise: Serve Static Files and Implement API Endpoints

### Requirements:
1. **Set up a static assets directory:**
   - Create a `public` folder that contains:
     - `index.html` (Home page)
     - `about.html` (About page)
     - `css/style.css` (CSS file for all pages)
     - `js/script.js` (JavaScript file for additional functionality)
     - `logo.png` (An image to be displayed)
     - `404.html` (Error page for undefined routes)
   - Configure `express.static` to serve the `public` directory.

2. **Implement Routes:**
   - `GET /`: Serves `index.html` (Home Page).
   - `GET /about`: Serves `about.html`.

3. **Error Handling:**
   - If the user accesses an undefined route, serve `404.html` from the `public` folder.

### Project Structure:
```plaintext
Express-Static-Server-Project/
├── app.js
├── package.json
├── public/
│   ├── index.html
│   ├── about.html
│   ├── css/style.css
│   ├── js/script.js
│   ├── logo.png
│   ├── 404.html
```
- **Static files**: Served from the `public` directory.
- **Server execution**: Managed using Express and Nodemon.

### Solution Overview:

1. **Static File Hosting**:
   - Uses `express.static()` to serve files from `public`.

2. **Defined Routes**:
   - `/`: Serves `index.html` (Home Page).
   - `/about`: Serves the `about.html` file.
   - `404 handler`: Returns `404.html` when a route is not found.

### Example Routes:
- `GET /`: Serves `index.html`.
- `GET /about`: Serves `about.html`.

### How to Run:
1. Download the project as a ZIP file and extract it.
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

### Dependencies:
- **express** (`^4.21.1`): A fast, minimalist web framework for Node.js.
- **nodemon**: Automatically restarts the server when file changes are detected.



Have a great day ♡



![CuteCat](https://github.com/user-attachments/assets/62da8cbb-ac9a-4f58-b24f-1e585d13bd34)



