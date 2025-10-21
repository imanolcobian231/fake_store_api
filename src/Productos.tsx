export async function getProducts() {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")

        if(!response.ok) {
            throw new Error("Fetch fallido")
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

getProducts()