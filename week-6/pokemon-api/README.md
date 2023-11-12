# Assessment 4 : React.js

## Summary

In this project, we will create a PokeDex app using React.

The scaffolding for the app has been bootsrapped already for you using `vite`.

The backend api you will be making requests to is [PokeAPI](https://pokeapi.co/).

The autograded tests for the app were written using `cypress`.

## Important Grading Information

- You need to get a 70% or better to pass which means `10/14 tests` passing
- Every retake after the deadline incurs a 1 point penalty, so let an instructor know explicitly when you want to be regraded

## Code of Conduct

- This test is fully open notes and open Google, but is not to be completed with the help of other students/individuals

## Usage

Once cloned, install dependencies with:

```sh
npm install
```

You can run your app in watch mode with:

```sh
npm run dev
```

You can also see an example of the finished app by running:

```sh
npm run preview
```

> NOTE: the files needed for this command are located in the `dist` folder. These are post-build minified files so they won't be very useful for you to read but do not delete this folder or else the preview will stop working.

## Setup / Scaffolding

All of the necessary dependencies have already been included in `package.json`.

This project was already bootstrapped with `vite`. All the changes you need to make will occur in the `src` folder.

We have provided some basic scaffolding already, so `src/main.jsx` is already linked to the router object exported from `src/router.jsx`. In `src/router.jsx` we have set up the basic config for a React Router `BrowserRouter` that renders `<App />` on `/` and has a single child for this route matching the index case that renders `<HomePage />`. Both of these components (as well as `<Navbar />`) have been minimally implemented in the `src/components` folder.

Some css classes have been pre-provided for you in `src/index.css`, which is already included in your project. Feel free to modify this file but note that the tests will identify certain elements by their class names, so be mindful of that if you plan to make changes.

## Testing Flow

All of the automated tests for this assessment are located within the `cypress/e2e` folder and represent the 14 individual test we want you to pass.

In order to run these tests, you must first have the app being served on using `npm run dev`.

Then, in a seperate terminal window, simultaneously run `npm run cy:open` which will run Cypress's visual test runner so you can run the tests against your app.

> NOTE: `cypress.config.js` sets up some Cypress config options, including the asumption that `vite` is serving up your app at `http://localhost:5173`. This is the default for `vite`, but if for whatever reason you have `vite` serving to a different port, you can modify the section in `cypress.config.js` named `baseUrl`.

the first test, `0-example-test.cy.jsx` should pass successfully without having to add anything new to the `src` folder.

## Components

We want you to make a working pokedex that includes the following components:

### `<Navbar>`

- Navbar should be visible on every page except a 404 page

- Navbar will have a heading 'POKEDEX'

- Navbar links to the Home Page (`/`) and the Team Page (`/team`)

- Navbar should have an input section with an associated button that allows for searching for specific pokemon by name or id

### `<HomePage />`

- The Home Page should be rendered (along with the Navbar) at `/`

- It should have the title 'Home'

- It should list 30 pokemon in an ordered list as links with the name of the pokemon as the visible text and upon clicking should link to the pokemon's specific page (`/pokemon/<pokemon_name>`)

To accomplish this you will need to utilize the PokeAPI

### `<PokemonPage />`

The pokemon page should render at the url `/pokemon/<pokemon_name>` and show a Pokemon Card for the single pokemon in question.

### `<PokemonCard />`

You will likely want a seperate component for this as both the Pokemon Page and the Team Page will need to render such components.

A Pokemon Card consists of a rectangular container with the pokemon's name, their image, the first four moves they learn, and a button to Catch/Release that pokemon

### `<TeamPage />`

The Team Page should render at the url `/team` and show a Pokemon Card for each pokemon currently caught

### `<Error404Page />`

You will want a specific page that all non-matching urls redirect to

### `<MissingPokemonPage />`

You will want a specific page that renders only when the pokemon searchbar is given a pokemon name/id that PokeAPI has no match for.

## Functionality

Functionality we expect your app to have include:

- A Pokemon Card's background color will match it's type (as specified in `index.css`)

- A Pokemon Card will read 'Catch' if not yet caught and 'Release' if already on the team

- A pokemon can not be caught twice

- No more than six pokemon can be caught simultaneously

- On bad urls, redirect to a 404 page (no Navbar)

- On bad pokemon search input, redirect to a unique MissingPokemonPage (includes Navbar)

## Tests

The tests are designed to confirm the structure and functionality of your app, and should be used as a guide as to what to build next.

> NOTE: the tests are testing the output HTML React generates, not the React components themselves. This means you can implement the app in React as desired, you just need to ensure the output and functionality is correct, as per the test assertions.

There are 14 tests total, which can be directly read in the `cypress/e2e` folder. **_Do not modify the tests or it will count as cheating_**. Each test represents a specific ask for what your app can do, and you can read the tests to understand what they are testing for. We will summarize the tests here as well.

### Test 0 - Example Test

This should pass without any new code additions. Test 0 will:

- navigate to `/`
- ensure there exists a `<nav>` element on the page
- ensure that `<nav>` element contains an immediate child `<h1>` with the contents `POKEDEX`

### Test 1 - Navbar Structure

Test 1 ensures your Navbar is valid, meaning it will:

- navigate to `/`
- ensure there exists a `<nav>` element on the page
- ensure that `<nav>` element contains an immediate child `<h1>` with the contents `POKEDEX`
- ensure there is a first link `Home` linking to `/`
- ensure there is a second link `My Team #0` linking to `/team`
- ensure there is an input with placeholder value 'search'
- ensure there is a button with text "Search"

This means the HTML output at `/` would look something like:

```html
<nav>
  <h1>POKEDEX</h1>
  <a href="/">Home</a>
  <a href="/team">My Team #0</a>
  <input type="text" placeholder="search" />
  <button>Search</button>
</nav>
```

> NOTE: This is just the HTML output, the React you write might look different (are you writing raw `<a>` tags or generating them using a specific component from react-router?)

I drew out the desired output explicitly here but for the rest of the tests we expect you to read the tests directly for the minute details of what is expected.

## Test 2 - Navbar Links

Test 2 will:

- navigate to `/`
- click the team link and expect it to render a page at `/team`
- then click the home link, and expect to return to `/`

## Test 3 - Home Page Structure

Test 3 will ensure the Home Page rendered at `/` has the correct header text and lists exactly 30 pokemon as links

## Test 4 - Home Page Links

Test 4 will ensure that the first link in the ordered list of pokemon works as expected and redirects to the unique pokemon's page

## Test 5 - Pokemon Page Structure

Test 5 ensures the Pokemon Page renders a Pokemon Card (expects the class `.pokemon-card`) with expected structure

## Test 6 - Pokemon Card Background

Test 6 will ensure a Pokemon Card's background matches the pokemon's type. The type to color connection has been pre-defined for you in `index.css` as classes with names of the form `bg-color-<type>`

## Test 7 - Empty Team Page

Test 8 tests that you can visit the Team Page without having caught any pokemon renders a unique message

## Test 8 - Can Catch Pokemon

Test 8 tests that you can add multiple pokemon using the Catch button and view them on the Team Page

## Test 9 - Can't Catch Dupes

Test 9 ensures you cannot catch the same Pokemon twice, instead that Pokemon is released the second attempt to 'catch' it

## Test 10 - Can't Catch More Than Six

Test 10 ensure no more than 10 pokemon can be caught

## Test 11 - Can Add Then Release

Test 11 will catch the first six pokemon onto the team, then release each one, ensuring an empty team page at the end

## Test 12 - Pokemon Search

Test 12 ensures you can search for a pokemon by name or id using the expected input/button in the Navbar. This tests not only a pokemon in the original list of 30 but also a pokemon by id that is not in that list.

## Test 13 - Error Page

Test 13 will visit a non-existent page and expect an Error404Page to render. This page should not include the Navbar.

## Test 14 - Bad Pokemon Input

Test 14 will search for a non-existent Pokemon and expect a unique page to be rendered in response, with awareness of the bad search input. This page should still include the Navbar.

## Suggested Order to Implement

This is just a suggestion but one order to tackle the tasks are as follows:

1. Implement Navbar fully (test 1)

2. Implement the Home Page so that it renders along with the Navbar on `/` and fetches the Pokemon list from PokeAPI (test 3)

3. Implement stubs for the Pokemon Page and the Team Page, and set up the routes to these pages correctly. Make sure the Team Page renders the right content when no pokemon have been caught yet (test 2, test 4, test 7)

4. Implement the 404 page on bad routes (test 13)

5. Implement the Pokemon Page and Pokemon Card sub-component, including the correct background color (test 5, test 6)

6. Ensure you can catch a single pokemon and integrate it with the Team Page (test 8)

7. Ensure all aspects of catching/releasing pokemon works as expected (test 9, test 10, test 11)

8. Implement the search bar functionality and redirecting to a unique Pokemon Error Page if given bad input (test 12, 14)
