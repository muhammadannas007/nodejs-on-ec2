pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building your project...'
                // Add build commands or scripts here
            }
        }



        stage('Deploy') {


            steps {
                sh 'cp -r * /var/www/master.com/nodeapp'
                sh 'cd /var/www/master.com/nodeapp'
                script {
            def deployDirectory = "/var/www/master.com/nodeapp"
            echo "Changing to directory: ${deployDirectory}"
            dir(deployDirectory) {
                // Commands to be executed within the specified directory
                sh 'cp -r Jenkinsfile README.md ecosystem.config.js index.js package-lock.json package.json .'
                sh 'pm2 start'
            }
                sh 'nohup pm2 start &'
                echo 'Running tests...'
                // Add test commands or scripts here
            }
        }

        // Add more stages as needed
    }
}
