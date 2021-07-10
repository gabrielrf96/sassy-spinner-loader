var sass = require('sass');
var fs = require('fs');

let result = sass.renderSync({file: 'test/styles.scss'});

fs.writeFileSync('test/styles.css', result.css);
