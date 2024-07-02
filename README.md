# Task Management App Backend

This is the backend service for the Task Management Application built using Express and MongoDB. The service provides APIs to create, read, update, and delete tasks.

# Table of Contents
1. Features
2. Installation
3. Usage
4. File Structure
5. API Endpoints

# Features
1. Connect to a MongoDB database.
2. Create new tasks.
3. Retrieve all tasks or a specific task by name.
4. Update task details.
5. Delete tasks.
6. CORS support for integration with the frontend.

# Installation

1. Clone the repository :
- git clone https://github.com/yourusername/task-manager-backend.git

2. Install the dependencies : 
- npm install

3. Set up your MongoDB connection URL. Replace the DB_URL variable in app.js with your MongoDB connection string : 
- const DB_URL = 'your-mongodb-connection-string';

4. Run the application
- node app.js

# Usage
Running the Server
Ensure that your MongoDB instance is running, then start the server using :

node app.js

# Endpoints

Get All Tasks

- GET /tasks

Get Task by Name 

- GET /tasks/:taskName

Create a New Task

- POST /tasks

Update a Task

- PUT /tasks/:taskName

Delete a Task

- DELETE /tasks/:taskName


# API Endpoints
# GET /tasks

Description: Retrieves all tasks.

- Response: List of tasks.

# GET /tasks/:taskName

Description: Retrieves a task by its name.

Parameters:

- taskName (string): The name of the task to retrieve.
- Response: The task object.

# POST /tasks

Description: Creates a new task.

Request Body:

- taskId (number): ID of the task.

- taskName (string): Name of the task.

- taskDescription (string): Description of the task.

- taskPrioritylevel (string): Priority level of the task (Low, Medium, High).

- taskStartdate (string): Start date of the task.

- taskEnddate (string): End date of the task.

- Response: The created task object.

# DELETE /tasks/:taskName

Description: Deletes a task by its name.

Parameters:

- taskName (string): The name of the task to delete.

- Response: Success message.

# PUT /tasks/:taskName

Description: Updates a task by its name.

Parameters:

- taskName (string): The name of the task to update.

- Request Body: Fields to update.

- Response: Success message.
