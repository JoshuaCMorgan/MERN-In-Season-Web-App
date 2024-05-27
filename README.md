# In-Season Produce App

Welcome to my web service application. With the help of this app, you will know which produce is in season at your local market...right now. Before you head out or while you're shopping, just select your location, the type of produce, and today's date. And with that, you have a healthy selection of produce displayed before you. There's a shopping list for the ease and convenience of remembering all you need to buy.

Data used in this application is provided by: https://www.seasonalfoodguide.org

# How I worked on this project

- I build this app based upon designs from several websites
- I worked with tasks on Github board [screenshot of tasks](https://github.com/JoshuaCMorgan/in-season/blob/3d55f16577e10141f8d0619fbb906a5bcb47521a/client/.github/kanbanboard.jpg)
- I used feature branches and PR [example of PR](https://github.com/JoshuaCMorgan/in-season/pull/19)

# How to navigate this project

- Client-side routing using React Router v6; logic setup using plain objects [routing setup](https://github.com/JoshuaCMorgan/in-season/blob/3d55f16577e10141f8d0619fbb906a5bcb47521a/client/src/App.jsx#L24)
- Responsive CSS using styled-components: [Example code](https://github.com/JoshuaCMorgan/in-season/blob/main/client/src/assets/wrappers/Hero.js)
- custom Error Class to help both the user and developer move quickly to a solution [Source code](https://github.com/JoshuaCMorgan/in-season/blob/main/errors/customErrors.js)
- security features auth/validation, using JWT and HTTP-cookie[auth middleware](https://github.com/JoshuaCMorgan/in-season/blob/main/middleware/authMiddleware.js)[auth controller](https://github.com/JoshuaCMorgan/in-season/blob/3d55f16577e10141f8d0619fbb906a5bcb47521a/controllers/authController.js#L33)
- I used non-relational document database (MongoDB)[Example code](https://github.com/JoshuaCMorgan/in-season/blob/main/models/UserModel.js)

# Why I built the project this way

- styled-components is a helpful library for styling. It allows seamless integration with JS and includes helpful features such as auto-prefixer and scoped classes.
- JWT (JSON Web Token) is a simple, compact and secure way of transmitting data between parties.
- HTTP-only cookie is designed to be inaccessible to JavaScript running in the browser. It is a more secure way of storing sensitive information like user tokens.
- non-relational document database uses JSON, which helps developers with readability; and was a good choice since data has little structure and has higher performance.
-React Router 6.4 gives us pages as independent entities, less need for global state, and more page!

# If I had more time, I would change this

- I am currently updating it with React Query. It simplifies data fetching, caching, and synchronization in React applications.
- Concerning UI, I wouldn't mind adding a darkmode feature,
- Also, it might be nice to allow the user to load image for avatar. I would use Cloudinary.
- I am thinking of adding axios interceptors for improve error handling
