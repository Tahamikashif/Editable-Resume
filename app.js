document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById('resumeform');
    var previewName = document.getElementById("preview-name");
    var previewEmail = document.getElementById("preview-email");
    var previewPhone = document.getElementById("preview-phone");
    var previewEducation = document.getElementById("preview-education");
    var previewExperience = document.getElementById("preview-experiance");
    var previewSkills = document.getElementById("preview-skills");
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experiance = document.getElementById('experiance').value;
        var skills = document.getElementById('skills').value;
        previewName.textContent = name || "full name";
        previewEmail.textContent = email || "Email is not provided";
        previewPhone.textContent = phone || "Phone is not provided";
        previewEducation.textContent = education || "education is not provided";
        previewExperience.textContent = experiance || "experiance is not provided";
        previewSkills.textContent = skills || "skills is not provided";
        document.getElementById('name').value = previewName.textContent;
        document.getElementById('email').value = previewEmail.textContent;
        document.getElementById('phone').value = previewPhone.textContent;
        document.getElementById('education').value = previewEducation.textContent;
        document.getElementById('experience').value = previewExperience.textContent;
        document.getElementById('skills').value = previewSkills.textContent;
        resumeForm.reset();
    });
});
// theory
// 2010 angular js frontend
// API => application programming interface
