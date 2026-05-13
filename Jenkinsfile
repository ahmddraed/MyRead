pipeline {
    agent any

    environment {
        IMAGE = "ghcr.io/ahmddraed/myread:latest"
    }

    stages {

        stage('Login to GHCR') {
            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'GitHub-Credentials',
                    usernameVariable: 'GITHUB_USER',
                    passwordVariable: 'GITHUB_TOKEN'
                )]) {

                    sh '''
                    echo $GITHUB_TOKEN | docker login ghcr.io \
                      -u $GITHUB_USER --password-stdin
                    '''
                }
            }
        }

        stage('Pull Image') {
            steps {
                sh 'docker pull $IMAGE'
            }
        }

        stage('Deploy') {
            steps {

                sh 'docker stop myread-container || true'
                sh 'docker rm -f myread-container || true'

                sh '''
                docker run -d \
                  --name myread-container \
                  -p 80:80 \
                  $IMAGE
                '''
            }
        }
    }
}