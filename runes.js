(function(global, undefined) {

  var fontRunes = {
    A: [
        [0,0,1,0,0],
        [0,1,0,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1]
      ],
    B: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0]
      ],
    C: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,0],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
    D: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,0]
      ],
    E: [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,1]
      ],
    '1': [
        [0,0,1,0,0],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,1,1,0]
      ],
    '2': [
        [1,1,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,1]
      ],
  };

  var letters,
      currentLetter;

  /**
  * Handle a text
  * @author    Eduardo Lopes (EduardoLopesDS@gmail.com)
  * @github    https://github.com/EduardoLopes/Runes
  * @licence   https://github.com/EduardoLopes/Runes/blob/master/LICENSE
  * @global
  * @constructor
  */
  function Runes (options) {
    this.text = options.text;
    this.size = options.size;
    this.font = options.font;
    this.context = options.context;
    this.letterIndex = 0;
    this.x = options.x;
    this.y = options.y;
  }

  Runes.prototype.render = function() {
    this.letterIndex = 0;
    for(letters in this.text){
      currentLetter = this.text[letters];
      if(typeof this.font[currentLetter] !== 'undefined'){
        for (var h = this.font[currentLetter].length - 1; h >= 0; h--) {
          for (var w = this.font[currentLetter][h].length - 1; w >= 0; w--) {
            if(this.font[currentLetter][h][w]){
              this.context.fillRect(Math.round(this.x + (w * this.size) + (this.letterIndex * (this.size * (this.font[currentLetter].length + 1)))), Math.round(this.y + (h * this.size)), this.size, this.size);
            }
          }
        }
      }
      this.letterIndex++;
    }
  };

  Runes.prototype.setText = function (text) {
    this.text = text;

    return text;
  };

  Runes.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
  };

  global.Runes = Runes;
  global.fontRunes = fontRunes;

}(this));