# REACT NATIVE - ASSIGNMENT 1 (MAD9135)

This repository contains the assignment project for the MAD9135 course. It is developed with React Native on Expo.

## Project Description

The app lists Alfredo sauce recipes based on what the user has in their kitchen. It has three screens:

- Home Screen: Displays available recipes.
- Ingredient Selection Screen: Allows users to select ingredients.
- Recipe Detail Screen: Shows detailed recipe information.

The app uses persistent data as the Single Source of Truth (SSOT). It leverages React Context to expose functions to various parts of the application, creating a reflective and cohesive user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ulut0002/MAD9135-Assignment-1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MAD9135-Assignment-1
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the app

   ```bash
   npm start
   ```

5. Scan the QR code on Expo.dev and run the app on your mobile device

## Usage

### Step 1

First, select your ingredients. The app will use the ingredient list to filter out suitable recipes.

![Screen 1 - Select Ingredients button](./assets/Step1-1.jpeg)

Then mark your ingredients

![Ingredients list](./assets/Step1-2.jpeg)

### Step 2

View the available recipes list. It takes 2 seconds to load the list and the list is shuffled.

![Recipe list](./assets/Step2-1.jpeg)

### Step 3

Press on each recipe and go to recipe details.

![Recipe details](./assets/Step2-2.jpeg)
