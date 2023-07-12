# Tour Package Project

This project is a tour package application built with React.js that demonstrates the usage of reusable components. Each tour package is represented as a card with the same layout but different data. The application provides an option to select the "Not Interested" button, which removes the respective tour package from the view after filtering.

## Main Concepts of React Used

- **Components**: The project leverages React's component-based architecture to create reusable and modular UI elements. The tour package card is implemented as a reusable component, allowing for easy rendering of multiple packages with different data.

- **Props**: React's props system is utilized to pass data from parent components to child components. The tour package card component receives the necessary information, such as package details and images, through props.

- **State**: React's state management is employed to handle the dynamic filtering functionality. The state keeps track of the selected packages and updates the view accordingly by removing the "Not Interested" packages.

- **Conditional Rendering**: The project utilizes conditional rendering based on the state to dynamically display the tour packages. When a package is marked as "Not Interested," it is conditionally rendered to be removed from the view.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
$ git clone https://github.com/Sudhanv4/plan-with-love-project.git
```

2. Navigate to the project directory:

```bash
$ cd plan-with-love-project
```

3. Install the dependencies:

```bash
$ npm install
```

4. Start the development server:

```bash
$ npm start
```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

Once the project is set up and running, you can interact with the tour package application. The tour packages will be displayed as cards, each showcasing different package details and images.

You can click the "Not Interested" button on any package to filter it out from the view. The filtered packages will be removed, and the remaining packages will be updated accordingly.

## Technologies

The project utilizes the following technologies:

- React.js: A JavaScript library for building user interfaces.
- HTML5: The standard markup language for creating web pages.
- CSS3: The latest version of the Cascading Style Sheets language.
- JavaScript: The programming language used for client-side interactivity and logic.

## Contributing

Contributions to the project are welcome. If you encounter any bugs, have suggestions for improvements, or would like to contribute code, please follow the guidelines specified in the project's repository.
