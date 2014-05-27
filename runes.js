(function(global, undefined) {

  var fontRunes = {
    x: 5,
    y: 5,
    uppercase: true,
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
      ]
  };

  var letters,
      currentLetter,
      currentLineWidth = 0,
      line = 0,
      word,
      w = 0, h = 0;

  /**
  * Handle the text
  * @author    Eduardo Lopes (EduardoLopesDS@gmail.com)
  * @github    https://github.com/EduardoLopes/Runes
  * @licence   https://github.com/EduardoLopes/Runes/blob/master/LICENSE
  * @global
  * @constructor
  */
  function Runes (options) {
    this.size = options.size;
    this.font = options.font;
    this.setText(options.text);
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
    this.lineHeight = options.lineHeight || 0;
    this.letterSpacing = options.letterSpacing || 0;

    this.lines = [];
    this.lastChar = {
      x: 0, y: 0
    }

  }

  Runes.prototype.prepareText = function() {
    this.textSplit = this.text.split(' ');
    this.lines = [];
    currentLineWidth = 0;
    line = 0;
    for(word in this.textSplit){
      currentLineWidth += (this.textSplit[word].length + 1) * (this.size * (this.fontX + (1 + this.letterSpacing)));

      if(currentLineWidth >= this.containerWidth){
        currentLineWidth = (this.textSplit[word].length + 1) * (this.size * (this.fontX + (1 + this.letterSpacing)));
        this.addLine();
      }

      if(typeof this.lines[line] === 'undefined'){
        this.lines[line] = [];
      }
      this.lines[line].push(this.textSplit[word]);
    }
    this.setHeight(this.height);
  };

  Runes.prototype.drawLetter = function(currentLetter) {
    for (h = this.font[currentLetter].length - 1; h >= 0; h--) {
      for (w = this.font[currentLetter][h].length - 1; w >= 0; w--) {
        if(this.font[currentLetter][h][w]){
          this.preContext.fillRect(Math.round((w * this.size) + (this.letterIndex * (this.size * (this.fontX + (1 + this.letterSpacing))))), Math.round((line) * ((this.fontY + (2 + this.lineHeight)) * this.size) + (h * this.size)), this.size, this.size);
        }
      }
    }

    this.letterIndex++;
  };

  Runes.prototype.render = function() {

    if(this.done === false){
      this.prepareText();

      //each line
      for(line in this.lines){
        this.letterIndex = 0;
        //each word of each line
        for(word in this.lines[line]){
          //each letter of each word
          this.letterIndex++;
          for(letters in this.lines[line][word]){
            currentLetter = this.lines[line][word][letters];
            this.drawLetter(currentLetter);
            this.lastChar.x = currentLineWidth;
            this.lastChar.y = (line) * ((this.fontY + (2 + this.lineHeight)) * this.size);
          }
        }
      }

      this.done = true;
    }
    this.context.drawImage(this.preCanvas, this.x, this.y);
  };

  Runes.prototype.addLine = function(){
    line++;
    this.height = Math.round((line + 1) * ((this.fontY + (2 + this.lineHeight)) * this.size));
    this.letterIndex = 0;
  };

  Runes.prototype.addChar = function(char) {

    if(this.font.uppercase){
     this.text += char;
    } else {
      this.text += char.toUpperCase();
    }

    currentLineWidth += (this.size * (this.fontX + (1 + this.letterSpacing)));
    this.lastChar.x = currentLineWidth;
    this.lastChar.y = (line) * ((this.fontY + (2 + this.lineHeight)) * this.size);

    if(currentLineWidth >= this.containerWidth){

      currentLineWidth = (this.size * (this.fontX + (1 + this.letterSpacing)));
      this.addLine();
      this.setHeight(this.height);
      this.done = false;
    }

    if(char === ' '){
      this.letterIndex++;
      return false;
    }

    this.drawLetter(char);

  };

  Runes.prototype.getCharWidth = function() {
    return this.fontX * this.size;
  };

  Runes.prototype.getCharHeight = function() {
    return this.fontY * this.size;
  };

  Runes.prototype.setHeight = function(height) {
    this.preCanvas.height = height;
  };

  Runes.prototype.setWidth = function(width) {
    this.preCanvas.width = width;
    this.done = false;
  };

  Runes.prototype.setText = function (text) {
    if(this.font.uppercase){
      this.text = text;
    } else {
      this.text = text.toUpperCase();
    }

    this.done = false;
    this.textSplit = this.text.split(' ');

    return text;
  };

  Runes.prototype.setLineHeight = function(lineHeight) {

    this.lineHeight = lineHeight;
    this.done = false;

    return lineHeight;
  };

  Runes.prototype.setLetterSpacing = function(letterSpacing) {

    this.letterSpacing = letterSpacing;
    this.done = false;

    return letterSpacing;
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