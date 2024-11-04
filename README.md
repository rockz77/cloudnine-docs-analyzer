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




# apple-crop-api

## Project Description
**apple-crop-api** is an AI-driven RESTful API that simulates apple crop yield based on weather patterns and data. 

## Tech Stack
- **Node.js**: Server-side solution
- **Express**: API framework
- **TypeScript**: Core language
- **Jest**: Testing framework used for unit tests

### Folder Structure
- **/src**: contains all core logic and files
- **/apple-crop-yield** contains all microservice logic that includes the controller, interfaces, route, service, and unit tests.

### Key Files
- **/src/app.ts**: Contains the initial setup and configuration of the Node Express server.
- **/src/apple-crop-yield/apple-crop-yield.controller.ts**: Manages incoming requests, interacts with the service, and returns responses.
- **/src/apple-crop-yield/apple-crop-yield.service.ts**: Contains the core logic and all methods/functions for the apple crop yield simulation and data handling. This includes all of the algorithms and calculations for the given required simulation logic.
- **/src/apple-crop-yield/apple-crop-yield.interface.ts**: Contains all of the interfaces used for the API requests and responses.
- **/src/apple-crop-yield/apple-crop-yield.routes.ts**: Contains the route logic that maps to /simulate-yield.
- **__tests__**: Directory for Jest unit tests that cover the service logic. This contains one testing suite with 11 unit tests.

## Getting Started

### Prerequisites
- **Node.js** and **npm**
- **Docker/Docker Desktop** (for running locally as a Docker container)

### Installation
Unzip the file. From within the root folder, run the following command in a command prompt, from the root:
   ```
   npm i
   ```
### Running the Application
To run the application locally in dev mode, run the following command in a command prompt, from the root:
   ```
   npm run dev
   ```
To run the application locally using Docker, run the following commands in a command prompt, from the root:
1. Build the Docker image:
   ```
   docker build -t apple-crop-api .
   ```
2. Run the Docker container: (Runs on port 3000)
   ```
   docker run -p 3000:3000 apple-crop-api
   ```
3. To see the docker image:
   ```
   docker images
   ```
4. To see the docker container:
   ```
   docker ps -a
   ```
5. To stop the docker container:
   ```
   docker stop <container_id>
   ```

### Testing Out the API
The API exposes the following main endpoint:
- **POST /simulate-yield**

Actual local URL for the API will be: **http://localhost:3000/simulate-yield**

In the POST request, an example request body will look like the following:
   ```
   {
      "tree_count": 460,
      "apples_per_tree": 80,
      "season_length_days": 8,
      "weather_data": [
        { "day": 1, "temperature": 25, "rainfall_mm": 10, "wind_speed_kmh": 15 },
        { "day": 2, "temperature": 20, "rainfall_mm": 5, "wind_speed_kmh": 10 },
        { "day": 3, "temperature": 10, "rainfall_mm": 0, "wind_speed_kmh": 13 },
        { "day": 4, "temperature": 5, "rainfall_mm": 0, "wind_speed_kmh": 32 },
        { "day": 5, "temperature": 8, "rainfall_mm": 24, "wind_speed_kmh": 38 },
        { "day": 6, "temperature": 11, "rainfall_mm": 27, "wind_speed_kmh": 33 },
        { "day": 7, "temperature": 35, "rainfall_mm": 0, "wind_speed_kmh": 4 },
        { "day": 8, "temperature": 39, "rainfall_mm": 0, "wind_speed_kmh": 6 }
      ]
    }
   ```

### Unit Testing
To run the unit tests and see the coverage, run the following command from the root:
   ```
   npm test --coverage
   ```

There is 1 testing suite that contains 11 unit tests. The unit tests only cover the core functionality within **apple-crop-yield.service.ts** which contains all of the API core logic and algorithms/functions that do all of the apple crop yield simulation calculations and execution.
