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
                sh 'cp -r * /var/www/nodeapp'
                sh 'cd /var/www/nodeapp'
                sh 'pkill -f "index.js" && echo "Node js process killed"'
                sh 'nohup pm2 start &'
            }
        }

        // Add more stages as needed
    }
}
