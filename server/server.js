const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})