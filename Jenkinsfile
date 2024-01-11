pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building your project...'
                // Add build commands or scripts here
            }
        }

        stage('Test') {
            steps {
                sh 'cp -r * /var/www/nodeapp'
                sh 'cd /var/www/nodeapp'
                sh 'if pgrep -f "index.js" >/dev/null; then
                pkill -f "index.js"
                fi    "'
                sh 'nohup pm2 start &'
                echo 'Running tests...'
                // Add test commands or scripts here
            }
        }

        // Add more stages as needed
    }
}
