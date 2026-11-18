import React, { useState } from 'react';

// Import our decoupled standalone modules
import { calculate, squareRoot } from './util/mathEngine';
import { formatDisplay } from './util/displayMath';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [activeOperator, setActiveOperator] = useState(null);
  const [isResettingDisplay, setIsResettingDisplay] = useState(false);
  const handleClear = () => {
    setDisplay('0');
    setStoredValue(null);
    setActiveOperator(null);
    setIsResettingDisplay(false);
  };

  const handleNumber = (digit) => {
    if (display === '0' || isResettingDisplay) {
      setDisplay(digit);
      setIsResettingDisplay(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperator = (nextOperator) => {
    if (activeOperator && !isResettingDisplay) {
      const result = calculate(storedValue, display, activeOperator);
      setDisplay(String(result));
      setStoredValue(result);
    } else {
      setStoredValue(display);
    }
    setActiveOperator(nextOperator);
    setIsResettingDisplay(true);
  };

  const handleEqual = () => {
    if (!activeOperator || isResettingDisplay) return;
    const result = calculate(storedValue, display, activeOperator);
    setDisplay(String(result));
    setStoredValue(null);
    setActiveOperator(null);
    setIsResettingDisplay(true);
  };

const handleSquareRoot = () => {
    const num = parseFloat(display);
    
    // Check if negative right in the handler to be 100% sure
    if (num < 0 || isNaN(num)) {
      setDisplay("Error: Invalid Input");
    } else {
      const result = squareRoot(num);
      setDisplay(formatDisplay(result));
    }
    
    setIsResettingDisplay(true);
  };

  // Button layout array for mapping
  const buttons = [
    { label: 'C', action: handleClear, type: 'clear' },
    { label: '√', action: handleSquareRoot, type: 'operator' }, // Added Square Root
    { label: 'x^y', action: () => handleOperator('**'), type: 'operator' }, // Added Exponent
    { label: '/', action: () => handleOperator('/'), type: 'operator' },
    { label: '7', action: () => handleNumber('7') },
    { label: '8', action: () => handleNumber('8') },
    { label: '9', action: () => handleNumber('9') },
    { label: '*', action: () => handleOperator('*'), type: 'operator' },
    { label: '4', action: () => handleNumber('4') },
    { label: '5', action: () => handleNumber('5') },
    { label: '6', action: () => handleNumber('6') },
    { label: '-', action: () => handleOperator('-'), type: 'operator' },
    { label: '1', action: () => handleNumber('1') },
    { label: '2', action: () => handleNumber('2') },
    { label: '3', action: () => handleNumber('3') },
    { label: '+', action: () => handleOperator('+'), type: 'operator' },
    { label: '0', action: () => handleNumber('0'), style: { gridColumn: 'span 2' } },
    { label: '=', action: handleEqual, type: 'operator' }
  ];

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Module 07: Modular Calculator</h2>
      <div style={styles.calculatorBox}>
        {/* Pass the display value through our formatting utility module */}
        <div style={styles.screen}>{typeof display === 'string' && display.includes('Error') ? display : formatDisplay(display)}</div>
        <div style={styles.grid}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.action}
              style={{
                ...styles.btn,
                ...(btn.type === 'operator' ? styles.opBtn : {}),
                ...(btn.type === 'clear' ? styles.clearBtn : {}),
                ...btn.style
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '100vh', 
    backgroundColor: '#0f172a', 
    color: '#f8fafc', 
    fontFamily: 'sans-serif' 
  },
  title: { 
    marginBottom: '20px', 
    color: '#94a3b8', 
    fontSize: '1.2rem', 
    fontWeight: '500' 
  },
  calculatorBox: { 
    width: '320px', 
    padding: '20px', 
    borderRadius: '16px', 
    backgroundColor: '#1e293b',
    boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.3)' 
  },
  screen: { 
    width: '100%', 
    height: '60px', 
    backgroundColor: '#0f172a', 
    borderRadius: '8px', 
    marginBottom: '20px', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    padding: '0 15px', 
    boxSizing: 'border-box', 
    fontSize: '2rem',  
    fontWeight: 'bold', 
    color: '#38bdf8', 
    overflow: 'hidden' 
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(4, 1fr)', 
    gap: '10px' 
  },
  btn: { 
    padding: '20px', 
    fontSize: '1.25rem', 
    border: 'none', 
    borderRadius: '8px', 
    backgroundColor: '#334155', 
    color: '#f8fafc', 
    cursor: 'pointer', 
    fontWeight: '600', 
    transition: 'background 0.2s' 
  },
  opBtn: { 
    backgroundColor: '#f97316', 
    color: '#fff' 
  },
  clearBtn: { 
    backgroundColor: '#ef4444', 
    color: '#fff' 
  }
};