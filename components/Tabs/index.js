// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//inside this object, Data is returned as an array named topics

const addTopicTab = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics') 
.then( (response) =>{
    // console.log(response);

    response.data.topics.forEach( topicItem => {
        let topicCard = topicBuilder(topicItem);
        addTopicTab.appendChild(topicCard);
    })
})
.catch((error) => {
    console.log('Error:', error);
})

function topicBuilder(ele) {
//creating new elements
    const newTab = document.createElement('div');
//class styling
    newTab.classList.add('tab');
// set on page
    newTab.textContent = ele;
//event listener for click and hover **** FINISH THIS*****
    newTab.addEventListener('click', (clicked) =>{
        clicked.newTab.classList.toggle('active-tab');
    })

//returning newTab
    return newTab;


}