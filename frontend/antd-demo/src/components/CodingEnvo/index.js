const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/run-cpp', (req, res) => {
  const { code } = req.body;

  // Write the C++ code to a temporary file
  const fileName = 'temp.cpp';
  require('fs').writeFileSync(fileName, code);

  // Compile and run the C++ code using g++
  const child = spawn('g++', [fileName, '-o', 'temp.exe']);

  child.stderr.on('data', (data) => {
    console.error('Compilation error:', data.toString());
    res.status(500).json({ error: 'Compilation error' });
  });

  child.on('close', (code) => {
    if (code === 0) {
      // Compilation successful, run the program
      const childRun = spawn('./temp.exe');
      let output = '';

      childRun.stdout.on('data', (data) => {
        output += data.toString();
      });

      childRun.on('close', () => {
        console.log('Code execution successful');
        res.status(200).json({ output });
      });
    } else {
      console.error('Compilation failed');
      res.status(500).json({ error: 'Compilation failed' });
    }
  });
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
