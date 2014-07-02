(function(global, undefined) {
  /**
  * Font Object
  **/
  var fontRunes = {
    //convert all letters to uppercase
    uppercase: true,
    //list of all characters of the font, used to fine the most common array length
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
  function Runes ( options ) {
    //font size
    this.size = options.size;
    //font object
    this.font = options.font;
    //set the text
    this.setText( options.text );
    //canvas context
    this.context = options.context;
    //x position of the text (the top left corner of the container)
    this.x = options.x;
    //y position of the text (the top left corner of the container)
    this.y = options.y;
    //create a cache canvas
    this.preCanvas = document.createElement( 'canvas' );
    //context of the cache canvas
    this.preContext = this.preCanvas.getContext( '2d' );
    /**
    * draw the text when false,
    * it's set to false in almost every function to set a option
    * like: setSize, setLetterSpacing, setSize and etc
    * each time that draw everything in the cache canvas it's set to true
    **/
    this.done = false;
    //the width of the text container
    this.containerWidth = options.containerWidth;
    //the cache canvas has the same width of the text container
    this.preCanvas.width = this.containerWidth;
    //width of the text container
    this.width = this.containerWidth;
    //height of the text container
    this.height = 0;
    //height for each line. default 2
    this.lineHeight = options.lineHeight || 2;
    //space between each letter. default 0
    this.letterSpacing = options.letterSpacing || 0;
    /**
    * hold the width of each line in the draw run time
    * when is bigger than the text container break to another line
    **/
    this.currentLineWidth = 0;
    //numbers of lines
    this.line = 0;
    //hold the x coordinate that the next character will be draw (bad name for a var)
    this.nextCharCoordinate = 0;
    //Bidimensional array. each array hold the words for each line
    this.lines = [];
    /**
    * try to hold the coordinates for the last char, but have a bug
    * want to use this in a pointer
    **/
    this.lastChar = {
      x: 0, y: 0
    };
    //size of whitespace
    this.whitespaceSize = 5;
    /**
    * I need the most common length of the letters arrays
    * the function commonArrayLength goes through all the letters
    * end find the most common length
    * return a object: {x: <number>, y: <number>}
    * x is the most common length width
    * y is the most common length height
    **/
    this.font.commonLength = this.commonArrayLength();
  }

  /**
  * Find the most common array length in the font object
  **/
  Runes.prototype.commonArrayLength = function() {
    var commonLength = {x: [], y: []},
        mostCommon = {x: [], y: []},
        letter,
        i = 0;

    for( i = this.font.chars.length - 1; i >= 0; i-- ) {
      letter = this.font.chars[i];
      commonLength.x[this.getCharLengthX(letter)] = commonLength.x[this.getCharLengthX(letter)] + 1 || 0;
      commonLength.y[this.getCharLengthY(letter)] = commonLength.y[this.getCharLengthY(letter)] + 1 || 0;
    }

    for( length in commonLength.x ){
      mostCommon.x.push( commonLength.x[length] );
    }

    for( length in commonLength.y ){
      mostCommon.y.push( commonLength.y[length] );
    }

    return {
      x: commonLength.x.indexOf( Math.max.apply( Math, mostCommon.x ) ),
      y: commonLength.y.indexOf( Math.max.apply( Math, mostCommon.y ) )
    };

  };

  /**
  * Prepare the text find where need a new breakline
  **/
  Runes.prototype.prepareText = function() {
        //loop
    var letters,
        //loop
        word,
        //width of each word
        wordWidth,
        //line numbers
        line = 0;

    //split the text
    this.textSplit = this.text.split( ' ' );
    //clear lines every times that this function is called
    this.lines = [];

    //loop through each word of the text
    for( word in this.textSplit ){
      //clear width to calc the next word
      wordWidth = 0;
      //loop through each letter of the word
      for ( letters = 0; letters < this.textSplit[ word ].length + 1; letters++ ) {
        //if the width of the current line is greater than the text container
        if( this.currentLineWidth >= this.containerWidth ){
          //add a new line
          line++;
          //set the length of the word that goes to the next line
          this.currentLineWidth = wordWidth;
        }

        //increment the length of each letter to get the lenght of each line
        this.currentLineWidth += this.getCharWidth( this.textSplit[ word ][ letters ] || ' ' );
        //increment the length of each letter to get the length of each word
        wordWidth += this.getCharWidth( this.textSplit[ word ][ letters ] || ' ' );

      };

      //if the new line don't exist in the lines array (always don't exist)
      if( typeof this.lines[ line ] === 'undefined' ){
        this.lines[ line ] = [];
      }

      //push the word for each line array
      this.lines[ line ].push( this.textSplit[ word ] );
    }
    //calc the height of the text container
    this.height = Math.round( ( line + 1 ) * ( (this.font.commonLength.y + ( 2 + this.lineHeight ) ) * this.size ) );
    //set the height of the cache canvas
    this.setHeight( this.height );
  };

  /**
  * Draw each letter
  **/
  Runes.prototype.drawLetter = function( currentLetter ) {
    var w = h = x = 0;

    //goes through each character array
    for ( h = this.getCharLengthY( currentLetter ) - 1; h >= 0; h-- ) {
      for ( w = this.getCharLengthX( currentLetter ) - 1; w >= 0; w-- ) {
        //if is the first pixel of ther character
        if( w === 0 & h === 0 ){
            //the top left corner coordinate where the first pixel of the character will be draw
            x = this.nextCharCoordinate;
            //where the character will be draw
            this.nextCharCoordinate += this.getCharWidth( currentLetter );
          } else {
            //where the next pixel will be draw
            x = Math.round( ( w * this.size ) + this.nextCharCoordinate );
          }
          //if the array character is equal 1 draw a pixel
        if(this.font[ currentLetter ][ h ][ w ]){
          this.preContext.fillRect( x, Math.round( ( this.line ) * ( ( this.font.commonLength.y + ( 2 + this.lineHeight ) ) * this.size ) + ( h * this.size ) ), this.size, this.size);
        }
      }
    }
  };

  /**
  * Render the text
  **/
  Runes.prototype.render = function() {
    if( this.done === false ){
          //letter to draw
      var currentLetter,
          //loop
          line,
          //loop
          word;

      //prepare the text to be draw
      this.prepareText();

      //goes through each line
      for( line in this.lines ){
        //beggining of the line each new line
        this.nextCharCoordinate = 0;
        //get the number of line
        this.line = +line;
        //goes through each word of each line
        for( word in this.lines[ line ] ){
          //add a whitespace before each word of the line, but not the fist one
          this.nextCharCoordinate += word > 0 ? this.getCharWidth( ' ' ) : 0;
          //goes through each letter of each word
          for( letters in this.lines[ line ][ word ] ){
            currentLetter = this.lines[ line ][ word ][ letters ];
            //draw each word
            this.drawLetter( currentLetter );

            //coordinate of the last char (to use in a pointer for example)
            this.lastChar.x = this.currentLineWidth - 12;
            this.lastChar.y = ( this.line ) * ( ( this.getCharLengthY( currentLetter ) + ( 2 + this.lineHeight ) ) * this.size );
          }
        }
      }
      //set to true because it's already cached, so draw only one time
      this.done = true;
    }
    //draw the cache canvas
    this.context.drawImage( this.preCanvas, this.x, this.y );
  };

  /**
  * Add a new line
  **/
  Runes.prototype.addLine = function() {
    this.line++;
  };

  /**
  * Add a new character to the text and draw the new character
  **/
  Runes.prototype.addChar = function( char ) {
    //if it's a uppercase font convert every character to upprcase
    char = this.font.uppercase ? char.toString().toUpperCase() : char.toString();
    //add the char to the text
    this.text += char;

    //coordinate to use in a pointer
    this.lastChar.x = this.currentLineWidth;
    this.lastChar.y = ( this.line ) * ( ( this.font.commonLength.y + ( 2 + this.lineHeight ) ) * this.size );
    //increment the width of the current line
    this.currentLineWidth += this.getCharWidth( char );

    //if the current line width is greater than the text container add a new line
    if( this.currentLineWidth >= this.containerWidth ){
      this.currentLineWidth = this.getCharWidth( char );
      this.addLine();
      this.setHeight( this.height );
      //draw everything again each new line
      this.done = false;
    }


    //whitespace
    if(char === ' '){
      this.nextCharCoordinate += this.getCharWidth( ' ' );
      //don't need to draw if it's a whitespace
      return false;
    }
    //draw char
    this.drawLetter( char );
  };

  //get the char pixel width
  Runes.prototype.getCharWidth = function( letter ) {
    return ( this.size * ( this.getCharLengthX( letter ) + ( 1 + this.letterSpacing ) ) );
  };

  //get the char pixel height
  Runes.prototype.getCharHeight = function( letter ) {
    return ( this.size * ( this.getCharLengthY( letter ) + ( 1 + this.lineHeight ) ) );
  };

  //Get the x array length of a char
  Runes.prototype.getCharLengthX = function( letter ) {
    if( letter === ' ' ){
      return this.whitespaceSize;
    }

    letter = this.font.uppercase ? letter.toString().toUpperCase() : letter.toString();

    return this.font[ letter ][0].length;
  };

  //Get the y array length of a char
  Runes.prototype.getCharLengthY = function( letter ) {
    if( letter === ' ' || typeof letter === 'undefined' ){
      return this.whitespaceSize;
    }

    letter = this.font.uppercase ? letter.toString().toUpperCase() : letter.toString();

    return this.font[ letter ].length;
  };

  //set the height of the cache canvas
  Runes.prototype.setHeight = function( height ) {
    this.preCanvas.height = height;
  };

  //set the width of the cache canvas
  Runes.prototype.setWidth = function( width ) {
    this.preCanvas.width = width;
    //draw everything again
    this.done = false;
  };

  //set a new text
  Runes.prototype.setText = function ( text ) {

    this.text = this.font.uppercase ? text.toString().toUpperCase() : text.toString();
    //draw everything again
    this.done = false;

    return text;
  };

  //set the space between each line
  Runes.prototype.setLineHeight = function( lineHeight ) {

    this.lineHeight = lineHeight;
    //draw everything again
    this.done = false;

    return lineHeight;
  };

  //set the space between each letter
  Runes.prototype.setLetterSpacing = function( letterSpacing ) {

    this.letterSpacing = letterSpacing;
    //draw everything again
    this.done = false;

    return letterSpacing;
  };

  //set the size of the font
  Runes.prototype.setSize = function ( size ) {

    this.size = Math.round( size );
    //draw everything again
    this.done = false;

    return size;
  };

  //set the x and y position of the text (top left corner)
  Runes.prototype.setPosition = function( x, y ) {
    this.x = x;
    this.y = y;
  };

  //global scope
  global.Runes = Runes;
  global.fontRunes = fontRunes;

}(this));
