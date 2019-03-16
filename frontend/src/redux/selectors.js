export function createEmptyProduct() {
    return {
        id: "",
        name: "",
        priceUsd: "",
    }
}


export function selectProductByProductId(state, id) {
    return state.products.find(product => `${product.id}` === id);
}