import './App.css';
import React, {useState, useEffect} from 'react';
import data from './data';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { ImQuotesRight } from 'react-icons/im';


function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1
    if(index === -1){
      setIndex(lastIndex)
    }
    if(index === lastIndex + 1){
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let valor = setInterval(() => {
      setIndex(index + 1)
    }, 3000);
    return () => clearInterval(valor)
  },[index])

  return (
    <div className="App">
      <h2 className="tittle"> <span>/</span> Reviews</h2>
      <section className="slider">
        {
          people.map((person, personIndex) => {

            const {id, image, name, job, text} = person;

            //the position variable is used as the class of the article I return
            let position = 'nextSlide';

            if(personIndex === index){
              position = 'activeSlide'
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
              position = 'lastSlide'
            }


            return(
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img"/>
                <h3 className="person-name">{name}</h3>
                <p className="person-job">{job}</p>
                <p className="person-description">{text}</p>
              </article>
            )
          })
        }
        <div className="arrows">
          <IoIosArrowBack className="icon" onClick={() => setIndex(index - 1)}/>
          <IoIosArrowForward className="icon" onClick={() => setIndex(index + 1)}/>
        </div>
        <div className="quotes">
          <ImQuotesRight className="icon quotes"/>
        </div>

      </section>
    </div>
  );
}

export default App;
