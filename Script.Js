let example = 20;

let x;

let my_cat;

x = 30;

console.log(example);
console.log(x);
console.log(my_cat);

my_cat = 50;

console.log(my_cat);

const coding = 80;

console.log(coding);

let greetings = "Hello";
let isim = "Alice";
let space = " ";

let mario = "87";
let superValue = "54";

let supermario = superValue + mario;

console.log(supermario);

console.log(example + my_cat);

let total = example + my_cat;

console.log(total);

let h = greetings + space + isim;

console.log(h);


let age = 25;
if (age>=18)
    if(age<21){

    }




//console.log(total)

hf = greetings + space + isim


//console.log(mario)


console.log(coding)


function e() {
    let y = "hello"
    console.log(y)
}

e();


function exampleConst(){
    const z =30;
    z= 40;
    console.log(z);
}

function greet(name){
    console.log(`Hello,${name}!`);
}
greet(`Fatma`) 

//Outputs: Hello, Fatma!
 

const add = function (a,b) {
    return a + b;
};
console.log(add(5,3));

//outputs: 8

let basePrice = 50;
let discount = 0.2

let finalPrice = basePrice - (basePrice*discount);

const multiply = (x,y) => x * y;

console.log(multiply(4,6));


//Outputs:24

// Selecting elements
let elementByld = document.getElementByld('myElement');
let elementByClass = document.getElementsByClassName('myClass');
let elementsByTag = document.getElementsByTagName('div');
let elementbyQuery = document.querySelector('.myClass');











const projects = {
  projet1: {
    number: "Case 01",
    title: "Projet 01",
    location: "À compléter",
    text: "This project has not been integrated yet.",
    sections: [
      {
        title: "Coming soon",
        layout: "single",
        items: [
          {
            label: "Project 01",
            className: "sheet-wide",
            image: "images/projet2-axono.jpg",
            alt: "Placeholder project"
          }
        ]
      }
    ]
  },

  projet2: {
    number: "Case 02",
    title: "Trames Fertiles en Transition",
    location: "Morlanwelz-Binche, Wallonie, Belgique",
    text: "Projet territorial structurant les terres fertiles, les circulations publiques et les programmes agricoles dans une logique de transition paysagère. La lecture se fait dans cet ordre : carte, schémas, plans, coupes, photos de site, puis dessins perspectifs.",
    sections: [
      {
        title: "Carte",
        layout: "single",
        items: [
          {
            label: "Carte d’analyse territoriale",
            className: "sheet-wide",
            image: "images/projet2-carte.jpg",
            alt: "Carte d’analyse territoriale"
          }
        ]
      },
      {
        title: "Schémas",
        layout: "single",
        items: [
          {
            label: "Schémas d’organisation",
            className: "sheet-wide",
            image: "images/projet2-schema.jpg",
            alt: "Schémas d’organisation"
          }
        ]
      },
      {
        title: "Plans",
        layout: "two",
        items: [
          {
            label: "Plan RDC 1/200",
            className: "sheet-wide tall",
            image: "images/projet2-plan-rdc.jpg",
            alt: "Plan RDC"
          },
          {
            label: "Plan R+1 1/200",
            className: "sheet-wide tall",
            image: "images/projet2-plan-r1.jpg",
            alt: "Plan R+1"
          }
        ]
      },
      {
        title: "Coupes",
        layout: "single",
        items: [
          {
            label: "Coupes + élévation",
            className: "sheet-wide",
            image: "images/projet2-coupes.jpg",
            alt: "Coupes et élévation"
          }
        ]
      },
      {
        title: "Photos",
        layout: "single",
        items: [
          {
            label: "Photos de site",
            className: "sheet-wide",
            image: "images/projet2-photos.jpg",
            alt: "Photos de site"
          }
        ]
      },
      {
        title: "Dessins",
        layout: "single",
        items: [
          {
            label: "Perspectives",
            className: "sheet-wide",
            image: "images/projet2-perspectives.jpg",
            alt: "Perspectives du projet"
          }
        ]
      }
    ]
  },

  projet3: {
    number: "Case 03",
    title: "Projet 03",
    location: "À compléter",
    text: "This project has not been integrated yet.",
    sections: [
      {
        title: "Coming soon",
        layout: "single",
        items: [
          {
            label: "Project 03",
            className: "sheet-wide",
            image: "images/projet2-axono.jpg",
            alt: "Placeholder project"
          }
        ]
      }
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalText = document.getElementById("modalText");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");

function createImageCard(item) {
  const card = document.createElement("div");
  card.className = item.className || "sheet";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.alt || item.label;

  card.appendChild(img);
  return card;
}

function buildSection(section) {
  const wrapper = document.createElement("div");
  wrapper.className = "detail-section";

  const title = document.createElement("h4");
  title.textContent = section.title;
  wrapper.appendChild(title);

  const grid = document.createElement("div");
  grid.className = section.layout === "single" ? "sheet-grid single" : "sheet-grid";

  section.items.forEach(item => {
    grid.appendChild(createImageCard(item));
  });

  wrapper.appendChild(grid);
  return wrapper;
}

function openProject(key) {
  const project = projects[key];
  if (!project) return;

  modalNumber.textContent = project.number;
  modalTitle.textContent = project.title;
  modalLocation.textContent = project.location;
  modalText.textContent = project.text;
  modalDetails.innerHTML = "";

  project.sections.forEach(section => {
    modalDetails.appendChild(buildSection(section));
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectPanel() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".open-project").forEach(btn => {
  btn.addEventListener("click", () => {
    openProject(btn.dataset.project);
  });
});

closeModal.addEventListener("click", closeProjectPanel);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeProjectPanel();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeProjectPanel();
  }
});

