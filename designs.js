// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWeight');
// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelector('#submitBtn');
submitButton.addEventListener('click', makeGrid);
const tbl = document.querySelector('#pixelCanvas');
tbl.addEventListener('click', function(e){
        e.target.style.backgroundColor = color.value;
      });
function makeGrid() { 
  tbl.innerHTML = '';
  for (let i = 0; i < height.value; i++) {
    const tr = document.createElement('tr');    
    for (let j = 0; j < width.value; j++) {
      const td = document.createElement('td'); 
      tr.appendChild(td);
    }
    tbl.appendChild(tr);
  }
}
