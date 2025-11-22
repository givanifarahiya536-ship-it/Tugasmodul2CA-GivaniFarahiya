import React, { useState } from 'react';

function Kalkulator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => { setInput(''); setResult(''); };
  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div style={{
      maxWidth: 340,
      margin: '50px auto',
      padding: 28,
      borderRadius: 24,
      background: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)',
      boxShadow: '0 8px 32px rgba(255,182,193,0.15)',
      fontFamily: 'Segoe UI, Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: 18,
        color: '#c2185b',
        letterSpacing: 2,
        fontWeight: 700,
        fontSize: 28
      }}>Kalkulator</h2>
      <input
        value={input}
        readOnly
        style={{
          width: '100%',
          fontSize: 26,
          padding: 12,
          marginBottom: 10,
          borderRadius: 10,
          border: '1px solid #ff69b4',
          textAlign: 'right',
          background: '#fff0f6',
          boxShadow: '0 2px 8px rgba(255,182,193,0.07)'
        }}
      />
      <div style={{
        fontSize: 24,
        minHeight: 36,
        marginBottom: 14,
        textAlign: 'right',
        color: '#c2185b',
        background: '#ffe4ec',
        borderRadius: 10,
        padding: '6px 14px',
        boxShadow: '0 1px 4px rgba(255,182,193,0.07)'
      }}>{result}</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 10
      }}>
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+','='].map((v) =>
          v === '='
            ? <button key={v} onClick={handleCalculate} style={btnStyleActive}>=</button>
            : <button key={v} onClick={() => handleClick(v)} style={btnStyle}>{v}</button>
        )}
        <button
          onClick={handleClear}
          style={{
            ...btnStyle,
            gridColumn: 'span 4',
            background: 'linear-gradient(90deg, #ff69b4 0%, #ffb6c1 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 20,
            marginTop: 6,
            boxShadow: '0 2px 8px rgba(255,105,180,0.12)'
          }}
        >
          C
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  fontSize: 22,
  padding: '18px 0',
  borderRadius: 10,
  border: 'none',
  background: 'linear-gradient(90deg, #fff 60%, #ffe4ec 100%)',
  boxShadow: '0 2px 6px rgba(255,182,193,0.09)',
  cursor: 'pointer',
  transition: 'background 0.2s, transform 0.2s'
};

const btnStyleActive = {
  ...btnStyle,
  background: 'linear-gradient(90deg, #ff69b4 0%, #ffb6c1 100%)',
  color: '#fff',
  fontWeight: 700,
  transform: 'scale(1.05)'
};

export default Kalkulator;