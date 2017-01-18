// Include gulp
var gulp = require("gulp");

// Include Our Plugins
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var moreCSS = require("gulp-more-css");
var cssnano = require("gulp-cssnano");
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

// Lint Task
gulp.task("lint", function() {
  return gulp.src("js/*.js")
  .pipe(jshint())
  .pipe(jshint.reporter("default"));
});

// Compile Our Sass
gulp.task("sass", function() {
  return gulp.src("scss/**/*.scss")
  .pipe(autoprefixer({
      browsers: ['last 2 versions']
  }))
  .pipe(sass())
  .pipe(cssnano())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest("dist/css/"));
});

// Concatenate & Minify JS
gulp.task("scripts", function() {
  return gulp.src("js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"));
});

gulp.task('pug', function() { // buildHTML
  return gulp.src('pug/*.pug')
  .pipe(pug({
      locals: '-P',
      pretty: true
    })
  )
  .pipe(gulp.dest("dist/"));
});

// Watch Files For Changes
gulp.task("watch", function() {
  gulp.watch("js/**/*.js", ["lint", "scripts"]);
  gulp.watch("scss/**/*.scss", ["sass"]);
  gulp.watch("pug/**/*.pug", ["pug"]);
});

// Default Task
gulp.task("default", ["lint", "sass", "scripts", "pug", "watch"]);