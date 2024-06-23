let event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 200,
    clientY: 200
})

alert(event.clientY)