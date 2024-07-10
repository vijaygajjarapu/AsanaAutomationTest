#Install Node and NPM
Windows:
https://phoenixnap.com/kb/install-node-js-npm-on-windows

Mac:
https://phoenixnap.com/kb/install-npm-mac

#How to install playwright

npm install
npm install playwright@latest
Other required installations:
npm install --save-dev cross-env 
npm install dotenv --save

#Resources: 
https://playwright.dev/docs/intro
https://www.npmjs.com/package/cross-env
https://www.npmjs.com/package/dotenv

Folders Description:

1. environmentData: It contains files like .env.dev, .env.stage which stores environment related data like BASE_UI_URL, EMAIL_ID and PASSWORD. Instead of hard coding, it is a good practise to save in .env files locally and secrets or vault in pipelines.
2. tests: It contains our test cases. Created two folders named ui
3. utils: Reusable classes are kept here.
    a. helpers.ts contains re-usable functions like login methods which  can be called directly.
    b. globalSetup.ts which reads env files and loads corresponding data.
4. testData: It contains testCasesData.json file which i received.

#How to execute:
For Dev environment: npm run env:qa

Similarly for other environments, configuration is done in Scripts section in package.json.

Post Execution, below folders will be generated:
1. playwright-report: It contains html report
2. test-results: It contains screenshots(on failure) and vedio of test execution


