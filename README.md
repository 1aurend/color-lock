## LD Steps

* create-react-app $APP_NAME
* rm readme.md
* (can run npm start here to see defaults before removing files)
* cd public --> `rm favicon.ico manifest.json`
* cd - && cd src --> rm App.css App.js index.css logo.svg App.test.js serviceWorker.js
* open Atom or other text editor and index.html
* replace existing file content with
    ``` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Color Lock Tutorial</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
    ```
* mkdir components in src
* touch Button.js Lock.js
* update index.js to
```import React from 'react';
import ReactDOM from 'react-dom';
import Lock from './components/Lock.js';

ReactDOM.render(<Lock />, document.getElementById('root'));
```
