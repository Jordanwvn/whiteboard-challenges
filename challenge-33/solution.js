'use strict';

module.exports = (base, exp) => `${base ** exp}`.split('').reduce((a, b) => ~~a + ~~b) || null;
