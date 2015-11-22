This is a form from https://github.com/dickeyxxx/ng-modules

install live-server as global and other dev dependencies

    npm install live-server -g
    npm install bower -g
    npm install gulp -g
    npm install
    bower install

start development by

    # terminal 1
    live-server
    # terminal 2 (this will auto generate app.js, templateCache, css on change, which could be slow for big proj)
    gulp watch

    # to manually combine files run these commands
    gulp js
    gulp sass
    gulp templates

test

    # preparation
    npm install -g protractor
    npm install protractor-jasmine2-screenshot-reporter --save-dev
    npm install -g webdriver-manager
    webdriver-manager update
    webdriver-manager start

    # run
    protractor protractor/conf.js
