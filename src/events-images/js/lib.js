function printImages() {
    let list = document.getElementById('photos')
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement('p')
        p.innerHTML = `7 * ${i} = <b>${7 * i}</b>`
        p.style.color = 'blue'
        list.appendChild(p)
    }
}