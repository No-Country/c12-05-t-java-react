import { Item } from "../types/items";

export const createItem = async (item: Item) => {
    const response = await fetch("http://localhost:3001/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });
    const data = await response.json();
    return data;
}
