import {v4 as uuidv4 } from "uuid"
export const projects = [
    {
        id: uuidv4(),
        title: "Deploy PHP website on AWS EC2 using Apache!",
        desc: "1-select a region 2-Create A vpc and a subnet within 3-Create security groups 4-Launch EC2 5-Configure Inbound &Outbound rules 6- create Internet gateway to make ec2 respond 7-Configure aws by installing apache with php",
        github: "https://github.com/ahmedzak7",
        demo: "https://github.com/ahmedzak7",
        image: "./images/1stproject.png",
    },
    {
        id: uuidv4(),
        title: "Dockerize a Flask App and to deploy to AWS ECS!",
        desc: "I start by building a local docker image and upload it to Elastic Container Registry. Then create an ECS Cluster, and configure a task to run our docker image. Finally, we launch a Task into the cluster and expose the app to the internet via VPC.",
        github: "https://github.com/ahmedzak7/DevOps-Flask-WebApp",
        demo: "https://github.com/ahmedzak7",
        image: "./images/project-2.jpg",
    },
    {
        id: uuidv4(),
        title: "K8s-Deploying-MongoDB-and-Mongo-Express",
        desc: "► Deploying MongoDB and Mongo Express ► MongoDB Pod ► Secret ► MongoDB Internal Service ► Deployment Service and Config Map ► Mongo Express External Service",
        github: "https://github.com/ahmedzak7/K8s-Deploying-MongoDB-and-Mongo-Express",
        demo: "https://github.com/ahmedzak7/K8s-Deploying-MongoDB-and-Mongo-Express",
        image: "./images/3rdproject.png",
    },
    {
        id: uuidv4(),
        title: "CI & CD - fully automated and deploy to Kubernetes!",
        desc: "A project on continuous building and delivering your project. Building docker image and storing into dockerhub registry. Create pods and deploy using kubernetes.",
        github: "https://github.com/ahmedzak7/CICD-LoginWebApp-Java",
        demo: "https://github.com/ahmedzak7/CICD-LoginWebApp-Java",
        image: "./images/project4.png",
    },
    {
        id: uuidv4(),
        title: "CICD to run Terraform code and Deploy a NodeJs on a slave jenkins",
        desc: "Terraform code using modules&variables to provision architecture then using jenkins pipeline to run it and other pipeline to deploy a nodeJs app",
        github: "https://github.com/ahmedzak7/terraform_project/tree/master",
        demo: "https://github.com/ahmedzak7/terraform_project/tree/master",
        image: "./images/project5.png",
    },
    {
        id: uuidv4(),
        title: "AWS RDS MySQL Database Setup & Connect it to a WebPage",
        desc: "► Deploy EC2 instance as a webserver ► Deploy RDS instance ► Have a web page talk to rds and update data ►Perform some sql queries(workbench or mysqlClient)",
        github: "https://github.com/ahmedzak7",
        demo: "https://github.com/ahmedzak7",
        image: "./images/project5.png",
    },
  
]