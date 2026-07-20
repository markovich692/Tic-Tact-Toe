Tic Tac Toe

A browser-based Tic Tac Toe game built as part of 'The Odin Project'. This project focuses on organizing JavaScript code with reusable patterns while creating a simple, interactive game experience.

## Overview

Players take turns placing `X` and `O` marks on a 3×3 board. The game detects wins and draws, displays the current result, and can be restarted for another round.

## Concepts Practiced

### Constructor Functions

Constructor functions provide a blueprint for creating objects with shared properties. In this project, they can be used to create player objects, giving each player a name and a game marker such as `X` or `O`.

### Prototypes

Methods placed on a constructor's prototype are shared by every object created from that constructor. This avoids duplicating the same methods for each player and reinforces how JavaScript's prototype chain supports object behavior.

### Inheritance

Inheritance allows one object type to build on another. Although Tic Tac Toe has a small domain, this concept can be explored by creating specialized player types; such as a human player and a computer player that share common player behavior while adding their own logic.

### Factory Functions

Factory functions create and return objects without using `new`. They are especially useful for encapsulating game-related state and behavior, such as the game board or game controller, while exposing only the methods needed by the rest of the application.

### IIFE (Immediately Invoked Function Expression)

An IIFE runs as soon as it is defined. It is useful for keeping variables private and preventing unnecessary global variables. In this project, an IIFE can manage the application flow or the display controller while revealing a small public interface.

## Goals

- Build an interactive Tic Tac Toe game with HTML, CSS, and JavaScript.
- Keep game logic separate from DOM manipulation.
- Apply constructor functions, prototypes, inheritance, factory functions, and IIFEs intentionally.
- Practice writing modular, readable, and maintainable JavaScript.

## Possible Features

- Player name inputs and marker selection
- Turn and game-status messages
- Win and draw detection
- Restart or new-game controls
- Optional computer opponent

## Credits

Created as part of 'The Odin Project'.