var gutil = require('gulp-util');


var pkg = require('../../../package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

module.exports = {
    src: '../src/',
    lib: '../lib/',
    dest: '../dist/',
    banner: banner,
    allinone: 'skylark-jquery/skylark-jquery-all',
    allinoneHeader : './scripts/allinone-js.header',
    allinoneFooter : './scripts/allinone-js.footer',
    pkg: pkg
};
