import { useLoaderData, Link, Form } from "react-router-dom";
import { useState } from "react";
import FilterCheese from "../components/FilterCheese";

export default function Index(props) {
  const cheeses = useLoaderData();
  const imgStyle = {
    width: "300px",
  };

  const [filterTextValue, updateFilterText] = useState("All");

  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);
  }

  let filterEngland = cheeses.filter(
    (cheese) => cheese.countryOfOrigin === "England"
  );
  let filterChina = cheeses.filter(
    (cheese) => cheese.countryOfOrigin === "China"
  );
  let filterItaly = cheeses.filter(
    (cheese) => cheese.countryOfOrigin === "Italy"
  );

  return (
    <div>
      <h2>Add a Type of Cheese:</h2>

      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="Name of cheese" />
        <input
          type="input"
          name="countryOfOrigin"
          placeholder="Country of origin"
        />
        <input type="input" name="image" placeholder="Picture of Cheese" />

        <input type="submit" value="Add Cheese" />
      </Form>

      <h2>Different Types of Cheese</h2>
      <FilterCheese filterValueSelected={onFilterValueSelected} />
      {filterTextValue === "England"
        ? filterEngland.map((cheese) => (
            <div>
              <Link to={`/${cheese._id}`}>
                <h2>{cheese.name}</h2>
              </Link>
              <img src={cheese.image} alt={cheese.name} style={imgStyle} />
            </div>
          ))
        : filterTextValue === "China"
        ? filterChina.map((cheese) => (
            <div>
              <Link to={`/${cheese._id}`}>
                <h2>{cheese.name}</h2>
              </Link>
              <img src={cheese.image} alt={cheese.name} style={imgStyle} />
            </div>
          ))
        : filterTextValue === "Italy"
        ? filterItaly.map((cheese) => (
            <div>
              <Link to={`/${cheese._id}`}>
                <h2>{cheese.name}</h2>
              </Link>
              <img src={cheese.image} alt={cheese.name} style={imgStyle} />
            </div>
          ))
        : cheeses.map((cheese) => (
            <div>
              <Link to={`/${cheese._id}`}>
                <h2>{cheese.name}</h2>
              </Link>
              <img src={cheese.image} alt={cheese.name} style={imgStyle} />
            </div>
          ))}
    </div>
  );
}
