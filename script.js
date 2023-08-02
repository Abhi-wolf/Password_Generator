// console.log(passwdLength);


const generate = document.getElementById("generatepass");
console.log(generate);

generate.addEventListener("click", () => {
    var res = generatePassword();
    console.log("res = ", res);

    const inputpass = document.getElementById("passwd");

    if (res == "") {
        inputpass.textContent = "";
        document.querySelector(".error").style.display = "block";
    }

    else {
        inputpass.textContent = res;
        document.querySelector(".error").style.display = "none";
        console.log(inputpass);
    }
})


/*
function generatePassword() {
    const passwdLength = document.getElementById("lengthIn");
    // console.log(passwdLength.value);
    const upper = document.getElementById("upper");
    // console.log(upper.checked);
    const lower = document.getElementById("lower");
    // console.log(lower);
    const number = document.getElementById("number");
    // console.log(number);
    const symbol = document.getElementById("symbols");
    // console.log(symbol);

    var res = "";
    var count = 0;

    const noOfChecked = upper.checked + lower.checked + number.checked + symbol.checked

    const length = parseInt(passwdLength.value);
    if (length == 0 || isNaN(length) || length < 8 || length > 20) {
        return "";
    }

    else if (noOfChecked == 0) {
        return "";
    }


    while (count < length) {
        if (upper.checked == true) {
            res += genarateUpper();
            count++;
            // console.log('u');
        }

        if (lower.checked == true) {
            res += genarateLower();
            count++;
            // console.log('l');

        }

        if (symbol.checked == true) {
            res += genarateSymbols();
            count++;
            // console.log('s');

        }

        if (number.checked == true) {
            res += genarateNumber();
            // console.log('n');
            count++;
        }
    }

    res = res.slice(0, length);
    return res;
}

*/

function generatePassword() {
    const passwdLength = document.getElementById("lengthIn");
    const upper = document.getElementById("upper");
    // console.log(upper.checked);
    const lower = document.getElementById("lower");
    // console.log(lower);
    const number = document.getElementById("number");
    // console.log(number);
    const symbol = document.getElementById("symbols");
    // console.log(symbol);

    let pass = "";
    var count = 0;

    const noOfChecked = upper.checked + lower.checked + number.checked + symbol.checked

    const length = parseInt(passwdLength.value);
    if (length == 0 || isNaN(length) || length < 8 || length > 20) {
        return "";
    }

    else if (noOfChecked == 0) {
        return "";
    }


    while (count < length) {
        pass += generateX();
        count++;
    }

    pass = pass.slice(0, length);
    return pass;
}


function generateX() {
    const upper = document.getElementById("upper");
    // console.log(upper.checked);
    const lower = document.getElementById("lower");
    // console.log(lower);
    const number = document.getElementById("number");
    // console.log(number);
    const symbol = document.getElementById("symbols");
    // console.log(symbol);

    let arr = [];
    if (upper.checked == true)
        arr.push(genarateUpper());
    if (lower.checked == true)
        arr.push(genarateLower());
    if (number.checked == true)
        arr.push(genarateNumber());
    if (symbol.checked == true)
        arr.push(genarateSymbols());

    return arr[Math.floor(Math.random() * arr.length)];
}





function genarateUpper() {
    const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upp[Math.floor(Math.random() * upp.length)];
}


function genarateLower() {
    const low = "abcdefghijklmnopqrstuvwxyz";
    return low[Math.floor(Math.random() * low.length)];
}

function genarateNumber() {
    const num = "0123456789";
    return num[Math.floor(Math.random() * num.length)];
}

function genarateSymbols() {
    const sym = "!@#$%^&*?/\+-";
    return sym[Math.floor(Math.random() * sym.length)];
}

// console.log(genarateSymbols());


const copy = document.getElementById("copy");
copy.addEventListener('click', () => {
    const ele = document.createElement("textarea");
    const passwd = document.getElementById("passwd");
    ele.value = passwd.textContent;
    passwd.appendChild(ele);

    ele.select();
    document.execCommand("Copy");
    passwd.removeChild(ele);
    alert('password copied to clipboard');
})