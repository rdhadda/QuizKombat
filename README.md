# QuizKombat

QuizKombat is designed to test your general knowledge through 10 different questions. Quizzes are a great way to learn, enhance your memory and add a sprinkle of fun and entertainment to your brain workout!

![QuizKombat. Screenshot of website](docs/am-i-responsive.png)

[View Quizkombat on GitHub Pages](https://rdhadda.github.io/QuizKombat/index.html)

![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/rdhadda/QuizKombat)
![GitHub language count](https://img.shields.io/github/languages/count/rdhadda/QuizKombat)
![GitHub top language](https://img.shields.io/github/languages/top/rdhadda/QuizKombat?color=red)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Frdhadda.github.io%2FQuizKombat%2Findex.html&color=yellow)

## CONTENTS

- [User Experience (UX)](#User-Experience-UX)

  - [User Stories](#User-Stories)

- [Design](#Design)

  - [Colour Scheme](#Colour-Scheme)
  - [Typography](#Typography)
  - [Imagery](#Imagery)
  - [Wireframes](#Wireframes)
  - [Features](#Features)
  - [Accessibility](#Accessibility)

- [Technologies Used](#Technologies-Used)

  - [Languages Used](#Languages-Used)
  - [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-and-Programs-Used)

- [Deployment and Local Development](#Deployment-and-Local-Development)

  - [Deployment](#Deployment)
  - [Local Development](#Local-Development)
    - [How to Fork](#How-to-Fork)
    - [How to Clone](#How-to-Clone)

- [Testing](#Testing)
  - [W3C Validator](#W3C-Validator)
  - [Solved Bugs](#Solved-Bugs)
  - [Known Bugs](#Known-Bugs)
  - [Testing User Stories](#Testing-User-Stories)
  - [Lighthouse Testing](#Lighthouse-Testing)
  - [Wave Testing](#Wave-Testing)
  - [Full Testing](#Full-Testing)
- [Credits](#Credits)
  - [Code Used](#Code-Used)
  - [Media](#Media)
  - [Acknowledgments](#Acknowledgments)

---

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

- I want to be able to play quiz online
- I want to be able to navigate through the website with ease.
- I want the website to be responsive across varying devices.

#### Returning Visitor Goals

- I want a variety of questions across different subjects.

#### Frequent Visitor Goals

- I want a variety of questions across different subjects.

## Design

### Colour Scheme

![QuizKombat](documentation/colour-scheme.png)

I opted for an arcade style theme with neon light effects. The colour pallete was created using the [coolors](https://coolors.co/) website.

### Typography

Google Fonts was used for the following fonts:

- Yellowtail is used for the main QuizKombat logo.
- Anta is used for the progress bar, questions, different answer choices and buttons.

![Typography](documentation/font-choice.png)

### Imagery

All images on the webpage were taken from unsplash.com. I have credited these in the [credits](#credits) section.

### Wireframes

Wireframes were created for mobile, tablet and desktop using Balsamiq.

[Desktop Wireframes](docs/desktop-wireframe.png)

[Tablet Wireframes](docs/tablet-wireframe.png)

[Mobile Wireframes](docs/mobile-wireframe.png)

### Features

The website consists of four pages. A home page, games page, score page and 404 page.

#### All four pages have the following elements in common:

- The title of the webpage QuizKombat. The title also acts as a link back to the homepage.

#### Home Page

- The website title QuizKombat appears on the homepage.
- An accordian with playing instructions that explains how to play the game.
- A button that says "start game," enabling the player to begin playing.

![Home Page](documentation/homepage.png)

#### Games Page

- The website title QuizKombat.
- A progress bar to indicate to the player which question they're on.
- A question and four answer choices. Upon selecting the correct answer the answer will be highlighted green and their score will be incremented, if the incorrect answer is selected the choice will be highlighted red and the correct answer will be highlighted green.

![Home Page](documentation/gamepage.png)

#### Scores Page

- Once the player has answered 10 questions they will be taken through to the scores page will display their final score.
- A button to replay the game.

![Score Page](documentation/scorepage.png)

#### 404 Error Page

- The website title QuizKombat
- An error message.
- A button directing the player back to the homepage.

![Score Page](documentation/404page.png)

#### Future Implementations

- Allowing the player to select the difficulty level of the questions asked.
- Allow the player to select the amount of questions to be asked.

### Accessibility

I've taken care when coding to make the website as player-friendly and as accessible as I can. I've accomplished this by:

- Using semantic HTML.
- Using descriptive alt attributes for images throughout the site.
- Selecting a sans-serif font which is suitable for users with dyslexia.
- Ensuring that the site has an adequate amount of colour contrast.
- Displaying symbols for correct/incorrect answers.

## Technologies Used

### Languages Used

- HTML, CSS and Javascript

### Frameworks, Libraries and Programs Used

[Balsamiq](https://balsamiq.com/) - Used to create wireframes.

[Visual Studio Code](https://code.visualstudio.com/) IDE was used to create the website.

[Git](https://git-scm.com/) - For version control.

[Github](https://github.com/) - To save and store the files for the website.

[Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

Google Dev Tools - To troubleshoot and test features, and solve issues with responsiveness and styling.

[Birme](https://www.birme.net/) To resize images and change to webp format.

[Am I Responsive](https://ui.dev/amiresponsive) To show the website across a range of devices.

[Fontawsome](https://fontawesome.com/start) For the cross and tick.

[Unsplash](https://unsplash.com/) For all images.

[Squoosh](https://squoosh.app/) Compress images.

[Sheilds](https://shields.io/) Add badges to README.

[Icons8](https://icons8.com/) Add favicon.

## Deployment and Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, QuizKombat
3. Click on the Settings link.
4. Click on the Pages link in the left-hand side navigation bar.
5. In the Source section, choose main from the drop-down select branch menu. Select Root from the drop-down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, rdhadda/QuizKombat
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the QuizKombat repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, rdhadda/QuizKombat
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Testing was continuous throughout the website build. I used Chrome developer tools to identify and address any issues as they arose.

## Automated Testing

### W3C Validator

W3C validator was used to validate the HTML on all pages of the website. It was also used to validate CSS in the style.css file.

- [Index Page HTML](docs/w3-index.png)
- [Game Page HTML](docs/w3-game.png)
- [Score Page HTML](docs/w3-end.png)
- [404 Page HTML](docs/w3-404.png)
- [style.css CSS](docs/w3-css.png)

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

- [script.js](documentation/jshint-script.js.png)
- [game.js](documentation/jshint-game.js.png)
- [end.js](documentation/jshint-end.js.png) - Passed.

### Solved Bugs

1. After the player has completed the quiz, I wanted the user's final score to be displayed on the end.html page. I tried to replace the inner text of the p tag with the id of final-score-number. However, the score wasn't being displayed. After a little research, I came across the localStorage property on w3 schools. This then allowed me to save the user's score in local storage to use on the end.html page. After doing this I realised that the score remained in local storage. In order to remove this from local storage and reset each time the game is restarted I used the localStorage.remove() property in the startGame function.

2. After the game has ended I wanted the player to be redirected to the end.html page to view their final score. However, I wasn't too sure how to accomplish this. Again with a little bit of research I found a solution on stackoverflow which is location.assign("/end.html"). This allowed me to direct the player to the end.html page to view their final score.

3. I wanted to highlight the correct answer to the player if they had chosen the incorrect one. At first I tried to add the correct class to the currentQuestion.answer, but this failed to work. After thinking this through I realised, I needed to use a loop to iterate through the currentQuestions array in order to apply the correct class to the correct answer.

### Known Bugs

1. Occasionally, once the player has finished the game, their score isn't displayed on the end.html page.

### Testing User Stories

#### First Time Visitors

-

#### Returning Visitors and Frequent Visitors

### Lighthouse Testing

I took the opportunity to utilize Lighthouse within Chrome Developer Tools. This allowed me to test for performance, accessibility, best practices and the SEO (search engine optimization) of the website.

#### Index.html Desktop Page

![Lighthouse index.html Desktop](docs/lighthouse-index-desktop.png)

#### Game.html Desktop Page

![Lighthouse packages.html Desktop](docs/lighthouse-packages-desktop.png)

#### Scores.html Desktop Page

![Lighthouse gallery.html Desktop](docs/lighthouse-gallery-desktop.png)

#### 404.html Desktop Page

![Lighthouse 404.html Desktop](docs/lighthouse-404-desktop.png)

### Mobile Testing

#### Index.html Page

![Lighthouse index.html Mobile](docs/lighthouse-index-mobile.png)

#### Packages.html Page

![Lighthouse packages.html Mobile](docs/lighthouse-packages-mobile.png)

#### Gallery.html Page

![Lighthouse gallery.html Mobile](docs/lighthouse-gallery-mobile.png)

#### 404.html Page

![Lighthouse 404.html Mobile](docs/lighthouse-404-mobile.png)

### Wave Testing

- [Index Page HTML](docs/wave-index.png)
- [Packages Page HTML](docs/wave-packages.png)
- [Gallery Page HTML](docs/wave-gallery.png)
- [404 Page HTML](docs/wave-404.png)

### Full Testing

Full testing was performed on the following devices:

- Laptop:

  - Macbook Pro 2015 13 inch screen

- Mobile Devices:
  - iPhone 12 pro.
  - iPhone 11 pro.
  - Phone X.

Each device tested the site using the following browsers:

- Google Chrome
- Safari

#### Home Page

#### Game Page

#### Score Page

#### 404 Page

## Credits

### Code Used

### Media

### Acknowledgments
