All
.
├── build # Compiled files (alternatively `dist`)
├── docs # Documentation files (alternatively `doc`)
├── pages # Pages
├── public # locales (korean, english json)
├── src # Source files (alternatively `lib` or `app`)
├── static / images
└── styles

Pages
.
├── api
├── pages
│ ├── \_app.tsx
│ ├── \_document.tsx
│ ├── chart.tsx
│ ├── contact.tsx
│ ├── index.tsx
│ ├── list.tsx
│ ├── contact.tsx
│ └── ... # etc.
└── video

react // frontend root dir
|
| - .storybook // all things storybook
|
| - .vscode // suggested IDE settings and extensions for vscode
|
| - .yarn // yarn config and caches
|
| - config
| |
| | - namespaces.js // contains all namespaces used in webpack config
| |
| | - webpack // webpack configuration files
|
| - public // files emulating deployment enviroment
|
| - src // the good stuff
| |
| | - assets
| |
| | - static // static files, are not to be |processed
| |
| | - generated // generated assets
|
| - tools // contains scripts for handling/processing data

|-root
|-components
|-Navbar.js
|-Footer.js
|-styles
|-global.css
|-navbar.module.css  
 |-footer.module.css  
 |-pages
|-api
|-users.js
|-index.js
|-utils
|- dbConnect.js
