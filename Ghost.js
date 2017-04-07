var Ghost = function(stage,assetManager){
    function tickEvent() {

        // X AXIS OPERATIONS:

        // Guarantee that the enemy is within the game boundaries
        if (ghostXPos < _width && ghostXPos > 0) {
            // Move the enemy by its speed
            ghostXPos += ghostXSpeed;

        } else {
            // Invert the direction in which the enemy moves
            ghostXSpeed = ghostXSpeed * (-1);
            // Move the enemy by its speed
            ghostXPos += ghostXSpeed;

        }

        // Y AXIS OPERATIONS:

        // Guarantee that the enemy is within the game boundaries
        if (ghostYPos < _height && ghostYPos > 0) {
            // Move the enemy by its speed
            ghostYPos += ghostYSpeed;
        } else {
            // Invert the direction in which the enemy moves
            ghostYSpeed = ghostYSpeed * (-1);
            // Move the enemy by its speed
            ghostYPos += ghostYSpeed;
        }
        // Move the sprite according to the enemy
        snakeLiving.x = ghostXPos;
        snakeLiving.y = ghostYPos;
        snakeLiving1.x = ghostXPos;
        snakeLiving1.y = ghostYPos;

    }

    function handleMouseDown(event) {
        //Increasing speed of the enemy
        ghostXSpeed *= 1.05;
        ghostYSpeed *= 1.06;

        //Obtain shot position
        var shotX = Math.round(event.clientX);
        var shotY = Math.round(event.clientY);
        var spriteX = Math.round(snakeLiving.x);
        var spriteY = Math.round(snakeLiving.y);
        var spriteX = Math.round(snakeLiving1.x);
        var spriteY = Math.round(snakeLiving1.y);

        //Computes the X and Y distance using the absolute value
        var distX = Math.abs(shotX - spriteX);
        var distY = Math.abs(shotY - spriteY);

        //If you hit the body or head then its a hit but the wings is a miss.
        if (distX < 30 && distY < 55) {
            //If the snake is hit, remove the sprite 
            stage.removeChild(snakeLiving);
            // Add 50 Points for the kill
            score += 50;
            console.log("Hit!");
            // Update the score text
            scoreText.text = "Kills: " + score.toString();

            // Increase speed
            ghostYSpeed *= 1.25;
            ghostXSpeed *= 1.3;

            // Create a new enemy
            var timeToCreate = Math.floor((Math.random() * 3500) + 1);
            setTimeout(goodGhost, timeToCreate);
            setTimeout(badGhost, timeToCreate);

        } else {
            // Miss
            
            // Decrease the score by 10
            score -= 10;
            goodGhost();
            console.log("You Missed!");
            // Update score text
            scoreText.text = "Kills: " + score.toString();
        }
    }
}
 