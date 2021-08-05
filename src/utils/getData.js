export const getData = async (url, method = 'GET', formData = null) => {
    const res = await fetch(url, {
        method: method,
        body: formData,
    });

    if (!res.ok) {
        throw new Error(res.status);
    }

    const data = await res.json();
    return data;
};
