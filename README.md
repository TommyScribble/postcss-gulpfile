# postcss-gulpfile
A gulpfile.js using postCss. This gulpfile compiles sass like syntax to css, and then minifys for production. Use two folders (initial & final are used currently but change these to whatever you use), one for work(initial) and one for prod(final). 

## Getting started
Download or clone the repo to your local machine.

### Prerequisites
I use YARN to manage my dependancies but use which ever package manager you prefer to install the dependancies below.
You will need:
Gulp + gulp-postcss, gulp-sourcemaps, postcss-import, precss, autoprefixer, cssnano.

To install with YARN use the following

```
yarn add -D gulp gulp-postcss gulp-sourcemaps postcss-import precss autoprefixer cssnano
```

## Install and run
Copy the gulpfile.js to the root of your project and update the 'initial' and 'final' folders with the folder names you are using.
Run  

```
gulp css
```

to compile you css.
