# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- [My solution](https://www.frontendmentor.io/solutions/interactive-rating-component-AzwLS7E4xR)
- [Live site](https://jallanoli.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

First challenge applying my DOM knowledge and praticing those manipulations. Learned the diferent usability of Nodes and HTML collections. And how to make things appear and disappear.

```js
const ratings = document.querySelectorAll('li button')

ratings.forEach(e => {
    e.addEventListener('click', () => {
            const rate = document.querySelector('span')
            rate.innerHTML = e.innerHTML
    })
})
```

### Continued development

Looking for a way of doing the main background gradient.

### Useful resources

- [CSS gradient generator](https://cssgradient.io) - This one almost helped me with the gradient, but still, very usefull.

## Author

- Frontend Mentor - [@jAllanOli](https://www.frontendmentor.io/profile/jAllanOli)
- gitHub - [@jAllanOli](https://github.com/jAllanOli)

