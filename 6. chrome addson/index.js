// const btnfn = () => {
//     console.log("Button clicked using a function ")
// }
let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads')); //string from localstorage back to array

//replaced with chrome
// const tabs = [
//   {
//     url: 'http://www.linkedin.com/in/per-harald-borgen',
//   },
// ];

const render = (leads) => {
  let listItems = '';

  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a href='"+ myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"  ; //ie make all the list item strings and save them once
    listItems += `<li><a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`; //ie make all the list item strings and save them once
  }
  document.getElementById('item').innerHTML = listItems; //now render them
};

//if leads exist in storage, change it to array and give save itto myleads
//run the rest of the code
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

document.getElementById('delete-btn').addEventListener('dblclick', () => {
  localStorage.clear(); //this deletes the copy from the backed
  myLeads = []; //this will delete our local copy
  render(myLeads);
});

document.getElementById('input-btn').addEventListener('click', () => {
  myLeads.push(document.getElementById('input-el').value); //PUSH to local array myLeads
  document.getElementById('input-el').value = ''; //before i render again, clear: wont affect our list bc they are separate
  localStorage.setItem('myLeads', JSON.stringify(myLeads)); //convert to string and save to localstorage
  render(myLeads);
});

// in order to separate front end from backend, instead of passing a fn inside the button
// we use event listener pointing to the same field but using the id

// document.getElementById('open-box-btn').addEventListener('click', () => {
//     console.log("clicked!")
// })

//getting the url of any current open tab
document.getElementById('tab-btn').addEventListener('click', () => {
  //chrome fn to get current url
  chrome.tabs.query(
    {
      active: true, //active tab
      currentWindow: true, //in the current window
    },
    (tabs) => {
      myLeads.push(tabs[0].url); //using hardcoded uri from our own object
      localStorage.setItem('myLeads', JSON.stringify(myLeads));
      render(myLeads);
    }
  );
});
