const experiences = [
    {
        "role": "Full Stack Developer",
        "company": "Toronto Metropolitan University",
        "division": "Inclusive Media & Design Centre",
        "date": "May 2023 - April 2024",
        "location": "Toronto, ON",
    },
    {
        "role": "API Test Analyst Co-op",
        "company": "CIBC",
        "division": "Digital Cards & Technology",
        "date": "September 2021 - September 2022",
        "location": "Toronto, ON",
    },
    {
        "role": "R&D Intern",
        "company": "Sofina Foods Inc.",
        "division": "Sales Research & Development",
        "date": "July - September 2021",
        "location": "Mississauga, ON",
    },
];

const projects = [
    {
        "name": "Pigeon Messenger Game Prototype",
        "link": "https://khushen.itch.io/pigeon-messenger",
        "date": "November 2023",
        "techstack": ["Unity 3D", "C#"],
    },
    {
        "name": "Meal Planning Website",
        "link": "https://github.com/khushdip/Meal-Planner-Website",
        "date": "November 2022",
        "techstack": ["HTML5", "CSS3", "Javascript", "Bootstrap", "Google Firebase Firestore Database"],
    },
];

function navigate(div) {
    location.href = "#";
    location.href = "#" + div;
}

window.onload = populate;

function populate() {
    popExperience();
    popProjects();
}

function popExperience() {
    const experienceDiv = document.getElementById("experience");

    for (var i = 0; i < experiences.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "my-5 ml-5");

        var role = document.createElement("p");
        role.setAttribute("class", "text-rose-400")
        role.innerHTML = experiences[i].role;
        var companyDivision = document.createElement("p");
        companyDivision.innerHTML = experiences[i].company + " • " + experiences[i].division;
        var date = document.createElement("p");
        date.innerHTML = experiences[i].date;
        var expLocation = document.createElement("p");
        expLocation.innerHTML = experiences[i].location;

        newDiv.appendChild(role);
        newDiv.appendChild(companyDivision);
        newDiv.appendChild(date);
        newDiv.appendChild(expLocation);
        experienceDiv.appendChild(newDiv);
    }
}

function popProjects() {
    const projectsDiv = document.getElementById("projects");

    for (var i = 0; i < projects.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "my-5 ml-5");

        var nameDiv = document.createElement("div");

        var name = document.createElement("a");
        name.setAttribute("href", projects[i].link);
        name.setAttribute("class", "text-rose-400")
        name.innerHTML = projects[i].name + " ";
        nameDiv.appendChild(name);

        var icon = document.createElement("a");
        icon.setAttribute("class", "fa fa-external-link text-rose-400 text-xs");
        icon.setAttribute("aria-hidden", "true");
        icon.setAttribute("href", projects[i].link);
        nameDiv.appendChild(icon);

        newDiv.appendChild(nameDiv);

        var date = document.createElement("p");
        date.innerHTML = projects[i].date;
        newDiv.appendChild(date);

        for (var j = 0; j < projects[i].techstack.length; j++) {
            var tile = document.createElement("a");
            tile.setAttribute("class", "relative z-10 rounded-full bg-rose-50 px-3 py-0.5 mr-1 font-medium text-xs text-rose-600 hover:bg-rose-100")
            tile.innerHTML = projects[i].techstack[j];
            newDiv.appendChild(tile);
        }
        projectsDiv.appendChild(newDiv);
    }
}