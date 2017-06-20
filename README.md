##itsrharris.com

##Getting Started

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.

##Requirements

Required: 
  * an openshift account
  * a nodejs gear

Node
Npm
Webpack
Angular
Bootstrap
SASS

##Production

This really depends on how complex is your app and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere, where they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and a webserver(s).

##Testing

Built With

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Karma](http://karma-runner.github.io) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning

1.0.0

Authors

Ryan Harris - Your favorite developer

License

This project is licensed under the Ryan Harris

Acknowledgments

ngular-seed — the seed for AngularJS apps