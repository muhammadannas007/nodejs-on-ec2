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
                
                    // Navigate to the deployment directory
                        // Copy files to the deployment directory
                        sh 'cp -r * /var/www/master/nodeapp'

                        sh 'cd /var/www/master/nodeapp'
                        // Check if the process is running
                        
                        // Stop the Node.js process (if running)
                        sh 'sudo pkill -f "index.js"'
                        // Start the Node.js process using pm2
                        sh 'nohup pm2 start index.js &'
            
                

                echo 'Running tests...'
                // Add test commands or scripts here
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t my-node-app:1.0 .'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t my-node-app:1.0 .'
            }
        }
 

        // Add more stages as needed
    }
}
