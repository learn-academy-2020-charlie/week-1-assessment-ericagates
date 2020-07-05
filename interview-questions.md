# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: A function is a defined block of code that can be called over and over to repeat an action or a desired outcome. It should be used so that code does not have to be duplicated or copy/pasted which helps save time and reduce errors. 

  Researched answer: The most basic benefit of having a concept of function is that it allows us to use the same function more than once in an expression with different parameter values. (https://math.stackexchange.com/questions/108133/what-are-functions-used-for_ )
  Functions are used because of following reasons –
a) To improve the readability of code.
b) Improves the reusability of the code, same function can be used in any program rather than writing the same code from scratch.
c) Debugging of the code would be easier if you use functions, as errors are easy to be traced.
d) Reduces the size of the code, duplicate set of statements are replaced by function calls. 
(https://beginnersbook.com/2014/01/c-functions-examples/)



2. What is the difference between map and filter?

  Your answer: Map iterates through an array, will do what you want to it, and return an array of values of the same size. But a filter will iterate through an array an, filter it how you tell it to, and return values that only meet your conditions.

  Researched answer: Map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically). Filter will only return elements where the function you specify returns a value of true for each element passed to the function. (https://forum.freecodecamp.org/t/the-difference-between-map-and-filter/277659)



3. What is the difference between map/filter and a for loop?

  Your answer: A map/filter is a higher order function that is built in to Javascript. Map/filter essentially does the same thing as a for-loop but it's more efficient and defined. A for-loop is defined by the user for both input and output.

  Researched answer: The big difference is that the conditions for iteration are handled for us. We’re guaranteed to get every element of the array in the right order. We don’t have to manage our own index variable or condition for that variable. Map/filter also provides the benefit of immutability, creating a new array and leaves our original array alone (https://medium.com/@ExplosionPills/map-vs-for-loop-2b4ce659fb03)



4. What is the difference between console.log() and return?

  Your answer: Console.log() just displays to the screen what you tell it to. Return is used at the end of function to define what the output or result of the function is.

  Researched answer: console. log() - logs out information in console. return just return from the function without processing further code or you can say, A function immediately stops at the point where return is called. (https://stackoverflow.com/questions/21020608/difference-between-console-log-and-return-in-javascript)



5. In regards to functions, what is an argument?

  Your answer: An argument, also known as a parameter is an input into a function. It is a value passed into the function that will be used, evaluated, or manipulated inside the function.

  Researched answer: 
  Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function. (https://www.w3schools.com/js/js_function_parameters.asp)





6. Give a brief description of proper pair programming techniques. What are the roles of each person? 

  Your answer: Proper pair programming techniques include communication between a pair of programmers to complete a portion of code. The pair includes a driver and a navigator. The driver does the actual coding and the navigator helps with the logic and reviewing the code for typos or errors.

  Researched answer: With pair programming, two software developers work on one computer, collaborating on the same design, algorithm, code, or test. The programmer at the keyboard is usually called the “driver”, the other, also actively involved in the programming task but focusing more on overall direction is the “navigator”; it is expected that the programmers swap roles every few minutes or so. Pair programming is an important technique for developing higher quality code, faster while also reducing risk and spreading knowledge in an organization. (https://www.agilealliance.org/glossary/pairing/)



7. What is something we did in class this week you found helpful?  

  Your answer: I enjoyed the ice breaker / team building activities to help to get to know other cohort mates. I also found the stretch activities the most helpful to challenging my knowledge. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Jest
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more! (https://jestjs.io/)

- Class inheritance
Inheritance in most class-based object-oriented languages is a mechanism in which one object acquires all the properties and behaviors of another object. (https://codeburst.io/javascript-inheritance-25fe61ab9f85)

- React
React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. (https://en.wikipedia.org/wiki/React_(web_framework))

- Yarn
Yarn is a package manager that doubles down as project manager.(https://yarnpkg.com/)

- React State
In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state.

Simply put, if you’d like your app to do anything – if you want interactivity, adding and deleting things, logging in and out – that will involve state. (https://daveceddia.com/visual-guide-to-state-in-react/)

- this
this keyword refers to an object, that object which is executing the current bit of javascript code.
In other words, every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called. (https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)

The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

(https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)
