//getting element
let el = function(element) {
    if (element.charAt(0) == '#') {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};

//variable
let display = el('#display'),
    equation = el('#equation'),
    answer = el('#answer'),
    funcs = el('.func'),
    nums = el('.num'),
    operators = el('.operator'),
    dot = el('#dot'),
    exp = el('#exp'),
    ans = el('#ans'),
    theNum = '',
    resultNum,
    operafunc,
    oldNum = '',
    equalTo = el('#equalTo');
//functions
//getting number
function setNum() {
    if (resultNum) {
        theNum = this.innerHTML;
        resultNum = '';
    } else {
        theNum += this.innerHTML;
    }
    equation.innerHTML = theNum;
}

//getting operator
function moveNum() {
    console.log(this.getAttribute('ops'));
    oldNum = theNum;
    theNum = '';
    operafunc = this.getAttribute('ops');
}
//Answer
function displayAns() {
    //converting string to number
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    //performing operation
    console.log(oldNum);
    console.log(theNum);
    //performing operation
    switch (operafunc) {
        case 'plus':
            resultNum = oldNum + theNum;
            break;

        case 'minus':
            resultNum = oldNum - theNum;
            break;
        case 'times':
            resultNum = oldNum * theNum;
            break;

        case 'divide':
            resultNum = oldNum / theNum;
            break;

        default:
            break;
    }

    //if equalTo is press without operator
    if (!operafunc) {
        resultNum = theNum;
    }
    answer.innerHTML = resultNum;
    theNum = resultNum;
}

//fraction conver
function conFraction() {
    alert('am here');
}

//root
function root() {
    resultNum = Math.sqrt(theNum);
    answer.innerHTML = resultNum;
}

//square
function square() {
    resultNum = theNum * theNum;
    answer.innerHTML = resultNum;
}

//Logarithm function
function Log() {
    resultNum = Math.log10(theNum);
    answer.innerHTML = resultNum;
}

//Natural Log function
function natLog() {
    resultNum = Math.log(theNum);
    answer.innerHTML = resultNum;
}
//Adding click effect to number
nums.forEach(element => {
    element.onclick = setNum;
});

//Adding click effect to operator
operators.forEach(element => {
    element.onclick = moveNum;
});

//adding click effect to equalTo
equalTo.onclick = displayAns;

// adding click effect to  funcs
//function Array
const funcArray = [conFraction, root, square, '', Log, natLog];
for (i = 0; i < funcArray.length; i++) {
    funcs[i].onclick = funcArray[i];
    console.log(funcs[i]);
    console.log(funcArray[i]);
}