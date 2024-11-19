# Wood Work

Welcome to **Wood Work**, a static website dedicated to showcasing the creative works of kids. This project displays images of the kids' woodwork projects, some accompanied by descriptions, in an interactive and responsive gallery format.

[Deployed](https://rusicaalexandru.github.io/CCA_WoodWork_Landing)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Adding or Removing Images](#adding-or-removing-images)
  - [Customizing the Website](#customizing-the-website)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features

- **Responsive Design**: Built with Bootstrap to ensure compatibility across all devices.
- **Dynamic Gallery**: Easily manage gallery content through a JavaScript function.
- **Interactive Elements**: Includes image carousels for works with multiple images.
- **Clean Layout**: Focused on displaying the kids' works prominently.
- **Scalable**: Designed to accommodate future additions like testimonials, events, or social media integration.

---

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout.
- **JavaScript ES6**: For interactivity and dynamic content management.
- **Bootstrap 4**: For responsive design and pre-styled components.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- Optionally, a local web server if you prefer (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VSCode).

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/wood-work.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd wood-work
    ```

3. **Open the Website**

    - **Option 1**: Open `index.html` directly in your web browser.
    - **Option 2**: Use a local web server to serve the files.

        - **Using Python 3**

            ```bash
            python -m http.server 8000
            ```

            Then navigate to `http://localhost:8000` in your browser.

        - **Using Node.js and http-server**

            ```bash
            npx http-server . -p 8000
            ```

            Then navigate to `http://localhost:8000` in your browser.

---

## Usage

### Adding or Removing Images

The website uses the `add_imgs()` function in `scripts.js` to manage gallery content.

#### Adding Images

1. **Place Images in the `images/` Directory**

    - Copy your image files into the `images/` folder.

2. **Update the `works` Array in `index.html`**

    - Open `index.html` and locate the following script section at the bottom:

        ```html
        <script>
            const works = [
                // Existing works
            ];

            add_imgs(works);
        </script>
        ```

    - Add a new object to the `works` array:

        ```javascript
        const works = [
            // Existing works
            {
                title: "Your Work Title",
                description: "Optional description of the work.",
                images: ["images/your-image1.jpg", "images/your-image2.jpg"]
            },
        ];
        ```

3. **Save and Refresh**

    - Save your changes and refresh the web page to see the new images.

#### Removing Images

- Remove the corresponding object from the `works` array.
- Optionally, delete the image files from the `images/` directory.

### Customizing the Website

#### Changing the Landing Page Background

- Replace the background image in `styles.css`:

    ```css
    .jumbotron {
        background-image: url('images/your-background-image.jpg');
        background-size: cover;
        background-position: center;
        color: white;
    }
    ```

#### Modifying Text Content

- Update the headings, descriptions, and other text directly in `index.html`.

#### Including Optional Sections

- **About Us** and **Contact** sections are included as comments in `index.html`.
- To enable them, uncomment the relevant HTML code:

    ```html
    <!-- Optional About Us Section -->
    <section id="about" class="container mt-5">
        <h2>About Us</h2>
        <p>Your content here.</p>
    </section>

    <!-- Optional Contact Section -->
    <section id="contact" class="container mt-5">
        <h2>Contact</h2>
        <p>Your contact information here.</p>
    </section>
    ```

---

## Project Structure
```scss
wood-work/ 
├── images/ 
│ ├── birdhouse1.jpg
│ ├── birdhouse2.jpg 
│ ├── car1.jpg 
│ ├── landing-bg.jpg 
│ └── (your images) 
├── index.html 
├── scripts.js 
└── styles.css
```

- **images/**: Contains all image assets.
- **index.html**: Main HTML file that structures the web page.
- **scripts.js**: JavaScript file containing the `add_imgs()` function.
- **styles.css**: Custom CSS styles for additional styling.

---

## Contributing

Contributions are welcome! If you'd like to enhance the project or fix issues, please follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

    ```bash
    git checkout -b feature/YourFeature
    ```

3. **Commit Your Changes**

    ```bash
    git commit -m "Add your message here"
    ```

4. **Push to the Branch**

    ```bash
    git push origin feature/YourFeature
    ```

5. **Open a Pull Request**

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **Bootstrap**: For the responsive design framework.
- **Open Source Community**: For continuous contributions and support.
- **The Kids**: Whose creativity and works are the heart of this project.

---
