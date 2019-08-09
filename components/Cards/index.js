// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// const addCard = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles') 
.then( (response) =>{
    // console.log(response.data.articles);

    // const qsa = (i) => document.querySelector(i);
    // console.log('This is qsa', qsa);

    // const grabBootstrap = qsa(response.data)
    // console.log('This is grabBootstrap', grabBootstrap);

    const bootstrapArray = Array.from(response.data.articles.bootstrap);
    const javascriptArray = Array.from(response.data.articles.javascript);
    const jqueryArray = Array.from(response.data.articles.jquery);
    const nodeArray = Array.from(response.data.articles.node);
    const technologyArray = Array.from(response.data.articles.technology);

    // console.log('This is bootstrapArray', bootstrapArray);
    // console.log('This is JavascriptArray', javascriptArray);
    // console.log('This is jqueryArray', jqueryArray);
    // console.log('This is nodeArray', nodeArray);
    // console.log('This is technologyArray', technologyArray);

    // THIS IS BAD REPEATING I THINK 
    bootstrapArray.map(bootData =>{
        // console.log("this is bootData:", bootData);
        let newCard = cardBuilder(bootData);
        console.log("newBootCard:", newCard);
        let newLocation = document.querySelector('.cards-container');
        newLocation.appendChild(newCard);
    })
    javascriptArray.map(bootData =>{
        // console.log("this is bootData:", bootData);
        let newCard = cardBuilder(bootData);
        console.log("newBootCard:", newCard);
        let newLocation = document.querySelector('.cards-container');
        newLocation.appendChild(newCard);
    })
    jqueryArray.map(bootData =>{
        // console.log("this is bootData:", bootData);
        let newCard = cardBuilder(bootData);
        console.log("newBootCard:", newCard);
        let newLocation = document.querySelector('.cards-container');
        newLocation.appendChild(newCard);
    })
    nodeArray.map(bootData =>{
        // console.log("this is bootData:", bootData);
        let newCard = cardBuilder(bootData);
        console.log("newBootCard:", newCard);
        let newLocation = document.querySelector('.cards-container');
        newLocation.appendChild(newCard);
    })
    technologyArray.map(bootData =>{
        // console.log("this is bootData:", bootData);
        let newCard = cardBuilder(bootData);
        console.log("newBootCard:", newCard);
        let newLocation = document.querySelector('.cards-container');
        newLocation.appendChild(newCard);
    })

})
.catch((error) => {
    console.log('Error:', error);
})



// axios.get('https://lambda-times-backend.herokuapp.com/articles') 
// .then( (response) =>{
//     console.log(response);
//     // Response.data is an object with arrays inside
//     // console.log(typeof response.data);

//     const nodeArray = Array.prototype.slice.call(document.querySelector(response.data)[0]);
    
//     console.log(nodeArray);
//     // response.data.topics.forEach( topicItem => {
//     //     let articleCard = cardBuilder(topicItem);
//     //     addTopicTab.appendChild(topicCard);
//     // })
// })
// .catch((error) => {
//     console.log('Error:', error);
// })


function cardBuilder(ele){
//creating the elements of the card
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let imgSrc = document.createElement('img');
    let credit = document.createElement('span');
// creating structure of the card
    card.appendChild(cardHeadline);
    card.appendChild(author);
        author.appendChild(imgContainer);
            imgContainer.appendChild(imgSrc);
        author.appendChild(credit);
//attaching class lists
    card.classList.add("cards", "cards-container");
    cardHeadline.classList.add('headline');
    author.classList.add('headline');
    imgContainer.classList.add('img-container');
    imgSrc.classList.add('img');
    credit.classList.add('span');
//setting to page
    cardHeadline.textContent = ele.headline;
    imgSrc.src = ele.authorPhoto;
    credit.textContent = ele.authorName;
//return it!
return card;
}