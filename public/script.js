document.getElementById('aiForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const api = document.getElementById('api').value;
    const prompt = document.getElementById('prompt').value;
    const message = document.getElementById('message').value;

    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ api, prompt, message })
    });

    const data = await response.json();
    document.getElementById('response').innerText = data.reply;
});
