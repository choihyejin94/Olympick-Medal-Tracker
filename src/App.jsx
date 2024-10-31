import React, { useState } from 'react';
import MedalForm from '../components/MedalForm';
import MedalList from '../components/MedalList';
import Footer from '../components/Footer';

const App = () => {
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);
  
  const preventSubmit = (event) => {
    event.preventDefault();
    // 새로고침 방지
    const newCountry = { country, gold, silver, bronze };
    // 새로운 데이터 추가
    
    const existingCountry = countries.find(c => c.country === country);
    if (existingCountry) {
      alert('이 국가는 이미 추가되었습니다. 업데이트 버튼을 사용하세요.');
      return;
      // 국가가 이미 존재하는지 확인
    }
    setCountries([...countries, newCountry]);
    reset();  
  }
  const reset = () => {
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
    // 입력 필드 초기화
  };

  const updateCountries = () => {
    let countryUpdated = false;

    const updatedCountries = countries.map((updateCountry) => {
      if (updateCountry.country === country) {
        return {
          country: updateCountry.country,
          gold: gold,
          silver: silver,
          bronze: bronze,
        };
      }
      return updateCountry;
    });
    setCountries(updatedCountries);
    reset();
    // 업데이트 후 input 내용 초기화
  };

  return (
    <>
      <div className='all'>
        <header>
          <h2>2024 파리 올림픽</h2>
        </header>
        <div>
          <MedalForm 
            country={country}
            setCountry={setCountry}
            gold={gold}
            setGold={setGold}
            silver={silver}
            setSilver={setSilver}
            bronze={bronze}
            setBronze={setBronze}
            onSubmit={preventSubmit}
            updateCountries={updateCountries}
            />
          <MedalList countries={countries} setCountries={setCountries} />
        </div>
      </div>
      <footer><Footer /></footer>
    </>
  )
}

export default App;