// Anisa McKinney 
// ITMD 441-01

(function () {
  // statements…
  // 1a. Change the main headline
    document.querySelector(".text-4xl.font-bold.mb-4.text-white.relative.z-20").innerHTML = "Uplift Your Brand with Stellar Marketing"; 
  // 1b. Change the line of text below the main headline
    const underText = document.querySelector(".text-xl.mb-6.text-white.relative.z-20").innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business<strong><em> thrive </em></strong> and <strong><em> excel. </em></strong>";
  // 1c. Change the background image 
    document.getElementById("hero").style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')"; 
  // 1d. Remove "get started"
    const removeGetStarted = document.querySelector(".relative.bg-blue-600");
    removeGetStarted.remove(); 
  // 1e. Change the background color of nav bar
     const navColor = document.querySelector(".bg-blue-600");
     const footElement = document.querySelector(".bg-gray-800"); 
     const style = window.getComputedStyle(footElement); 
     const footColor = style.backgroundColor;
     navColor.style.backgroundColor = footColor; 
  // 2a. Change the icons color
    const icon1Color = document.querySelector("[data-icon='digital']");
    icon1Color.style.color = "#47C714";
    const icon2Color = document.querySelector("[data-icon='brand']");
    icon2Color.style.color = "#47C714"; 
    const icon3Color = document.querySelector("[data-icon='social']");
    icon3Color.style.color = "#47C714"; 
  // 2b. Change the digital marketing icon
    const digMarketing = document.querySelector("[data-icon='digital']");
    digMarketing.innerText = "ads_click";
  // 3a. Change the layout of the tiles
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        const tileLayout = document.querySelector("[data-section='product_cards']");
        tileLayout.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    }
  });

  // 3b. Change the Musicians image
    const musiciansImage = document.querySelector("#solutions .product_card:last-child img");
    musiciansImage.src = "https://picsum.photos/id/453/400/300"; 
    
})();