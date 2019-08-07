# GithubRepoExplorer

**Check out the [live demo](https://github-repo-explorer.firebaseapp.com/) app at [https://github-repo-explorer.firebaseapp.com](https://github-repo-explorer.firebaseapp.com/)!**

This is an example project that lets you search for GitHub repositories to get some information about them and check out their issues.

## Initial Setup

0. Install all the necessary tools on your local machine if you don't already have them.
   - Install [Git](https://git-scm.com/) to be able to pull this repository.
   - Install the latest version of [Node.js](https://nodejs.org/), so you can install node modules using npm.
1. Pull this repository by running `git clone git@github.com:andrasfelfoldi/github-repo-explorer.git`.
1. Install [Angular CLI](https://cli.angular.io/) by running `npm install -g @angular/cli`.
1. Navigate to the root folder of your local copy of this repository (the folder that contains the package.json file) in your terminal and run `npm install` or `npm i`;

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running the application locally

After the [initial setup](#initial-setup), navigate to the root folder of this project in your terminal and run `ng serve`. Open a browser tab at [http://localhost:4200/](http://localhost:4200/), where you can see the locally running application.

Alternatively, you can run the `ng serve --open` command that will automatically open the running app for you in a new browser window or tab.

## Testing the application

Run `ng test` in the root folder of this project to execute the unit tests via [Karma](https://karma-runner.github.io).

There are no e2e (End-to-End) tests for this project currently.

## Building the application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

After building the application, you can use the contents of the `dist/` folder to host the app.
