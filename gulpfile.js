const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const nodeSource = path.resolve('nodes', '**', 'icons', '*.{png,svg}');
	const nodeDestination = path.resolve('dist', 'nodes');

	return src(nodeSource).pipe(dest(nodeDestination));
}

exports.default = copyIcons;
exports['build:icons'] = copyIcons;
