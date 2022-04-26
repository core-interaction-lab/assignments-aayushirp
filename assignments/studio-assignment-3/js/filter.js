const db = {
  id: 'appoREwRng0gEiJqE',
  table: 'Soup-or-Salad?',
  apiKey: 'keyul7nEZff6Uw7lV'
};

const airtableUrl = `https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201?api_key=keyul7nEZff6Uw7lV`

const fetchUrl = url => {
  return fetch(url).then(data => data.json());
}

let records = [];
let soupOrSalad = '';
let sweetOrSavory = '';

const main = async () => {
  const response = await fetchUrl(airtableUrl);
  console.log(response);
  records = response.records;
};

main();

const gridContainer = document.querySelector('.food-container .grid-container');

function filterObjectsAll() {
  gridContainer.innerHTML = '';
  const gridItems = records.map(buildItem);
  console.log(gridItems);
  gridContainer.append(...gridItems);
}

function filterObjectsSoup() {
  gridContainer.innerHTML = '';
  const soupItems = records.filter(record => {
    const isSoup = record.fields['Soup or Salad?'].includes('Soup');
    return isSoup;
  });

  const gridItems = soupItems.map(buildItem);
  console.log(gridItems);
  gridContainer.append(...gridItems);
}

function filterObjectsSalad() {
  gridContainer.innerHTML = '';
  const soupItems = records.filter(record => record.fields['Soup or Salad?'].includes('Salad'));

  const gridItems = soupItems.map(buildItem);
  console.log(gridItems);
  gridContainer.append(...gridItems);
}

function filterObjectsSweet() {
  gridContainer.innerHTML = '';
  const soupItems = records.filter(record => record.fields.Flavour.includes('Sweet'));

  const gridItems = soupItems.map(buildItem);
  console.log(gridItems);
  gridContainer.append(...gridItems);
}

function filterObjectsSavoury() {
  gridContainer.innerHTML = '';
  const soupItems = records.filter(record => record.fields.Flavour.includes('Savoury'));

  const gridItems = soupItems.map(buildItem);
  console.log(gridItems);
  gridContainer.append(...gridItems);
}

function buildItem(item) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('grid-item');
  const titleEl = document.createElement('h3');
  const descriptionEl = document.createElement('div');
  const typeEl = document.createElement('div');
  const imgEl = document.createElement('img');
  // const titleEl = document.createElement('h3');

  imgEl.style.width = '400px';
  imgEl.classList.add('food-item');
  descriptionEl.classList.add('description');
  typeEl.classList.add('type');

  imgEl.src = item.fields.Image[0].url;
  titleEl.innerHTML = item.fields.Food;
  descriptionEl.innerHTML = item.fields.Cube_Rule_Type;
  typeEl.innerHTML = item.fields.Cuisine;

  itemContainer.append(titleEl, descriptionEl, typeEl, imgEl);
  return itemContainer;
}



// fetch('https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201', {
//   headers: {
//     Authorization: 'Bearer keyul7nEZff6Uw7lV',
//   }
// })

// .then (response => response.json())
// .then (data => {
//   const fetchFood = document.querySelector('.filter');

//   data.records.forEach(item => {
// fetchFood.innerHTML += `
// <img src="${item.fields.soup-pics[0].thumbnails.large.url}" alt="open-sandwich" class="soup" id="item1">
// <h3 id="soup">${item.fields.soup}"</h3>
// `
//   })

// });


// filterObjects("all");

// function filterObjects(c) {
//   var x, i;
//   x = document.getElementsByClassName("box");
//   if (c == "all") c = " ";
//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if(x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }

// function filterObjectsSoup() {
//   let soup = document.getElementById('item1');
//   soup.style.opacity = '100%';
//   let soupPics = document.getElementById('soup');
//   soupPics.style.opacity = '100%';
// };

// function addClass(element, name){
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++){
//     if (arr1.indexOf(arr2[i]) == -1){
//       element.className += " " + arr2[i];
//     }
//   }
// };

// function removeClass(element, name){
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i= 0; i < arr2.length; i++){
//     while (arr1.indexOf(arr2[i]) > -1){
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }


// element.className = arr1.join(" ");
// };
