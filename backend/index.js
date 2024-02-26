import express from "express";
import cors from "cors";
import { spawn } from 'child_process';
import Data from "./models/Data.js";
import mongoose from "mongoose";

const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/yaswanth")

let globaldata = "";

app.post('/', (req, res) => {
    const receivedData = req.body.data;
    console.log('Data received from client:', receivedData);
     // Create a child process to run the Python script
     const pythonProcess = spawn('python', ['test.py', receivedData]);
     // Handle data from the Python script
     pythonProcess.stdout.on('data', async(data) => {
         const processedDataFromPython = data.toString();

         const newData = new Data({
            data: processedDataFromPython,
         });

         await newData.save().then(() => console.log('meow'));;

         globaldata = processedDataFromPython;
         console.log('Processed data from Python script:', processedDataFromPython);
 
         // Respond to the client with the processed data (optional)
         
         res.json({ processedData: processedDataFromPython });
        
     });
 
     // Handle errors or process exit
     pythonProcess.on('error', (error) => {
         console.error('Error running Python script:', error);
         res.status(500).json({ error: 'An error occurred while running the Python script' });
     });
 
     pythonProcess.on('close', (code) => {
         if (code !== 0) {
             console.error(`Python script exited with code ${code}`);
             res.status(500).json({ error: 'Python script exited with an error' });
         }
        
         
     });
});

app.get("/getdata", (req, res) =>{
    res.json(globaldata)
})

app.listen(5000,() => {
    console.log("server is running on port 5000");
})