const gulp = require('gulp');

const postcss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    cssImport = require('postcss-import'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
	minify = require('cssnano');

const babel = require('gulp-babel'),
	uglify = require('gulp-uglify');

const del = require('del');
	
const paths = {
	css: '*.css',
	js: '*.js',
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

function js() {
	return gulp.src(paths.js, '!gulpfile.js')
	.pipe(babel({presets: ['@babel/preset-env']}))
	.pipe(uglify())
	.pipe(gulp.dest(paths.dist));
}

function clean() {
	return del(paths.dist);
}

exports.css = css;
exports.js = js;
exports.clean = clean;
