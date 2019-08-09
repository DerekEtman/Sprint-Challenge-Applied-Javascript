// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headBar = document.querySelector('.header-container');

headBar.appendChild(header());

function header() {
//creating the elements
    let header1 = document.createElement('div');
    let date1 = document.createElement('span');
    let title1 = document.createElement('h1');
    let temp1 = document.createElement('span');
    
//creating the structure
    header1.appendChild(date1);
    header1.appendChild(title1);
    header1.appendChild(temp1);

// createing the class lists
    header1.classList.add('header');
    date1.classList.add('date');
    title1.classList.add('h1');
    temp1.classList.add('temp');

//setting  elements to page
    date1.textContent = 'SMARCH 28, 2019';
    title1.textContent = 'Lambda Times';
    temp1.textContent = '98°';
// returning header

return header1;


}
