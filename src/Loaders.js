const URL = "https://cheese-api-89tp.onrender.com"

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheese");
    const cheese = await response.json();
    return cheese 
}

export const cheeseLoader = async ({params}) => {
const response = await fetch(URL + "/cheese/" + params.id);
const cheese = await response.json();
return cheese
}