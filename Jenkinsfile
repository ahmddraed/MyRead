pipeline {
    agent any 

    stages {
        stage("Build") {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t myread:1.0 .'
            }
        }

        stage("Deploy") {
            steps {
                echo "Running Docker container..."
                sh 'docker stop myread-container || true'
                sh 'docker rm -f myread-container || true'
                sh 'docker run -d --name myread-container -p 3001:80 myread:1.0'
            }
        }
    }
}
