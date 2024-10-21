// clickWorker.js

// The worker waits for messages from the main thread
self.onmessage = function(event) {
    const targetWord = event.data.targetWord;

    // Start clicking every 10ms (you can adjust this interval)
    const clickInterval = setInterval(() => {
        // Send the target word back to the main thread to perform the click
        self.postMessage(targetWord);
    }, 10);

    // Stop the worker if a "stop" message is received
    self.onmessage = function(e) {
        if (e.data === 'stop') {
            clearInterval(clickInterval);
        }
    };
};
