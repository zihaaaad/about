# Personal Portfolio & Blog

A lightweight, responsive personal website and blog built with HTML5, modern CSS, and vanilla JavaScript. Powered by a serverless Google Sheets backend for publishing articles and dynamic project listings without requiring a separate database server.

---

## Architecture Overview

- **Static Frontend:** Plain HTML5, responsive CSS grid/flexbox layouts, and vanilla ES6 JavaScript.
- **Dynamic Content Engine:** Connects to a Google Apps Script endpoint acting as a serverless JSON API over Google Sheets, allowing new blog posts and portfolio projects to be published instantly by updating a spreadsheet.
- **Typography & Localization:** Responsive typography pairing Google Fonts (`Roboto` for Latin text and `Noto Serif Bengali` for Bengali content).
- **Responsive Navigation:** Mobile-friendly drawer navigation with smooth scroll anchors and active state highlighting.

## Directory Structure

```text
├── index.html        # Main landing page with hero, bio, and project showcase
├── blog.html         # Blog index fetching published articles from Sheets API
├── blog-post.html    # Single blog article view with dynamic parameter routing
├── css/
│   └── style.css     # CSS styling and color palette
├── js/
│   ├── common.js     # Mobile navigation, smooth scrolling, and sticky header
│   ├── script.js     # Project showcase renderer
│   ├── blog-list.js  # Article catalog fetch and pagination
│   └── blog-post.js  # Single article parser and renderer
├── images/           # Static icons, social logos, and media assets
└── fonts/            # Local fallback font assets
```

## Local Setup

To preview this site locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zihaaaad/about.git
   cd about
   ```

2. **Open in browser:**
   Open `index.html` directly in your browser, or run a lightweight local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Node
   npx serve .
   ```

3. **Deploy to GitHub Pages:**
   This project is ready to host on GitHub Pages. Go to **Settings** > **Pages** and select the `main` branch (root directory) as the build source.

## License

This project is licensed under the [MIT License](LICENSE).
