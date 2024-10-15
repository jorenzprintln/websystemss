const bioButton = document.getElementById('bioBtn');
const bioContainer = document.getElementById('bioCont');

bioButton.addEventListener('click', function() {
    if (bioContainer.style.display === 'none' || bioContainer.style.display === '') {
        bioContainer.style.display = 'block';
    } else {
        bioContainer.style.display = 'none';
    }
});

const close = document.getElementById('closeBtn');
const bioCont = document.getElementById('bioCont');

close.addEventListener('click', function(){
    if (bioCont.style.display === 'block'){
        bioCont.style.display = 'none';
    }
});

const hobbyButton = document.getElementById('hobBtn');
const hobbyContainer = document.getElementById('hobCont');

hobbyButton.addEventListener('click', function() {
    if (hobbyContainer.style.display === 'none' || hobbyContainer.style.display === '') {
        hobbyContainer.style.display = 'block';
    } else {
        hobbyContainer.style.display = 'none';
    }
});

const close1 = document.getElementById('closeBtn1');
const hobCont = document.getElementById('hobCont');

close1.addEventListener('click', function(){
    if (hobCont.style.display === 'block'){
        hobCont.style.display = 'none';
    }
});

const carButton = document.getElementById('carBtn');
const carContainer = document.getElementById('carCont');

carButton.addEventListener('click', function() {
    if (carContainer.style.display === 'none' || carContainer.style.display === '') {
        carContainer.style.display = 'block';
    } else {
        carContainer.style.display = 'none';
    }
});

const close2 = document.getElementById('closeBtn2');
const carCont = document.getElementById('carCont');

close2.addEventListener('click', function(){
    if (carCont.style.display === 'block'){
        carCont.style.display = 'none';
    }
});

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function() {
    const bioBtn = document.getElementById('bioBtn');
    const hobBtn = document.getElementById('hobBtn');
    const carBtn = document.getElementById('carBtn');

    const bioCont = document.getElementById('bioCont');
    const hobCont = document.getElementById('hobCont');
    const carCont = document.getElementById('carCont');

    const closeBtns = document.querySelectorAll('.closeBtn');

    function showContent(contentToShow) {
        bioCont.style.display = 'none';
        hobCont.style.display = 'none';
        carCont.style.display = 'none';

        contentToShow.style.display = 'block';
        contentToShow.classList.add('fade-in');
        setTimeout(() => {
            contentToShow.classList.remove('fade-in');
        }, 1000);
    }

    bioBtn.addEventListener('click', () => showContent(bioCont));
    hobBtn.addEventListener('click', () => showContent(hobCont));
    carBtn.addEventListener('click', () => showContent(carCont));

    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.parentElement.style.display = 'none';
        });
    });
});
