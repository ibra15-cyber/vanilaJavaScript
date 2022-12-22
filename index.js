//fn that takes images as list and map all in image tag in the <div with an id image

//taking images as a list
const listOfImages = ['icon.png', 'icon2.png', 'icon3.png'];

//created a fn to set images in div
const renderImages = (arr) => {
  let setOnce = '';
  for (let i = 0; i < arr.length; i++)
    setOnce += `<img class="team-img" src="./${arr[i]}" alt=${arr[i]}/>`; //iterate all and save as string

  document.getElementById('image').innerHTML = setOnce; //append the string to our innterHTML
};

renderImages(listOfImages);
