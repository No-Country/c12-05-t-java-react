
export const removeItem = async (id: string) => {
    const response = await fetch(`http://localhost:3001/items/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}
