var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  svgSprite = require('gulp-svg-sprite');

// More complex configuration example
config = {
  shape: {
    dimension: { // Set maximum dimensions
      maxWidth: 30,
      maxHeight: 30,
      attributes: true
    },
    spacing: { // Add padding
      padding: 0
    },
    dest: 'svg' // Keep the intermediate files
  },
  mode: {
    // css: true, // Create a «css» sprite view: { // Activate the «view» mode bust:
    // false,   render: {     scss: true // Activate Sass output (with default
    // options)   } },
    symbol: {
      dest: '.',
      dimensions: "-dims", // Suffix for dimension CSS selectors
      example: true,
      sprite: 'main.svg'
    }
  }
};

gulp.task('sprite', function () {
  return gulp
    .src('**/*.svg', {cwd: 'scss/icons'})
    .pipe(svgSprite(config))
    .pipe(gulp.dest('css/'));
});

gulp.task('build-theme', function () {
  return gulp
    .src(['scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({
        browsers: [
          'Chrome >= 35',
          'Firefox >= 38',
          'Edge >= 12',
          'Explorer >= 10',
          'iOS >= 8',
          'Safari >= 8',
          'Android 2.3',
          'Android >= 4',
          'Opera >= 12'
        ]
      })]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'))
});

gulp.task('watch', ['build-theme'], function () {
  gulp.watch([
    'scss/*.scss', 'scss/*/*.scss'
  ], ['build-theme']);
});

gulp.task('default', [
  'build-theme', 'sprite'
], function () {});
