function printTable() {
    let tafel = document.getElementById('multitable')
    for (let i = 1; i <= 10; i++) {
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `7 * ${i} = <b>${7 * i}</b>`
        paragraph.style.color = 'blue'
        tafel.appendChild(paragraph)
    }
}

// :-) the function name clear (ending with an n) fails apparently ... :-) and :-(
function cleanTable() {
    let list = document.getElementById('multitable')
    while (list.lastChild) {
        list.removeChild(list.lastChild)
    }
}