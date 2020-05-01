const gulp = require('gulp');

const postcss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    cssImport = require('postcss-import'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
	minify = require('cssnano');
	
const paths = {
	css: '*.css',
	dist: 'dist'
}

function css() {
    return gulp.src(paths.css)
    .pipe(sourceMaps.init())
    .pipe(postcss([
        cssImport(),
        precss(),
        autoprefixer(),
        minify(),
    ]))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest(paths.dist));
};

exports.css = css;
