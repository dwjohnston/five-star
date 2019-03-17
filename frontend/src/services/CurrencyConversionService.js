import axios from "axios";
const BASE_URL = "https://api.exchangeratesapi.io/latest";

export async function fetchLatestRate(from, to) {
    //https://api.exchangeratesapi.io/latest?symbols=USD&base=AUD

    try {
        const response = await axios(({
            method: "GET",
            url: `${BASE_URL}?symbols=${to}&base=${from}`
        }));
        return response.data;
    }
    catch (err) {
        return err;
    }


}

export async function fetchUsdToAudRate() {
    const ratesData = await fetchLatestRate("USD", "AUD");
    return ratesData.rates.AUD;
}

