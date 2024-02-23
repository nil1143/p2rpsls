
# Rock Paper Scissors Lizard Spock Game

### [Game Live](https://nil1143.github.io/p2rpsls/)

## Contents


* [Description](#description)
* [Project goals and UX](#project-goals-and-ux)
    * [Site owners Goals](#site-owners-goals)
    * [Requirements](#requirements)
    * [Expectations](#expectations)
    * [User Stories](#user-stories)
* [Design](#design)
    * [Colour Scheme](#colour-scheme)
    * [Fonts](#fonts)
    * [Wireframes](#wireframes)
* [Features](#features)
 
- Description
- Project goals and UX
- Design
- Wireframes
- Features
- Testing
- Deployment
- Technology used

# **Description**

### Rock Paper Scissors Lizard Spock Game is an interactive game that tests your luck. <br> Player can choose one of the five options and the computer randomly select its choice. <br> The game determines the winner based on the rules: <br>
-Rock win vs Scissors & Lizard <br> -Paper win vs Rock & Spock <br> -Scissors win vs Paper & Lizard <br> -Lizard win vs Spock & Paper <br> -Spock win vs Rock and Scissors

### The primary goal is to entertain users with an interactive game that tests their luck and decision-making skills.

# **Project goals and UX**

## Site owners Goals

- Attract users with the logic game free and easy to play.
- An instruction with game rules.
- Restart the game anytime.


## Requirements

- Easy to navigate on various screen sizes and search engines.
- Clear and precise instruction about the game.
- Simple method to restart the game.
- Visually appealing design maintained.

 ## Expectations

- I expect screen size not to affect the quality any aspect of the website.
- I expect all game rules to be correct and accurate.
- I expect game is simple to play.
- I expect all choice/navigation buttons works correctly.

## User Stories

- As a user, I want to navigate the website using multiple devices.
- As a user, I want to find general information and rules about the game.
- As a user, I want to play the logical game against computer.
- As a user, I want to restart current game and start from beggining.



# **Design**

##  Colour Scheme 
Colour pallete was made on [Coolors](https://coolors.co/)

![Site Colours](assets/images/readme-images/pallete.jpg)

## Fonts
Fonts used on the website from [Google Fonts](https://fonts.google.com/)

Lato

![font1](assets/images/readme-images/font1.jpg)

Roboto

![font2](assets/images/readme-images/font2.jpg)

## Wireframes

### Desktop 

#### Main page

<details><summary>Click to see design</summary>

![Main Page](assets/images/readme-images/wireframe%20desktop1.jpg)
</details><br>

#### Instruction modal

<details><summary>Click to see design</summary>

![Instruction modal](assets/images/readme-images/wireframe%20desktop2.jpg)
</details><br>

#### Reset modal

<details><summary>Click to see design</summary>

![Reset modal](assets/images/readme-images/wireframe%20desktop3.jpg)
</details><br>


### Mobile

<details><summary>Click to see design</summary>

![Reset modal](assets/images/readme-images/wireframe%20mobile-2.jpg)
</details><br>

# **Features**

### Desktop
<br>
Game Window

![desktop1](assets/images/readme-images/desktop1.jpg)

Instruction and Reset buttons trigger the modals

![feature1](assets/images/readme-images/feature1.jpg)

Game window with choice buttons, score and result message

![feature4](assets/images/readme-images/feature4.jpg)

Instruction modal appearing when entering the site and disappearing after 3 secs with setTimeout.
<br>

![desktop1](assets/images/readme-images/desktop2.jpg)

Instruction modal content

![desktop1](assets/images/readme-images/feature2.jpg)

Reset modal content

![desktop1](assets/images/readme-images/feature3.jpg)

### Mobile
<br>
Game window

![mobile1](assets/images/readme-images/mobile1.jpg)

Instruction

![mobile2](assets/images/readme-images/mobile2.jpg)

Reset

![mobile3](assets/images/readme-images/mobile3.jpg)

# **Testing**
### Validator Testing
#### HTML
* Index: No errors were returned when passing through the official W3C validator
 - https://validator.w3.org/nu/?doc=https%3A%2F%2Fnil1143.github.io%2Fp2rpsls%2F

#### CSS
* No errors were found when passing through the official Jigsaw validator
 - https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnil1143.github.io%2Fp2rpsls%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

#### JS
* No errors were found when passing through the official Jshint validator
    * There are 16 functions in this file.
    * Function with the largest signature take 2 arguments, while the median is 0.
    * Largest function has 11 statements in it, while the median is 2.
    * The most complex function has a cyclomatic complexity value of 17 while the median is 1.