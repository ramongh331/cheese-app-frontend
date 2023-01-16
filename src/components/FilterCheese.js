export default function FilterCheese(props) {
    
    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value)
    }
  
  return (
    <div>
      <select name="countryOfOrigin" onChange={onFilterValueChanged}>
        <option value="All">All</option>
        <option value="England">England</option>
        <option value="China">China</option>
        <option value="Italy">Italy</option>
      </select>
    </div>
  );
}
