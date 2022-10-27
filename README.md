# MyDreamApp
Learning [Angular](https://www.udemy.com/course/the-complete-guide-to-angular-2/) 💪, instructor [Maximilian Schwarzmüller](https://github.com/maxschwarzmueller).

## Debugging
I had the "argument of type 'number' is not assignable to parameter of type 'never'" error in the Directives Assignment. The solution to set strict mode to false did not work for me, using Angular CLI version 14.2.5. After searching google I found a solution so the code ran as expected by accurately declaring the empty array:

`log = []` // do not use

`log: Array<number> = []` // use


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
