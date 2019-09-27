# Comp354 Project ! 

This is our fun and exciting project, full of wonders and nights of debugging !

## Getting Started

First copy this repo

```
git clone git@github.com:ArchambaultP/Comp354Website.git
```

Go inside directory Comp354Project

```
cd Comp354Project
```
run maven clean install, this will install and deploy all the needed code on 
the inbuilt tomcat server

```
./mvnw clean install
```

run maven spring-boot:run, this will start the server and deploy the code. 
```
./mvnw spring-boot:run
```

you also need to run the angular app, to make sure you have a front end (do this on another terminal) 
this needs to be done from the Project-UI directory, make sure you have node.js installed
```
npm start
```

At this point, try accessing http://localhost:4200, you should the the index page.

## Running the tests

Run the following script to execute the tests that are in the src/main folder of the project (The Backend Part)
```
sh buildScript.sh
```

