const profileInfo = {
    name: "Sakibu Mumuni",
    email: "sakibumumuni285@gmail.com",
    school: "University of Ghana",
    course: "BSc. Mathematical Sciences",
    picture: "profile.jpg"
};

const showProfileBtn = document.getElementById("showProfileBtn");
const profile = document.getElementById("profile");

showProfileBtn.addEventListener("click", function () {
    if (profile.style.display === "none" || profile.style.display === "") {
        document.getElementById("profilePic").src = profileInfo.picture;
        document.getElementById("profileName").textContent = profileInfo.name;
        document.getElementById("profileEmail").textContent = "Email: " + profileInfo.email;
        document.getElementById("profileSchool").textContent = "School: " + profileInfo.school;
        document.getElementById("profileCourse").textContent = "Course: " + profileInfo.course;

        profile.style.display = "block";
        showProfileBtn.textContent = "Hide My Profile";
    } else {
        profile.style.display = "none";
        showProfileBtn.textContent = "Show My Profile";
    }
});
