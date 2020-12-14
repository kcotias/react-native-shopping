<!--
***
*** Project created by Kaian Cotias
***
-->

## Summary

- [Summary](#summary)
- [About the Project](#about-the-project)
  - [Made with](#made-with)
  - [Architecture](#architecture)
- [How to run](#how-to-run)
- [Contacts](#contacts)

## About the Project

![](donus-test.gif)

This is the result of the [test requested](https://github.com/ztech-company/donus-code-challenge/blob/master/frontend-mobile.md) as part of Donus hiring process.

## Made with

The project was built using TypeScript with [React Native](https://reactnative.dev/) and [Expo](https://expo.io/) (To provide hosting as requested on the test description).

There are some other dependencies worth mentioning:
- [React Navigation](https://reactnavigation.org/) to handle navigations.
- [React Native Skeleton Content](https://www.npmjs.com/package/react-native-skeleton-content) to provide loading animations
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library) to provide a complete tests API.

## Architecture

I have chosen to follow a mix of the well known Atomic Pattern with a modular approach to separate each vertical of the App. Despite being a relatively small app, i've made this decision to show what would be my ideal arch for bigger and more complex Apps that woul require scalability.

For naming i've adopted the PascalCase style for files and folders.

I've decided to use FC (functional components) all over the app instead of the classic class based components, since this is how the Facebook team claims to be the future of React, and specially because it provides us a cleaner and more performatic codebase. Replacing lifecycle methods with the useEffect Hook, and the regular state definition with the new useState hook.

For styling i didn't used any helper such as Styled Components, only to show my knowledge on css-in-js pattern itself.

I've decided to not use any Global state management (i.e. redux, mobX ...) because would add an unecessary layer of complexity, and since modern GraphQl client provides us power to kinda off replace it by cacheing our query results and having a state management itself, so would be a smarter decision to use it as the only source of truth.

To improve performance i've made little choices that won't impact an App with this size, but in a bigger App they would've made a great impact:

- Using React.memo() HOC to memoize components and avoid unecessary rerender on some components, providing us the same functionality of PureComponent.
- Following the 'Jsx no bind' rule which is basically not using inline arrow functions and binding on JSX: 

    `Using arrow functions or binding in JSX is a bad practice that hurts performance, because the function is recreated on each render.

    Whenever a function is created, the previous function is garbage collected. Rerendering many elements might create jank in animations.

    Using an inline arrow function will cause PureComponents, and components that use shallowCompare in the shouldComponentUpdate method to rerender anyway. Since the arrow function prop is recreated each time, the shallow compare will identify it as a change to a prop, and the component will rerender.`
    read more at: https://stackoverflow.com/a/36677798

Ideally i would have used absolute imports instead of relative imports, but to be more faster and avoid more setups i've decided to go with relative, but i truly prefer absolute imports :P
## How to run

I've made the App using IOS simulator to be faster since i only had the weekend, so i highly recommend the Iphone 11 pro Max to be the test device. I've tested on iphone 8 and higher devices, but the best experience is the mentioned. I would give a little more attention to responsiveness and screen sizes using react-native-screen but due to lack of time i thought it wouldn't affect the test result.

You can find it hosted on Expo a well, but i didnt had any Android device to test how it behaves, but i'll try to do that soon.

https://expo.io/@kcotias/projects/donus-test

Running locally:

Make sure you have installed:

- Node
- React Native
- Expo CLI
- yarn 

I've commited the .env so you should be able to run it and test with only one line:

```bash
yarn run start donus
```
or

```bash
yarn run ios
```
About tests ...
In the RH interview i was told this role is planned to have start at january 5 which give us little time to do everything, and since i'm working on weekday, i made all i could to deliver it this weekend, barely haven't slept haha, so i've only made a unit test of one of the components to show superficially my knowledge and setup on tests.

To run it just:

```bash
yarn test
```
## Contacts

You can see a little more of my job at my github profile where i have some open source RN libraries.

phone: +55 11 991803266
linkedin: http://www.linkedin.com/in/kcotias
instagram: @kaiandev

### Thanks a lot for your time :) Looking forward to be on the same boat soon!