## GPT Prompt Engineer

A simple project using vanilla HTML and JavaScript to use prompt engineering with OpenAI API.

### Table of Contents

- Installation
- Usage
- Features
- Contributing
- License
- Contact

### Before getting started
Before you get started, make sure you have node.js installed on your computer. 
You can downloaded here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

You will also need to make sure you have access to OpenAI's API.
https://platform.openai.com/api-keys

This project sets the API Key as an environmental variable.
https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html

### Installation

1. Clone the repository

```
git clone https://github.com/brukmula/multipleAPI
```

1. Navigate to the project directory

```
cd multipleAPI
```

1. Install the Dependencies

```
npm install 
```

### Usage

Once you have everything installed, you can type this into your terminal: 

```bash
node server.js
```

This will launch the app onto your local device at the address: http://localhost:3000

### Features

- #### Choose GPT Model 
    You can select which model of ChatGPT you want to interact with without adjusting any code.
---
- #### Create Prompt
  Adjust the prompt that ChatGPT receives by simply entering the desired prompt into the 'prompt' box.
---
- ### Send Message
  Once you have selected your model and prompt, go ahead and ask ChatGPT something! Different models have different 
  wait times.
---