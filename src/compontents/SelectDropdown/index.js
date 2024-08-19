import './SelectDropdown.css';

const SelectDropdown = (props) => {
  return (
    <div className="select-dropdown">
      <label>{props.label}</label>
      <select onChange={event => props.afterChange(event.target.value)} required={props.required} value={props.value}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default SelectDropdown
