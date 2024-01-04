# Cypress | basic commands for demoQA.com
Here are some tests for basic CRUD operations on www.demoQA.com.

## Setup

1. Download [nodejs](https://nodejs.org/en/download/) + [how to install nodejs](https://phoenixnap.com/kb/install-node-js-npm-on-windows) and [NPM](https://docs.npmjs.com/cli/v6/commands/npm-install)
- If it is already installed, check in terminal:

```
node -v
npm -v
```

2. Set NODE_HOME Environment Variable -> check [this tutorial](https://youtu.be/F53rDUwiAbU?t=155). 


3. Generate package.json -> execute in terminal:
```
npm init
```

4. Using Command prompt, go to project location and install Cypress (using the following command):
```
npm install cypress --save-dev
```
_**--save-dev** is supposed to save Cypress settings in package.json, so if you will move the project somewhere else, package.json will still have Cypress installed (and you won't have to do it again)._

5. Download [Visual Studio Code](https://www.youtube.com/watch?v=JPZsB_6yHVo) editor.


## Cypress commands

1. Open Cypress:
```
node_modules/.bin/cypress open
```
2. Run a single spec (_only elementsPageTest.cy.js file_):
```
node_modules/.bin/cypress run --spec "cypress\e2e\tests\elementsPageTest.cy.js" --headed
```

## Commands for uploading files - still working on this part _(for formsPageTests.cy.js)_

1. Install the cypress-file-upload node package using the following command:
```
npm install --save-dev cypress-file-upload
```

2. Once you have done the previous step successfully, you should see the package name in your package.json file:

![Cypress file upload option in package json](https://user-images.githubusercontent.com/110525069/208462494-7663e6e3-2307-4c89-9e9b-0edf5b399b80.png)

3. We will now import the node package into our Cypress project. In order to import, write the command from below in .cypress/.support/commands.js:
```
import 'cypress-file-upload';
```

I saved a picture named dogPhoto.jpg in fixtures folder (with relative path => cypress/fixtures/dogPhoto.jpg).



## Free websites for UI testing
- [DemoQA](https://demoqa.com/)
