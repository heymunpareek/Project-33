Create GameStates for different levels
import spriteImgs and create a beautiful animation
create a sprite
make it walk from left to right on keyDown("left")
If the sprite goes out of the canvas x position (i.e, sprite.x < 0) {
    go to next level
}
Create snow class 
make snow animation
    create a var of maxSnow = 100;
    create an array called snowfall
    push [new snow(args)] into snowfall array
    create a for loop in the setup for creating snow
        eg: for(var i = 0; i < maxSnow; i++) {
            snowfall[i]
        }
    in draw - display snowfall (similarly) using for loop
After the sprite completes all the levels - 
    display (journey completed)

#usecreativity