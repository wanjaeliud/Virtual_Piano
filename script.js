let whiteKeys = getValues('.white-keys > kbd');
let blackKeys = getValues('.black-keys > kbd');

document.addEventListener("keydown", function(event){
    const k = event.key.toUpperCase(),
        el = document.getElementById(k);
    let audio, timeout;
    console.log(`The '${k}' key is pressed.`);
    clearTimeout(timeout);
    if(whiteKeys.indexOf(k) > -1) {
        el.classList.add('pressed');
        timeout = setTimeout(function () { el.classList.remove('pressed'); }, 100);
        audio = new Audio(`white_keys/${k}.mp3`);
        audio.play();
    }   else if (blackKeys.indexOf(k) > -1) {
        el.classList.add('pressed');
        timeout = setTimeout(function () { el.classList.remove('pressed'); }, 100);
        audio = new Audio(`black_keys/${event.key.toUpperCase()}.mp3`);
        audio.play();
    } else {
        console.warn("Piano key not found. Please try again.");
    }
});
function getValues(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel)).map(function (k) { return k.innerText; });
}

// let keyList = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
//
// document.addEventListener("keydown", function(event){
//     if(keyList.includes(event.key.toUpperCase())) {
//         console.log(`The '${event.key.toUpperCase()}' key is pressed.`);
//         let audio = new Audio(`keys/${event.key.toUpperCase()}.mp3`);
//         audio.play();
//     } else {
//         console.warn("Piano key not found. Please try again.");
//     }
// });

// document.addEventListener("keypress", function (e) {
//     let audio;
//     switch (e.code) {
//         case "KeyA":
//             alert("The 'A' key is pressed.");
//             audio = new Audio("keys/A.mp3");
//             audio.play();
//             break;
//         case "KeyS":
//             alert("The 'S' key is pressed.");
//             audio = new Audio("keys/S.mp3");
//             audio.play();
//             break;
//         case "KeyD":
//             alert("The 'D' key is pressed.");
//             audio = new Audio("keys/D.mp3");
//             audio.play();
//             break;
//         case "KeyF":
//             alert("The 'F' key is pressed.");
//             audio = new Audio("keys/F.mp3");
//             audio.play();
//             break;
//         case "KeyG":
//             alert("The 'G' key is pressed.");
//             audio = new Audio("keys/G.mp3");
//             audio.play();
//             break;
//         case "KeyH":
//             alert("The 'H' key is pressed.");
//             audio = new Audio("keys/H.mp3");
//             audio.play();
//             break;
//         case "KeyJ":
//             alert("The 'J' key is pressed.");
//             audio = new Audio("keys/J.mp3");
//             audio.play();
//             break;
//     }
// });
