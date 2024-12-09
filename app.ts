
  document.addEventListener("DOMContentLoaded",() => {
  const resumeForm = document.getElementById('resumeform') as HTMLFormElement
  const previewName = document.getElementById("preview-name") as HTMLElement;
  const previewEmail = document.getElementById("preview-email") as HTMLElement;
  const previewPhone = document.getElementById("preview-phone") as HTMLElement;
  const previewEducation = document.getElementById("preview-education") as HTMLElement;
  const previewExperience = document.getElementById("preview-experiance") as HTMLElement;
  const previewSkills = document.getElementById("preview-skills") as HTMLElement;

  
  

resumeForm.addEventListener("submit",(event:Event) => {
event.preventDefault();

const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLTextAreaElement).value
const experiance = (document.getElementById('experiance') as HTMLTextAreaElement).value
const skills = (document.getElementById('skills') as HTMLTextAreaElement).value

previewName.textContent = name || "full name";
previewEmail.textContent = email || "Email is not provided";
previewPhone.textContent = phone || "Phone is not provided";
previewEducation.textContent = education || "education is not provided";
previewExperience.textContent = experiance || "experiance is not provided";
previewSkills.textContent = skills || "skills is not provided";


 ///// Editable Resume /////
 
(document.getElementById('name') as HTMLInputElement).value = previewName.contentEditable="true";
    (document.getElementById('email') as HTMLInputElement).value = previewEmail.contentEditable="true";
    (document.getElementById('phone') as HTMLInputElement).value = previewPhone.contentEditable="true";
    (document.getElementById('education') as HTMLTextAreaElement).value = previewEducation.contentEditable="true";
    (document.getElementById('experience') as HTMLTextAreaElement).value = previewExperience.contentEditable="true";
    (document.getElementById('skills') as HTMLTextAreaElement).value = previewSkills.contentEditable="true";










resumeForm.reset()
})
})




















// theory
// 2010 angular js frontend
// API => application programming interface




