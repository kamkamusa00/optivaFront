# OptivaMediaCards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest]

Only 3 components unit test developed runned on Jest.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Structure
Core module is the place where I import all the things that are cross in the aplication:
  - Interceptors: one interceptor to inject the begining of the API Url
  - Store
  - Guards: not necesary in this proyect
  - Error Handling services
  - Http Service
  This module is imported in app.module

Shared is a folder with several modules which imports directives or other modules that web can use in several application places.
  - FormsError module contains directives and component to show field errors automaticaly.
  - Functions contains utilities to use along de aplication to easy certain tasks
  - Mocks: used in unit test to generateData or mock services across tests.

Features is a folder I haven`t create because I have only one feature if the proyect is going to grow more we
must move graphics-cards module into this no-created folder.

## Store

The app is developed using ngrx for use like repository of data.
I have created a ngrx store with 2 states each one with its reducer:

  O Graphics Cards can contain a list of graphics Cards.
      --Actions
        - appendCardspage : init the load of graphics cards from the back service throught the conected effect
        - appendCardspageLoaded : append received graphics cards from the back service to current state
        - loadCards : init the load of graphics cards from the back service throught the conected effect
        - cardsLoaded : replace current state with the received graphics cards from the back service

  O IsLoading can contain a list of loadings targets.
      --Actions
      - start : add target to array
      - start : delete target from array if exist

In the components web use the store information using the observables that returns store.select and applying the async pipe which automaticaly subscribe and unsubscribe to the observables.

## Inifinite Scroll

I have used ngx infinite scroll to capture the "scrolled" event at the end to the scrolling action done by the user. Then I call to appendCardspage Action of the Store to init de new load.

## Components

Every components are using "onPUsh" strategy.

## Filter

I resolved filter in the store.select each time we write characterss in filter field.

## Detail

In back API doesn´t exists graphic card detail end point, then I decidec to navigate to list component if the user refresh the page because the store will be erased.

## Lint 

Eslint is used to lint the proyect.
