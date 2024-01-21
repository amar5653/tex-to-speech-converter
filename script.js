let speech = new SpeechSynthesisUtterance;
let btn = document.getElementById("btn");
let voices = [];
let voiceSelect = document.querySelector("select");
let textarea = document.getElementById("textarea");

Window.SpeechSynthesis.onvoiceschanged = () => {
    voices = Window.SpeechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice) => {
        (voiceSelect.option[i]) = new Option(voice.name, i);
    });



}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click", ()=>{
    speech.text = textarea.value;
    Window.SpeechSynthesis.speak(speech);
})