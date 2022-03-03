import axios from "axios"

export const apiCatWiki = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});
