self.addEventListener('message', processData, false)

function processData (e) {
    let message = e.data,
        pixelData = message.data,
        len = pixelData.length

    for (let i = 0; i < len; i+=4) {
        pixelData[i] = 255 - pixelData[i]
        pixelData[i + 1] = 255 - pixelData[i + 1]
        pixelData[i + 2] = 255 - pixelData[i + 2]
    }
    self.postMessage(message)
}