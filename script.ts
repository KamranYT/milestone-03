// Select all necessary HTML elements
const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;
const displayName = document.getElementById("display-name") as HTMLHeadingElement;
const displayEmail = document.getElementById("display-email") as HTMLSpanElement;
const displayPhone = document.getElementById("display-phone") as HTMLSpanElement;
const displayEducation = document.getElementById("display-education") as HTMLParagraphElement;
const displayExperience = document.getElementById("display-experience") as HTMLParagraphElement;
const displaySkills = document.getElementById("display-skills") as HTMLParagraphElement;
const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
const displayPic = document.getElementById("display-pic") as HTMLImageElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement; // New line to select the resume output

generateResumeButton.addEventListener("click", () => {
    // Get values from form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Update resume display section
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    displaySkills.textContent = skills;

    // Display profile picture if uploaded
    const profilePicFile = profilePicInput.files ? profilePicInput.files[0] : null;
    if (profilePicFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            displayPic.src = e.target?.result as string;
            displayPic.style.display = "block";
        };
        reader.readAsDataURL(profilePicFile);
    } else {
        displayPic.style.display = "none"; // Hide image if no file is uploaded
    }

    // Show the resume output section
    resumeOutput.style.display = "block";
});
