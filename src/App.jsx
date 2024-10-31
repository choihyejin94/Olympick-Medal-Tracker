import React, { useState } from 'react';
import MedalForm from '../components/MedalForm';
import MedalList from '../components/MedalList';

const App = () => {
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  const inputTexts = [
    { label: '국가명', type: 'text', placeholder: '국가 입력', value: country, onChange: (event) => setCountry(event.target.value) },
    { label: '금메달', type: 'number', placeholder: 0, value: gold, onChange: (event) => setGold(Number(event.target.value)) },
    { label: '은메달', type: 'number', placeholder: 0, value: silver, onChange: (event) => setSilver(Number(event.target.value)) },
    { label: '동메달', type: 'number', placeholder: 0, value: bronze, onChange: (event) => setBronze(Number(event.target.value)) },
  ]

  const preventSubmit = (event) => {
    event.preventDefault();
    // 새로고침 방지
    const newCountry = { country, gold, silver, bronze };
    setCountries([...countries, newCountry]);
    // 새로운 데이터 추가  
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
    // 입력 필드 초기화
  }

  const updateCountries = () => {
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
    // 업데이트된 배열로 상태 설정
  };

  return (
    <>
      <div className='all'>
        <header>
          <h2>2024 파리 올림픽</h2>
        </header>
        <div>
          <form className='renderBox' onSubmit={preventSubmit}>
            {inputTexts.map((text, index) => (
              <MedalForm key={index} {...text} />
            ))}
            <button className='plusBtn' type='submit'>국가 추가</button>
            <button className='plusBtn' type='button' onClick={updateCountries}>업데이트</button>
          </form>
          <MedalList countries={countries} setCountries={setCountries} />
        </div>
      </div>
      <footer>TEL.032.1234.5678 / 인천광역시 내일배움캠프구 스파르타로
        <br></br>
        ©Hyejin corp.</footer>
    </>
  )
}

export default App;