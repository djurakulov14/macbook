let img = document.querySelector('.imgWhite')
let color = document.querySelector('.color')
let white = document.getElementById('white')
let spaceGray = document.getElementById('spaceGray')



spaceGray.onclick = () => {
    color.innerHTML = 'Space Gray'
    white.classList.remove('active')
    
    spaceGray.classList.add('active')
    img.classList.remove('imgWhite')
    img.classList.add('imgGray')

}
white.onclick = () => {
    color.innerHTML = 'White'
    spaceGray.classList.remove('active')

    white.classList.add('active')
    img.classList.remove('imgGray')
    img.classList.add('imgWhite')
}



let qwerty = document.querySelectorAll('.noclicked')


let five = document.getElementById('512GBSSD')
let one = document.getElementById('1TBSSD')
let two = document.getElementById('2TBSSD')
let four = document.getElementById('4TBSSD')


let cost = 1.999





qwerty.forEach(item => {
    item.onclick = () => {
        qwerty.forEach(a => a.classList.remove('actived'))
        
        item.classList.add('actived')
    }
})

// document.getElementById('1TBSSD').onclick = function(){
//     cost + 2.000
//     document.getElementById('price').innerHTML = cost
// }
// document.getElementById('2TBSSD').onclick = function(){
//     cost + 6.000
//     document.getElementById('price').innerHTML = cost
// }
// document.getElementById('4TBSSD').onclick = function(){
//     cost + 1.200
//     document.getElementById('price').innerHTML = cost
// }