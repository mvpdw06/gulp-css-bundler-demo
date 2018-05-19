var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rebaseCssUrls = require('gulp-rebase-css-urls'),
  minifyCSS = require('gulp-minify-css'),
  cssVersioner = require('gulp-css-url-versioner');

var myCSSFiles = [
  './src/css/main.css',
  './src/css/vendor.css'
]

var myDist = 'src/bundle/css'

// define Task
gulp.task('cssBundle', function(){
  gulp
    .src(myCSSFiles)
    .pipe(rebaseCssUrls(myDist))
    .pipe(cssVersioner({version: Math.random()}))
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(myDist))
});

gulp.task('default',[
  'cssBundle'
]);