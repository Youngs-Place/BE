const express = require('express');
const app = express();

const PORT = 3000;

// 헬스 체크 엔드포인트 추가
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
