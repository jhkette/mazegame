const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;


const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

// Maze generations

const shuffle = (arr) => {
  let counter = arr.length;
  while(counter > 0){
    const index = Math.floor(Math.random() * counter);
    counter --;

    const temp = arr[counter];
    arr[counter]
    arr[index] = temp
  }
  return arr;
}



/// - ie this is the grid - three sets of arrays
///
///

// using a for loop
// // const grid = 0;
// // for (let i =0; i<3; i++){
// //   grid.push([]);
// //   for(let j =0; j<3; j++){
// //     grid[i].push(false);
// //   }
// }
// the grid
const grid = Array(cells)
  .fill(null)
  .map((a) => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map((a) => Array(cells -1).fill(false));

const horizontals = Array(cells-1)  
  .fill(null)
  .map((a) => Array(cells).fill(false))


console.log(horizontals);
console.log(verticals);


const startRow = Math.floor(Math.random() * cells)
const startColumn = Math.floor(Math.random() * cells)

const stepthrough = (row, column) => {

  // if visited cell return
  if(grid[row][column]){
    return
  }
  // mark as visited
  grid[row][column] = true;
  
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left']
  ]);

  console.log(neighbors);

}

stepthrough(1,1);




























