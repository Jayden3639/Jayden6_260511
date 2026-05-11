# Project Blueprint

## Overview

This project is an interactive web application for exploring the 64 hexagrams of the I Ching (Book of Changes). It displays each hexagram's symbol, name in Korean and English, and its meaning.

## Implemented Features

*   Initial project setup.

## Current Task: Add 'mean' to the 64 Gwae data and display it.

### Plan

1.  **Populate `main.js`:**
    *   Create an array of objects, where each object represents one of the 64 hexagrams.
    *   Each object will have the following properties: `sym` (symbol), `name` (Korean name), `eng` (English name), and `mean` (meaning).
    *   Add a function to dynamically generate and inject the HTML for each hexagram into the DOM.
2.  **Update `index.html`:**
    *   Add a main container element where the hexagrams will be rendered.
    *   Include a title for the page.
    *   Link to `style.css` and `main.js`.
3.  **Create `style.css`:**
    *   Add styles to display the hexagrams in a grid layout.
    *   Style the individual hexagram cards for better visual presentation.
