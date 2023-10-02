 // ===================================================== //
    // const SpeechRecognition       = window.SpeechRecognition || window.webkitSpeechRecognition
    // const SpeechGrammarList       = window.SpeechGrammarList || window.webkitSpeechGrammarList
    // const SpeechRecognitionEvent  = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    // const colors = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    // const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(" | ",)};`;

    // const recognition = new SpeechRecognition()
    // const speechRecognitionList = new SpeechGrammarList()
    // speechRecognitionList.addFromString(grammar, 1);

    // recognition.grammars = speechRecognitionList;
    // recognition.continuous = true;
    // recognition.lang = "en-US";
    // recognition.interimResults = false;
    // recognition.maxAlternatives = 1;

    // recognition.start()

    // recognition.onresult = (event) => {
    //     debugger;
    //     let lastIndex = event.results.length == 0 ? 0 : event.results.length - 1;
    //     const color = event.results[lastIndex][0].transcript;
    //     const confidence = event.results[lastIndex][0].confidence;

    //     if(confidence > 0) {
    //         let found = colors.findIndex(x => x == color.trim())
    //         if(found >= 0) {
    //             debugger;
    //         }
    //     }
    //     else console.log("bad bad bad")
    //     // console.log(`Confidence: ${event.results[lastIndex][0].confidence} :: ${color}`);
    // };
    // recognition.onnomatch = (event) => {
    //     debugger;
    // };
    // recognition.onerror = (event) => {
    //     debugger;
    // };

    // ===================================================== //