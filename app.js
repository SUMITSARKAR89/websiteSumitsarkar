 // ==========================cursor===============================
  const cursorPointer = document.querySelector(".cursor");

//  window.addEventListener('mousemove', (e) => {

//      let x = e.pageX;
//      let y = e.pageY;

//      cursorPointer.style.left = `${x}px`;
//      cursorPointer.style.top = `${y}px`;


//  });

//  ===========================menu===================================

const sideBar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");
const contactList = document.querySelector("#contact-list");


menu.addEventListener('click', () => {
    sideBar.style.display = "block";
    sideBar.style.width = "300px";
    menu.style.opacity = "0";
    contactList.style.display = 'none';

});
function crossbar(){
    sideBar.style.display = "none";
    menu.style.opacity = "1";
    contactList.style.display = 'block';
    sideBar.style.width = "0px";   
};

// ==========================nav bar scroll===================================

window.onscroll = function(){
    scrollbarNavigation();
};
function scrollbarNavigation(){
    const navbar = document.querySelector("nav");

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
        navbar.style.top = "-2px";
    }else{
        navbar.style.top = ""
    }
};

// ==========================number count ===================================
const valueCounts = document.querySelectorAll("[about-data-value]");  // All elements with 'about-data-value'
let interval = 3000;

valueCounts.forEach((valueCount) => {
    let startvalue = 0;
    let endValue = parseInt(valueCount.getAttribute('about-data-value'));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(() => {
        startvalue += 1;
        valueCount.textContent = startvalue;
        if (startvalue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});



//  ===============================tab =================================

function showpanel(a,b,c){
    //tabpanel + for loop
    const tabpanel = document.getElementsByClassName("tabpanel");
    for(let i = 0; i< tabpanel.length; i++){
        tabpanel[i].style.display = "none";
    }

    //btn + for loop
    const btn = document.getElementsByClassName("btn");
    for(let i = 0; i< btn.length; i++){
        btn[i].style.backgroundColor = "";
    }
    //a = onclick(btn)
    //b = onclick(this)
    //c = onclick(color name)
    document.getElementById(a).style.display = "block";
    b.style.backgroundColor = c;
}
document.getElementById("default").click();
//  ===================================================

// == referance ==

const topicPrevBtn = document.getElementById("topic-prev");
const topicNextBtn = document.getElementById("topic-next");
const topicSlider = document.getElementById("topic-slider");

// == next btn == 
topicNextBtn.addEventListener("click", nextPage);
function nextPage(){
    topicSlider.appendChild(topicSlider.firstElementChild);
};

// == privious btn == 
topicPrevBtn.addEventListener("click", previousPage);
function previousPage(){
    topicSlider.prepend(topicSlider.lastElementChild);
};


// == auto slider== 
function autoTopicSlide(){
    autoInterval = setInterval(timer, 5000);
    function timer(){
        nextPage();
    }
    //  setInterval(() => nextPage(), 3000);
} 
autoTopicSlide();
// ==resume suto slider== 
topicSlider.addEventListener("mouseout", autoTopicSlide);
topicNextBtn.addEventListener("mouseout", autoTopicSlide);
topicPrevBtn.addEventListener("mouseout", autoTopicSlide);



// == stop auto slider== 
topicSlider.addEventListener("mouseover", deleteAutoSlider);
topicNextBtn.addEventListener("mouseover", deleteAutoSlider);
topicPrevBtn.addEventListener("mouseover", deleteAutoSlider);

function deleteAutoSlider(){
    clearInterval(autoInterval);
};

const mainImages = document.querySelectorAll(".slide-item img");
const modalBody = document.querySelector(".topic-modal");
const modalImages = document.querySelector(".topic-modal-img");
const text = document.querySelector(".topic-modal-text");
const close = document.querySelector(".topic-closed");
const learnMore = document.querySelector(".topic-img-btn");

//take ForEach loop in images to appear a classlist on their

mainImages.forEach((image) =>{
    image.addEventListener('click', () =>{
        modalBody.classList.add("active");
          
        // //indevidual Title and individual photo
        modalImages.src = image.src;
        text.innerHTML = image.alt; 
        

        close.addEventListener('click', () =>{
            modalBody.classList.remove("active");
        });
    });

});

//=========================more templete=========================
const moreTemplete = document.querySelector("#more-work-templete");
const moreExploreBtn = document.querySelector(".work-explore-btn");
const moreListLink = document.querySelector("#more-list-link");

moreExploreBtn.addEventListener('click', () => {
    moreTemplete.style.display = "block";
});
moreListLink.addEventListener('click' , () => {
    moreTemplete.style.display = "block";

})

// ========================toggle =================================
const topScroll = document.querySelector('.top-scroll');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500){
        topScroll.classList.add("active")
    }else{
        topScroll.classList.remove("active")
    }
});

// =============================massage box==========================

const messageToggle = document.querySelector('.msg-box');
const massageModalBox = document.querySelector('.msg-modal-box');
const massageDlt = document.querySelector('#msg-dlt');
const massageSend = document.querySelector('#msg-btn');
const massageSnakeBar = document.querySelector('#msg-snakebar');
const toastDlt = document.querySelector('#toast-dlt');

const msgTooltips = document.querySelector('.msg-tooltips');

massageSnakeBar.addEventListener('mouseover', () => {
    msgTooltips.style.display = "none"

});
massageSnakeBar.addEventListener('mouseout', () => {
    msgTooltips.style.display = "block"

});

messageToggle.addEventListener('click', () =>{
    massageModalBox.style.display = "block";
});

massageDlt.addEventListener('click', () =>{
    massageModalBox.style.display = "none";

});
massageSend.addEventListener('click', () => {
    massageModalBox.style.display = "none";
    massageSnakeBar.style.display = "block";

});
toastDlt.addEventListener('click', () => {
    massageSnakeBar.style.display = "none";
});

// ======================more topic======================

const moreBtnContainer = document.getElementById("myBtnContainer");
const featureBtns = document.querySelectorAll(".feature-btn");
const featureColumns = document.querySelectorAll(".column");

function featureFilter(category) {
    // Show all if category is 'all', otherwise filter by category
    featureColumns.forEach((a) => {
      if (category === "all" || a.classList.contains(category)) {
        a.classList.add("show");
        
      } else {
        a.classList.remove("show");
        
      }
    });
  };
  // Initialize to show all
  featureFilter("all");

  // Add active class to the clicked button

  featureBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      featureBtns.forEach((i) => i.classList.remove("feature-active"));
      // Add 'active' class to the clicked button
      btn.classList.add("feature-active");
      
    });
  });

//   -------------------------new-post----------------------------- 


  
//   -------------------------topic active or inactive------------------------------------
const topicLearnMore = document.querySelector('.topic-img-btn');
const featureBlog = document.querySelector('#feature-blog');
const listFeatureBtn = document.querySelector('#list-feature-btn');

topicLearnMore.addEventListener('click', () => {
    featureBlog.style.display = "block";

});
listFeatureBtn.addEventListener('click', () => {
    featureBlog.style.display = "block";
});

// ------------------------------ umcoming btn-------------------------------

const upcomingBtn = document.querySelector('.upcoming-btn');
upcomingBtn.addEventListener("mouseover", () => {
    upcomingBtn.innerHTML = "Post is Unavailable";
});

// ----------------------------------accordion----------------------------- 

const accordion = document.getElementsByClassName("accordion-btn");
        
let i;
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("acc-on");
        let card = this.nextElementSibling; //sibling element is = "p"//
        if(card.style.maxHeight){
            card.style.maxHeight = null;
        }else{
            card.style.maxHeight = card.scrollHeight + "px";
        }
    });

};
