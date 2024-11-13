Here’s an updated README file reflecting the single contributor:

---

# CarBaazar

Welcome to **CarBaazar** — a user-friendly showroom website for browsing and managing car listings. This website is built with **Next.js** and **TypeScript**, styled primarily with **Tailwind CSS** for a streamlined, responsive design. CarBaazar features an admin panel and a user interface to simplify the car-browsing experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features

1. **Home Page**  
   - Showcases showroom information and essential contact details.

2. **Car Listing Page**  
   - Displays a catalog of cars, each with basic details.

3. **Login Page**  
   - Allows the admin to securely log in.

4. **Sell Your Car Page**  
   - Enables the logged-in admin to add new car listings, visible only after login.

5. **Admin Dashboard**  
   - Provides an overview of car listings, accessible only to the admin after logging in.

6. **Chatbot**  
   - A chatbot available on all pages to suggest cars based on user preferences like price range, color, manufacturer, and location.

## Tech Stack

- **Frontend:** Next.js, TypeScript
- **Styling:** Tailwind CSS, CSS (for non-Tailwind styles)
- **Authentication & Access Control:** Conditional rendering based on admin login state

## Installation

To get started with CarBaazar on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/CarBaazar.git
   cd CarBaazar
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

### General Users
- Users can browse the car listings on the Car Listing page and view details for each car.
- The chatbot helps users specify preferences for car suggestions.

### Admin
- Admins can log in via the Login page. Once authenticated, they will gain access to the Admin Dashboard and the Sell Your Car page.
- Admin functionalities include adding new car listings and managing the inventory.

## Project Structure

```
CarBaazar/
├── pages/              # Contains the main pages: Home, Car Listing, Login, Sell Your Car, Admin Dashboard
├── components/         # Reusable components (Navbar, Footer, Chatbot, etc.)
├── styles/             # Tailwind and CSS files for styling
├── public/             # Static assets (images, icons)
├── utils/              # Helper functions and utilities
└── README.md           # Project documentation
```

### Key Components
- **Navbar** - A responsive navigation bar with conditional rendering based on login state.
- **Chatbot** - A pop-up chatbot interface allowing users to request car recommendations based on criteria.

## Future Enhancements

- **Advanced Filtering**: Enable more detailed filtering options on the Car Listing page.
- **Enhanced Admin Dashboard**: Add features for managing listings.
- **Chatbot Improvements**: Use AI for refined recommendations.
- **Mobile Optimization**: Further refine responsiveness for mobile devices.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

This project was developed by the developer **Okasaha** and contributor, **Anas**.

--- 

Thank you for visiting CarBaazar! If you have any feedback, please feel free to reach out. Happy coding!

---