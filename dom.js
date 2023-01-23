let savedBooks = [];
let saveBook = document.querySelector('button');
saveBook.addEventListener('click', (evt) => {
    evt.preventDefault()
    let userInput = document.querySelector('input')
    let nameReturn = document.querySelector('h3')
    nameReturn.innerHTML = userInput.value
    savedBooks.push(userInput.value)
    userInput.value = ''
    window.localStorage.setItem('MyBookList', JSON.stringify(savedBooks))
    


})
