# agaetis-react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app) with a Agaetis flavor. 
 
## Start a new project 

 * Run `create-react-app app-name --scripts-version agaetis-react-scripts` 
 * ???? 
 * PROFIT!!!! 
 
## How to test it without publishing on NPM 
 
 * Install [Verdaccio](https://github.com/verdaccio/verdaccio) with `npm install -g verdaccio` 
 * Run `verdaccio` 
 * Configure NPM to use your custom server `npm config set registry http://localhost:4873/` 
 * Add a new user with `npm adduser --registry http://localhost:4873/` 
 * Publish your package with `npm publish --registry http://localhost:4873` 
 * Run `create-react-app test-app --scripts-version agaetis-react-scripts` to test your starter 
 * Run `npm config delete registry` to reset registry to official 
