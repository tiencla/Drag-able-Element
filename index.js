//* get click position
//* get distance from initial click to container's top left corner
//* as box moves, get new box
//* determine the new top left corner from new box position

//* find the main container dimensions
//* get top left dimensions
//* check if box is on the end of top left container
//* get bottom right coordinates
//* check if box is on the end of bottom right container

(function () {
  const box = document.querySelector('#movable');
  const message = document.querySelector('#message');

  let mouseX,
      mouseY,
      isMouseDown = false,
      boxTop,
      boxLeft,
      diffY,
      diffX;

  function mouseDown(event) {
    isMouseDown = true;

    const mouseY = event.clientY; // //clientY method to find vertical coordinates
    const mouseX = event.clientX; // // clientX method to find horizontal coordinates

    const boxTop = box.offsetTop; // //distance to top left border of box
    const boxLeft = box.offsetLeft;

    diffY = mouseY - boxTop; // //calculate distance from initial click to container top 
    diffX = mouseX - boxLeft;
  }

  function mouseMove(e) {
    if (!isMouseDown) return; // //if mouse is not down dont return below

    const newMouseY = e.clientY;
    const newMouseX = e.clientX;
    console.log(newMouseY, newMouseX);

    const newBoxTop = newMouseY - diffY;
    const newBoxLeft = newMouseX - diffX;

    box.style.top = newBoxTop + 'px';
    box.style.left = newBoxLeft + 'px';
  }
  
  function mouseUp() {
    isMouseDown = false;
    // message.innerHTML = 'Move me pls O_O';
  }

  box.addEventListener('mousedown', mouseDown);
  document.addEventListener('mouseup', mouseUp);
  document.addEventListener('mousemove', mouseMove);

})();
