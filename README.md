# Gym Website Template 🏋️

## 📌 Description

A modern, responsive gym and fitness center website template built with HTML, CSS, and vanilla JavaScript.

The demo uses a fictional brand, **Impulso Gym**, and is meant as a ready-to-customize template for gyms, fitness studios, CrossFit boxes, or personal trainers who need a professional online presence.

🔗 **Live demo:** [your-link.netlify.app](https://your-link.netlify.app)

## 🚀 Features

- Fully responsive design (desktop, tablet, and mobile) with a hamburger menu
- Dark theme with a bold orange accent
- Hero section with call-to-action buttons
- Animated statistics counters
- About section
- Classes / programs grid with custom SVG icons
- Interactive weekly schedule with day tabs
- Membership plans with a **monthly / yearly pricing toggle**
- **BMI calculator** with a color-coded result bar
- Trainers section
- Testimonials
- Contact form with front-end validation
- Scroll-reveal animations, sticky header, active nav links, and a back-to-top button
- Respects the user's *reduced motion* preference

## 🛠️ Technologies

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- JavaScript (ES6+, Intersection Observer API)
- Google Fonts (Oswald & Inter)

## 📂 Project Structure

```
gymnasio/
├── index.html      → Page structure and content
├── CSS/
│   └── styles.css  → Styles, layout, and responsive design
├── JS/
│   └── script.js   → Interactivity (menu, schedule, pricing, BMI, form, animations)
└── IMG/            → Folder for your own images
```

## ✏️ Customization

- **Colors and fonts:** edit the variables at the top of `CSS/styles.css` (`:root`).
- **Class schedule:** edit the `horarios` object at the top of `JS/script.js`.
- **Prices:** change the `data-mensual` and `data-anual` attributes in the plans section of `index.html`.
- **Images:** replace the image URLs in `index.html` and `CSS/styles.css` with your own files in `IMG/`.
- **Contact form:** currently shows a confirmation message only; connect it to a service such as Formspree, EmailJS, or WhatsApp to receive messages.

## ▶️ How to Run

No installation needed. Download or clone the repository and open `index.html` in your browser.

## 🌱 What I Learned

Through this project, I practiced:

- Building responsive layouts with CSS Grid and Flexbox
- Rendering dynamic content from JavaScript data (weekly schedule)
- Creating interactive components such as tabs, toggles, and calculators
- Using the Intersection Observer API for scroll animations and counters
- Basic form validation and accessibility best practices

## 📸 Credits

Photos from [Unsplash](https://unsplash.com) (free to use under the Unsplash License).

---

Made with 💪 by **Lorena Vanegas**
