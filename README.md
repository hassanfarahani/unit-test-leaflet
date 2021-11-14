# leafletmap

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Issue
When you run the project (localhost:8080), a map along with a path will be created (WellMap component); in fact, if you find the div element with this classes (leaflet-pane leaflet-overlay-pane), there is path html inside a svg html tag element & this path has the d attribute (well path trajectory: d="M682 109L693 108L696 235"). This d attribute is generated using latLngs data property in the WellMap vue component.

But if you set up a test for WellMap component & run the test (npm run test:unit WellMap), the d attribute of generated path element is like this: d="M0 0"
in fact, no path is generated.

Worth to mention, if you comment out jestSetup.js file, jest will throw the following error:
TypeError: Cannot read property '_layerAdd' of null

I do not know exactly what the code inside jestSetup.js file is doing (I found it in stackoverflow), but when I add it, the error will get fixed.
