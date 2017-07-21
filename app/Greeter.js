var config = require("./config.json");
var Styles = require("./greet.css");

module.exports = function() {
  var greatingDiv = document.createElement('div');
  greatingDiv.textContent = config.greetText;
  return greatingDiv;
};