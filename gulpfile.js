/*
	Gulp related deps
*/
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
	$ = require('gulp-load-plugins')();

var dev_dir = {
	css: 'src/css',
	js: 'src/js'
};

var build_dir = {
	css: 'build/css',
	js: 'build/js'
};

var options = {};

gulp.task('css-build', function() {

	return sass( dev_dir.css, { style: 'expanded' })
	  	//.pipe(minify()) //uncomment and initialize at top, for minification.
	  	//concat all files
        .pipe(concat('build.min.css'))
        //save it
        .pipe(gulp.dest(build_dir.css));

});

/*
	Builds js files with src/js to build/js
*/
gulp.task('js-build', function(){

	return gulp.src( dev_dir.js )
	  	//.pipe(minify())
        .pipe(concat('build.min.js'))
        .pipe(gulp.dest('build/js/'));

});

/*
	Watches for changes in file
*/
gulp.task('default', function() {

	return gulp.watch('src/**/', ['js-build', 'css-build']);
	return gulp.start(['js-build','css-build']);	

});




