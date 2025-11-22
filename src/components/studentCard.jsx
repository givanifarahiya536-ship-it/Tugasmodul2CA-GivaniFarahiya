import React from 'react';

function StudentCard({ name, nim, dob, hobby }) {
  const hobbyIcon = {
    'Bermain Futsal': '⚽',
    'Membaca Novel dan Melukis': '🎨',
    'Coding dan Main Game': '💻'
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      borderRadius: 16,
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      padding: 24,
      margin: 16,
      minWidth: 240,
      maxWidth: 260,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        marginBottom: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        {name.split(' ')[0][0]}
      </div>
      <h3 style={{ margin: '8px 0 4px', color: '#4b2e83', fontWeight: 'bold' }}>{name}</h3>
      <div style={{ fontSize: 15, color: '#333', marginBottom: 4 }}>NIM: <b>{nim}</b></div>
      <div style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>Tanggal Lahir: {dob}</div>
      <div style={{
        background: '#fffbe6',
        borderRadius: 8,
        padding: '6px 12px',
        fontSize: 15,
        color: '#7c4700',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        <span style={{ fontSize: 20 }}>{hobbyIcon[hobby] || '🎲'}</span>
        <span>{hobby}</span>
      </div>
    </div>
  );
}

export default StudentCard;