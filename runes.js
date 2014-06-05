(function(global, undefined) {

  var fontRunes = {
    uppercase: true,
    chars: 'ABCDEFGHIJKLMNOPQRSTUWXYZÇ.,!?',
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
    F: [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,0,0,0,0]
      ],
    G: [
        [0,1,1,1,0],
        [1,0,0,0,0],
        [1,0,1,1,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
    H: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
      ],
    I: [
        [1,1,1],
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [1,1,1]
      ],
    J: [
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [1,0,0,1],
        [0,1,1,0]
      ],
    K: [
        [1,0,0,1],
        [1,0,1,0],
        [1,1,0,0],
        [1,0,1,0],
        [1,0,0,1]
      ],
    L: [
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0],
        [1,1,1,1]
      ],
    M: [
        [1,0,0,0,1],
        [1,1,0,1,1],
        [1,0,1,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
      ],
    N: [
        [1,0,0,0,1],
        [1,1,0,0,1],
        [1,0,1,0,1],
        [1,0,0,1,1],
        [1,0,0,0,1]
      ],
    O: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
    P: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,0,0,0,0]
      ],
    Q: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,0,1,0],
        [0,1,1,0,1],
      ],
    R: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,1,0],
        [1,0,0,0,1]
      ],
    S: [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [0,1,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,0]
      ],
    T: [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
      ],
    U: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
    V: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0]
      ],
    W: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [0,1,0,1,0]
      ],
    X: [
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [1,0,0,0,1]
      ],
    Y: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
      ],
    Z: [
        [1,1,1,1,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [1,1,1,1,1]
      ],
    Ç: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,0],
        [1,0,0,0,1],
        [0,1,1,1,0],
        [0,0,1,0,0],
        [0,1,0,0,0]
      ],
    '0': [
        [0,1,1,1,0],
        [1,0,0,1,1],
        [1,0,1,0,1],
        [1,1,0,0,1],
        [0,1,1,1,0]
      ],
    '1': [
        [0,1,0],
        [1,1,0],
        [0,1,0],
        [0,1,0],
        [1,1,1]
      ],
    '2': [
        [1,1,1,1,0],
        [0,0,0,0,1],
        [0,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,1]
      ],
    '3': [
        [1,1,1,1,0],
        [0,0,0,0,1],
        [0,0,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,0]
      ],
    '4': [
        [0,0,1,1,0],
        [0,1,0,1,0],
        [1,0,0,1,0],
        [1,1,1,1,1],
        [0,0,0,1,0]
      ],
    '5': [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,0]
      ],
    '6': [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
    '7': [
        [1,1,1,1,1],
        [0,0,0,0,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
      ],
    '8': [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [0,1,1,1,0],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
    '9': [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [0,1,1,1,1],
        [0,0,0,0,1],
        [0,1,1,1,0]
      ],
    '.': [
        [0],
        [0],
        [0],
        [0],
        [1]
      ],
    ',': [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,1],
        [1,0]
      ],
    '!': [
        [1],
        [1],
        [1],
        [0],
        [1],
      ],
    '?': [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [0,0,1,1,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
      ]
  };

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
    this.context = options.context;
    this.x = options.x;
    this.y = options.y;
    this.preCanvas = document.createElement('canvas');
    this.preContext = this.preCanvas.getContext('2d');
    this.done = false;
    this.containerWidth = options.containerWidth;
    this.preCanvas.width = this.containerWidth;
    this.width = 0;
    this.height = 0;
    this.lineHeight = options.lineHeight || 2;
    this.letterSpacing = options.letterSpacing || 0;
    this.currentLineWidth = 0;
    this.line = 0;
    this.widthLetters = 0;

    this.lines = [];
    this.lastChar = {
      x: 0, y: 0
    }
    this.whitespaceSize = 5;
    this.font.commonLength = this.commonArrayLength();
  }

  Runes.prototype.commonArrayLength = function(){
    var commonLength = {x: [], y: []},
        mostCommon = {x: [], y: []},
        letter,
        i = 0;

    for(i = this.font.chars.length - 1; i >= 0; i-- ){
      letter = this.font.chars[i];
      commonLength.x[this.getCharLengthX(letter)] = commonLength.x[this.getCharLengthX(letter)] + 1 || 0;
      commonLength.y[this.getCharLengthY(letter)] = commonLength.y[this.getCharLengthY(letter)] + 1 || 0;
    }

    for(length in commonLength.x){
      mostCommon.x.push(commonLength.x[length]);
    }

    for(length in commonLength.y){
      mostCommon.y.push(commonLength.y[length]);
    }

    return {
      x: commonLength.x.indexOf(Math.max.apply(Math, mostCommon.x)),
      y: commonLength.y.indexOf(Math.max.apply(Math, mostCommon.y))
    };

  };

  Runes.prototype.prepareText = function() {
    var letters,
        word,
        wordLength,
        line = 0;
    this.textSplit = this.text.split(' ');
    this.lines = [];

    for(word in this.textSplit){
      wordLength = 0;

      for (letters = 0; letters < this.textSplit[word].length + 1; letters++) {

        if(this.currentLineWidth >= this.containerWidth){
          line++;
          this.currentLineWidth = wordLength;
        }

        this.currentLineWidth += this.getCharWidth(this.textSplit[word][letters] || ' ');
        wordLength += this.getCharWidth(this.textSplit[word][letters] || ' ');

      };

      if(typeof this.lines[line] === 'undefined'){
        this.lines[line] = [];
      }
      this.lines[line].push(this.textSplit[word]);
    }
    this.height = Math.round((line + 1) * ((this.font.commonLength.y + (2 + this.lineHeight)) * this.size));
    this.setHeight(this.height);
  };

  Runes.prototype.drawLetter = function(currentLetter, line) {

    var w = h = x = 0;

    for (h = this.getCharLengthY(currentLetter) - 1; h >= 0; h--) {
      for (w = this.getCharLengthX(currentLetter) - 1; w >= 0; w--) {
        if(w === 0 & h === 0){
            x = this.widthLetters;
            this.widthLetters += this.getCharWidth(currentLetter);
          } else {
            x = Math.round((w * this.size) + this.widthLetters);
          }
        if(this.font[currentLetter][h][w]){
          this.preContext.fillRect(x, Math.round((line) * ((this.font.commonLength.y + (2 + this.lineHeight)) * this.size) + (h * this.size)), this.size, this.size);
        }
      }
    }
  };

  Runes.prototype.render = function() {

    if(this.done === false){
      var currentLetter,
          line,
          word;

      this.prepareText();

      //each line
      for(line in this.lines){
        this.widthLetters = 0;
        this.line = line;

        //each word of each line
        for(word in this.lines[line]){
          //each letter of each word
          if(word > 0){
            this.widthLetters += this.getCharWidth(' ');
          }
          for(letters in this.lines[line][word]){
            currentLetter = this.lines[line][word][letters];
            this.drawLetter(currentLetter, line);
            this.lastChar.x = this.currentLineWidth - 12;
            this.lastChar.y = (line) * ((this.getCharLengthY(currentLetter) + (2 + this.lineHeight)) * this.size);

          }
        }
      }

      this.done = true;
    }
    this.context.drawImage(this.preCanvas, this.x, this.y);
  };

  Runes.prototype.addLine = function(){
    this.line++;
  };

  Runes.prototype.addChar = function(char) {

    char = this.font.uppercase ? char.toString().toUpperCase() : char.toString();

    this.text += char;
    this.lastChar.x = this.currentLineWidth;
    this.lastChar.y = (this.line) * ((this.font.commonLength.y + (2 + this.lineHeight)) * this.size);

    this.currentLineWidth += this.getCharWidth(char);

    if(this.currentLineWidth >= this.containerWidth){
      this.currentLineWidth = this.getCharWidth(char);
      this.addLine();
      this.setHeight(this.height);
      this.done = false;
    }

    if(char === ' '){
      this.widthLetters += this.getCharWidth(' ');
      return false;
    }

    this.drawLetter(char, this.line);
  };

  Runes.prototype.getCharWidth = function(letter) {
    return (this.size * (this.getCharLengthX(letter) + (1 + this.letterSpacing)));
  };

  Runes.prototype.getCharHeight = function(letter) {
    return (this.size * (this.getCharLengthY(letter) + (1 + this.lineHeight)));
  };

  Runes.prototype.getCharLengthX = function(letter) {
    if(letter === ' '){
      return this.whitespaceSize;
    }

    letter = this.font.uppercase ? letter.toString().toUpperCase() : letter.toString();

    return this.font[letter][0].length;
  };

  Runes.prototype.getCharLengthY = function(letter) {
    if(letter === ' ' || typeof letter === 'undefined'){
      return this.whitespaceSize;
    }

    letter = this.font.uppercase ? letter.toString().toUpperCase() : letter.toString();

    return this.font[letter].length;
  };

  Runes.prototype.setHeight = function(height) {
    this.preCanvas.height = height;
  };

  Runes.prototype.setWidth = function(width) {
    this.preCanvas.width = width;
    this.done = false;
  };

  Runes.prototype.setText = function (text) {

    this.text = this.font.uppercase ? text.toString().toUpperCase() : text.toString();
    this.done = false;

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
