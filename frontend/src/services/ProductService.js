import axios from "axios";

const BASE_URL = '/api';
const URI_PRODUCTS = '/products';


const defaultOptions = {

}

export const makeApiCall = async function (uri, method = "GET", options = defaultOptions) {
    try {
        const response = await axios({
            ...options,
            method: method,
            url: BASE_URL + uri,
        });
        return response.data;
    } catch (err) {
        //We will handle this in the middleware
        throw err;
    }
}
export async function fetchAllProducts() {
    // return [
    //     { id: "1", name: "Sample1", priceUsd: 1000 },
    //     { id: "2", name: "Sample2", priceUsd: 2000 }
    // ]

    return makeApiCall(URI_PRODUCTS);
}

export async function postProduct(product) {
    return makeApiCall(URI_PRODUCTS, "POST", {
        data: product
    });
}

export async function patchProduct(product) {
    return makeApiCall(`${URI_PRODUCTS}/${product.id}`, "PATCH", {
        data: product
    });
}

export async function deleteProduct(product) {
    return makeApiCall(`${URI_PRODUCTS}/${product.id}`, "DELETE");
}