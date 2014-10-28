---
title: SOME STANDARD JAVASCRIPT FUNCTIONS
files: []
editable: false
layout: 2-panels-tree

---
#'Forking' this module
If you check the url address bar of your browser, if it starts with `https://codio.com/anon/....` then this means it is an anonymous project and any changes you make will be lost when you close down the browser tab. This will be the case if you access the module from the Codio Courses screen.

To avoid losing changes, you can 'fork' the module into your own Codio account where it will appear in your projects list. To do this, select the **'Project->Fork'** menu item and choose a suitable name for the project.

#A few words about the Codio Guide
Before we start with this module here are a few pointers about using this Codio Guide.

If you've already read this in another Guide then skip to the next section.

![](.guides/img/guides-helper.jpg)

#The File Tree
The left most panel is the File Tree **(1)**. This is where your project's files are stored. You can open up files you see listed there by clicking on them.

#About the Codio Guide
The Codio Guide **(2)** is the content you are reading right now. It's worth knowing the following

- if you ever close the Guide tab by mistake, simply open in from the View menu **(3)**.
- you can expand and collapse the Guide's Table of Contents **(4)** with the Hamburger icon **(5)**
- you move from one section of the Guide to the next using either the Table of Contents or the Navigation Buttons (6)

#The Rocket Menu
The Rocket menu **(7)** is a dropdown menu that lets you load code into your file tree when you click it as different sections might want to show different bits of code.

You are usually encouraged to mess around with the live code. It is perfectly likely that you can wreck the code so pressing the Rocket menu button will restore the code again to its original state.

#Previewing
The Preview button **(8)** lets you run your web application. When you press it, it will open up a preview window so you can play with your app.

#Code Tabs
When you open some code from the file tree or the Codio Guide opens a file for you automatically, they will appear within a tab **(9)** in one of the panels. You can have several of these open at one time so you may need to click on the respective tab to get to see the file you want.


---
title: Introduction
files: []
editable: false
layout: ""

---
Javascript comes with a large number of standard *libraries* that provide a colossal amount of useful functionality without you having to write your own code.

As we get deeper into what *functions* and *objects* are, we will make proper sense of the more advanced ones. In the meantime, we'll look at the ones that will be really helpful to us at this stage.

Here a a few of the really useful standard libraries

- 'Math' -  mathematical tools for working with constants (PI, Log10, e etc.), trigonometry, random numbers, rounding, ranges and more
- 'String' - do almost anything with string variables, such as transforming to uppercase or lowercase, extracting parts of a string, trimming empty spaces and much more
- 'Date' - manipulate dates, convert date variables into string (and back), getting the current date, getting component parts of a date and much more
- 'Array' - a whole set of functions for operating on Javascript arrays
- There are more, but these are the most useful ones

We'll take a look at each of these, with source code available to play with.

---
title: Math Functions
files:
  - path: example.js
    action: open
    ref: ""
editable: true
layout: ""

---
>The code for 'Math' module is already loaded in your project. If you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Math'. 


The Javascript Math library has all sorts of Goodies to play with. 

The best thing is to refer to the [Mozilla Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

Don't worry about the techno-blurb bits. As you advance as a developer, this will start to make more sense.

Now go and play with the code and hack it about a bit.

---
title: String Functions
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 02-string, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Strings'.

The Javascript String library has pretty well everything you need to manipulate, slice and dice strings. 

To see the full range of things on offer, refer to the [Mozilla Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

Don't worry about the techno-blurb bits. As you advance as a developer, this will start to make more sense.

Now go and play with the code and hack it about a bit.

---
title: Date Functions
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 03-date, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Dates'. 

Dates have their own variable type in Javascript, which we don't really need to go into at this point.

The examples we show in the code are fairly basic and cover simple use cases. Feel free to  dig deeper into dates if the urge takes you, though.

To see the full range of things on offer, refer to the [Mozilla Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

---
title: Array Functions
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 04-array, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Arrays'. 

We have already had a module on arrays and seen a couple of array functions, like `pop()`, `push()` and `shift()`.

There are plenty more very useful functions on offer, so take a look at the code examples.

Be sure to look at the available methods. You don't need to use them but read the descriptions so you know what's available in the future.

To see the full range of things on offer, refer to the [Mozilla Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
---
title: The Wonderful World of APIs
files:
  - path: "#all"
    action: close
    ref: ""
  - path: " #cmd: bash .guides/restore.sh 05-other, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Other'. 

"API" is an excellent geeky acronym and one that you will see a lot. It stands for *A*pplication *P*rogrammer *I*nterface.

An API is a way for you, someone writing your own code, to access someone else's code without being being able to see all the gory details of their code.


Let's try a food analogy.

You are hungry and you want to eat. You decide you fancy Pizza. You now have 2 choices 

1. Cook it yourself (from scratch, not frozen)
1. Order one in

To cook it yourself from scratch (making your own dough, your own sauce, getting the inredients together) is a non-trivial process requiring a lot of time and skill. And, will the pizza you make taste a whole lot better than a fresh, restaurant delivered pizza?

The same thing holds true for coding. Let's say you want to build some Map functionality into your app. You could write a mapping application from scratch (it would only take many years), or you could use Google Maps.

So, Google have done all the hard work and assembled a beautiful mapping system. What they provide to us is an API. It allows external programmers to access their program using an interface, whose specification is published. 

There are thousands of these APIs at your disposal and all you need is to read the documention to see how to use them.

There are 3 general types of API that are worth discussing at this point

1. APIs provided by Javascript (we've looked at a couple of these in this module)
1. APIs provided to you by the Browser (screen info, geolocation coordinates, battery levels and a **lot** more; if you need it, the chances are the browser can provide it)
1. APIs provided to you on the Web (Google Maps is a great example)
1. APIs provided by Libraries that you can download (Open Source is a great source of libraries) and install within your project

---
title: Sample Code Explained
files:
  - path: example.js
    action: open
    ref: " // Browser information"
    lineCount: 19
editable: true
layout: ""

---
We are only going to show a few very simple API calls here. In the next module, though, we are going to have some fun with Google Maps and look at how we can use a couple of different APIs to do some much more enjoyable stuff.

##Full Set of Browser APIs
If you would like to see just how many APIs are offered by the browser, [take a look here](https://developer.mozilla.org/en-US/docs/Web/API).

It's a pretty scary list! However, you will only need one or two of these for simple applications. Nevertheless, it's good to know that there is an API available for almost anything you can imagine.

##Sample Code
Looking at the sample code, here is what we are doing.

```
  // Browser information
  var brWidth = window.innerWidth;
  var brHeight = window.innerHeight;
  display("Browser internal dimensions : Width=" + brWidth + " Height=" + brHeight );
  
  // Get the current URL
  display( "Current URL: " + window.location);
  display("");
  display("Title: " + document.title);
  display("");
  
  var htmlElement = document.getElementById("myDiv");
  display("--------------------------");
  display("HTML of 'myDiv'..." + htmlElement.innerHTML);
  display("End of myDiv HTML");
  display("--------------------------");
  
  display("<br/>Or in raw format ...");
  display(htmlEncode(htmlElement.innerHTML));
```

##var brWidth = window.innerWidth;
Here we can see something we have not discussed before, namely the `.` character between two variable names.

`window` is the window API. It is actually a variable *of type object*. In the next module we will introduce you to objects, but for now, you can think it as being a variable that contains other variables.

In our example, we have object variables `innerHeight` and `innerWidth` that are made available to us.

##window.location
This is exactly the same approach. The browser tells us url of the currently displayed page.

##var htmlElement = document.getElementById("myDiv")
This is somewhat different. We are using the `document` object, which gives us information about the HTML structure of the current page.

`getElementById("myDiv")` is a `document` function that gives us a special object variable back, containing everything we might want to know about `myDiv`, a <div> we placed in our `index.html` file.

Then, on this line 

```
display("HTML of 'myDiv'..." + htmlElement.innerHTML);
```

we request the `innerHTML` of that element, which we display back to the web page. This renders as output rather than raw HTML as we would see it in the `index.html` file. If we wanted to see the raw HTML, then we have to convert it in a special way. 

We've included a special conversion function at the top of the `example.js` page, but you should not look at this and certainly not worry about it. 

This is the line that displays it ...

```
display(htmlEncode(htmlElement.innerHTML));
```

