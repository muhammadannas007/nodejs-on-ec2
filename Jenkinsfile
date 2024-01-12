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
                    
                    


                if (sh(script: 'pgrep -f "index.js" >/master/null', returnStatus: true) == 0) {


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
