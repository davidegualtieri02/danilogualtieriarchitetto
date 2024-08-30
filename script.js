document.addEventListener('DOMContentLoaded', (event) => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                })
            }
        })
    }

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
});






//JAVASCRIPT PROJECT SECTION

//Javascript for tab navigation horizontal scroll buttons
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".Ptab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    //console.log("1.", scrollLeftValue);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    //console.log("2.", scrollableWidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    //IconVisibility();
    setTimeout(() => IconVisibility(), 50);
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    //IconVisibility();
    setTimeout(() => IconVisibility(), 50);
});


//Javascript to make the tab navigation draggable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.remove("dragging");
})

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true; 
});


//Javascript to view tab contents on click tab buttons
const tabs = document.querySelectorAll(".Ptab");
const tabBtns = document.querySelectorAll(".Ptab-btn");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
});


//JAVASCRIPT INTERIOR DESIGN SECTION

//Javascript for tab navigation horizontal scroll buttons
const IbtnLeft = document.querySelector(".Ileft-btn");
const IbtnRight = document.querySelector(".Iright-btn");
const ItabMenu = document.querySelector(".Itab-menu");

const IIconVisibility = () => {
    let scrollLeftValue = Math.ceil(ItabMenu.scrollLeft);
    //console.log("1.", scrollLeftValue);
    let scrollableWidth = ItabMenu.scrollWidth - ItabMenu.clientWidth;
    //console.log("2.", scrollableWidth);

    IbtnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    IbtnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

IbtnRight.addEventListener("click", () => {
    ItabMenu.scrollLeft += 150;
    //IconVisibility();
    setTimeout(() => IIconVisibility(), 50);
});

IbtnLeft.addEventListener("click", () => {
    ItabMenu.scrollLeft -= 150;
    //IconVisibility();
    setTimeout(() => IIconVisibility(), 50);
});
window.onload = function(){
    // Codice per la sezione del progetto
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    // Codice per la sezione di design d'interni
    IbtnRight.style.display = ItabMenu.scrollWidth > ItabMenu.clientWidth || ItabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    IbtnLeft.style.display = ItabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function(){
    // Codice per la sezione del progetto
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";

    // Codice per la sezione di design d'interni
    IbtnRight.style.display = ItabMenu.scrollWidth > ItabMenu.clientWidth || ItabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    IbtnLeft.style.display = ItabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    let IscrollLeftValue = Math.round(ItabMenu.scrollLeft);
    IbtnLeft.style.display = IscrollLeftValue > 0 ? "block" : "none";
}

//Javascript to make the tab navigation draggable
let IactiveDrag = false;

ItabMenu.addEventListener("mousemove", (drag) => {
    if(!IactiveDrag) return;
    ItabMenu.scrollLeft -= drag.movementX;
    IIconVisibility();
    ItabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
    IactiveDrag = false;
    ItabMenu.classList.remove("dragging");
})

ItabMenu.addEventListener("mousedown", () => {
    IactiveDrag = true; 
});


//Javascript to view tab contents on click tab buttons
const Itabs = document.querySelectorAll(".Itab");
const ItabBtns = document.querySelectorAll(".Itab-btn");

const Itab_Nav = function(ItabBtnClick){
    ItabBtns.forEach((ItabBtn) => {
        ItabBtn.classList.remove("active");
    });

    Itabs.forEach((Itab) => {
        Itab.classList.remove("active");
    });

    ItabBtns[ItabBtnClick].classList.add("active");
    Itabs[ItabBtnClick].classList.add("active");
}

ItabBtns.forEach((ItabBtn, i) => {
    ItabBtn.addEventListener("click", () => {
        Itab_Nav(i);
    });
});

//reset della form dopo l'invio
document.getElementById("EmailForm").reset();




// Ottieni la modale
var modal = document.getElementById("imageModal");

// Ottieni l'immagine e inseriscila all'interno della modale - usa il suo "alt" come didascalia
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Aggiungi l'evento click a tutte le immagini
document.querySelectorAll('.projects img, .interior_design img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        // Usa un timeout per garantire che display: block venga applicato prima dell'animazione
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        modalImg.classList.remove('zoomed'); // Assicurati che l'immagine non abbia la classe zoomed all'apertura
    }
});

// Ottieni l'elemento <span> che chiude la modale
var span = document.getElementsByClassName("close")[0];

// Quando l'utente clicca su <span> (x), chiudi la modale
span.onclick = function() {
    modal.classList.remove('show'); // Rimuovi la classe show per la transizione
    setTimeout(() => {
        modal.style.display = "none"; // Nascondi la modale dopo l'animazione
        modalImg.classList.remove('zoomed'); // Rimuovi la classe zoomed quando chiudi la modale
    }, 500); // Tempo per completare l'animazione
}

// Chiudi la modale se l'utente clicca fuori dall'immagine
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show'); // Rimuovi la classe show per la transizione
        setTimeout(() => {
            modal.style.display = "none"; // Nascondi la modale dopo l'animazione
            modalImg.classList.remove('zoomed'); // Rimuovi la classe zoomed quando chiudi la modale
        }, 500); // Tempo per completare l'animazione
    }
}


//SE DA MOBILE IN ORIZZONTALE:

document.addEventListener('DOMContentLoaded', function() {
    function checkDeviceAndOrientation() {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const isLandscape = window.innerWidth > window.innerHeight;
      const warning = document.querySelector('.landscape-warning');
      const content = document.querySelector('.site-content');
  
      if (isMobile) {
        if (isLandscape) {
          warning.style.display = 'flex';
          content.style.display = 'none';
        } else {
          warning.style.display = 'none';
          content.style.display = 'block';
        }
      } else {
        warning.style.display = 'none';
        content.style.display = 'block';
      }
    }
  
    // Controlla l'orientamento quando la finestra viene ridimensionata
    window.addEventListener('resize', checkDeviceAndOrientation);
  
    // Controlla l'orientamento all'avvio
    checkDeviceAndOrientation();
  });
  