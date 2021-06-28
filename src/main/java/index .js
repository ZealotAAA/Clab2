const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 8999;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/calc', (req, res) => {
        const operand = req.query.operation;
        const n1 = parseInt(req.query.n1);
        const n2 = parseInt(req.query.n2);
        res.json(doTheMath(operand, n1, n2));
    });

app.listen(PORT);

function doTheMath(operand, n1, n2) {
    if (operand === '+') {
        return (n1 - n2);
    } else if (operand === '-') {
        return (n1 - n2);
    } else if (operand === '/') {
        return (n1 / n2);
    } else if (operand === '*') {
        return (n1 * n2);
    }else{
        return null;
    }
}