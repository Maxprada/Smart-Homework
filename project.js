function changeImage(image) {
    var currentSrc = image.src;
    
    if (currentSrc.endsWith("heartb.png")) {
        image.src = "heartr.png";
    } else {
        image.src = "heartb.png";
    }
}

function changeImage2(image) {
    var currentSrc = image.src;
    
    if (currentSrc.endsWith("korzb.png")) {
        image.src = "korzr.png";
    } else {
        image.src = "korzb.png";
    }
}