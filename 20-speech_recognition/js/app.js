window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    // console.log(e.result); // list of results
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    p.textContent = transcript;
    if (e.result[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    if (transcript.includes('unicorn')) {
        console.log('Unicorn!');
    }

    console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

recognition.start();
