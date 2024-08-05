# Frontier

A project as template for personal website. Builing with preact & Radix. Low learning cost yet highly scalable.

## CLI Commands

- `bun run bootstrap` To start the project initialization

- `bun run dev` To start development server

- `bun run build` To bundle the project with webpack

- `bun run serve` To start built project

## TO DO

- ~~fix main panel overflow to inner scroll~~
- ~~eject info text to .json~~ *resolved: @assets/definition.\*.js*
- ~~fill out all pages~~
- add i18n and translations
- responsive design for tablet and mobile
- ~~implement search & locate~~
- implement tree shaking logic at bundle
- random theme color, and allow color select
- remove all React-type references (React.ReactNode & React.CSSProperties)
- ~~allows badge color definition (resolve typing constraits)~~
- ~~home page add guide to path pages~~
- ~~implement copy contact info to clipboard~~
- ~~add type constraints for definition modules~~
- should implement notification provider
- ~~glowing cards shall have lifting effect when mouse hovering~~
- abstract a state manager that load user settings (apperance, draggable-hub position, etc.) when app is mounted, and save when update | unmount

## Notes

- ~~`navigator_items` in definition.navbar is order sensitive, as router path dependes on it, should figure out a way to better define it (order sensitive is not resolvable though)~~
- ~~currently 404 fallback to home page, consider add a 404 page~~
- ~~bundler have warnings blow, modify bundle process to avoid bundle samples~~
```
Webpack Bundle Analyzer saved report to /home/hj/Code/Frontier/build/report.html
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.index.js
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.navbar.js
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.index.js
⚠ WARN Conflict: Multiple assets emit different content to the same filename assets/sample.definition.navbar.js
```
