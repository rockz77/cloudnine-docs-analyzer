# cloudnine-docs-analyzer
CloudNine Docs Analyzer

## Tech Stack:
- React/create-react-app
- Typescript
- Node/NPM
- Material UI

## Run the following commands to install and run the application:

### `npm install`
### `npm run dev`

*Download and have installed the latest version of NodeJS

## The application is a barebones react application with minimal styling. The following functionality is included in the application:

- User can select a local folder(s) from their computer/laptop. The folder can contain sub-folders.
- The application will aggregate all files contained within the selected folder(s) to include all metadata and file information.
- The application will render reporting data tables containing all of the file/folder information.
- The data tables contain export functionality to exports the data/reporting to a CSV file or to print.
- Full data table functionality is included in the application that includes pagination, filtering, sorting, etc. 

## Because of the time constraint, the following have NOT been implemented in the application:

- No Deep modular components
- No Custom Hooks and State Management (Context API)
- No CSS Preprocessor (SASS or Styled Components)
- No Deep styling and UI/UX design
- No Routing
- No Standard page layout (header, footer, menu, etc)
- No REST or GraphQL APIs (Node/Express)
- No Authentication / Login / Security
- No progress bar / loader

## Unit Testing:

### `npm test`

- Jest/React Testing Library unit testing.
- Contains 2 test suites, and 4 tests.
- FolderSelector component contains 2 tests and 1 assertion. The tests check for correct loading of the component, and count of the total number of files in the selected folder(s).
- DataGrid component contains 2 tests and 2 assertions. The tests check for correct loading of the 2 data tables and their specific data (rows and types).