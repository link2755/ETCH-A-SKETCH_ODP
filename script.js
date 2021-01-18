const grid = document.querySelector('.grid-container');


const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', teste)

const slider = document.querySelector('.slider');
slider.addEventListener('change', newGrid)


let inkColor = 'black';


const colorSelectors = document.querySelectorAll('.colorSelector');
colorSelectors.forEach(selector =>{
    selector.addEventListener('click', changeColor);
})


function teste(){
    console.log(this.value);
}

function createDivs(size = 16){

    let nTiles = size*size;
    for(let i=0; i < nTiles; i++){
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.backgroundColor = 'rgb(255, 255, 255';//white
        grid.appendChild(tile);
    }

    const gridTile = document.querySelectorAll(".tile");
    gridTile.forEach(tile => tile.addEventListener('mouseover', paintTile));
}

function paintTile(){

    switch(inkColor){
        
        case 'gray': {
            let tileRGB = String(this.style.backgroundColor);
            tileRGB = tileRGB.match(/\d+/g);// match receives a regex to match ao digits in the string then return an array containing them
            this.style.backgroundColor = `rgb(${tileRGB[0]-26},${tileRGB[1]-26},${tileRGB[2]-26})`;
            break;
        }
        case 'random': {
            this.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
            break;
        }
        case 'pick': {
            this.style.backgroundColor = pickerColor();
            break;
        }case'eraser': {
            this.style.backgroundColor = `rgb(255,255,255)`;
            break;
        }default: {
            this.style.backgroundColor = `rgb(0,0,0)`;
            break;
        }
    }

}

function pickerColor(){
    return colorPicker.value;
}

function randomRGB(){
    return Math.random() * 255;
}

function changeColor(){
    console.log(this.value);
    inkColor = this.value;
}


function clearGrid(){
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.style.backgroundColor = 'rgb(255, 255, 255');//white
}

function newGrid(){

    const newSize = this.value;
    console.log(newSize);

    const gridTile = document.querySelectorAll(".tile");
    gridTile.forEach(tile => tile.remove());

    grid.style.gridTemplateColumns = `repeat(${newSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${newSize}, auto)`;


    createDivs(newSize)


}



createDivs(16);

