import { redirect } from "react-router-dom";

const URL = "https://cheese-api-89tp.onrender.com";

export const createAction = async ({ request }) => {
  
    // get the data from the form
  const formData = await request.formData();
  
  // set up the new cheese to match the schema
  const newCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image"),
  };
  
  // Send new cheese to API
  await fetch(URL + "/cheese", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCheese),
  });

  // redirect to index
  return redirect("/");
};

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    
    const updateCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
    }
  
    await fetch(URL + "/cheese/" + params.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCheese),
    })
  // Note to Kyle: I have this stay on the same page once the update is made. 
    return redirect("/" + params.id)
  }
  
  export const deleteAction = async ({params}) => {
    // delete person with our api
    await fetch(URL + "/cheese/" + params.id, {
      method: "delete"
    })
  
    // redirect to index
    return redirect("/")
  }