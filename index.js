let notValidInt = '0123456789';
let regExp = /[1-4]/g;
let resultRegExp = notValidInt.match(regExp);
let notRequiredInt = '0123456789';
let userPrompt = prompt("Hello, What's your name?");
if (userPrompt == '') {
    alert('What is your name? but its okay thank you!');
} else if (userPrompt == resultRegExp) {
    alert('Not username only a formal name!')
} else {
    alert('Thank you buddy!' + ' ' + userPrompt);
}



const btnApply = document.getElementById("btn-apply");
btnApply.addEventListener("click", () => {


    var selectorAnimation = document.getElementById("select-animation");
    var imgAnimationAction = document.getElementById("img-animation-act");
    var sourceCodeIcon = document.querySelector(".get-source-code");
    const animakerContainer = document.querySelector(".animaker-container");
    if (selectorAnimation.value == "slide-right") {
        imgAnimationAction.style.transform = "translateX(100px)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "slide-left") {
        imgAnimationAction.style.transform = "translateX(-100px)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "slide-top") {
        imgAnimationAction.style.transform = "translateY(-100px)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "slide-bottom") {
        imgAnimationAction.style.transform = "translateY(100px)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "zoom-in") {
        imgAnimationAction.style.transform = "scale(1.3)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "zoom-out") {
        imgAnimationAction.style.transform = "scale(0.7)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "fade-out") {
        imgAnimationAction.style.opacity = "0.5";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "rotate") {
        imgAnimationAction.style.transform += "rotate(360deg)";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else if (selectorAnimation.value == "fade-in") {
        imgAnimationAction.style.opacity = "2.0";
        sourceCodeIcon.style.display = "block";
        imgAnimationAction.style.transition = "1s";
    } else {
        if (selectorAnimation.value == "#choose") {
            animakerContainer.classList.add('shaking-animation');
            alert("Choose animation!");
        }
    }

});

const refreshIcon = () => {
    var selectorAnimation = document.getElementById("select-animation");
    var imgAnimationAction = document.getElementById("img-animation-act");
    selectorAnimation.value = "Choose";
}

const getCode = () => {
    var selectorAnimation = document.getElementById("select-animation");
    var resultCode = document.getElementById("result-code");
    var modalGetCodeContainer = document.querySelector(".modal-get-code-container");
    if (selectorAnimation.value == "slide-right") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "transform: translateX(100px);";
    } else if (selectorAnimation.value == "slide-left") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "transform: translateX(-100px);";
    } else if (selectorAnimation.value == "slide-top") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "transform: translateY(-100px);";
    } else if (selectorAnimation.value == "slide-bottom") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "transform: translateY(100px);";
    } else if (selectorAnimation.value == "zoom-in") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "transform: scale(1.5);";
    } else if (selectorAnimation.value == "zoom-out") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "transform: scale(0.6);";
    } else if (selectorAnimation.value == "fade-in") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "opacity: 2.5";
    } else if (selectorAnimation.value == "fade-out") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "opacity: 0.4";
    } else if (selectorAnimation.value == "rotate") {
        modalGetCodeContainer.style.display = "block";
        resultCode.value = "tranform: rotate(360deg);";
    }
}

const copyCode = () => {
    alert("You copied the code!");
}

const animakerContainer = document.querySelector(".animaker-container");
const animakerLoader = document.querySelector(".loader");

setTimeout(() => {
    animakerContainer.style.display = "block";
    animakerLoader.style.display = "none";
}, 2000);

const animationRules = [
    {
        id: 1,
        animationClass: "Slide Up",
        action: "container moving to up.",
    },
    {
        id: 2,
        animationClass: "Slide Down",
        action: "container moving down.",
    },
    {
        id: 3,
        animationClass: "Slide Left",
        action: "container moving to left.",
    },
    {
        id: 4,
        animationClass: "Slide Right",
        action: "container moving to right.",
    },
    {
        id: 5,
        animationClass: "Zoom In",
        action: "container zooming size.",
    },
    {
        id: 6,
        animationClass: "Zoom Out",
        action: "container zoom-out size.",
    },
    {
        id: 7,
        animationClass: "Fade In",
        action: "container fade-bright opacity.",
    },
    {
        id: 8,
        animationClass: "Fade Out",
        action: "container fade-low opacity.",
    },
    {
        id: 9,
        animationClass: "Rotate",
        action: "container rotate a 360 degree.",
    }
];
console.log(animationRules);