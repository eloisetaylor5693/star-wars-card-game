# Connectr frontend tech test

This repo is a basic react app put together with [Vite](https://vitejs.dev/).

At Connectr we use:

- React
- Styled components
- Apollo
- Formik
- Cypress

Please see this as a potential starting point to your tech test solution but if you feel more more comfortable with another approach / tech stack use that instead. NextJs, Angular, Vue etc.
You will be judged on the acceptance criteria not on the use of a particular framework / library.

To start the project:

`yarn start`

or

`npm run start`


## About us 👋

Connectr, our onboarding platform, uses a combination of content, quiz-style self assessment and personalisation to help our clients find top talent and our users find great employers. We have big plans for Connectr and are currently building a new version with a shiny new front end. This test is designed to assess the skills we use everyday.

## Goal 🏆

Build a React quiz/game application using the Star Wars API. The rules of the game are based on the popular card game Top Trumps where a player with the highest score for an attribute wins the round e.g. the Millenium Falcon has greater speed than the Death Star.

## Duration ⏰

Spend as much time as is required to demonstrate a solution approach and we expect that this should take 90 minutes or so. Start with the most important requirements first. If you’re short on time, there will be an opportunity at the next stage of the process to talk us through
how any missing requirements could be met.

## Requirements (priority order) ✅

1. Display one Starship at random from the API. This should include the categories

- Starship name and class
- Maximum speed
- Cost in credits
- Number of passengers
- The total number of films featuring the Starship.

2. Categories should be clickable. Clicking a category (excluding Starship name and class) will return the data for another Starship which should be displayed to the user. The selected category is highlighted.
3. Compare the value of the clicked category to the category on the new card.
4. Display a message - "You win!", "You lose!" or "Draw!" - depending on the outcome of the comparison.
5. Display a score for the user and the computer. The score should be incremented or decremented accordingly.
6. A new card is retrieved for the winner (see constraints). The game continues.

## Constraints 🔎

- Cards played by either the user or computer should not have been played before.
- On mobile devices the cards should stack. On tablet devices the cards should be displayed side by side. When the screen width grows very large a margin should appear either side so that the boxes don’t keep getting larger.
- If there is any information that you feel is missing from the story then please make sensible decisions (for example, size of ‘mobile’, design of ‘highlighted’). Use your judgement on look and feel but it should be easy to use.

https://www.figma.com/file/iscOPEeJBZsdG9qUGOaLxf/Connectr-Tech-Test?node-id=0%3A1

This design is a starting point, please add to it to account for accessibility and the requirements of the app where you see fit.

## Criteria for Assessment 📝

- Coding style, i.e. your approach not whether you use semicolons or not ;)
- Usability. Although the design doesn’t necessarily need to be polished we expect the
  app to be usable without the user needing to read this document
- Your overall solution approach
- Maintainability and extensibility
- Use of responsive design
- Web Accessibility. Anyone should be able to use it.
- Meeting the requirements

## API Details

REST: https://swapi.dev/
Alternative: https://www.swapi.tech/

GraphQL: https://connectr-swapi.herokuapp.com/

(the service can be queried via a web UI for reference at https://graphql.org/swapi-graphql/ but the address above should be used for your app)

Good luck and have fun!
