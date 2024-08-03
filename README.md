# Frontier

## CLI Commands

- `npm install`: Installs dependencies

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass TypeScript files using ESLint

- `npm run test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## TO DO

- ~~fix main panel overflow to inner scroll~~
- ~~eject info text to .json~~ *resolved: @assets/definition.\*.js*
- **fill out all 4 pages**
- add i18n and translations
- responsive design for tablet and mobile
- implement search & locate
- implement tree shaking logic at bundle
- random theme color, and allow color select
- remove all React-type references (React.ReactNode & React.CSSProperties)
- ~~allows badge color definition (resolve typing constraits)~~
- ~~home page add guide to path pages~~
- ~~implement copy contact info to clipboard~~
- ~~add type constraints for definition modules~~
- should implement notification provider
- glowing cards shall have lifting effect when mouse hovering
- abstract a state manager that load user settings (apperance, draggable-hub position, etc.) when app is mounted, and save when update | unmount

## Notes

- `navigator_items` in definition.navbar is order sensitive, as router path dependes on it, should figure out a way to better define it (order sensitive is not resolvable though)
- currently 404 fallback to home page, consider add a 404 page
- consider add code obfuscation to bundle logic
- bundler have warnings blow, modify bundle process to avoid bundle samples
```
Webpack Bundle Analyzer saved report to /home/hj/Code/Frontier/build/report.html
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.index.js
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.navbar.js
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.index.js
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.navbar.js
```
