create a dotenv file 

Add following
PORT = 8000
CORS_ORIGIN = "http://127.0.0.1:5173"
DB_URL = url of database
PASSKEY = DeckofCards
SECRET = TEAOR

# Dockerizing Your Application

This guide will help you Dockerize your application by creating a Dockerfile. Dockerizing your application allows you to package it into a container, providing a consistent and portable environment for running your application across different systems.

## Prerequisites

- Docker: Ensure that Docker is installed and running on your system. Visit the [Docker website](https://www.docker.com/) to download and install Docker for your operating system.

## Getting Started

Follow the steps below to create a Dockerfile and Dockerize your application:

1. Create a new file named `Dockerfile` in the root directory of your application.

2. Open the `Dockerfile` using a text editor and define the instructions outlined in the guide.

3. Save the Dockerfile.

4. Open a terminal or command prompt and navigate to the directory containing the Dockerfile.

5. Build the Docker image by running the following command:

   ```shell
   docker build -t your-image-name .
Replace your-image-name with a suitable name for your Docker image.

Once the image is built, you can run a container based on that image using the following command:

shell
Copy code
docker run -p 8080:8080 your-image-name
This command maps port 8080 from the container to the same port on your host machine. Adjust the port number as needed for your application.

Access your application by opening a web browser and navigating to http://localhost:8080.

