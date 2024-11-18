const fetchData = async () => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('https://dummyjson.com/products')

        if (!response.ok) {
            reject(response.statusText)
        }

        const json = await response.json()

        resolve(json.products)
    })
}


const updateTable = async () => {
    const searchText = document.getElementById('search').value
    const tableContainer = document.getElementById('tableContainer')
    const products = await fetchData();
    const productsFiltered = products.filter(v => v.title.toLowerCase().includes(searchText.toLowerCase()))
    const filters = document.getElementById('filters');
    console.log(filters.value)
    if (filters.value === 'ascending') {
        productsFiltered.sort((a, b) => {
            const nameA = a.title.toLowerCase()
            const nameB = b.title.toLowerCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        })
    }
    else if (filters.value === 'descending') {
        productsFiltered.sort((a, b) => {
            const nameA = a.title.toLowerCase()
            const nameB = b.title.toLowerCase()
            if (nameA < nameB) {
                return 1
            }
            if (nameA > nameB) {
                return -1
            }
            return 0
        })
    }
    tableContainer.innerHTML = ""
    let product;
    console.log(productsFiltered)
    for (product of productsFiltered) {
        let newElement = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        newElement.classList.add('product')
        let title = document.createElement('div')
        title.innerHTML = `<h3>${product.title}</h3>`
        let description = document.createElement('div')
        description.innerHTML = `<p>${product.description}</p>`
        let image = document.createElement('img')
        image.width = 100
        image.height = 100
        image.src = product.images[0]
        right.appendChild(image)
        left.appendChild(title)
        left.appendChild(description)
        newElement.appendChild(left)
        newElement.appendChild(right)
        tableContainer.appendChild(newElement)
    }
}