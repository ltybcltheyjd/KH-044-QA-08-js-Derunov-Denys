"use strict";
console.log([3, 4, 7, 0, 5, 16].reduce( (sum, n) => sum + (n % 2? 0 : n)**0.5, 0 ));