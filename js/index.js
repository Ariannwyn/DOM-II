// Your code goes here
// let contentSection = document.querySelector('.content-section');
// contentSection.addEventListener('cick', (event) => {
//   alert('You Clicked the Sample Button!')
// })

//1
window.addEventListener('load', (event) => {
  //alert('Welcome');
});

//2
window.addEventListener('mousewheel', (event) => {
  //alert('Thanks for browsing');
});

//3
color= ['red', 'orange', 'green', 'blue',]
let hl2 = document.getElementsByTagName('h2');
for(let i=0; i<hl2.length; i++) {
  hl2[i].addEventListener('mouseover', function(event) {
  hl2[i].style.color = color[i];
})}

//4
let busImg = document.getElementsByTagName('img')[0];
busImg.addEventListener('mouseenter', (event) => {
  busImg.style.transform = "scale(1.2)";
  busImg.style.transition = "all 0.3s";
});

//5
busImg.addEventListener('mouseleave', (event) => {
  busImg.style.transform = "scale(1)";
  busImg.style.transition = "all 0.3s";
});

//6
window.addEventListener('keydown', (event) => {
  alert('Dont double click the boat');
});

//7
let boatImg = document.getElementsByTagName('img')[3];
let body = document.getElementsByTagName('body')[0];
boatImg.addEventListener('dblclick', (event) => {
  body.style.display = "none";
});

//8
let mapImg = document.getElementsByTagName('img')[1];
mapImg.addEventListener('mousemove', (event) => {
  mapImg.style.border = "solid red";
});

//9
let italyImg = document.getElementsByTagName('img')[2];
italyImg.addEventListener('mouseout', (event) => {
  italyImg.style.border = "solid red";
});

//10
let p = document.getElementsByTagName('p')[0];
// This doesn't work.
// p.addEventListener('select', (event) => {
//   p.style.color = "red";
// });

p.addEventListener('contextmenu', (event) => {
  p.style.backgroundColor = "tan";
});

