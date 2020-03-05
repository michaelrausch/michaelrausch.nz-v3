# michaelrausch.nz

[![Build Status](https://dev.azure.com/Michael-Rausch/michaelrausch.nz/_apis/build/status/michaelrausch.michaelrausch.nz)](https://dev.azure.com/Michael-Rausch/michaelrausch.nz/_build/latest?definitionId=1)


Demo: http://michaelrausch.nz

## Installation
1. Install [NodeJS & NPM](https://nodejs.org/en/)
2. `$ npm install -g @angular/cli`
2. `$ npm install`
3. Add environment variables (src/environments/)
4. `$ ng serve`

## Structure Overview

| Directory                     | Contents              |
| --------------------          |-----------------------|
| /app/environments             | Environment Variables |
| /app/styles.css               | Global stylesheet     |
| /app/shared                   | Components shared between pages (eg. menu, buttons, etc...)   |
| /app/:page/                   | Components related to a specific page |

![michaelrausch.nz](https://static.michaelrausch.nz/image/github/michaelrausch_nz.png)
