const uswds = require("@uswds/compile")

uswds.settings.version = 3;

exports.compile = uswds.compile;
exports.watch = uswds.watch;
