# Top Course Project

This project is a course catalog for a Software Academy, built using ReactJS. It provides a user-friendly interface for browsing and selecting courses based on different categories. The project utilizes ReactJS components to implement dynamic behavior, allowing users to navigate through different course categories and view the courses within each category.

## Main Concepts of React Used

The project leverages several key concepts of ReactJS, including:

1. **Components**: React components are used to create reusable UI elements. The project is structured using multiple components such as `App`, `Navbar`, `CourseList`, and `CourseCard`, each serving a specific purpose and encapsulating related functionality.

2. **State Management**: The project utilizes React's state management capabilities to control the visibility of course categories and the courses displayed within each category. State variables are used to track the active category and the courses associated with it.

3. **Conditional Rendering**: Conditional rendering is employed to dynamically display the courses based on the selected category. When a category is clicked in the navigation tabs, only the courses belonging to that category are rendered on the screen.

4. **Props**: React props are utilized to pass data from parent components to child components. The course data, including title, description, and category, is passed as props to the `CourseCard` component to display the course information.

5. **Event Handling**: React event handling is used to capture user interactions. The `Navbar` component listens for clicks on the category tabs and triggers the appropriate actions to update the active category and render the corresponding courses.

## Installation and Usage

To run the project locally, follow these steps:

1. Clone the repository:

```bash
$ git clone https://github.com/Sudhanv4/Top-Course-Project.git
```

2. Navigate to the project directory:

```bash
$ cd software-academy-course-catalog
```

3. Install the dependencies:

```bash
$ npm install # If using npm
$ yarn install # If using yarn
```

4. Start the development server:

```bash
$ npm start # If using npm
$ yarn start # If using yarn
```

5. Open your browser and visit `http://localhost:3000` to access the course catalog.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature/bug fix.
- Commit your changes with clear commit messages.
- Push your branch to your forked repository.
- Submit a pull request detailing your changes.

