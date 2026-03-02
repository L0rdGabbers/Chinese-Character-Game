const HanziWriter = require('hanzi-writer');

function characterData(character) {
  return require('hanzi-writer-data/' + character);
}

var writer = new HanziWriter('target', character, {
  charDataLoader: function(char) {
    return characterData;
  }  
});  