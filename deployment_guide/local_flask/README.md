# Deploy Keras Model with Flask as Web App

## Steps to be followed for Local Host Installation

```shell
# 1. Clone this repo
$ git clone https://github.com/imskr/Plant_Disease_Detection.git
$ cd deployment_guide
$ cd local_flask

# 2. Install requirements i.e. Python Packages
$ pip install -r requirements.txt

# 3. Download the trained model into Webapp folder of the cloned repository from : https://drive.google.com/file/d/186O41SxRGoYZzlFtX6is5dwSLH5zMnPs/view?usp=sharing OR put your own trained model with name "model.h5" in the Webapp folder of the cloned repository. 

# 4. Run the script
$ python webapp.py
```

Open http://127.0.0.1:5000/ in the browser to run the webapp.

### Be careful how your trained model deals with the input otherwise, it won't make correct prediction!
### Put the model you trained using Keras notebook with name "model.h5" in the deployment_guide/local_flask folder of the cloned repository. 
