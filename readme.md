Install dependencies:
npm i

Build Docker image:
docker build -t johnjamison/hapi-nun .

Run Docker container (on port 3000):
docker run -p 3000:3000 johnjamison/hapi-nun

Push to Docker Hub:
docker push johnjamison/hapi-nun