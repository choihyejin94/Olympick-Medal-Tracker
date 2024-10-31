import React from 'react'

const MedalForm = ({ country, setCountry, gold, setGold, silver, setSilver, bronze, setBronze, onSubmit, updateCountries }) => {
    const inputTexts = [
        { label: '국가명', type: 'text', placeholder: '국가 입력', value: country, onChange: (event) => setCountry(event.target.value) },
        { label: '금메달', type: 'number', placeholder: 0, value: gold, onChange: (event) => setGold(Number(event.target.value)) },
        { label: '은메달', type: 'number', placeholder: 0, value: silver, onChange: (event) => setSilver(Number(event.target.value)) },
        { label: '동메달', type: 'number', placeholder: 0, value: bronze, onChange: (event) => setBronze(Number(event.target.value)) },
    ];

    return (
        <div>
            <form className='renderBox' onSubmit={onSubmit}>
                {inputTexts.map((text, index) => (
                    <div className='input-field' key={index}>
                        <label>{text.label}</label>
                        <br />
                        <input
                            className="inputBox"
                            type={text.type}
                            placeholder={text.placeholder}
                            value={text.value}
                            onChange={text.onChange}
                        />
                    </div>
                ))}
                <button className='plusBtn' type='submit'>국가 추가</button>
                <button className='plusBtn' type='button' onClick={updateCountries}>업데이트</button>
            </form></div>
    )
}

export default MedalForm;