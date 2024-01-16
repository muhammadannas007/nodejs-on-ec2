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
                sh 'cp -r * /var/www/master/nodeapp'
                sh 'cd /var/www/master/nodeapp'
                script{
                if (sh(script: 'pgrep -f "index.js" >/dev/null', returnStatus: true) == 0) {


                sh 'sudo pkill -f "index.js"'
                }
                }
                


                sh 'nohup pm2 start &'
                echo 'Running tests...'
                // Add test commands or scripts here
            }
        }

        // Add more stages as needed
    }
}
