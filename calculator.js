const list = [];
const results = [];

function getResult(x, op, y) {
    if (isNaN(x)) {
        return "Wrong Input Number"
    }
    else if (isNaN(y)) {
        return "Wrong Input Number"
    }
    else switch (op) {
        case "+":
            return parseFloat(x) + parseFloat(y);
        case "-":
            return parseFloat(x) - parseFloat(y)
        case "*":
            return parseFloat(x) * parseFloat(y)
        case "/":
            return parseFloat(x) / parseFloat(y)
        case "%":
            return parseFloat(x) % parseFloat(y)
        default:
            return "Computation Error (Operator)"
    }
}

function promptUser() {
    list.push({
            x: prompt("What is the value of 'x'?"),
            op: prompt("What operator would you like to use?"),
            y: prompt("What is the value of 'y'?"),
    });
}

do {
    promptUser();
} while (confirm("Do you wish to continue?"));

list.forEach(obj => { obj.result = getResult(obj.x, obj.op, obj.y) });

document.write("<table>"); 
document.write('<tr> <th>x</th> <th>op</th> <th>y</th> <th>result</th> </tr>');
list.forEach(obj => { document.write(`<tr><td>${obj.x}</td> <td>${obj.op}</td> <td>${obj.y}</td> <td>${obj.result} </td></tr>`)}); 
document.write("</table>");

list.forEach(obj => {
    if (typeof obj.result != 'string') { results.push(getResult(obj.x, obj.op, obj.y)) } });

document.write("<table>"); 
document.write("<tr><th>Min</th> <th>Max</th> <th>Average</th> <th>Total</th> </tr>"); 
document.write(`<tr><td>${Math.min.apply(Math, results).toString()}</td> <td>${Math.max.apply(Math, results).toString()}</td> <td>${(results.reduce((a, b) => a + b, 0) / results.length).toString()}</td> <td>${(results.reduce((a, b) => a + b, 0)).toString()}</td> </tr>`); 
document.write("</table>"); 
