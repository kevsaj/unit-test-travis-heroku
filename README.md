# Tutorial: Using Unit Testing, ESLint, Github with Travis and Heroku for CI/CD

This repository demonstrates using eslint, unit testing, github, travis  
and heroku to illustrate a full CI/CD workflow


## Install with NPM -i
* dotenv
* mocha
* chai
* express

## Install with NPM --save-dev
* eslint
* eslint rules (airbnb)



install eslint globally to make the CLI available

beware of administrator permission requirements (may need to sudo or
launch git bash shell as administrator)

change the extends settings in .eslintrc.json to

    "extends": "airbnb-base"


Add the sample app files server.js and controller/api-routes.js i.e.
write out your code

add, commit and push changes.

return to github repo and configure the following settings

* Navigate to the repo's page, then click the "Settings" tab.

* Select "Branches" from the left sidebar.

* Under "Branch protection rules", click "Add Rule"

* For "Branch name pattern" , choose "master". The page should display ""

* Check off the following options:

  * "Protect this branch"

  * "Require pull request reviews before merging"

  * "Include administrators"

  * "Require status checks to pass before merging"

  * "Require branches to be up to date before merging"

* Click "Save changes"


With this setup, you will need to add a colleague to be a collaborator
so they can approve your changes.


