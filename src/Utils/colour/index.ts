/*
  generator to rotate colors
*/

function* colorsGenerator(){
  const colors = [
    "#ff0000",
    "#00ff00", 
    "#0000ff", 
    "#ffff00", 
    "#ff00ff", 
    "#00ffff", ]
    let index = 0;
    while(true){
      yield colors[index++ % colors.length];
    }
}

export {colorsGenerator}