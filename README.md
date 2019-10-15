# Comp354 Project ! 

This is our fun and exciting project, full of wonders and nights of debugging !

## Getting Started
### DISCLAIMER
#### Don't open/clone this project through IntelliJ, open IntelliJ and click 'Open', and select the cloned Comp354Website folder

Copy this repo

```
git clone git@github.com:ArchambaultP/Comp354Website.git
```

The application works with two servers, one front-end, and one back-end. For now, you need to start both on two different terminals.
Make sure you have node.js and JavaJDK8 installed on your machine.

To run the back-end server, run the buildBE.sh script inside Git-Bash
```
sh buildBE.sh
```

To run the front-end server, run the buildFE.sh script inside Git-Bash
```
sh buildFE.sh
```

At this point, try accessing http://localhost:4200, you should the the index page.

## Closing the servers

To close the servers opened in the terminals, just focus on the terminal window, and press ctrl+c (most likely command+c for Mac users)

## Running the tests

Run the following script to execute the tests that are in the src/main folder of the project (The Backend Part)
```
sh buildScript.sh
```

