# Changelog

## [Unreleased]

## 16.3.31 (2018-11-15)

### Common

#### Bug Fixes

- Fixed angular ng-template `interpolation` issue when using Change Detection `onPush strategy`.

## 16.3.29 (2018-10-31)

### Common

#### New Features

- Upgraded TypeScript version to 3.0

## 16.3.24 (2018-10-09)

### Common

#### Bug Fixes

- Fixed Angular production build issue.

## 16.3.22 (2018-09-25)

### Common

#### Bug Fixes

- Fixed `ngModel` value update issue.

## 16.3.21 (2018-09-22)

### Common

#### Breaking Changes

- Angular `npm` package name has been changed from `ng` to `angular`. i.e. `ej2-ng-base` to `ej2-angular-base`.
- The individual `npm` package will no longer bundle dependent component's style. The online web tool [CRG](https://crg.syncfusion.com/) can be used to combine specific set of component and its dependent component styles.

## 16.3.17 (2018-09-12)

### Common

#### Breaking Changes

- Angular `npm` package name has been changed from `ng` to `angular`. i.e. `ej2-ng-base` to `ej2-angular-base`.
- The individual `npm` package will no longer bundle dependent component's style. The online web tool [CRG](https://crg.syncfusion.com/) can be used to combine specific set of component and its dependent component styles.

#### New Features

- Provided Angular [Schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) support for our Essential JS 2 Angular suite, which performs the below,
- Installs the specific package.
- Import the required modules in `app.module.ts`.

## 16.2.48 (2018-08-14)

### Common

#### Bug Fixes

- Fixed Angular `attribute` issue.

## 16.2.47 (2018-08-07)

### Common

#### Bug Fixes

- Fixed Form component's reset issue.

## 16.2.46 (2018-07-30)

### Common

#### Bug Fixes

- Resolved view encapsulation issue.
- Resolved `onpropertychange` not triggered issue.
- Resolved issue in `EventArgs` passing.

## 16.2.43 (2018-07-03)

### Common

#### Bug Fixes

- Cleared `peerDependencies` warning.

## 16.2.41 (2018-06-25)

### common

#### New Features

- Provided Angular 6 compatibility support

#### Bug Fixes

- Cleared `peerDependencies` warning.

## 16.1.41 (2018-05-09)

### common

#### Bug Fixes

- Propagate touch on `blur` issue is fixed.

## 16.1.38 (2018-05-02)

### common

#### Bug Fixes

- ng base destroy issue is fixed.

## 16.1.32 (2018-03-29)

### common

#### Bug Fixes

- Skip form event when Focus on `blur`.

## 16.1.24 (2018-02-22)

### common

#### New Features

- Angular Universal support added

#### Bug Fixes

- Resolved `clearTemplate` issue.

#### Breaking Changes

- Tag prefix for Angular components is changed from `ej` to `ejs`. For example, `ej-grid` is changed to `ejs-grid`.

## 15.4.30-preview (2018-02-14)

### common

#### Bug Fixes

- Fixed Form component's expression changed on template issue.

## 15.4.27-preview (2018-01-30)

### common

#### Bug Fixes

- Fixed Form component's disabling issue.

## 15.4.26-preview (2018-01-23)

### common

#### Bug Fixes

- Resolved `reactive form reset` issue.

## 15.4.23-preview (2017-12-27)

### common

#### Bug Fixes

- Resolved `this.propagateTouch is not a function` console error.

## 15.4.22-preview (2017-12-14)

### common

#### Bug Fixes

- Grouped radio button `ngModel` binding.
- `ngFor` directive not working for component child directive.

## 15.4.21-preview (2017-12-08)

### common

#### Bug Fixes

- Form component, form option `updateOn` blur.

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2

## 15.4.17-preview (2017-11-13)

Base library provide options to enable following Angular functionalities in Essential JS 2 components.

- Input and Output Binding
- Angular Templating
- Ahead-Of-Time (AOT) Compilation
- Defining Injectable Modules
