 // game variables
    var stage = null;
    var canvas = null;
    // frame rate of game
    var frameRate = 26;

    // game objects
    // Asset Manager
    var assetManager;
    // Background
    var background = null;
    // Intro
    var introCaption = null;
    // Game Over Caption
    var gameOverCaption = null;
    // Set the game time
    // Game Time
    var gameTime = 0;
    // Game Time Text
    var timerText;

    // Canvas width and height 
    var _width = 600;
    var _height = 600;

    // Mouse position
    var mouseXPosition;
    var mouseYPosition;

    var mouseDown = null;

    // Sprites Animation Call
    var snakeLiving;
    var snakeLiving1;


    // Set the position of the target
    var ghostXPos = 100;
    var ghostYPos = 100;

    // Set the speed of the target
    var ghostXSpeed = 1.5;
    var ghostYSpeed = 1.75;

    // Set the score text
    // Score
    var score = 0;
    // Score Text
    var scoreText;

    var spriteSheet;