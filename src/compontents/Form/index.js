import { useState } from 'react';
import Button from '../Button';
import SelectDropdown from '../SelectDropdown';
import TextField from '../TextField';
import './Form.css'

const Form = (props) => {

  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (event) => {
    event.preventDefault();
    props.afterRegisteredColaborator({
      name,
      image,
      occupation,
      team
    })
  }

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          afterChange={value => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={occupation}
          afterChange={value => setOccupation(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          afterChange={value => setImage(value)}
        />
        <SelectDropdown
          required={true}
          itens={teams}
          label="Time"
          value={team}
          afterChange={value => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form