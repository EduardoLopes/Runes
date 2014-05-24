(function(global, undefined) {

  var fontRunes = {
    x: 5,
    y: 5,
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
      currentLetter,
      currentLineWidth = 0;

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
    this.fontX = this.font.x;
    this.fontY = this.font.y;
    this.context = options.context;
    this.letterIndex = 0;
    this.x = options.x;
    this.y = options.y;
    this.preCanvas = document.createElement('canvas');
    this.preContext = this.preCanvas.getContext('2d');
    this.done = false;
    this.containerWidth = options.containerWidth;
    this.containerHeight = options.containerHeight;
    this.preCanvas.width = this.containerWidth;
    //this.preCanvas.height = this.containerWidth;
    this.width = 0;
    this.height = 0;
    this.lines = [];

  }

  Runes.prototype.prepareText = function() {
    this.textSplit = this.text.split(' ');
    this.lines = [];
    for(word in this.textSplit){
      currentLineWidth += (this.textSplit[word].length + 1) * (this.size * (this.fontX + 1));

      if(currentLineWidth >= this.containerWidth){
        currentLineWidth = 0;
        currentLineWidth += (this.textSplit[word].length + 1) * (this.size * (this.fontX + 1));
        line++;
        this.height = Math.round((line + 1) * ((this.fontY + 2) * this.size));
      }
      if(typeof this.lines[line] === 'undefined'){
        this.lines[line] = [];
      }
      this.lines[line].push(this.textSplit[word]);
    }
    this.setHeight(this.height);
  };

  Runes.prototype.render = function() {

    if(this.done === false){
      this.letterIndex = 0;
      line = 0;
      currentLineWidth = 0;
      this.height = 0;

      this.prepareText();
      for(line in this.lines){
        this.letterIndex = 0;
        for(word in this.lines[line]){
          for(letters in this.lines[line][word]){
            currentLetter = this.lines[line][word][letters];
            for (var h = this.font[currentLetter].length - 1; h >= 0; h--) {
              for (var w = this.font[currentLetter][h].length - 1; w >= 0; w--) {
                if(this.font[currentLetter][h][w]){
                  this.preContext.fillRect(Math.round((w * this.size) + (this.letterIndex * (this.size * (this.fontX + 1)))), Math.round(line * ((this.fontY + 2) * this.size) + (h * this.size)), this.size, this.size);
                }
              }
            }
            this.letterIndex++;
          }
          this.letterIndex++;
        }
      }

      this.done = true;
    }

    this.context.drawImage(this.preCanvas, this.x, this.y);
  };

  Runes.prototype.setHeight = function(height) {
    this.preCanvas.height = height;
  };

  Runes.prototype.setWidth = function(width) {
    this.preCanvas.width = width;
    this.done = false;
  };

  Runes.prototype.setText = function (text) {
    this.text = text;
    this.textSplit = this.text.split(' ');
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