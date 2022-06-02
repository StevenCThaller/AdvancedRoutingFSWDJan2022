# Getting it Running

From the terminal, simply run:

```cmd
npm install
```

followed by:

```cmd
npm start
```

# Features Showcased

## Getting an individual card using route parameters
On the navigation bar, open the Cards dropdown and select All Cards. All of the cards are now links. Clicking on an individual link will take you to that card's page.

Additionally, on the individual card page is a search box, which you can use to search for a pokemon card by it's ID. Note that the ID is not intuitive; this feature was simply used to demonstrate how to use a route parameter.

## Nested Routes
Check out App.js and notice the new nested routing structure; no more need for a whole new component just to act as a collector of routes.

## Router Outlet
We demonstrated how to have a specific route result in a component to render within a component that is rendered due to the route already. This feature is visible in the CardSets component. To see it in action, select "Sets Tool" from the Cards dropdown on the navigation bar, and give it a whirl!