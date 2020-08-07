Install dependencies:
    npm i

Install Browser Sync:
    npm i browser-sync -g

Build Docker image:
    docker build -t johnjamison/hapi-nun .

Run Docker container (on port 3000):
    docker run -p 3000:3000 johnjamison/hapi-nun

Push to Docker Hub:
    docker push johnjamison/hapi-nun

Docker server side commands:
    Pull the latest image:
        docker pull johnjamison/hapi-nun

    Run the image:
        docker run -p 3000:3000 johnjamison/hapi-nun


Scripts:
    npm run dev:
        This runs sass on the sass files found in assets/src/css and places them in assets/dist/css as well as running babel on any JavaScript found in assets/src/js and placing it in assets/dist/js directory. It also starts a watch task to re-run these tasks if detects any changes to the relevant directories and starts a browser window with browser-sync.

    npm run build:
        This is the same as dev but also minifies the JavaSctipt and CSS but does not add a watch task or browser-sync.

    npm run build-image:
        Builds a docker image from the project.

    npm run push:
        Pushes the image to docker hub.

    npm run dist:
        This runs build, build-image and push consecutively.


    