const tabs = document.querySelectorAll('.tab');

let tabId = 1;

let currentActiveTab = document.querySelector(`.tab[data-tab = "${tabId}"]`);
let currentActiveContent = document.querySelector(`.tab-content[data-content = "${tabId}"]`);


for(let tab of tabs) {
  tab.addEventListener('click', () => {
    if(currentActiveTab && currentActiveContent) {
      currentActiveTab.classList.remove('active');
      currentActiveContent.classList.remove('active');
    }

    tabId = (tab.dataset.tab);

    let content = document.querySelector(`.tab-content[data-content = "${tabId}"]`)

    content.classList.add('active');
    tab.classList.add('active');

    currentActiveTab = tab;
    currentActiveContent = content;
  });
}





