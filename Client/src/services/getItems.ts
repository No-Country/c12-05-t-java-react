
export const getAllItems = async () => {
    const response = await fetch("http://localhost:3001/items");
    const data = await response.json();
    return data;
}

