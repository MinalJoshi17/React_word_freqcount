import React, { useState } from 'react';

const Counter = () => {
    const [text, setText] = useState('');
    const [word, setWord] = useState(0);

    const countWord = (text) => {
        let words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
        setWord(words);
    };

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        countWord(newText);
    };

    const upperCase = () => {
        setText(text.toLocaleUpperCase());
        countWord(text.toLocaleUpperCase());
    };

    const lowerCase = () => {
        setText(text.toLocaleLowerCase());
        countWord(text.toLocaleLowerCase());
    };

    return (
        <div className='counter-container'>
            <div className='numbers-holder'>
                <div className='counter-box'>
                    <p>📝Word</p>
                    <p className='count'>{word > 0 ? word : '0'}</p>
                </div>
                <div className='counter-box'>
                    <p>✍️Letter</p>
                    <p className='count'>{text.replace(/\s+/g, '').length}</p>
                </div>
                <div className='counter-box'>
                    <p>📜Paragraph</p>
                    <p className='count'>{text.trim() === '' ? '0' : text.split(/\r\n|\r|\n/).filter(para => para.trim() !== '').length}</p>
                </div>
            </div>
            <div className='text-box'>
                <textarea
                    className='textarea'
                    value={text}
                    placeholder='Enter/Paste Your Text Here'
                    onChange={handleChange}
                />
            </div>
            <div className='button-box'>
                <button onClick={upperCase}>Click to Uppercase</button>
                <button onClick={lowerCase}>Click to Lowercase</button>
            </div>
            
        </div>
    );
};

export default Counter;
