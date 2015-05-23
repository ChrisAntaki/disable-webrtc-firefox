// Requirements
var gulp = require('gulp');
var rename = require('gulp-rename');
var resize = require('gulp-image-resize');

// Configuration
var iconNames = ['safe', 'unsafe'];
var iconSizes = [16, 32, 48, 64];

// Resize icons
function resizeIcon(name, size) {
    gulp.src('data/' + name + '.png')
        .pipe(resize({
            width: size,
            height: size,
            imageMagick: true
        }))
        .pipe(rename(name + '-' + size + '.png'))
        .pipe(gulp.dest('data/'));
}

gulp.task('icons', function() {
    iconNames.forEach(function(name) {
        iconSizes.forEach(function(size) {
            resizeIcon(name, size);
        });
    });
});

gulp.task('default', ['icons']);
