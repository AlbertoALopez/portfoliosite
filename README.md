Code base for personal website.

Source files are located in `app` and build files and html are in `build/`.

## Installation

First `git clone https://github.com/AlbertoALopez/portfoliosite.git` and navigate to the main directory.

`npm install` to install all dependencies.

`npm run start` will start a simple development server on localhost:8080. This server features hot module reloading so your css and JavaScript changes reload in the browser without needing a page refresh.

`npm run build` will run the webpack build process and minify, bundle and inline assets. This will also transpile any JavaScript and Sass using Babel and node-sass respectively.

For production comment out the script link to bundle.js and uncomment the lines for the other assets.

## TODO

* Update build output configuration so that files are put into their respective folders (build/style, build/js, etc)
