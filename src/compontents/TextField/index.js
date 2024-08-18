import './TextField.css';

const TextField = (props) => {

  const afterType = (event) => {
    props.afterChange(event.target.value);
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={afterType} required={props.required} placeholder={props.placeholder}/>
    </div>
  )
}

export default TextField