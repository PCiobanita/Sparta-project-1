# Sparta-project-1
# OctAvoid
### Description
This is a game I have as part of Sparta-project requirements.
In this project the player has to avoid geometrical shapes, mainly octagons. The shapes have a line missing from them and they expand from middle. The playble area is limited and the points are increased with each shape that spawns. 

### Languages used
* JavaScript
* HTML
* CSS

### How to download
1. https://github.com/PCiobanita/Sparta-project-1
2. Follow the link and clone the project.
2. After project cloned locate the file and open the index.html using a web browser.


### Challenges (you can include images and code block here)
1. Collision detection was a big challenge. I had to find a way to check collision between a line and player-object with coordinates always moving. 
2. Another challenge was creating a delay between shape spawning. I have used requestanimationframe function which helps canvas refresh every frame. I managed to do it by keeping track of real time and using that value to create delay.

### Learning points
1. Using canvas: creating objects, shapes, using animation function.
2. Collision detection every frame.
3. Learned how to add velocity on objects and using the velocity with animation frame to create a moving effect.
