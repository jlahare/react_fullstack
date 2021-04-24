import logo from './logo.svg';
import './App.css';
import Person from './common/person/Person';
import PersonForm from './common/form/PersonForm';
import { useState } from 'react';
import portalApi from './api/portalApi';
function App() {

  let [persons, setPersons] = useState([]);

  const appendPerson = async (nameValue, countryValue) => {
    const temp = [...persons];
    temp.push({ name: nameValue, country: countryValue });
    setPersons(temp);
    await portalApi.postPerson(nameValue , countryValue);
  }

  const getAllPersons = async () => {
    try{
      const response =  await portalApi.getPersons();
      console.log("actual reponse is " , JSON.stringify(response));
      if(response && response.data){
        console.log("response is...inside.", JSON.stringify(response));
        if(response.data.success === true){
          const pList  = response.data.list;
          setPersons(pList);
        }else{
          alert("something goes wron "+ JSON.stringify(response.data));
        }
      }
    }catch(err){
      alert("Data is not good "+ err);
    }
    
  }

  const deletePerson = async (indexValue) => {
    const temp = [...persons];
    temp.splice(indexValue, 1);
    setPersons(temp);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-6">
          <PersonForm onAppend={appendPerson} onListPerson={getAllPersons}></PersonForm>
        </div>
        <div className="col-sm-6">
          {persons.map((p, index) => {
            return <Person key={index} id={index} name={p.name} country={p.country} onDelete={deletePerson}></Person>
          }
          )}
        </div>
      </div>



    </div>
  );
}

export default App;
