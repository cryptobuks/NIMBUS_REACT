# Nimbus Mining Demo
A web application for tracking mining statistics for clients

## How to set up application:
1. Install and configure mongodb
2. Make sure you have node.js installed, using the command line locate the directory of the files and run npm install

## How to run the application
1. Run mongod.exe located in the mongodb installation directory using the command linenpm start and node app.js on separate windows
2. Using the command line, locate the directory containing the files of the application and type in npm start to run the react front end
3. In a separate command line window, locate the directory contain the files of the application and type node app.js to run the express back end 
4. After this, you should be able to access the application through your browser on port 8080, e.g. 127.0.0.1:8080

## Features
1. Login and Registration
2. Login Sessions(Stored as tokens in database)
3. Dashboard with up to date USD/MYR values for tracking balance of ZCash and ETH addresses
4. Performance of ZCash and ETH listed on Dashboard

## Preview

### Home Page
![Nimbus Home](https://i.imgur.com/0HkcQNF.png)

### Login/Signup Page
![Login and Registration Page](https://i.imgur.com/kT01jm1.png)

### Dashboard
![Nimbus Dashboard](https://i.imgur.com/dcrLMcC.pngF)
