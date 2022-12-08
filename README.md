---
created: 2022-12-08 09:31:32
---


Hello welcome to React JS, your nightmare for the next 2 months 😈. 

# Structure of directory

To start, the react directory goes:
```
- project-ceboom
	- .git [if u have ur hidden files shown]
	- node_modules [naa ra ni siya if u have saved libraries na]
		- […saved libraries]
	- public
		- […files that we won’t touch]
	- src
		- ApiCalls [to be added pa]
		- Assets
		- components
		- App.css
		- App.js
		- index.css
		- index.js
		- reportWebVitals.js
		- setupTests.js
	- .gitignore
	- package.json
	- package-lock.json
	- README.md
```

We will mostly touch the `/src` directory. 
- Under `Assets`, naa dira ang *images, geojson data, and other raw files*. Ideally, naka group na into folders ang related assets, like icons, maps, etc. 
- `ApiCalls` deals with, as the name suggests, **API calls**, pero later na na butangan after maka create nag API ang backend.
- Sa `components`, naa dira ang ang actual components nga makita sa web app (usually in `.js` file), so things like *buttons, input fields, navbar, traffic lines, route lines, etc.* Each component kay dapat **under their own folder** para organized. Each component sad kay naay `.js` and `.css` files. Ang `.js` is for the creating and initializing the component and its properties and `.css` is for styling.
- Kanang `App.js` and `App.css` is the **actual web app**, so whatever nga ibutang sa `.js` file, mashow na sa actual web app, and ang wala dira kay di mashow.
- The rest kay files we won’t be touching na.

# Naming conventions
React is pretty strict sa naming conventions sa react components so lets use **camelCase** lang all throughout. Make sure nga the **variable name is descriptive** para di ta maglibog. *Bahalag taas na na, be descriptive gihapon*. 

Not really an urgent concern pero ig integrate sa API, mag agad ta sa giset sa backend, usually its in the form of `foo-bar`, pero later nana.  

# Basics of React JS
Before we go to React, let’s first discuss the general behavior of a web app. Unlike our usual code sa Python, C, C++, and Java nga once ra mu run, **a web app renders multiple times**, usually if naay machange nga data. So if mubutang mog `console.log("here")`, kadaghan na maprint. This also means nga if mag `var test = 0; test += 1;` mo, *mag balik-balik ra na ang value sa `test` between 0 and 1*.  So to ensure persistence sa changes sa data, we use `useState` nga hook, which will be discussed later.

## Higher Order Functions
**Higher order functions** will be used often when developing our app. Its the same sa higher order functions sa Haskell nga gitreat ang function as a variable. This means nga a function can basically be passed as an argument to another function. You can search more about it pero iyang general syntax kay
```Javascript
const foo = (variable) => {
	...code body
}
```
Take note of the `=>` symbol kay that means nga higher order na siya.

## Code structure
If makabantay mo sa `App.js`, **the code is divided into 2**, ang Javascript part (before the `return` statement) and ang HTML part inside the `return`. Familiarize lang sa different HTML components. Basin maglibog mo, tanang naay angle brackets inside the `return` like `<example/>` or `<example> ... </example>` kay HTML code na. 

You can put Javascript code sad inside the `return` pero dapat enclosed siya sa curly braces, *tho be careful kay a Javascript object is enclosed sad in curly braces*. An easy way to tell if code or object kay ang comma, if naay comma, usually Javascript object na, otherwise its a code.

So if makakita mog `foo={true}` or `bar={9}`, Javascript code na ang `true` and `9`.

### Events
If makakita mo sa Javascript code part nga naay `e` nga argument sa functions, like `const _onChange = e => {...}`, that `e` is basically an `event`, which is a JS object. You can do `console.log(e)` to see unsay contents ana, but almost always, an `event` is returned when naay changes or actions nga gibuhat sa components. For example, if mu click kag button or muwrite sa input fields, an `event` is triggered. 

**Events are usually returned when doing an action sa components**, so if you see `onChange` or `onClick` sa components, it means nga when naay interaction sa components, mareturn ang event. And usually, kanang mga `onChange` and others kay mu accept og variable so u need to do [[#Higher Order Functions]] for that. 

### useState
To address the issue of the persistence sa changes to variables and some other sht, we can use `useState`. *Medj complicated baya ni hahahaha*. Iyang syntax kay
```Javascript
const [data, setData] = useState()
```
`data` and `setData` can be any noun pero as a convention, **dapat naay `set` at the beginning sa second part**. Inside the parenthesis sa `useState` can be anything, pwede string, int, or object, so u can have `const [num, setNum] = useState(69)`.
Pero evident sa code, naay 2 parts:
1. First part kay ang `data`, or the noun, which **behaves just like a variable that stores anything within the `()` pero u cant assign anything to it**. Using the example above, `num` has the value `69`, pero u cant assign `num=420` kay ang pagchange sa value is handled by the second part
2. The second part **is a function and handles the mutation of the data**. For example, we can have `setNum(420)` (everything inside the parenthesis will be stored), so `num==420` should be true na. *BUT, it changes all the data*. For example, the object below contains the properties `name` and `age` and we want to change the value of `name` after initializing it.
```Javascript
const [data, setData] = useState({
	name: "initial name",
	age: 69,
})

let tempData = {
	name: "new name"
}

// wrong way 
setData(tempData)        // mawagtang ang age kay wala gi set sa tempData

// correct way to change a single property
setData((prev) => ({...prev, "name": "new name"}))
```
To explain, 
- a higher order function was used, kay naay `=>`, since `setData` only accepts variables
- `prev` can be named anything, pero that basically says na *take all the previous properties and values from data, but change the property “name” to “new name”*. Kinda lisod siya iexplain pero ull get the hang of it once mag sige na mog write og inana, for now follow lang the format.

**BUT changes to the variable will reflect on the next render**. In the code above, `data` will still contain `initial name` after `setData`. Once the page renders again (happens right after running the code), `new name` will be stored na. So be careful when chaining multiple `setData` or other similar `set` functions. 

# Final words
There are still a lot of React concepts that you’ll encounter, pero hopefully you’ll grasp them easily after reading this. Unlike the backend nga logic and algo, frontend deals with libraries, behaviors sa components, styling, and layout. If na overwhelm or galisod mo, ask lang sa server kay tabangan ra ta mo. Good luck!!

---
 

# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

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

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

  

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  

### Analyzing the Bundle Size

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  

### Making a Progressive Web App

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  

### Advanced Configuration

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  

### Deployment

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  

### `npm run build` fails to minify

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



