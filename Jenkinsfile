pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                script {
                    // Your build steps here
                    echo 'Building your project...'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Copy files to deployment directory
                    sh 'cp -r Jenkinsfile README.md ecosystem.config.js index.js package-lock.json package.json /var/www.cicdpipelinedemo.com/nodeapp'

                    // Change to deployment directory
                    dir('/var/www.cicdpipelinedemo.com/nodeapp') {
                        // Additional steps in the deployment directory
                        sh 'nohup pm2 start'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
