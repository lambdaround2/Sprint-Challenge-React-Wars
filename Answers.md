# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a Javascript library that allows developers to more easily produce UI elements and keep up with the demand of building large scale applications. React makes building functional and class components easier.

1. What does it mean to think in react?

To think in React means to think about reusability and scalability.

React helps to make code more DRY by allowing you to create dynamic components.

1. Describe state.

State is like the heart of your app. This is the piece where you reach to when you want to grab data from where ever you're pulling your data from. Data is like the blood of your app and will flow through state and into your components, based on how you construct your application to pass your data.

1. Describe props.

Props are like the arguments/parameters for your component. You're essentially assigning a variable name to the state or event handler you need to pass through to your next component. Props can be drilled as deep as our computer memory will allow. When using class components you will need to remember to use this.props when replacing this.state or this. With functional components you only need to use props in place of this.state or this.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.

In React you can use the useEffect hook to sync effects and manage state/prop changes while avoiding bugs/inconsistencies.
