// Anisa McKinney 
// ITMD 441-01

(function () {
  // statements…
  // 1a. Change the main headline
    document.querySelector(".text-4xl font-bold mb-4 text-white relative z-20").innerHTML = "Uplift Your Brand with Stellar Marketing"; 
  //  headLine = "Uplift Your Brand with Stellar Marketing"; 
  // 1b. Change the line of text below the main headline
    const underText = document.querySelector(".text-xl mb-6 text-white relative z-20").innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business<strong> thrive </strong> and <strong> excel. </strong>";
  // 1c. Change the background image 
    const backImage = document.querySelector(".text-xl font-semibold mb-2")
    element.style.backImage = "https://picsum.photos/id/683/1280/720"; 
  // 1d. Remove "get started"
    const removeGetStarted = document.querySelector(".relative bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 z-20");
    removeGetStarted.remove(); 
  // 1e. Change the background color of nav bar
     const backcolor = document.querySelector(".bg-gray-800 text-white p-4 mt-12");
     const style = window.getComputedStyle(backcolor); 
     const nav = document.querySelector("");
  // 2a. Change the icons color
    const iconsColor = document.querySelector(".material-symbols-outlined text-6xl");
    iconsColor.backgroundColor = green; 
  // 2b. Change the digital marketing icon
    const digMarketing = document.querySelector("[data-icon='brand']");
    digMarketing.innerText = "ads_click"; 
  // 3a. Change the layout of the tiles
    const tileLayout = document.querySelector(".relative product_card rounded-lg overflow-hidden");
    tileLayout.style.size = "20px";
  // 3b. Change the Musicians image
    const musiciansImage = document.querySelector("#solutions .product_card:last-child img");
    musiciansImage.src = "https://picsum.photos/id/453/400/300"; 
    
})();