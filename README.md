# Bitcoin Address Helper

## Getting started

This assumes you already have npm and node installed.
Run the following commands to install packages and start the development server:

```bash
npm install
npm start
```

## Design Overview

- UX design is minimal and only enough to be human-readable due to time constraints.
- Page navigation is also lacking and will reset to default addresses when navigating to the homepage. (This was done for the purposes of a simple demo);
- In a more advanced app state-management and query management would likely be separated out into a separate system (like Apollo, react-query, or react-redux) rather than allowing each component to make its own queries without sharing or caching data across components.
- There is a bug in React.StrictMode for react v18 which causes components to mount twice. This will cause any queries which run onMount to execute twice. Not going to mitigate this issue this for this exercise.
