
document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('container')
const text = document.getElementById('text-size')
const body = document.querySelector('body')
const btn = document.getElementById('btn')

function gridSetUp(size) {
  if(size<=100){
  for(let i=0; i<size*size; i++){
  let div = document.createElement('div')
  div.className = ('square')
  let height = (640-(size-1)*2)/size
  let width = (640-(size-1)*2)/size
  div.style.height = `${height}px`
  div.style.width = `${width}px`
  container.appendChild(div)
  text.textContent = `Current size:${size}x${size}`
}
} else if (size>100) {
  alert('enter a smaller number!')
} else {
  alert('error')
} 
}

btn.addEventListener('click', () =>{
  const size = prompt('Size?')
  gridSetUp(size)
})

container.addEventListener('click', function(e) {
    e.target.classList.add('active')
})
container.addEventListener('mousedown' && 'mouseover', function(e) {
  e.target.classList.add('active')
})

})