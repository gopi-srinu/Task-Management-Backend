const express = require('express');
const app = express();
const model = require('./schema');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type']
}));

const DB_URL = '';
mongoose.connect(DB_URL).then((connectionStatus) => {
    console.log('Connected to the DataBase successfully');
    app.listen(3000, 'localhost', () => {
        console.log('Server started and running on port 3000');
    })
}).catch((error) => {
    console.log('Error connecting to the Database', error);
})

app.use((req, res, next) => {
    console.log(req.method);
    next();
})

app.get('/', (req, res) => {
    res.send('Welcome to Task Management Application');
})

app.get('/tasks', (req, res) => {
    model.find().then((tasksList) => {
        res.status(200).send(tasksList);
    }).catch((error) => {
        res.send('Error fetching tasks from Database', error);
    })
})

app.get('/tasks/:taskName', (req, res) => {
    const taskName = req.params.taskName;
    model.findOne({ taskName: taskName }).then((searchedTask) => {
        res.status(200).send(searchedTask);
    }).catch((error) => {
        res.status(404).send({ message: `Error getting the task : ${error}` })
    })
})

app.post('/tasks', (req, res) => {
    const newTask = new model(req.body);
    console.log(newTask);
    newTask.save(newTask).then((savedNewtask) => {
        res.status(200).send({newTask});
    }).catch((error) => {
        res.status(404).send({ message: 'Error saving the Task', error });
    })
})

app.delete('/tasks/:taskName', (req, res) => {
    const taskTobeDeleted = req.params.taskName;
    model.findOneAndDelete({ taskName: taskTobeDeleted }).then((deletingTask) => {
        console.log(deletingTask);
        res.status(200).send({ message: 'Task Deleted Successfully' })
    }).catch((error) => {
        res.status(404).send(`Encountered ${error} error while deleting task.`)
    });
})

app.put('/tasks/:taskName', (req, res) => {
    const updatedInformation = req.body;
    const taskName = req.params.taskName;
    model.findOneAndUpdate({ taskName: taskName }, { $set: updatedInformation }, { new: true }).then((updatedTask) => {
        console.log("updatedTask>>>>>>>>>>>", req.method ,updatedTask);
        res.status(200).send({message: 'Task updated Successfully'});
    }).catch((error) => {
        res.status(404).send('Error while updating the task', error);
    })
})