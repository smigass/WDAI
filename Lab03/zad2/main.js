const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialSigns = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~']





const generate = () => {
    const onlyLowerCase = !document.getElementById('lowercase').checked
    const allowSpecialSigns = document.getElementById('specialcase').checked
    const minLength = parseInt(document.getElementById('minimal-length').value)
    const maxLength = parseInt(document.getElementById('maximal-length').value)

    let length = Math.floor(Math.random() * (maxLength - minLength) + 1) + minLength
    console.log(length)
    let password = ''
    let source  = [...alphabet]

    if (allowSpecialSigns) {
        source.push(...specialSigns)
        console.log(source)
    }
    if (!onlyLowerCase) {
        source.push(...alphabet.map(el => el.toUpperCase()))
        console.log(source)
    }
    else {
        console.log(source)
    }

    for (let i = 0; i < length; i++) {
        let n = Math.floor(Math.random() * source.length)
        password += source[n]
    }

    alert(password)


}