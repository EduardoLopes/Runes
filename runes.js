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

  var letters,
      currentLetter,
      currentLineWidth = 0,
      line = 0,
      word,
      w = 0, h = 0,
      wordLength = 0,
      x = 0,
      widthLetters = 0;;

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
    this.lineHeight = options.lineHeight || 2;
    this.letterSpacing = options.letterSpacing || 0;

    this.lines = [];
    this.lastChar = {
      x: 0, y: 0
    }
    this.whitespaceSize = 5;

  }

  Runes.prototype.prepareText = function() {
    this.textSplit = this.text.split(' ');
    this.lines = [];
    currentLineWidth = 0;
    line = 0;

    for(word in this.textSplit){
      wordLength = 0;

      for (letters = 0; letters < this.textSplit[word].length + 1; letters++) {

        if(currentLineWidth >= this.containerWidth){
          this.addLine();
          currentLineWidth = wordLength;
        }

        currentLineWidth += this.getCharWidth(this.textSplit[word][letters] || ' ');
        wordLength += this.getCharWidth(this.textSplit[word][letters] || ' ');

      };

      if(typeof this.lines[line] === 'undefined'){
        this.lines[line] = [];
      }
      this.lines[line].push(this.textSplit[word]);
    }
    this.height = Math.round((line + 1) * ((this.fontY + (2 + this.lineHeight)) * this.size));
    this.setHeight(this.height);
  };

  Runes.prototype.drawLetter = function(currentLetter) {
    for (h = this.getCharLengthY(currentLetter) - 1; h >= 0; h--) {
      for (w = this.getCharLengthX(currentLetter) - 1; w >= 0; w--) {
        if(w === 0 & h === 0){
            x = widthLetters;
            widthLetters += this.getCharWidth(currentLetter);
          } else {
            x = Math.round((w * this.size) + widthLetters);
          }
        if(this.font[currentLetter][h][w]){
          this.preContext.fillRect(x, Math.round((line) * ((this.fontY + (2 + this.lineHeight)) * this.size) + (h * this.size)), this.size, this.size);
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
        widthLetters = 0;

        //each word of each line
        for(word in this.lines[line]){
          //each letter of each word
          if(word > 0){
            widthLetters += this.getCharWidth(' ');
          }
          for(letters in this.lines[line][word]){
            currentLetter = this.lines[line][word][letters];
            this.drawLetter(currentLetter);
            this.lastChar.x = currentLineWidth - 12;
             this.lastChar.y = (line) * ((this.getCharLengthY(currentLetter) + (2 + this.lineHeight)) * this.size);

          }
        }
      }

      this.done = true;
    }
    this.context.drawImage(this.preCanvas, this.x, this.y);
  };

  Runes.prototype.addLine = function(){
    line++;
    this.letterIndex = 0;
  };

  Runes.prototype.addChar = function(char) {

    if(this.font.uppercase){
      char = char.toString().toUpperCase();
    } else {
      char = char.toString();
    }

    this.text += char;

    this.lastChar.x = currentLineWidth;
    this.lastChar.y = (line) * ((this.getCharLengthY('A') + (2 + this.lineHeight)) * this.size);

    currentLineWidth += this.getCharWidth(char);

    if(currentLineWidth >= this.containerWidth){
      currentLineWidth = this.getCharWidth(char);
      this.addLine();
      this.setHeight(this.height);
      this.done = false;
    }

    if(char === ' '){
      widthLetters += this.getCharWidth(' ');
      return false;
    }

    this.drawLetter(char);
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
    if(this.font.uppercase){
      letter = letter.toString().toUpperCase();
    } else {
      letter = letter.toString();
    }

    return this.font[letter][0].length;
  };

  Runes.prototype.getCharLengthY = function(letter) {
    if(letter === ' ' || typeof letter === 'undefined'){
      return this.whitespaceSize;
    }
    if(this.font.uppercase){
      letter = letter.toString().toUpperCase();
    } else {
      letter = letter.toString();
    }

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
    if(this.font.uppercase){
      this.text = text.toString().toUpperCase();
    } else {
      this.text = text.toString();
    }

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
