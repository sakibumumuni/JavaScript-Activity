# JavaScript Activity - Profile Card

A simple interactive profile card web application built with HTML, CSS, and JavaScript. Click a button to reveal a styled profile card displaying personal information and a profile picture.

## Features

- **Toggle Profile Display** — Show and hide the profile card with a single button click
- **Dynamic Content Rendering** — Profile data is stored in a JavaScript object and injected into the DOM on demand
- **Responsive Card Design** — Clean, centered card layout with rounded profile image, shadow effects, and hover states
- **External JavaScript** — Script is separated from HTML for clean code organization

## Project Structure

```
JavaScript-Activity/
├── index.html      # Main HTML page with embedded CSS styles
├── script.js       # JavaScript logic for profile rendering and toggle
├── profile.jpg     # Profile picture
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5** — Page structure and semantic markup
- **CSS3** — Styling, flexbox centering, box shadows, border radius
- **JavaScript (Vanilla)** — DOM manipulation, event handling

## How It Works

1. Profile data (name, email, school, course, picture) is defined as a JavaScript object in `script.js`
2. When the **"Show My Profile"** button is clicked, the script populates the HTML elements with the profile data and displays the card
3. Clicking the button again hides the card and resets the button text to **"Show My Profile"**

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sakibumumuni/JavaScript-Activity.git
   ```
2. Navigate to the project folder:
   ```bash
   cd JavaScript-Activity
   ```
3. Open `index.html` in your browser:
   ```bash
   start index.html
   ```

## Screenshot

When the profile card is displayed, it shows:

- A circular profile picture with a green border
- Full name
- Email address
- University name
- Course of study

## Author

**Sakibu Mumuni**
- Email: sakibumumuni285@gmail.com
- School: University of Ghana
- Course: BSc. Mathematical Sciences

## License

This project is open source and available for educational purposes.
