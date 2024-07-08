
# Task Management App Backend

This is the backend service for the Task Management Application built using Express and MongoDB. The service provides APIs to create, read, update, and delete tasks.


## Features

- Connect to a MongoDB database.
- Create new tasks.
- Retrieve all tasks or a specific task by name.
- Update task details.
- Delete tasks.
- CORS support for integration with the frontend.


## Installation

Clone the repository

```bash
  git clone https://github.com/gopi-srinu/Task-Management-Backend.git
```
Navigate to the project directory
```bash
  cd task-manager-backend
```
Install the dependencies
```bash
  npm install
```
Set up your MongoDB connection URL. Replace the DB_URL variable in app.js with your MongoDB connection string :
```bash
  const DB_URL = 'your-mongodb-connection-string';
```
Run the application
```bash
  node index.js
```

## API Endpoints

## GET /tasks

Description: Retrieves all tasks.
- Response: List of tasks.
## GET /tasks/:taskName
- Description: Retrieves a task by its name.
Parameters:

- taskName (string): The name of the task to retrieve.
- Response: The task object.

## POST /tasks
- Description: Creates a new task.
Request Body:
- taskName (string): Name of the task.

- taskDescription (string): Description of the task.

- taskPrioritylevel (string): Priority level of the task (Low, Medium, High).

- taskStartdate (string): Start date of the task.

- taskEnddate (string): End date of the task.

## DELETE /tasks/:taskName
- Description: Deletes a task by its name.
Parameters:

- taskName (string): The name of the task to delete.
## PUT /tasks/:taskName
- Description: Updates a task by its name.

Parameters:

- taskName (string): The name of the task to update.

- Request Body: Fields to update.
