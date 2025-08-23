// Core Module
const path = require('path')

// require.main.filename → gives you the entry point file (the file you ran with node ...)
// path.dirname(...) → extracts the directory name from that path.
// So /Users/asiya/project/app.js → /Users/asiya/project.

// For absolute paths not relative
module.exports = path.dirname(require.main.filename)
