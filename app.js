console.log("Hello World!");

function showGreeting() {
    var name = prompt("Sign in:\nWhat is your name?");
    alert("Hello " + name + ", my name is Alexia! Welcome to my portfolio!");
}




let downloadCount = 0
document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    resumeDownload();
});

function resumeDownload() {
    alert("Resume downloaded successfully!");
    downloadCount += 1;
    document.getElementById("downloadCountOutput").innerHTML = 'Downloaded ' + downloadCount + ' time(s)';
    window.open("https://drive.google.com/file/d/1McIrf0dR3B34wDPRuX22PurCgHYtkt1s/view?usp=drive_link", "_blank");
}

function daysUntilDeadline() {
    const deadlineDay = new Date("2025-04-20");
    const currentDay = new Date();
    const subtractDays = deadlineDay - currentDay;
    const daysLeft = Math.ceil(subtractDays / (1000 * 60 * 60 *24));
    console.log("There are " + daysLeft + " days until April 20th, 2025.");
}

const currentSkills = []
function addSkills() {
    var skillToAdd = prompt("Add a skill: ");
    if (skillToAdd) {
        currentSkills.push(skillToAdd);
        displaySkills();
    }
    //currentSkills.push(skillToAdd);
    //console.log(currentSkills);
    //document.getElementById("addedSkills").innerHTML = currentSkills;
}

function displaySkills() {
    const skillsContainer = document.getElementById("addedSkills");
    skillsContainer.innerHTML = "";

    currentSkills.forEach((skill, index) => {
        const skillDiv = document.createElement("div");
        skillDiv.textContent = skill;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtnID";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            deleteSkill(index);
        };

        const editBtn = document.createElement("button");
        editBtn.className = "editBtnID"
        editBtn.textContent = "Edit";
        editBtn.onclick = function() {
            editSkill(index);
        };

        skillDiv.appendChild(editBtn);
        skillDiv.appendChild(deleteBtn);
        skillsContainer.appendChild(skillDiv);
    });
}

function deleteSkill(index) {
    currentSkills.splice(index, 1);
    displaySkills();
}
function editSkill(index) {
    var editedSkill = prompt("Edit skill: ", currentSkills[index]);
    if (editedSkill) {
        currentSkills[index] = editedSkill;
        displaySkills();
    }
}


document.addEventListener('DOMContentLoaded', findDueDateStatus());
function findDueDateStatus() {
    const today = new Date();
    console.log(new Date())
    var dueDateStatusOne = "In Progress..."
    var dueDateStatusTwo = "In Progress..."
    if (today == new Date("2020-02-03")) {
        dueDateStatusOne = "Complete"
    };
    if (today == new Date("2025-04-20")) {
        dueDateStatusTwo = "Complete"
    };
    console.log(dueDateStatusOne);
    console.log(dueDateStatusTwo);
    document.getElementById("dueDateStatusOneOutput").innerHTML = "Status: " + dueDateStatusOne;
    document.getElementById("dueDateStatusTwoOutput").innerHTML = "Status: " + dueDateStatusTwo;
}

