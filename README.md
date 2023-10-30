# Todo List App

This is a simple Todo List app built with Next.js, React, Typescript and Axios. It allows you to manage your todos, mark them as completed, remove them from the list and test the Markdowns and Removes using Jest.

# Used technologies:

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>TailwindCss</li>
  <li>Jest testing</li>
  <li>Testing Library (React)</li>
  <li>Axios</li>
  <li>Axios mock adapter</li>
  <li>Flowbite react</li>
  <li>DaisyUI</li>
</ul>

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- Node.js: https://nodejs.org/
- npm: (npm is bundled with Node.js) or Yarn: https://yarnpkg.com/

### Clone the Repository

Open your terminal and navigate to the directory where you want to clone the project.


### Navigate to the Project Directory

cd todo-list-app

### Install Dependencies

> npm install
 or
> yarn install


## IMPORTANT:  .env file

<p>Don't forget to create an environment file .env and create a constant with the API endpoint as a global variable, otherwise it won´t work!</p>

> <p> NEXT_PUBLIC_API=https://jsonplaceholder.typicode.com/todos</p>
<hr/>


### Start the Development Server

> npm run dev
or
> yarn dev

<p>The app will now be running at http://localhost:3000. Open your web browser and navigate to that URL to access the Todo List app.</p>

<hr/>

## Usage

<ul>
  <li>The main page displays a list of todos.</li>
  <li>You can create a new todo item by clicking the button "ADD NEW TASK".</li>
  <li>You can mark a todo as completed by clicking the checkbox next to it.</li>
  <li>You can remove a todo by clicking the trash icon next to it.</li>
  <li>Pagination controls allow you to navigate through the list of todos.</li>
  <li>You can run TodoList component and a Home page test by running "npm run test".</li>
</ul>


## Extern UI libraries

### DaizyUI
```bash
 https://daisyui.com/docs/install/
```

### Flowbite 
```bash
 https://flowbite.com/docs/getting-started/next-js/
```

## API Source
This app uses the JSONPlaceholder API as a fake backend for testing purposes. No actual data is persisted.

```bash
git clone https://github.com/your-username/todo-list-app.git
```

## Jest Testing

### Component test
These test cases cover the basic functionality of the <TodoList /> component, including rendering todos, toggling todo checkboxes, and removing todos. By running these tests, you can ensure that the component behaves as expected and that interactions are handled correctly.

### Home page test
This test cases ensures that the Home Page component renders properly with mocked data and verifies that the TodoList component is loaded correctly within it. By running these tests, you can validate that the Home Page component behaves as expected under specific conditions and that the integration with the TodoList component works as intended.

<p>Run the command</p>

> npm run test