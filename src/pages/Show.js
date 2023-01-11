import { useLoaderData, Form } from "react-router-dom"

export default function Show (props) {
    const cheese = useLoaderData()
    
    return (
    <div>
        <h2>{cheese.name}</h2>
        <h3>Contry of Origin: {cheese.countryOfOrigin}</h3>
        <img src={cheese.image} alt={cheese.name}/>

        <h2>Update {cheese.name}</h2>
      <Form action={`/update/${cheese._id}`} method="post">
        <input defaultValue={cheese.name} type="input" name="name" />
        <input defaultValue={cheese.countryOfOrigin} type="input" name="countryOfOrigin" />
        <input defaultValue={cheese.image} type="input" name="image" />
        <input type="submit" value={`Update ${cheese.name}`}/>
      </Form>
      <h2>Delete Person</h2>
      <Form action={`/delete/${cheese._id}`} method="post">
        <input type="submit" value={`Delete ${cheese.name}`}/>
      </Form>
    </div>
    )
}