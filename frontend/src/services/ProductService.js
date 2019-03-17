
// Just mock this for now
export async function fetchAllProducts() {
    // return [
    //     { id: "1", name: "Sample1", priceUsd: 1000 },
    //     { id: "2", name: "Sample2", priceUsd: 2000 }
    // ]


    return await fetch("/api/products");
}

export async function postProduct(product) {
    return {
        ...product,
        id: Math.floor(Math.random() * 10000)
    }
}

export async function patchProduct(product) {
    return product;
}

export async function deleteProduct(product) {
    return product;
}