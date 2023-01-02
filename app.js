// get the elements
const btnColumn = document.querySelector('.btn-column');
const btnRow = document.querySelector('.btn-row');
const btnGap = document.querySelector('.btn-gap');
const gridContainer = document.querySelector('.grid');

const animateOptions = {
  duration: 600,
  easing: 'backInOut',
  onStart: (animatingElementList)=> {
    console.log('animate start!')
  },
}
animateCSSGrid.wrapGrid(gridContainer, animateOptions)

btnColumn.addEventListener('click', () => {
  console.log('btn column clicked!')
  gridContainer.classList.toggle('grid-column')
})
btnRow.addEventListener('click', () => {
  console.log('btn row clicked!')
  gridContainer.classList.toggle('grid-row')

})
btnGap.addEventListener('click', () => {
  console.log('btn gap clicked!')
  gridContainer.classList.toggle('grid-gap')

})