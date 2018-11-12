// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.getElementById('btnMakeGrid').addEventListener('click', makeGrid);
function makeGrid() {
  const tbl = document.getElementById('pixelCanvas');
  const rows = document.getElementById('inputHeight').value;
  const cols = document.getElementById('inputWeight').value;
  tbl.innerHTML = '';
  for (var i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (var j = 0; j < cols; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.addEventListener('click', function(e) {
        e.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });        
         }
    tbl.appendChild(tr);
}

// Your code goes here!

}
