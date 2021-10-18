// let wrapper = document.querySelector("#wrapper");

// console.log(wrapper.childNodes);

// for (let i = 0; i < wrapper.childNodes.length; i++) {
//     // if (wrapper.childNodes[i].nodeType == 1) {
//     //     console.log(wrapper.childNodes[i])
//     // }
//     // console.log(wrapper.childNodes[i])
// }

// console.log(wrapper.parentElement);
// console.log(wrapper.parentNode);
// console.log(wrapper.children);
// console.log(wrapper.firstChild);
// console.log(wrapper.firstElementChild);
// console.log(wrapper.lastChild);
// console.log(wrapper.lastElementChild);
// console.log(wrapper.nextElementSibling);
// console.log(wrapper.nextSibling);
// console.log(wrapper.previousElementSibling);
// console.log(wrapper.previousSibling);


// let closeButton = document.getElementById("sidebar-close-button");
// let sidebar = document.getElementById("sidebar");
// let content = document.querySelector("#sidebar .content");
// let sidebutton = document.getElementById("sidebar-button");

// closeButton.addEventListener("click", () => {
//     sidebar.style.visibility = "hidden"
//     sidebar.style.opacity = 0;
//     content.style.right = "-615px";
//     document.body.style.overflow = "auto";
// });

// sidebutton.addEventListener("click", () => {
//     sidebar.style.visibility = "visible";
//     sidebar.style.opacity = 1;
//     content.style.right = "0px";
//     document.body.style.overflow = "hidden";
// })

// window.setTimeout(CountUp, 1000);

let Counter = (element, stepParam, countParam, speed) => {
    let i = 0;

    let CountUp = (step, count) => {
        if (i >= (count - 200)) {
            step = 1;
        }
        i = i + step;

        if (i >= count) {
            i = count;
            clearInterval(counterInterval);
        }

        element.innerHTML = i;
    }

    let counterInterval = window.setInterval(() => {
        CountUp(stepParam, countParam);
    }, speed);
}

let counterElement = document.querySelector(".counter");
Counter(counterElement, 50, 1400, 30);



let counterElement2 = document.querySelector(".counter2");
// Counter(counterElement2, 10, 850, 10);