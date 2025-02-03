

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'yes') {
            document.querySelector('#particles-js').style.display = "block"
            const messages = [
                'omg she said yes guys',
                'YAYYYYY',
                'YIPPIEEEEE',
                'ily <3',
                'guys what do i do she just said yes',
                'did she just say yes omg',
                'i love you so much',
                'hi kristen <3'
            ] 
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random];       
            document.querySelector('#gif').src = "https://i.pinimg.com/originals/02/30/1f/02301f1307b63b6440b2d704ca48599e.gif";            
    
            // Create flying hearts
            for (let i = 0; i < 10; i++) { // Generate 10 hearts
                createHeart();
            }          
        }
        

        if(e.target.id === "no") {
            document.querySelector('#particles-js').style.display = "none" 
            const messages = [
                'pretty please', 
                'pwetty pwease',
                ':(', 
                'are you sure',
                'i think you clicked the wrong button',
                'you know you want to say yes!', 
                'the yes button is actually on the left',
                'maybe you misclicked',
                'are you absolutely, 100% sure?',   
                'you know deep down you really wanna say yes!',  
                'the yes button is actually on the left, trust me!',  
                'maybe you misclicked… , take your time!',  
            ]
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random]
            document.querySelector("#gif").src = "https://i.pinimg.com/originals/64/14/40/6414409adb5d8ef8957ace623b1fe8da.gif"
            
        }
    })
})

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // Unicode heart emoji


    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    // Remove the heart after animation
    setTimeout(() => {
        heart.remove();
    }, 3000);
}