const validate = () => {
    const form = document.getElementById('form')
    const email = document.getElementById('email')
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const phone = document.getElementById('phone-number')
    const text = document.getElementById('message')
    const eula = document.getElementById('eula')
    const error =  document.getElementById('error')



    if (!eula.checked) {
        sendError(error, "Zaznacz zgodę na przetwarzanie danych osobowych!")
    }
    else if (email.value === '' || firstName.value === '' || text.value === '') {
        sendError(error, "Zaznacz wszystkie pola z gwiazdką!")
    }
    else if (!email.value.match(/^\S+@\S+\.\S+$/)){
        console.log("REGEX")
        sendError(error, "Wprowadź prawidłowy adres email!")
    }
    else if (!phone.value.match(/\b\d{3} \d{3} \d{3}\b/) && phone.value !== ''){
        console.log("NUMER")
        sendError(error, "Wprowadź numer telefonu w formacie 000 000 000 lub zostaw puste!")
    }
    else {
        location.reload()
    }




}

const sendError = (e, text) => {
    console.log("ERROR")
    e.innerHTML = text
}