// Creating timeline

    const timeLine = gsap.timeline({
        default : {
            ease : "power2"
        }
    })

    timeLine
    .to (".images-container", {
        height : 400,
        duration : 1
    })
    .to (".bloc-txt", {
        height : 80,
        duration : .5,
    }, "-= 0.001")
    .to (".bloc-txt h2", {
        y : 0,
        duration : .7,
    }, "-= 0.001")
    .to ('.f2', {
        y : 0, duration : 0.5
    })
    .to (".flip-img1", {
        display : "none"
    })
    .to ('.f2', {
        y : "-100%" , duration : 0.5
    })
    .add(() => {
        document.querySelector('video').play()
    })
    .add(() => {
        document.querySelector('.load-container').style.display = "none"
    })
    .from(".home-content h1", {
        y : -50,
        duration : 1
    })
    .from(".middle-line", {
    height : 0,
    duration : 1})