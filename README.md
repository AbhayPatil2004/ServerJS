EC2 Commands :

sudo apt update – to update system packages
sudo apt install nodejs -y – to install Node.js
sudo apt install npm -y – to install npm
node -v – to check Node.js version
npm -v – to check npm version
git clone https://github.com/AbhayPatil2004/ServerJS.git – to clone GitHub repository
cd ServerJS – to enter project folder
npm install express – to install Express dependency
sudo node server1.js – to run the Node.js server



🟢 STEP 1: Create S3 Bucket
1.	Open S3 service 
2.	Click Create bucket 
3.	Bucket name:
abhayramkrushnapatil
4.	Region: Mumbai (ap-south-1) 
5.	Keep default settings 
6.	Click Create bucket 
________________________________________
📁 STEP 2: Create folders
Open bucket → Click Create folder
Create:
public/
private/
________________________________________
🌐 STEP 3: Upload files
•	public folder → images/videos (public access) 
•	private folder → documents (secure data) 
________________________________________
🔓 STEP 4: Make PUBLIC folder accessible
Go to:
•	public folder → Permissions 
OR bucket policy → paste:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::abhayramkrushnapatil/public/*"
    }
  ]
}
________________________________________
⚠️ IMPORTANT STEP (must do)
Go to:
👉 Permissions → Block Public Access
Turn OFF:
Block all public access
Save changes.
________________________________________
🔐 STEP 5: Private folder security (IAM)
Go to:
AWS Identity and Access Management
1.	Create IAM user 
2.	Attach policy: 
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::abhayramkrushnapatil/private/*"
    }
  ]
}
✔ Only this user can access private files
________________________________________
📤 STEP 6: Access files
Public file URL:
https://abhayramkrushnapatil.s3.amazonaws.com/public/image.jpg
Private file:
•	Only IAM login can access 
•	Not public URL
























🚀 1. EC2 Setup (3 Instances)
Amazon EC2
Steps:
1.	Launch 3 EC2 instances (Ubuntu) 
2.	Instance type: t2.micro 
3.	Key pair: create/download .pem 
4.	Security Group: 
o	SSH (22) 
o	HTTP (80) 
o	Custom (3000 optional for testing) 
________________________________________
🔑 2. SSH Login
ssh -i key.pem ubuntu@<EC2-Public-IP>
________________________________________
📥 3. Clone GitHub Repo (all instances)
git clone https://github.com/AbhayPatil2004/ServerJS.git
cd ServerJS
________________________________________
▶️ 4. Run servers (each EC2 different file)
EC2-1:
node server1.js
EC2-2:
node server2.js
EC2-3:
node server3.js
________________________________________
⚙️ 5. Create Target Group
Amazon EC2 Auto Scaling (used with LB)
•	Type: Instances 
•	Port: 80 
•	Health check: / 
Register all 3 EC2 instances
________________________________________
🌐 6. Create Load Balancer
Amazon EC2
•	Type: Application Load Balancer 
•	Listener: HTTP : 80 
•	Attach Target Group 
👉 Now test:
http://<load-balancer-dns>
✔ Traffic will distribute automatically
________________________________________
❤️ 7. Health Check Working
•	If server1 fails → traffic goes to server2/server3 
•	Automatic rerouting done by Load Balancer 
________________________________________
📈 8. Auto Scaling Setup
Amazon EC2 Auto Scaling
Step:
1.	Create Launch Template 
o	AMI: Ubuntu 
o	Instance type: t2.micro 
o	User data: 
#!/bin/bash
apt update -y
apt install nodejs npm -y
2.	Create Auto Scaling Group 
o	Attach Launch Template 
o	Attach Load Balancer 
3.	Set: 
Min = 1
Desired = 2
Max = 3
________________________________________
📊 9. Scaling Policy
Amazon CloudWatch
CPU based:
•	Scale OUT if CPU > 70% 
•	Scale IN if CPU < 30% 
________________________________________
🔥 10. Testing (IMPORTANT)
Load test:
stress --cpu 2
✔ New EC2 instances will auto launch
✔ Load will distribute automatically
________________________________________
🎯 FINAL FLOW (WRITE IN EXAM)
GitHub Repo → EC2 Instances → Load Balancer → Target Group → Auto Scaling → CloudWatch Monitoring
________________________________________
💡 ONE-LINE ANSWER (VERY IMPORTANT)
👉 “We deployed Node.js application on multiple EC2 instances, used Elastic Load Balancer for traffic distribution, and configured Auto Scaling with CloudWatch to dynamically manage instances based on CPU utilization for high availability and cost optimization

