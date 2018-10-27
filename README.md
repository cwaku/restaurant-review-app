# Front End Developer Nanodegree Course
---
#### _Restaurant Review App_

### How to run?
   #### Using Python:
1. Clone or download the ZIP 

2. To run the app you need a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

3. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, cd into the project home directory and spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

4. Navigate to the js directory, open the dbhelper.js file and change the port to your preferred port, with your server running, visit the site: `http://localhost:8000`. Don't forget to replace the port in the address with whatever port you have chosen.

   #### Using Node.js `live-server`:

1. Type `npm install -g live-server` in your terminal to install live-server.

2. cd <path-to-content>

3. Start live-server by entering `live-sever` in the terminal

4. Open localhost:8080 in a browser.


## Restrictions:

This app uses service worker to cache the resources needed to render this site. I have not used any build tool to compile my js. So right now there is no way to automatically update the service worker when you make changes to your scripts. You have to manually update the myCache variable in serviceworker file(sw.js), each time you make updates to your scripts. Feel free to use a build tool when your make changes to the code base.

## Dependencies:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace the api keys in the main.js and restaurant_info.js files with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Feel free to check out the app [here](https://cwaku.github.io/restaurant-review-app/).


### Note:

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. 


