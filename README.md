
## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Jest basics & getting started
 - basic way of writing test case 
   - [Getting Started](https://jestjs.io/docs/en/getting-started.html)
   - [Using Matchers](https://jestjs.io/docs/en/using-matchers)
 - API reference [more](https://jestjs.io/docs/en/api)   
   - methods `test()`, `describe()`, `id()`, `beforeEach()`, `afterEach()` 
 - assertions `expect()`
 - documentation page & where to find more methods 

### Testing Library React [testing-library/react](https://testing-library.com/docs/react-testing-library/example-intro)
- Rendering components
  - debugging `debug()`, `rerender(<Login prop={newVal} />)` DOM nodes  
  - form testing
  - mocking HTTP requests
  
---
### Example Components for testing
 - DisplayNumber component
 - Counter component
 - Easy button
 - Login Form & handling submission
   - `userEvent.type(element, value)`
   - `userEvent.click(element)`
   - generate random data using `faker`
 - Mocking HTTP requests
   - `.toMatchInlineSnapshot()` for matching inline errors
   - test successful case
   - test failure case

> The more your tests resemble the way your software is used, the more confidence they can give you."

> Your tests should communicate that value of username/password doesn't matter here

> `getBy*()` is going to throw an error if it doesn't find the element
> `queryBy*()` is going to return null, use this if you want to assert if something is not inside


> `jest.mock('../api')` - replaces all the exported functions with mocked functions
> mockFn.mockResolvedValueOnce(value)

- once our test completes, our component state updates after that & that is what React is complaining about
- `wait(() => expect()) --> wait for this assertion to pass , continue to call this callback until its passed.


### useful commands
- to run test cases from specific file `npm run test -- "examples/01.js"` 
- run test cases matching test pattern `npm run test -- -t "testPattern"`

See [Jest cli optiions](https://jestjs.io/docs/en/cli) for more information




