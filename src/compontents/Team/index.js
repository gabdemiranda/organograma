import Contributor from '../Contributor'
import './Team.css'

const Team = (props) => {
  return (
    props.contributors.length > 0 && <section className='team' style={{
      '--team-bg-color': props.secondaryColor,
      '--team-after-bg-color': props.primaryColor
    }}>
      <h3>{props.name}</h3>
      <div className='contributors'>
        {props.contributors.map(contributor => <Contributor
          key={contributor.name}
          name={contributor.name}
          occupation={contributor.occupation}
          image={contributor.image}
          backgroundColor={props.primaryColor}
        />)}
      </div>
    </section>
  )
}

export default Team