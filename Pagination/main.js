const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const nav = $('.nav')
const lists = $$('.nav li')
const btnPrevCurrent = $('.prev.prevNum ')
const btnNextCurrent = $('.next')
const btnPrevPage = $('.prev.prevPage')
const btnNextPage = $('.nextPage')
let current = 0

lists.forEach((item, index) => {
    item.setAttribute('data-index', index)
})


function handlEvents() {
    if(current == 0) {
        btnPrevCurrent.disabled = true
    }

    nav.addEventListener('click', (e) => {
        const li = e.target.closest('li')
        if(li) {
            const id = li.dataset.index
    
            $('li.active').classList.remove('active')
            lists[id].classList.add('active')
    
            current = id
            
            progress(current)
        }
    })

    btnNextCurrent.addEventListener('click', function(e) {
        current++

        progress(current)
        
        $('li.active').classList.remove('active')
        lists[current].classList.add('active')
    })
    
    btnPrevCurrent.addEventListener('click', function(e) {
        current--
            
        progress(current)

        $('li.active').classList.remove('active')
        lists[current].classList.add('active')
    })

}

handlEvents()

function progress(id) {
    
    btnPrevCurrent.disabled = (id < 1) ? true : false;
    btnNextCurrent.disabled = (id > lists.length - 2) ? true : false;
    
}