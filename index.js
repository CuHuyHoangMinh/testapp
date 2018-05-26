var rect = {
  perimeter: (x,y)=> ( 2 * (x+y) ),
  area: (x,y) => (x*y)
};

function solveRect(l,b) {
  console.log("solve: ")
  if (l<=0|| b<=0)
  {
    console.log("wrong value");
  } else {
    {
      console.log("area: "+ rect.area(b,l));
      console.log("perimeter :"+ rect.perimeter(b,l));
    }
  }

}

solveRect(2,4);
solveRect(3,4);
solveRect(-2,4);
