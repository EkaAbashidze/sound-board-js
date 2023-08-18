const sounds = ["clock", "towel", "pingpong", "skateboard", "door", "ball"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
    });

    function stopSounds() {
    sounds.forEach((sound) => {
        const soundPlay = document.getElementById(sound);
        soundPlay.pause();
        soundPlay.currentTime = 0;
    });
}