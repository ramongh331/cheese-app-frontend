import { useLoaderData, Link, Form } from "react-router-dom";

export default function Index(props) {
  const cheeses = useLoaderData();
const imgStyle = {
    width: "300px"
}
  return (
    <div>
<h2>Add a Type of Cheese:</h2>
<Form action="/create" method="post">
    <input type="input" name="name" placeholder="Name of cheese"/>
    <input type="input" name="countryOfOrigin" placeholder="Country of origin"/>
    <input type="input" name="image" placeholder="Picture of Cheese"/>

    <input type="submit" value="Add Cheese"/>
</Form>

      <h2>Different Types of Cheese</h2>
      {cheeses.map((cheese) => (
        <div>
          <Link to={`/${cheese._id}`}>
            <h2>{cheese.name}</h2>
          </Link>
          <img src={cheese.image} alt={cheese.name} style={imgStyle}/>
        </div>
      ))}
    </div>
  );
}
