// Geo locaion API 

function myfun() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showposition);

    } else {

        document.getElementById('mymap').innerHTML = "No supported";

    }
}
function showposition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var latlon = new google.maps.LatLng(lat, lon);
    var mapdiv = document.getElementById('mymap');


    var Map = new google.maps.Map(mapdiv, { center: latlon, zoom: 16 });
    var objformarker = { position: latlon, map: Map, title: "You Are Here!" };

    var marker = new google.maps.Marker(objformarker);
}
// Contact Us Toast Box Validation
function showToast() {
    event.preventDefault();
    setTimeout(() => {
        event.preventDefault().remove();
    }, 10000);
    let toastBox = document.getElementById("toastBox");
    let toast = document.createElement("div");
    const input1 = document.querySelector("#ijowk-6").value;
    const input2 = document.querySelector("#indfi-4").value;
    const input3 = document.querySelector("#ipmgh-6").value;
    const input4 = document.querySelector("#imgis-5").value;
    const input5 = document.querySelector("#i5vyy-6").value;
    if (input1 === '' || input2 === '' || input3 === '' || input4 === '' || input5 === '') {
        toast.classList.add("fToast");
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Please Fill All The Information';
        toastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
        return;
    }
    else {
        alert("Thanks For Your Feedback");
        window.location.href = "/E-project/Pages/index.html"
    }
}
// Hamburger Animation
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
// Categories Drop Down Animation
const arrow = document.querySelector(".itmSvg");
const teerItm = document.querySelector("#arrowItm");
const dropDown = document.querySelector(".dropBox");

teerItm.addEventListener("click", () => {
    arrow.classList.toggle("active");
    dropDown.classList.toggle("active");
});
// Language Hover Animation
const box1 = document.querySelector(".fir");
const box2 = document.querySelector(".sec");
const box3 = document.querySelector(".thi");
const btn1 = document.querySelector("#fBtn");
const btn2 = document.querySelector("#sBtn");
const btn3 = document.querySelector("#tBtn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

box1.addEventListener("mouseenter", () => {
    btn1.classList.add("active");
    img1.classList.add("active");
})


box1.addEventListener("mouseleave", () => {
    btn1.classList.remove("active");
    img1.classList.remove("active");
})


box1.addEventListener("click", () => {
    window.location.href = '/E-project/Pages/Arabic.html';
})


box2.addEventListener("mouseenter", () => {
    btn2.classList.add("active");
    img2.classList.add("active");
})


box2.addEventListener("mouseleave", () => {
    btn2.classList.remove("active");
    img2.classList.remove("active");
})


box2.addEventListener("click", () => {
    window.location.href = '/E-project/Pages/Greek.html';
})


box3.addEventListener("mouseenter", () => {
    btn3.classList.add("active");
    img3.classList.add("active");

})


box3.addEventListener("mouseleave", () => {
    btn3.classList.remove("active");
    img3.classList.remove("active");
});


box3.addEventListener("click", () => {
    window.location.href = '/E-project/Pages/Indic.html';
})
// Learn Calligraphy Section Hover Animation
const lBox1 = document.querySelector(".lCalliVid1");
const lBox2 = document.querySelector(".lCalliVid2");
const lBox3 = document.querySelector(".lCalliVid3");
const lImg1 = document.querySelector(".lImg1");
const lImg2 = document.querySelector(".lImg2");
const lImg3 = document.querySelector(".lImg3");

lBox1.addEventListener("mouseenter", () => {
    lImg1.classList.add("active");
})
lBox1.addEventListener("mouseleave", () => {
    lImg1.classList.remove("active");
})
lBox2.addEventListener("mouseenter", () => {
    lImg2.classList.add("active");
})
lBox2.addEventListener("mouseleave", () => {
    lImg2.classList.remove("active");
})
lBox3.addEventListener("mouseenter", () => {
    lImg3.classList.add("active");
})
lBox3.addEventListener("mouseleave", () => {
    lImg3.classList.remove("active");
})