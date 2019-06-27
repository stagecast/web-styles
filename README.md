# Bootstrap Theme Kit: Make your own Bootstrap Themes

From the need to make CSS great again: https://github.com/stagecast/web-frontend/issues/253

This is simple starter project to help you get started quickly when making a custom Bootstrap theme.

## What this project does

This repository includes a project structure with a build script that builds a custom CSS version of Bootstrap 4, using Gulp. You can
clone this repository, run the Gulp task and go right into modifying variables and adding styles. There's also an HTML file that contains
a neatly organized collection of Bootstrap components that fit a 1920x1080 display, so you can instantly see the outcome.

## Prerequisites

- This works on Windows, macOS and Linux.
- Node Package Manager and Gulp are required. Make sure you can run `gulp -v` and `npm -v`.
- You can get Node at [nodejs.org](https://nodejs.org), then install gulp using `npm install gulp-cli -g`

## Getting started

2. Clone this repo
3. Run `npm install`
4. Run `gulp watch`
4. Look at `index.html` (ideally with a [local development webserver](https://askubuntu.com/questions/377389/how-to-easily-start-a-webserver-in-any-folder))
5. Add any Bootstrap Sass variables into `scss/_custom-variables.scss`
6. Add any custom styles into `scss/_custom-styles.scss`. You can use Bootstrap's mixins here.
7. Repeat steps 4 to 6 until you like what you see :-)


Started Project provided by *Alexander Rechsteiner*

**Bootstrap**

- <https://github.com/twbs/bootstrap/>

**Deployment**

Every time you update the theme code, the version must be increased and tagged and checked in the remote repo. Then, log to Jenkins and trigger the build. 

The style files will be taken from the css folder and added to the CDN with the following schema: 

https://d2cb7i0wbc0znj.cloudfront.net/media/styles/<STYLES_VERSION>/stagecast.min.css
https://d2cb7i0wbc0znj.cloudfront.net/media/styles/<STYLES_VERSION>/main.svg

**NOTES**

main.svg
- The main.svg is an SVG Sprite containing all the stagecast icons. 
- Right now the size is ~100KB and will get bigger
- To import it in the web-apps, you have to copy-paste it into your repo.
- The way we handle icons is likely to change in the future.