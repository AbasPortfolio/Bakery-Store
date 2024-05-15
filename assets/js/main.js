/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navMenu){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navMenu){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav we remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is grater than 50 viewport height, add the scroll class
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scroll = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show scroll class
    this.scrollY >= 350 ? scroll.classList.add('show-scroll') 
    : scroll.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offserTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/

/* =================== CART ================== */
const cartBtn = document.getElementById('cart-btn'),
      cartInfo = document.getElementById('cart-item'),
      cartClose = document.getElementById("close")

cartBtn.addEventListener("click", ()=>{
    cartInfo.classList.toggle("show-cart")
})
cartClose.addEventListener("click", ()=>{
    cartInfo.classList.toggle("show-cart")
})



    const myBtn = document.querySelectorAll('.favourite__button')
    
    
    myBtn.forEach(function(btn){
        btn.addEventListener("click",function(event){
            if(event.target.parentElement.classList.contains('favourite__button')){
                let fullPath = event.target.parentElement.parentElement.previousElementSibling.children[0].src
                let pos = fullPath.indexOf("img") + 3;
                let partPath = fullPath.slice(pos)
                
                const item = {}
                item.img = `cartImg${partPath}`
                let name = event.target.parentElement.previousElementSibling.children[0].textContent
                item.name = name

                let price = event.target.parentElement.previousElementSibling.children[2].textContent
                let finalPrice = price.trim()
                item.price = finalPrice


                const cartItem = document.createElement('div')
                cartItem.classList.add('cart-about')
                cartItem.innerHTML = `
                    <article>
                    <img src= "assets/${item.img}" alt="">
                    <h2>${item.name}</h2>
                    <h5>R${item.price}</h5>
                    <i class="ri-delete-bin-4-line"></i>
                    </article>`;
                
                    const cartInfo = document.getElementById('cart-item');
                    const cartTotal = document.querySelector('.cart-total');
                    cartInfo.insertBefore(cartItem, cartTotal)
                    
            alert('Item added to the cart')

                showTotal();


            }
        })
        function showTotal(){
            const total = [];
            const items = document.querySelectorAll(".favourite__price")
            items.forEach(function(item){
                total.push(parseFloat(item.textContent))
            })
            
            const totalMoney = total.reduce(function(total, item){
                total += item
                return total
            }, 0)
            const finalMoney = totalMoney.toFixed(2)

            document.getElementById("total_money").textContent = finalMoney
            document.querySelector(".item_total").textContent = finalMoney
            document.getElementById("cart__items").textContent = total.length
        }

    })
