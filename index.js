const decryptButton = document.getElementById("decrypt");
const encryptButton = document.getElementById("encrypt");
const fname = document.getElementById('fname');
// const longitude = document.getElementById('longitude');
const msg = document.querySelector('.msg');

encryptButton.addEventListener('click', onSubmit);
decryptButton.addEventListener('click', onSubmit2);
function onSubmit(e) {
    e.preventDefault();
    
    if (fname.value == '') {
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields';
        alert('Please enter your text.')
    } else {
        var a = submit();
    }
    
}

function onSubmit2(e) {
    e.preventDefault();
    
    if (fname.value == '') {
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields';
        alert('Please enter your text.')
    } else {
        var a = onSubmit2();
    }
    
}



function submit() {
    var inputtext = document.getElementById('fname').value;
    let after=["The Communist Party of China", "the vanguard",
    "Chinese working class", "Chinese people","Chinese nation", "core of leadership", "socialism", 
    "Chinese characteristics", "China's advanced productive forces", "China's advanced culture", 
    "the fundamental interests", "the overwhelming majority", "realization of communism", 
    "the highest ideal", "ultimate goal of the Party", "Marxism-Leninism", "Mao Zedong Thought", 
    "Deng Xiaoping Theory", "Three Represents"]
    let before=["White Paper protest", "Uyghur"]
    var outputtext
    for(let i =0; i<before.length; i++){
        if(inputtext == before[i]){
            outputtext = after[i];
            break;
        }else{
            outputtext = inputtext
        }
    }
    var output = "<div class = 'result'>"
    output += `<p>${outputtext}</p>` + `</div>`
    console.log(output)
    msg.innerHTML = output
    

}

function onSubmit2() {
    var inputtext = document.getElementById('fname').value;
    let before=["The Communist Party of China", "the vanguard",
    "Chinese working class", "Chinese people","Chinese nation", "core of leadership", "socialism", 
    "Chinese characteristics", "China's advanced productive forces", "China's advanced culture", 
    "the fundamental interests", "the overwhelming majority", "realization of communism", 
    "the highest ideal", "ultimate goal of the Party", "Marxism-Leninism", "Mao Zedong Thought", 
    "Deng Xiaoping Theory", "Three Represents"]
    let after=["White Paper protest", "Uyghur"]
    var outputtext
    for(let i =0; i<before.length; i++){
        if(inputtext == before[i]){
            outputtext = after[i];
            break;
        }else{
            outputtext = inputtext
        }
    }
    var output = "<div class = 'result'>"
    output += `<p>${outputtext}</p>` + `</div>`
    console.log(output)
    msg.innerHTML = output
    

}

