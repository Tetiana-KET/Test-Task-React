[Test Task React](https://docs.google.com/document/d/1ll1ZVjwtbK1X7Lg0yS8i20jqYn_yjoXvIlt83hhMPR4/edit)

### Quiz app

Create a Quiz component, and use it in an AppComponent.

The component should accept the list of questions that are on the page below
`<quiz questions={questions} />`

When a correct answer is selected, it will turn green, when an incorrect answer is selected, it will turn red. At the end, it should show how many answers out of 3 were correct.

The design of the component is to repeat from the screenshot.

![image](https://github.com/Tetiana-KET/RS-School-React-2024Q3/assets/99186560/578132f0-96e3-423f-883b-454fd750da23)

## Run `npm install` to set all dependencies

## Scripts available

### Start development server

```
npm start
```

This command runs `vite` to start the development server. It provides fast, hot module replacement (HMR) for a smooth development experience, allowing you to see changes in real-time as you modify your code.

### Build the project

To build the project run

```
npm run build
```

This command first compiles the TypeScript code using the TypeScript compiler (`tsc -b`). This ensures type checking and generates necessary type declaration files. After successful compilation, it builds the project with Vite (`vite build`), creating an optimized production-ready bundle.

> Note: Running `tsc -b` ensures thorough type checking and may generate additional type files that `vite build` does not.

### ESLint check

To check for code style and potential errors in the `src/` directory, including TypeScript and TSX files (--ext ts,tsx), run

```
npm run lint
```

It also reports any unused disable directives (--report-unused-disable-directives) and sets the maximum number of warnings to 0 (--max-warnings 0), which means ESLint will treat warnings as errors. This script helps quickly identify code style issues and potential errors in the project

### ESLint fix issues

To automatically fixe ESLint errors and code style issues in the `src/` directory run:

```
npm run lint:fix
```

### Check the production build

To check if the production build looks OK in your local environment use:

```
npm run preview
```

It will run scripts `vite build && vite preview` to create `dist` folder (if absent), build the project and boot up a local static web server that serves the files from dist at http://localhost:4173.

_It is important to note that `vite preview` is intended for previewing the build locally and not meant as a production server._

### Deploy to gitHub pages

```
npm run deploy
```
