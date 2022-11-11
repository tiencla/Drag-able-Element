//* get click position
//* get distance from initial click to container's top left corner
//* as box moves, get new box
//* determine the new top left corner from new box position

//* find the main container dimensions
//* get top left dimensions
//* check if box is on the end of top left container
//* get bottom right coordinates
//* check if box is on the end of bottom right container

function moveMe() {
  const box = document.querySelector('movable');

  let mouseX,
    mouseY,
    isMouseDown = false,
    boxTop,
    boxLeft,
    diffY,
    diffX;

  function mouseDown(event) {
    isMouseDown = true;

    mouseX = event.clientX; // // clientX method to find horizontal coordinates
    mouseY = event.clientY; // //clientY method to find vertical coordinates

    boxTop = box.offsetTop; // //distance to top left border of box
    boxLeft = box.offsetLeft;

    diffY = mouseY - boxTop; // //calculate distance from initial click to container top left
    diffX = mouseX - boxLeft;
  }

  function mouseMove(event2) {
    if (!isMouseDown) return; // //if mouse is not down dont return below

    const newMouseX = event2.clientX;
    const newMouseY = event2.clientY;

    console.log(newMouseX, newMouseY);
  }

  function mouseUp() {
    isMouseDown = false;
  }

  box.addEventListener('mousedown', mouseDown);
  document.addEventListener('mouseup', mouseUp);
  document.addEventListener('mousemove', mouseMove);
}
