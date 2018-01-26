# michaelrausch.nz

Demo: http://michaelrausch.nz

## Installation
1. Install [NodeJS & NPM](https://nodejs.org/en/)
2. `$ npm install -g @angular/cli`
2. `$ npm install`
3. Add environment variables (src/environments/)
4. `$ ng serve`

## General Structure

| Directory                     | Contents              |
| --------------------          |-----------------------|
| /app/environments             | Environment Variables |
| /app/styles.css               | Global stylesheet     |
| /app/components               | Components not related to a specific page (eg. menu, buttons, etc...)   |
| /app/pages/:page/             | . |
| /app/pages/:page/components   | Components related to a specific page |
| /app/pages/:page/sections     | Most pages are split up into sections, these are stored here. |
