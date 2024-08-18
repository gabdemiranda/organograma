import { useState } from 'react';
import Banner from './compontents/Banner';
import Form from './compontents/Form';
import Team from './compontents/Team';

function App() {

  const teams = [
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ]

  const [contributors, setContributors] = useState([])

  const afterNewRegisteredContributor = (contributor) => {
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Form afterRegisteredContributor={contributor => afterNewRegisteredContributor(contributor)} />
      { teams.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} />) }
    </div>
  );
}

export default App;
