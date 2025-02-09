console.log("privet");

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", function (event) {
    console.log("homeBtn was clicked");
    event.preventDefault();
    const homeSection = document.getElementById("header");
    homeSection.scrollIntoView({behavior: "smooth"});
});

const factsBtn = document.getElementById("factsBtn");
factsBtn.addEventListener("click", function (event) {
    console.log("factsBtn was clicked");
    event.preventDefault();
    const factsSection = document.getElementById("plants");
    factsSection.scrollIntoView({behavior: "smooth"});

});

const newsBtn = document.getElementById("newsBtn");
newsBtn.addEventListener("click", function (event) {
    console.log("newsBtn was clicked")
    event.preventDefault();
    const newsSection = document.getElementById("news");
    newsSection.scrollIntoView({behavior: "smooth"})
});

const formBtn = document.getElementById("formBtn");
formBtn.addEventListener("click", function (event){
    console.log("formBtn was clicked");
    event.preventDefault();
    const formSection = document.getElementById("recycle");
    formSection.scrollIntoView({behavior: "smooth"});

});
