var gulp = require('gulp');
var ts   = require('gulp-typescript');

gulp.task('typescript', function() {
    return gulp.src('src/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'allegro-skeleton.js'
		}))
		.pipe(gulp.dest('dest'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('default', ['typescript', 'watch']);