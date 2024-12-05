const volunteerBtn = document.getElementById("volunteer-btn");
const volunteerForm = document.getElementById("volunteer-form");

volunteerBtn.addEventListener("click", () => {
    if (volunteerForm.style.display === "none") {
        volunteerForm.style.display = "block";
    } else {
        volunteerForm.style.display = "none";
    }
});

const moreInfo = document.getElementById("more-info");
const hiddenDetails = document.querySelector(".hidden-details");

moreInfo.addEventListener("mouseover", () => {
    hiddenDetails.style.display = "block";
});

moreInfo.addEventListener("mouseout", () => {
    hiddenDetails.style.display = "none";
});
