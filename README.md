# Pixel Front End Takehome

![CI/CD](https://github.com/juampirombola/takehome-front/workflows/CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/juampirombola/takehome-front/branch/develop/graph/badge.svg)](https://codecov.io/gh/juampirombola/takehome-front)

This is the resolution of a **24h** technical test


**Technologies**: React, Chakra UI and Jest for testing   
**CI/CD**: Github Actions and codecov   
**Project management**: Github Kanban   

Demo live: https://juampirombola.github.io/takehome-front/

![image](https://user-images.githubusercontent.com/11811232/154808699-7355d42c-a8c8-48ce-94b5-f28d28775f29.png)



## Problem

As players interact with different games and metaverses, they leave a history of events that define who they are. Every single action might not say much, but the collection of them represents an entity's identity and reputation.

For this take-home, we want you to build a little piece of the platform that will help participants show who they are. We want you to build a web app that takes a Ronin address as input and  shows the set of relevant transactions for that account in the Axie ecosystem, as well as any aggregates that you deem informative. Here are some examples that are not meant to be exhaustive but just give you an idea: claimed SLP on a given period, the scholar's Axies, type of account.

For instance, this the address corresponding to a scholar: `ronin:4d51e82c92c5e89176f006d8425330aa5ff3a4c4`. Among others, it has several Claim SLP actions, only some of which will have a relevant amount (most of them are 0). Here's the address of an account that is likely an investor/breeder (can we infer that in an automated fashion?): `ronin:2b9fd5ebc7a6ce8539e2aec96774544b8d559732`.

Here's the link to the Ronin explorer: https://explorer.roninchain.com. Note that there is no documentation for the endpoints of this API. Go ahead and dig into the network console to find the relevant ones for this assigment. If you are stuck and cannot figure them out, please ping us so we can provide you with them.

Deliverable:
- Please fork this repo and push your solution.
- Runnable code + appropriate testing + documentation.

Evaluation Criteria:

We should be able to execute your solution without much hassle, and the app should be intuitive to use. We will evaluate your code based on clarity, performance, and maintainability. Make sure to include relevant tests and documentation.

Let us know if you have any questions. Happy coding!


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

