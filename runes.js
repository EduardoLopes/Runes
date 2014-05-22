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
  * Handle the text
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
    this.preCanvas = document.createElement('canvas');
    this.preContext = this.preCanvas.getContext('2d');
    this.done = false;
    this.containerWidth = options.containerWidth;
    this.preCanvas.width = this.containerWidth;
  }

  Runes.prototype.render = function() {
    this.letterIndex = 0;
    if(this.done === false){
      this.preContext.clearRect(0,0,this.preCanvas.width, this.preCanvas.height);
      for(letters in this.text){
        currentLetter = this.text[letters];
        if(typeof this.font[currentLetter] !== 'undefined'){
          for (var h = this.font[currentLetter].length - 1; h >= 0; h--) {
            for (var w = this.font[currentLetter][h].length - 1; w >= 0; w--) {
              if(this.font[currentLetter][h][w]){
                this.preContext.fillRect(Math.round((w * this.size) + (this.letterIndex * (this.size * (this.font[currentLetter].length + 1)))), Math.round((h * this.size)), this.size, this.size);
              }
            }
          }
        }
        this.letterIndex++;
      }
    }

    this.done = true;

    this.context.drawImage(this.preCanvas, this.x, this.y);
  };

  Runes.prototype.setText = function (text) {
    this.text = text;
    this.done = false;

    return text;
  };

  Runes.prototype.setSize = function (size) {
    this.size = Math.round(size);
    this.done = false;
    return size;
  };

  Runes.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
  };

  global.Runes = Runes;
  global.fontRunes = fontRunes;

}(this));