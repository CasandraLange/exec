
const { spawn } = require('child_process');

// This will launch calc.exe without attaching stdio
spawn('calc.exe', [], {
  detached: true,
  stdio: 'ignore'
}).unref();