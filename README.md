# okta-signin-widget-flows
Uses [Prime Ng UI](https://www.primefaces.org/primeng/) for the UI elements.

# THIS IS NOT AN OFFICIAL TEMPLATE.  
This is was created for personal projects.

# AngularOktaTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development Environment
```

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 13.3.5
Node: 16.15.0
Package Manager: npm 8.10.0
OS: linux arm64

Angular: 13.3.6
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.5
@angular-devkit/build-angular   13.3.5
@angular-devkit/core            13.3.5
@angular-devkit/schematics      13.3.5
@angular/cli                    13.3.5
@angular/flex-layout            13.0.0-beta.38
@schematics/angular             13.3.5
rxjs                            7.5.5
typescript                      4.6.4


```

## Configuration
Place the below file in `src/app/shared/okta`.
`okta-config.service.ts`

## okta-config.service.ts Configuration file content
```
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {
  constructor() { }
  strGitHubRepo = {{ Your repo URL }};
  strBaseURI = {{ Your Org's Base URI }};
  strRedirectURL = {{ Your application's redirect URI }};
  strClientID = {{ Your application's client ID }};
  strIssuer = {{ Your org's base uri }} '/oauth2/default/';
  strScope = {{ Your application's scope }};
  strPostLogoutURL = {{ Your applications' post logout URI }};
  strResponseType = {{ Your application's response type }};
  strPrompt = 'login';
  strPkce = true;
  strLang = {{ Your locale }};
  strBrand = {{ Your brand}};

}
```

## tsconfig.json file
The signin widget will need an additional paramter in the `tsconfig.json`,

```
 "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false
  }
```


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Screenshots
<img src="/Capture.PNG" alt="drawing" width="600"/>
<img src="/Capture.PNG" alt="drawing" width="600"/>