import './Contributor.css'

const Contributor = ({ name, occupation, image, backgroundColor }) => {
  return (
    <div className='contributor'>
      <div className='card-top' style={{'--team-bg-color': backgroundColor}}>
        <img src={image} alt={name}/>
      </div>
      <div className='card-bottom'>
        <h4>{name}</h4>
        <h5>{occupation}</h5>
      </div>
    </div>
  )
}

export default Contributor