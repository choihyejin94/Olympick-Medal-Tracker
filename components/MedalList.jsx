import React from 'react';

const MedalList = ({ countries, setCountries }) => {
    const sortedcountries = [...countries].sort((a, b) => {
        if (b.gold !== a.gold) {
            return b.gold - a.gold;
        } else if (b.silver !== a.silver) {
            return b.silver - a.silver;
        } else {
            return b.bronze - a.bronze;
        }
        // 내림차순 정렬, [...]에 넣으면 원본 배열 변경되지 않음.
    });

    const deleteBtn = (countryToDelete) => {
        setCountries(countries.filter((country) => country.country !== countryToDelete));
    }; // countryToDelete는 삭제할 국가의 이름

    return (
        <div className='tableBox'>
            {countries.length === 0 ? (
                <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
            ) : (
                <table>
                    <thead>
                        <tr className='firstTable'>
                            <td>국가명</td>
                            <td>금메달</td>
                            <td>은메달</td>
                            <td>동메달</td>
                            <td>삭제</td>
                        </tr>
                    </thead>
                    <tbody className='secondBtn'>
                        {sortedcountries.map((content, index) => (
                            <tr key={content.country} className={index % 2 === 0 ? 'even' : 'odd'}>
                                <td>{content.country}</td>
                                <td>{content.gold}</td>
                                <td>{content.silver}</td>
                                <td>{content.bronze}</td>
                                <td>
                                    <button className='deleteBtn' onClick={() => deleteBtn(content.country)}>🗑️</button>
                                    {/* onClick에 직접 deleteBtn(content.country)를 넣으면 즉시 호출되기 때문에 함수 안에 넣는다. */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MedalList;