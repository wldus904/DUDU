export const FETCH = async ({ ENDPOINT, METHOD, data }) => {
    const response = await fetch(ENDPOINT, { method: METHOD, body: JSON.stringify(data) });
    return response.json();
};
