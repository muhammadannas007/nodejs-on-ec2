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
                sh 'cp -r * /var/www/qa/nodeapp'
                sh 'cd /var/www/qa/nodeapp'
                

                
                
                sh 'nohup pm2 start &'
                echo 'Running tests...'
                // Add test commands or scripts here
            }
        }

        // Add more stages as needed
    }
}
