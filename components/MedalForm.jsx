import React from "react";

const MedalForm = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className='input-field'>
            <label>{label}</label>
            <br />
            <input className="inputBox"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    );
};

export default MedalForm;