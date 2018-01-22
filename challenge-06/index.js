'use strict';

let loop = function (count, callback) {
  if ( typeof count !== 'number' || count < 0 || typeof callback !== 'function' ) return null;
  if (count === 0) return;
  callback();
  loop (--count, callback);
}

module.exports = loop;
