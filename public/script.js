const aiForm = document.getElementById("aiForm");
const loading = document.getElementById("loading");

// When user submits information
aiForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const api = document.getElementById('api').value;
    const prompt = document.getElementById('prompt').value;
    const message = document.getElementById('message').value;

    loading.hidden = false; // Show loading text

    try{
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ api, prompt, message })
        });

        if (!response.ok) {
            throw new Error('Failed to communicate with ChatGPT.')
        }

        const data = await response.json();
        document.getElementById('response').innerText = data.reply;
    } catch (error){
        console.log(error);
    } finally {
        loading.hidden = true // Remove loading text
    }

});

