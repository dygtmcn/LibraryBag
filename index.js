import { bookArray } from "./book.js";

const initialBooksToShow = 4
const booksToAddOrRemove = 4
let totalBooksRendered = initialBooksToShow;

document.addEventListener("click", (e) => {
    if (e.target.id ==="view-more"){
        viewMore()
    }
    else if(e.target.id ==="view-less"){
        viewLess()
    }
})

function viewMore() {
    totalBooksRendered += booksToAddOrRemove
  
    if (totalBooksRendered >= bookArray.length) {
      document.getElementById("view-more").classList.add("hidden")
      document.getElementById("view-less").classList.remove("hidden")
    }
  
    renderBooks(totalBooksRendered);
  }

  function viewLess() {
    if (totalBooksRendered >= initialBooksToShow + booksToAddOrRemove) {
        totalBooksRendered -= booksToAddOrRemove
      }
    else{
        totalBooksRendered = initialBooksToShow
        document.getElementById("view-more").classList.remove("hidden")
        document.getElementById("view-less").classList.add("hidden")
    }
    
      renderBooks(totalBooksRendered);
  }

function renderBooks(totalBooks){
    let booksHtml = ""
    const maxBooks = Math.min(totalBooks, bookArray.length);
    for (let i = 0; i<maxBooks; i++){
        const {image, title, author, id} = bookArray[i]
        booksHtml += `
        <div class="book">
            <a href="blog.html?id=${id}" class="booklink">
                <div class="cover">
                    <img src="${image}" class="cover-img" draggable="false">
                    <div class="book-preview">
                        <h3 class="book-title">${title}</h3>
                        <p class="book-author">${author}</p>
                    </div>
                </div>
            </a> 
        </div>`
    }
    document.getElementById("book-container").innerHTML = booksHtml
}

renderBooks(totalBooksRendered);