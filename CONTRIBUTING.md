# Contributing to Plant_Disease_Detection

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Discussing the current state of the code
- [Reporting a bug](https://github.com/imskr/Plant_Disease_Detection/blob/master/.github/ISSUE_TEMPLATE/bug_report_template.md)
- [Submitting a fix](https://github.com/imskr/Plant_Disease_Detection/blob/master/.github/ISSUE_TEMPLATE/pull_request_template.md)
- [Proposing new features](https://github.com/imskr/Plant_Disease_Detection/blob/master/.github/ISSUE_TEMPLATE/feature_request_template.md)

## Steps to follow :scroll:

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [Plant_Disease_Detection]( https://github.com/imskr/Plant_Disease_Detection) by using the <kbd><b>Fork</b></kbd></a> button.

 [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/imskr/Plant_Disease_Detection)

### 2. Clone it :busts_in_silhouette:

You need to clone (download) it to local machine using

```sh
git clone https://github.com/Your_Username/Plant_Disease_Detection.git
```

> This makes a local copy of repository in your machine.

Once you have cloned the ` Plant_Disease_Detection ` repository in GitHub, move to that folder first using change directory command.

```sh
# This will change directory to a folder Plant_Disease_Detection
cd Plant_Disease_Detection
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in GitHub :octocat:

```sh
git remote -v
origin  https://github.com/Your_Username/Plant_Disease_Detection.git (fetch)
origin  https://github.com/Your_Username/Plant_Disease_Detection.git (push)
```

Now, add a reference to the original [Plant_Disease_Detection](https://github.com/imskr/Plant_Disease_Detection) repository using

```sh
git remote add upstream https://github.com/imskr/Plant_Disease_Detection.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
git remote -v
origin    https://github.com/Your_Username/Plant_Disease_Detection.git (fetch)
origin    https://github.com/Your_Username/Plant_Disease_Detection.git (push)
upstream  https://github.com/imskr/Plant_Disease_Detection.git (fetch)
upstream  https://github.com/imskr/Plant_Disease_Detection.git (push)
```

### 4. Sync it :recycle:

Always keep your local copy of repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
git fetch --all --prune

# Switch to `master` branch
git checkout master

# Reset local `master` branch to match `upstream` repository's `master` branch
git reset --hard upstream/master

# Push changes to your forked `Plant_Disease_Detection` repo
git push origin master
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/imskr/Plant_Disease_Detection/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to make contribution. Please create separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and will switch to that branch.
git checkout -b Branch_Name
```

Create a separate branch for contribution and try to use same name of branch as of folder.

To switch to desired branch

```sh
# To switch from one folder to other
git checkout Branch_Name
```

To add the changes to the branch. Use

```sh
# To add all files to branch Branch_Name
git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message gets associated with all files you have changed
git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
git push -u origin Branch_Name
```

Finally, go to your repository in browser and click on `compare and pull requests`.
Use our [pull request template format](https://github.com/imskr/Plant_Disease_Detection/blob/master/.github/ISSUE_TEMPLATE/pull_request_template.md).
Then add a title and description to your pull request that explains your precious effort. 

Sit and relax till we review your PR, you've made your contribution to our project.

:tada: :confetti_ball: :smiley: _**Happy Contributing**_ :smiley: :confetti_ball: :tada:

