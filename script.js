// window.onresize = function () {
//     location.reload();
// };


const textArray = [
    "I am a Front End Developer",
    "I am an Avid Learner",
    "I love responsive"
]

const getAnimFromIndex = (index) => (
{
    duration: 1.5,
    repeat: 1,
    repeatDelay: 2,
    yoyo: true,
    text: {
    //this is the code that replaces the text
    value: textArray[index],
    delimiter: ""
    },
    ease: "ease.in",
})

const getKeyFrames = () => {
    const keyframes = []
    for (let i = 0; i < textArray.length; i++) {
    keyframes.push(getAnimFromIndex(i))
    }
    return keyframes
}

const tl1 = gsap.timeline()

tl1.to(".span", {
    keyframes: getKeyFrames(),
    repeat: -1,
})

//cursor logic
//blink only when not typing or deleting
const tl2 = gsap.timeline()

tl2.to("h2", {
    keyframes: [
    { "--typeCursorOpacity": 1, duration: 1.5, delay: 0 },
    { "--typeCursorOpacity": 0, duration: 0, delay: 0.55 },
    { "--typeCursorOpacity": 1, duration: 0, delay: 0.55 },
    { "--typeCursorOpacity": 0, duration: 0, delay: 0.55 },
    { "--typeCursorOpacity": 1, duration: 0, delay: 0.55 },
    { "--typeCursorOpacity": 1, duration: 1.5, delay: 0 },
    ],
    repeat: -1,
})



const firstHeight = document.querySelector('.front-section');
const firstParticles = document.querySelector('#particles-js-one');
const secondHeight = document.querySelector('.second-section');
const twoParticles = document.querySelector('#particles-js-two');
const threeParticles = document.querySelector('#particles-js-three');
const fourParticles = document.querySelector('#particles-js-four');
const fiveParticles = document.querySelector('#particles-js-five');
const thirdHeight = document.querySelector('.third-section');
const thirdParticles = document.querySelector('#particles-js-six');
const fourthHeight = document.querySelector('.fourth-section');
const fourthParticles = document.querySelector('#particles-js-seven');
const fifthHeight = document.querySelector('.fifth-section');
const fifthParticles = document.querySelector('#particles-js-eight');
    
function setHeight() {
    let firstH = firstHeight.scrollHeight;
        firstParticles.style.height = `${firstH}` + 'px';

    let secondH = secondHeight.scrollHeight;
        twoParticles.style.height = `${secondH}` + 'px';
        threeParticles.style.height = `${secondH}` + 'px';
        fourParticles.style.height = `${secondH}` + 'px';
        fiveParticles.style.height = `${secondH}` + 'px';

    let thirdH = thirdHeight.scrollHeight;
        thirdParticles.style.height = `${thirdH}` + 'px';

    let fourthH = fourthHeight.scrollHeight;
        fourthParticles.style.height = `${fourthH}` + 'px';

    let fifthH = fifthHeight.scrollHeight;
        fifthParticles.style.height = `${fifthH}` + 'px';
}
setHeight();



AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 100,
    delay: 0.5,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});



const navBtn = document.querySelector('.button');
const sideBG = document.querySelector('.side-bg');
const sidebarList = document.querySelector('.sidebar-list');
const sideItem = document.querySelectorAll('.sidebar-item');
const sideAnchor = document.querySelectorAll('.sidebar-anchor');
const mainText = document.querySelector('.main-text');
const body = document.querySelector('body');

navBtn.addEventListener('click', () => {
    toggleSidebar();
})

function toggleSidebar() {
    body.classList.toggle('active');
    navBtn.classList.toggle('active');
    sideBG.classList.toggle('active');
    mainText.classList.toggle('active');
    sidebarList.classList.toggle('move-to-left');

    // на всі посилання присвоюємо клас Active
    for (let x of sideItem) {
        x.classList.toggle('active');
    }
    sideAnchor.forEach(anchor => {
        anchor.addEventListener('click', () => {
            toggleSidebar();
        })
    })
}
sideBG.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar-list')) {
        toggleSidebar();
    }
})

// натискаємо ESC - закриваємо/відкриваємо меню
document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
        console.log(e)
        toggleSidebar();
    }
})


// виводимо опис сайтів
const descriptionBtn = document.querySelectorAll('.description');
const descriptionText = document.querySelectorAll('.description-text');
let count = 0;

descriptionBtn.forEach((btn, index) => {
    btn.addEventListener('click', showDescription)
    // при втраті фокусу - ховаємо сам опис та змінюємо значення змінної, бо треба буде натискати двічі, щоб з'явився новий опис
    btn.addEventListener('blur', hideDescription)

    function showDescription() {
        if (count === 0) {
            count = 1;
            gsap.to(descriptionText[index], {opacity: 1, scale: 1})
        }
        else {
            count = 0;
            gsap.to(descriptionText[index], {opacity: 0, scale: 0})
        }
    }
    function hideDescription() {
        gsap.to(descriptionText[index], {opacity: 0, scale: 0})
        count = 0;
    }
})



const projectDisplay = document.querySelectorAll('.project-display');
const linkProject = document.querySelector('.link-projects');
const linkContact = document.querySelector('.link-contacts');

linkProject.addEventListener('click', () => {
    setDelay();    
})
linkContact.addEventListener('click', () => {
    setDelay();
});

function setDelay() {
    // відложуємо появлення анімації, щоб не було перекриття(анімація перекриває меню)
    AOS.init({
        delay: 1300        
    });
    // робимо перезагрузку, щоб повернути попередні значення
    setTimeout(function () {
        history.go();
    }, 800);
}


const showMenuHome = document.querySelector('.home img');
const showMenuAbout = document.querySelector('.about img');
const showMenuProject = document.querySelector('.project img');
const showMenuContact = document.querySelector('.contacts img');
const showMenuCV = document.querySelector('.cv img');

showMenuHome.addEventListener('mouseover', () => {
    gsap.to(".home li", {x: 5, opacity: 1})
});
showMenuHome.addEventListener('mouseleave', () => {
    gsap.to(".home li", {x: -5, opacity: 0})
});

showMenuAbout.addEventListener('mouseover', () => {
        gsap.to(".about li", {x: 5, opacity: 1})
    });
showMenuAbout.addEventListener('mouseleave', () => {
        gsap.to(".about li", {x: -5, opacity: 0})
    });

showMenuProject.addEventListener('mouseover', () => {
        gsap.to(".project li", {x: 5, opacity: 1})
    });
showMenuProject.addEventListener('mouseleave', () => {
        gsap.to(".project li", {x: -5, opacity: 0})
    });

showMenuContact.addEventListener('mouseover', () => {
        gsap.to(".contacts li", {x: 5, opacity: 1})
    });
showMenuContact.addEventListener('mouseleave', () => {
        gsap.to(".contacts li", {x: -5, opacity: 0})
    });

showMenuCV.addEventListener('mouseover', () => {
        gsap.to(".cv li", {x: 5, opacity: 1})
    });
showMenuCV.addEventListener('mouseleave', () => {
        gsap.to(".cv li", {x: -5, opacity: 0})
    });


particlesJS("particles-js-one", {
    "particles": {
        "number": {
            "value": 250,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": ["circle", "triangle", "edge", "star"],
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#fff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});



particlesJS("particles-js-two", {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "./pictures/tag-bg.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 25,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})

particlesJS("particles-js-three", {
    "particles": {
        "number": {
            "value": 15,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "./pictures/bootstrap-bg.png",
                "width": 120,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 25,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})

particlesJS("particles-js-four", {
    "particles": {
        "number": {
            "value": 15,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "./pictures/js-bg.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 25,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})

particlesJS("particles-js-five", {
    "particles": {
        "number": {
            "value": 15,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "./pictures/react-bg.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 25,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})

particlesJS("particles-js-six", {
    "particles": {
        "number": {
            "value": 250,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#000"
        },
        "shape": {
            "type": ["circle", "triangle", "edge", "star"],
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#fff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesJS("particles-js-seven", {
    "particles": {
        "number": {
            "value": 250,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#2f8f9d"
        },
        "shape": {
            "type": ["circle", "triangle", "edge", "star"],
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#fff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesJS("particles-js-eight", {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#2f8f9d"
        },
        "shape": {
            "type": ["circle", "triangle", "edge", "star"],
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#fff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

let menu = document.querySelector(".side-menu");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    menu.style.display = "block";
    }
    else {
    menu.style.display = "none";
    }
}