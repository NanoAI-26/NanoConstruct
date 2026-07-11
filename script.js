/* =========================================
   NANOCONSTRUCT AI
   PREMIUM WEBSITE INTERACTIONS
========================================= */
alert("NEW SCRIPT RUNNING");
/* =========================================
   MOUSE GLOW
========================================= */

const glow = document.querySelector(".mouse-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;

    });

}

/* =========================================
   Navbar Scroll Effect
========================================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.style.background = "rgba(8,18,35,.82)";
        navbar.style.backdropFilter = "blur(28px)";
        navbar.style.boxShadow = "0 0 40px rgba(0,200,255,.15)";

    }

    else{

        navbar.style.background = "rgba(8,18,35,.55)";
        navbar.style.boxShadow = "none";

    }

});


/* =========================================
   Waitlist Form
========================================= */

const form = document.getElementById("waitlistForm");
const success = document.getElementById("successMessage");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

success.style.display="block";

form.reset();

});

}


/* =========================================
   Smooth Fade Animation
========================================= */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

    entry.target.style.opacity="1";

    entry.target.style.removeProperty("transform");

    setTimeout(()=>{

        entry.target.style.transitionDelay="0s";

    },800);

}

});

},

{

threshold:.15

}

);


const elements=document.querySelectorAll(

".feature-card,.timeline-card,.tech-card,.vision-card,.glass-card,.stat-box"

);

elements.forEach((el,index)=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

   el.style.transition=
"opacity .8s ease, transform .8s ease";

el.style.transitionDelay=`${index*0.05}s`;

    observer.observe(el);

});
/* ==========================================
   UNIVERSAL COUNTERS
========================================== */

const animatedCounters = document.querySelectorAll("[data-target]");

animatedCounters.forEach(counter => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            observer.unobserve(counter);

            const target = parseInt(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const speed = 1200 / target;

            const timer = setInterval(() => {

                current++;

                counter.textContent = current + suffix;

                if (current >= target) {

                    clearInterval(timer);

                    counter.textContent = target + suffix;

                }

            }, speed);

        });

    }, { threshold: 0.5 });

    observer.observe(counter);

});



/* =========================================
   Hero Button Hover Glow
========================================= */
const buttons = document.querySelectorAll(
".primary-button, .secondary-button"
);
buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 45px rgba(0,200,255,.5)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});


/* =========================================
   Console Message
========================================= */

console.log(

"%cNanoConstruct AI",

"color:#00C8FF;font-size:28px;font-weight:bold;"

);

console.log(

"%cBuilding Tomorrow, Atom by Atom",

"color:white;font-size:14px;"

);
/* ==========================================
   PARTICLE SYSTEM
========================================== */

const particleContainer = document.getElementById("particles");

for(let i=0;i<80;i++){

    const particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.top=Math.random()*100+"vh";

    particle.style.animationDuration=

    8+Math.random()*12+"s";

    particle.style.animationDelay=

    Math.random()*6+"s";

    particle.style.opacity=Math.random();

    particle.style.width=

    particle.style.height=

    Math.random()*4+2+"px";

    particleContainer.appendChild(particle);

}

/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement=document.querySelector(".hero h1 span");

if(typingElement){

const originalText=typingElement.innerText;

typingElement.innerText="";

let index=0;

function type(){

if(index<originalText.length){

typingElement.innerText+=originalText.charAt(index);

index++;

setTimeout(type,60);

}

}

setTimeout(type,800);

}

/* ==========================================
   PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=scroll*0.4+"px";

}

});


/* ==========================================
   NAV LINK ACTIVE
========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-180;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.background="#00C8FF";

progress.style.zIndex="99999";

progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const progressWidth=

(window.scrollY/total)*100;

progress.style.width=

progressWidth+"%";

});

/* ==========================================
   LOADING SCREEN
========================================== */

const loader=document.createElement("div");

loader.innerHTML=`

<div class="loader">

<div class="loader-circle"></div>

<h2>NanoConstruct AI</h2>

<p>Building Tomorrow, Atom by Atom</p>

</div>

`;

loader.style.position="fixed";

loader.style.inset="0";

loader.style.background="#081423";

loader.style.display="flex";

loader.style.justifyContent="center";

loader.style.alignItems="center";

loader.style.zIndex="999999";

document.body.appendChild(loader);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition="1s";

setTimeout(()=>{

loader.remove();

},1000);

},1200);

});
const testButtons = document.querySelectorAll(".primary-button, .secondary-button");
console.log(testButtons);
console.log("Found buttons:", testButtons.length);
/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".primary-button, .secondary-button").forEach(button=>{

button.addEventListener("click",(e)=>{
console.log("BUTTON CLICKED");
const circle=document.createElement("span");

const size=Math.max(

button.clientWidth,

button.clientHeight

);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.4)";

circle.style.transform="scale(0)";

circle.style.left=

e.offsetX-size/2+"px";

circle.style.top=

e.offsetY-size/2+"px";

circle.style.animation="ripple .7s linear";

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});


/* ==========================================
   END
========================================== */

console.log(

"%cWebsite Fully Loaded",

"color:#00E5FF;font-size:18px;font-weight:bold"

);
/* ==========================================
   NAVBAR SHRINK
========================================== */

const nav = document.querySelector("nav");

if (nav) {

    window.addEventListener("scroll", () => {

        nav.classList.toggle("nav-scrolled", window.scrollY > 60);

    });

}/* ==========================================
   CARD CURSOR GLOW
========================================== */

const glowCards = document.querySelectorAll(
".feature-card,.timeline-card,.tech-card,.vision-card,.glass-card"
);

glowCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        card.style.setProperty(
            "--mouse-x",
            `${e.clientX - rect.left}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${e.clientY - rect.top}px`
        );

    });

});

console.log("SCRIPT LOADED");
