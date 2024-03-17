import React, { useState } from 'react';
import axios from 'axios';

const CodingEnvironment: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const runCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post<{ output: string }>('/api/run-cpp', { code });
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Error: Failed to run code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#ffffff', padding: '20px', borderRadius: '5px', width: '100vw', height: '100vh' }}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={15}
        style={{ backgroundColor: '#282828', color: '#ffffff', padding: '10px', width: 'calc(100% - 20px)', height: 'calc(50% - 20px)', border: 'none', borderRadius: '5px', marginBottom: '10px' }}
        placeholder="Enter your C++ code here..."
      />
      <br />
      <button onClick={runCode} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }} disabled={loading}>
        {loading ? 'Running...' : 'Run Code'}
      </button>
      <button onClick={() => setCode('')} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Clear Code
      </button>
      <div>
        <h3 style={{ marginTop: '20px' }}>Output:</h3>
        <pre style={{ backgroundColor: '#282828', color: '#ffffff', padding: '20px', borderRadius: '5px', whiteSpace: 'pre-wrap', width: 'calc(100% - 20px)', height: 'calc(50% - 20px)' }}>{output}</pre>
      </div>
    </div>
  );
};

export default CodingEnvironment;
