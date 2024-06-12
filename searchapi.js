const accessKey = "MVJtP2l75qTDMx1EGH6dXxJE7N4l7cBjCzAzXtCTUG0"

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

function searchImages() {
    inputData = inputE1.value;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${inputData}&client_id=${accessKey}&page=${page}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const results = data.results;
          
            searchResults.innerHTML = "";   //for clearing previous searched item
         
            
            

            results.forEach((result) => {
                const imageWrapper = document.createElement("div");
                imageWrapper.classList.add("search-result");
                const image = document.createElement("img");
                image.src = result.urls.small;
                image.alt = result.alt_description;
                const imageLink = document.createElement("a");
                imageLink.href = result.links.html;
                imageLink.target = "_blank";
                imageLink.textContent = result.alt_description;

                imageWrapper.appendChild(image);
                imageWrapper.appendChild(imageLink);
               searchResults.appendChild(imageWrapper);
              
               
          });

            console.log("hello", data);
           

        })
      
   
        .catch(error => {
            console.log('There was a problem with your fetch operation:', error);
        });

     page++
     if (page > 1) {
         showMore.style.display = "block"
     }

    //  document.querySelector("form").reset();
    
 }

 formE1.addEventListener("submit", (e) => {
    e.preventDefault();
     page = 1;
     searchImages();
 });

 showMore.addEventListener("click", () => {
    
     searchImages();
 });




// async function searchImages() {
//     inputData = inputE1.value;
//     const url =`https://api.unsplash.com/search/photos?query=${inputData}&client_id=${accessKey}&page=${page}`;

//     const response = await fetch(url);
//     const data = await response.json();
            
//     const results = data.results;

// console.log("hello", data);
//    
//         searchResults.innerHTML = "";
//     
//     results.map((result) => {
//         const imageWrapper = document.createElement("div");
//         imageWrapper.classList.add("search-result");
//         const image = document.createElement("img");
//         image.src = result.urls.small;
//         image.alt = result.alt_description;
//         const imageLink = document.createElement("a");
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";
//         imageLink.textContent = result.alt_description;

//         // imageWrapper.appendChild(image);
//         // imageWrapper.appendChild(imageLink);
//         // searchResults.appendChild(imageWrapper);
//     });
    
//     page++;
//     if (page > 1) {
//         showMore.style.display = "block";
//     }
// }


// formE1.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     searchImages();
// });

// showMore.addEventListener("click", () => {
//     searchImages();
// });


