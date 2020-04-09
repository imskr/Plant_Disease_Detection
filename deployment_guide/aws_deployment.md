# Deploy Plant Disease Detection on AWS Elastic Beanstalk

## Setup

### What you need

- A Local workspace
- *EB CLI* installed and configured in your Local workspace.
    *If you don't have EB CLI installed, then [Click Here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)*
- A *Amazon Web Services* account
- Billing enabled to access the *APIs* and Featues we need

**After fulfilling the requirements, you can go through the proesss**

## Check EB CLI
Open the Terminal/Command Prompt and
Enter the following command to check

```bash
eb --version
```

Output:
```bash
```

> *If it shows any **Error** then reinstall your EB CLI*

## Download the Plant Disease Detection app

Enter the following command to clone the app repository to your Local Workspace and Go to the directory that contains the code
    
```bash
git clone https://github.com/imskr/Plant_Disease_Detection.git
cd Plant_Disease_Detection
```

## Initialize the Elastic Beanstalk

1. Enter the following command to initialize the EB

  ```bash
  eb init
  ```
 
 Output:
 
  ```bash
  ```
  
2. Select a default region
  *For India, choose the **ap-south-1***
  
  Enter **6**
  
  Output:
 
  ```bash
  ```
  
3. Select the application
  The *Plant_Disease_Detection* should be on the default.
  
  So, select the Default value **1**
  
  Output:
 
  ```bash
  ```
  
4. Additional options
  - As we are using docker, So enter **Y**
  - We don't nees *SSH* for our App, so enter **N**
  
  Output:
  
  ```bash
  ```
## Create the Environment

Enter the following command to create the Environment

```bash
eb create
```

1. Enter the Environment name

  *Select the Default name* or You can give your own name
  
2. Enter the CNAME prefix
  
  *Select the Default CNAME* or You can give your own
  
3. Select the Load balencer
  
  *Select the Default one*
  
Output:

```bash
```

*Elastic Beanstalk will create your environment and deploy it. It will take around 5 minutes*

## Open your app

After successfully deployment, you can open your app by simply typing a command

```bash
eb open
```

or you can Goto you *EB Management Console* and Check the URL

---


```bash
Hope you may understand and deploy the App perfectly.
Thank you
```

Deployment guideline by [Arkadip Bhattacharya](https://github.com/darkmatter18)
