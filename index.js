import express from 'express';
const app = express();
import path from 'path';


app.use(express.static(path.join(path.resolve(), '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});