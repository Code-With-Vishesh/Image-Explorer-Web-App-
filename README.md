# 🖼️ Image Explorer

<div align="center">

### 🔍 Discover. Upload. Download. Explore.

**A modern and interactive image discovery platform powered by Pexels, Pixabay & Unsplash APIs with performance optimization.**

<br>

![Image Explorer](https://img.shields.io/badge/Image-Explorer-8A2BE2?style=for-the-badge\&logo=image\&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![API](https://img.shields.io/badge/API-Powered-00C853?style=for-the-badge)

<br>

[![GitHub](https://img.shields.io/badge/GitHub-Code--With--Vishesh-181717?style=for-the-badge\&logo=github)](https://github.com/Code-With-Vishesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vishesh%20Jaiswal-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/codewithvishesh/)

</div>

---

## ✨ About The Project

**Image Explorer** is a modern web application designed to make image discovery simple, fast, and enjoyable.

Users can search for high-quality images using keywords, explore results from multiple image APIs, upload their own images, preview images in a beautiful modal, and download images instantly.

The project also includes a simple **authentication system using LocalStorage**, allowing users to create an account and maintain a personalized session.

> 🚀 Built with pure HTML, CSS and JavaScript — no frontend framework required.

---

## � Home Page

Experience the stunning ImageLens interface — a modern image discovery platform with an intuitive design.

<div align="center">

![ImageLens Homepage](https://img.shields.io/badge/ImageLens-Homepage-8A2BE2?style=for-the-badge)

**Powered by Code With Vishesh**

- ✨ Beautiful gradient UI with particle animations
- 🔍 Instant search across 3 image APIs (Pexels, Pixabay, Unsplash)
- 🎨 Modern dark theme with vibrant accents
- 💫 Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Lightning-fast image loading

</div>

---

## �🎯 Why Image Explorer?

Finding the right image shouldn't feel complicated.

Image Explorer brings multiple useful features together in one clean interface:

```text
🔎 Search Images
      ↓
🌐 Fetch Results
      ↓
🖼️ Explore Gallery
      ↓
👁️ Preview Full Size
      ↓
⬇️ Download Image
```

Whether you're looking for wallpapers, nature photography, technology images, travel inspiration, or creative assets — Image Explorer gives you a smooth way to discover them.

---

# 🚀 Features

## 🔍 Smart Image Search

Search for images using simple keywords.

Image Explorer fetches results dynamically from:

* 📸 Pexels API
* 🌎 Pixabay API
* 🎨 Unsplash API (via secure Express proxy)

Results from all 3 providers are merged and displayed instantly in a responsive gallery.

---

## 🖼️ Dynamic Image Gallery

Explore images through a clean and modern gallery interface.

### Gallery features:

* Responsive grid layout
* Image hover animations
* Smooth transitions
* Lazy image loading
* Dynamic API results
* Beautiful image cards
* Mobile-friendly layout

---

## 📤 Image Upload

Users can upload their own images directly into the application.

Uploaded images are automatically added to the gallery and can be viewed alongside API results.

---

## 👁️ Full-Screen Image Modal

Click any image to open a larger preview.

The modal provides:

* Full-size image preview
* Photographer information
* Image source
* Download option
* Close interaction
* Smooth opening animation

---

## ⬇️ Instant Downloads

Download images directly from the image preview modal.

No unnecessary navigation.

**One click → Download.**

---

## 🔐 User Authentication

Image Explorer includes a simple authentication system.

### Authentication features:

* 📝 User Signup
* 🔑 User Login
* 🚪 Logout
* 💾 Session management
* 👤 Personalized user experience

User account and session information is stored using:

```text
LocalStorage
```

> ⚠️ This authentication system is designed for learning/demo purposes. Production applications should use secure server-side authentication and password hashing.

---

## 🎨 Modern UI / UX

The interface focuses on a clean and interactive user experience.

### UI highlights:

* ✨ Gradient headings
* 🌈 Modern color combinations
* 🪟 Clean cards
* 🎯 Interactive buttons
* 💫 Hover animations
* 🔄 Smooth transitions
* 📱 Responsive design
* 🖼️ Image-focused layout
* ⚡ Fast interactions

---

# 🛠️ Technologies Used

| Technology         | Purpose                                 |
| ------------------ | --------------------------------------- |
| 🟧 HTML5           | Structure & semantic markup             |
| 🔵 CSS3            | Styling, animations & responsive design |
| 🟨 JavaScript ES6+ | Application logic & DOM manipulation    |
| 💾 LocalStorage    | Authentication & session data           |
| 📸 Pexels API      | High-quality image search               |
| 🌎 Pixabay API     | Image search & discovery                |
| 🎨 Unsplash API    | Professional photo search               |
| 🟩 Node.js + Express | Backend proxy server                  |
| 🔐 Environment Vars | Secure API key management              |

---

# 🔌 APIs Used

## 📸 Pexels API

Pexels provides high-quality stock photography and image search capabilities.

Used in this project for:

* Image searching
* Photographer information
* Image previews
* Image URLs

---

## 🌎 Pixabay API

Pixabay provides a large collection of images that can be searched dynamically.

Used for:

* Image discovery
* Search results
* Image previews
* Additional image sources

---

## 🎨 Unsplash API

Unsplash provides beautiful, high-quality professional photography.

**Integration Method**: Secure Express proxy server (API key kept server-side)

Used for:

* Professional photo search
* Extended image library
* Photographer attribution
* Enhanced search results

---

## 🔒 Secure Proxy Server

A Node.js/Express backend proxy server forwards Unsplash API requests securely:

* 🔐 API key stored on server (never exposed to client)
* 🚀 Endpoint: `http://localhost:3000/api/unsplash/search`
* ⚡ Handles rate limiting and error handling
* 📡 Merges Unsplash results with Pexels & Pixabay

**Why?** Protecting sensitive API keys from browser exposure ensures security and prevents abuse.

---

## ⚡ Performance Optimizations

The application includes multiple performance enhancements:

* 📦 **Lazy Loading**: Images load only when visible in viewport
* 🎯 **Responsive Images**: Correct image sizes for different screens (srcset/sizes)
* 🔄 **Async Decode**: Images decode off main thread using `decoding="async"`
* 📊 **Incremental Rendering**: Gallery renders images in adaptive chunks (8-20 per batch)
* ⏱️ **Scroll Throttling**: Scroll events debounced with requestAnimationFrame (rAF)
* 👁️ **IntersectionObserver**: Auto-load pagination when reaching end of feed
* 🚫 **AbortController**: Prevents stale requests from outdated searches overwriting results
* 💾 **Search Caching**: Repeated searches use cached results (instant display)

**Result**: Lightning-fast image loading even with large result sets!

---

# ⚙️ How It Works

The application follows a complete workflow:

```text
              ┌──────────────────┐
              │   User Searches  │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ JavaScript Logic │
              └────────┬─────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
   │ Pexels API   │   │ Pixabay API  │   │ Express Proxy│
   │ (Direct)     │   │ (Direct)     │   │→ Unsplash API│
   └──────┬───────┘   └──────┬───────┘   └──────┬───────┘
          │                  │                  │
          └────────┬─────────┴──────────────────┘
                   ▼
          ┌──────────────────┐
          │ Merge Results    │
          │ (Dedup + Sort)   │
          └────────┬─────────┘
                   │
                   ▼
          ┌──────────────────┐
          │ Incremental      │
          │ Chunk Rendering  │
          │ (8-20 at a time) │
          └────────┬─────────┘
                   │
          ┌────────┴────────────┐
          ▼                     ▼
    👁️ Preview            ⬇️ Download
```

**Key Features in the Flow:**
- ✅ All 3 APIs queried in parallel
- ✅ Results merged into single feed
- ✅ Incremental rendering for performance
- ✅ IntersectionObserver for auto-load pagination
- ✅ AbortController to prevent stale updates

---

# 📁 Project Structure

```text
Image-Explorer/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

> If your project uses a different folder structure, update this section according to your actual files.

---

# 🔑 API Configuration

To run the project locally, you need API keys from:

* 📸 Pexels
* 🌎 Pixabay
* 🎨 Unsplash (optional - for enhanced results)

### Frontend Configuration

Add your **Pexels** and **Pixabay** API credentials inside the JavaScript:

```javascript
const PEXELS_KEY = "YOUR_PEXELS_API_KEY";
const PIXABAY_KEY = "YOUR_PIXABAY_API_KEY";
```

### Backend Proxy Configuration (Unsplash)

The Unsplash API is served via a secure Express proxy server.

Set the environment variable before running the server:

```powershell
# Windows PowerShell
$env:UNSPLASH_ACCESS_KEY="YOUR_UNSPLASH_ACCESS_KEY"
cd server
npm install
npm start
```

Or use the provided startup script:

```powershell
.\start-server.ps1 -UnsplashKey "YOUR_UNSPLASH_ACCESS_KEY"
```

### ⚠️ Important Security Notes

- ✅ **Pexels & Pixabay keys**: OK to embed in frontend (they're public keys)
- 🔒 **Unsplash key**: MUST be server-side only (via environment variable)
- ⚠️ **Never commit secrets** to GitHub — use `.env` files or environment variables
- 🛡️ **Production**: Use proper secrets management (Heroku Config Vars, AWS Secrets Manager, etc.)

---

# 💻 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Code-With-Vishesh/Image-Explorer-Web-App-.git
cd Image-Explorer-Web-App-
```

---

## 2️⃣ Install Server Dependencies (Optional - Only for Unsplash)

Move into the server directory and install dependencies:

```bash
cd server
npm install
```

---

## 3️⃣ Set Environment Variables

**Windows PowerShell:**

```powershell
$env:UNSPLASH_ACCESS_KEY="your_unsplash_key_here"
```

**macOS/Linux (Bash):**

```bash
export UNSPLASH_ACCESS_KEY="your_unsplash_key_here"
```

---

## 4️⃣ Start the Proxy Server (Optional)

```bash
npm start
```

Expected output:
```
Unsplash proxy listening on http://localhost:3000
```

---

## 5️⃣ Open the Project

Open `index.html` in your browser or use VS Code Live Server:

```bash
# Using Live Server extension in VS Code
Right-click index.html → Open with Live Server
```

---

## ✅ Verify Everything Works

Open DevTools (F12) → Network tab → Search for an image

You should see API calls to:
- ✅ `api.pexels.com` (Pexels)
- ✅ `pixabay.com/api` (Pixabay)
- ✅ `localhost:3000/api/unsplash/search` (Unsplash via proxy)



```bash
cd Image-Explorer
```

---

## 3️⃣ Configure API Keys

Add your Pexels and Pixabay API keys according to your JavaScript configuration.

---

## 4️⃣ Run the Project

You can simply open:

```text
index.html
```

in your browser.

For the best development experience, use **VS Code + Live Server**.

---

# 🌐 Live Demo

🚀 **Live Demo:** [https://image-explorer-web-app.vercel.app/](https://image-explorer-web-app.vercel.app/)

---


## 🏠 Home Page

![Home Page Screenshot](https://raw.githubusercontent.com/Code-With-Vishesh/Image-Explorer-Web-App-/76c9695574595c48ea58259a0212bdaeaae330b1/Screenshot%202026-08-25%20221124.png)

### 🔍 Search Results

![Search Results Screenshot](https://raw.githubusercontent.com/Code-With-Vishesh/Image-Explorer-Web-App-/3730002821d15e9202f03368db08db9ae2cb41f9/Screenshot%202026-08-31%20164337.png)


### 🖼️ Image Preview

![Image Preview](./Screenshot%202026-08-31%20170654.png)

### 🔐 Login / Signup

![Login and Signup](./Screenshot%202026-08-31%20170738.png)

---

# 📱 Responsive Design

Image Explorer is designed to work across different screen sizes.

### Supported devices:

```text
🖥️ Desktop
       ↓
💻 Laptop
       ↓
📱 Tablet
       ↓
📱 Mobile
```

The layout automatically adapts to different screen sizes using responsive CSS.

---

# ⚡ Key JavaScript Concepts Used

This project helped implement several important JavaScript concepts:

* DOM Manipulation
* Event Listeners
* Fetch API
* Async/Await
* Promises
* JSON Handling
* API Integration
* LocalStorage
* Dynamic HTML Generation
* Modal Components
* File Upload Handling
* Error Handling
* Responsive UI interactions

---

# 🧠 What I Learned

Building Image Explorer helped me improve my practical understanding of:

### 🌐 Frontend Development

I learned how to create responsive and interactive interfaces using HTML and CSS.

### ⚡ JavaScript

I practiced real-world JavaScript concepts including API requests, asynchronous programming, DOM manipulation, and event handling.

### 🔌 API Integration

I learned how to work with third-party APIs and dynamically display external data inside a web application.

### 💾 LocalStorage

I learned how browser storage can be used to save user information and maintain sessions.

### 🎨 UI/UX

I improved my understanding of modern layouts, animations, hover effects, responsive design, and user interaction.

---

# 🔮 Future Improvements

The project can be extended with many exciting features.

### Planned improvements:

* [ ] ❤️ Like / Favorite Images
* [ ] ⭐ Save Favorite Images
* [ ] 🗂️ Create Image Collections
* [ ] 🌙 Dark / Light Mode
* [ ] 🔎 Advanced Filters
* [ ] 📐 Image Orientation Filters
* [ ] 🎨 Color-based Search
* [ ] 📜 Search History
* [ ] 🔐 Backend Authentication
* [ ] ☁️ Cloud Image Storage
* [ ] 👤 User Profiles
* [ ] 🧠 AI-powered Image Search
* [ ] 📱 Progressive Web App Support

---

# 🛡️ Security Note

This project uses browser `LocalStorage` for demonstration purposes.

It should **not** be considered a secure authentication system for production applications.

For a production-ready application, authentication should be handled using:

```text
Frontend
   ↓
Backend API
   ↓
Authentication System
   ↓
Secure Database
```

Passwords should never be stored as plain text.

---

# 🤝 Contributing

Contributions are welcome!

If you have an idea that can improve Image Explorer:

### 1. Fork the repository

```bash
git fork
```

### 2. Create a new branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

Improve the project or add a new feature.

### 4. Commit your changes

```bash
git commit -m "Add new feature"
```

### 5. Push your branch

```bash
git push origin feature/your-feature
```

### 6. Create a Pull Request

Submit your Pull Request on GitHub.

---

# ⭐ Support

If you found this project useful or interesting, consider giving it a ⭐ on GitHub.

It really helps and motivates me to build more projects! ❤️

---

# 👨‍💻 Author

<div align="center">

## Vishesh Jaiswal

### 💻 Frontend / Full-Stack Developer

Passionate about building modern, responsive and interactive web applications.

<br>

[![GitHub](https://img.shields.io/badge/GitHub-Code--With--Vishesh-181717?style=for-the-badge\&logo=github)](https://github.com/Code-With-Vishesh)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vishesh%20Jaiswal-0A66C2?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/vishesh-jaiswal-382249350/)

</div>

---

# 📊 Project Highlights

```text
🖼️ Image Search
⚡ Real-Time API Integration
📤 Image Upload
⬇️ Instant Download
🔐 Authentication
💾 LocalStorage
🎨 Modern UI
📱 Responsive Design
🚀 Pure JavaScript
```

---

# ❤️ Built With Passion

<div align="center">

### HTML ❤️ CSS ❤️ JavaScript

**Built to learn. Built to improve. Built to create.**

<br>

⭐ If you like this project, don't forget to star the repository!

<br>

### 🚀 Keep Coding. Keep Building. Keep Growing.

</div>

---

<div align="center">

**© 2026 Vishesh Jaiswal — Image Explorer**

</div>
