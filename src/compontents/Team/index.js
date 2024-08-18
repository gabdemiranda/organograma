import './Team.css'

const Team = (props) => {
  return (
    <section className='team' style={{
      '--team-bg-color': props.secondaryColor,
      '--team-after-bg-color': props.primaryColor
    }}>
      <h3>{props.name}</h3>
    </section>
  )
}

export default Team