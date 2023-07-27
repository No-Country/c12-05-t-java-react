import { Item } from "../types/items";

export const updateItem = async (item: Item) => {
    const response = await fetch(`http://localhost:3001/items/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    return response.json();
}
