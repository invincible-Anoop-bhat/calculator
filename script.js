// if num1 and 2 are kept as numbers when you enter 2 after clearing once it will show 2.00000000000000000000004, so use string

var num1=""
var num2=""
var operator=""
var res=0

function keypress(key){
    console.log(key)
    const operations = ["/","*","+","-"];
    if(key>="0"&& key<="9")//true
        added(key);
    else if(operations.includes(key)){
        op(key);
    }
    else{
        switch(key){
            case "Backspace": erase();
                break;
            case "Delete": clean();
                break;
            case ".":dot();
                break;
            default:
                console.log("No functionality defined")
        }
    }
}

function added(num) {
    if (operator==""){
        if(num1=="0"){num1="";}
        num1+=num
        document.getElementById("result").innerHTML=num1;
    }else{
        num2+=num
        calcres();
        // console.log(num1+operator+num2+'='+res);
        document.getElementById("result").innerHTML=(num1+" "+operator+" "+num2+" = "+res);
    }
}
function calcres() {
    switch(operator){
        case '+':   res=parseFloat(num1)+parseFloat(num2);
                    break;
        case '-':   res=parseFloat(num1)-parseFloat(num2)
            break;
        case 'x':   res=parseFloat(num1)*parseFloat(num2)
            break;
        case '/':   res=parseFloat(num1)/parseFloat(num2)
            break;
    }
    res = parseFloat(res.toFixed(4));
}

function dot() {
    if(operator==""){
        if(num1==""){
            num1="0"
        }
        if(num1.indexOf('.')==-1){
            num1+=".";
        }
        document.getElementById("result").innerHTML=num1;
    }
    else{
        if(num2==""){
            num2="0"
        }
        if(num2.indexOf('.')==-1){
            num2+=".";
        }
        calcres()
        document.getElementById("result").innerHTML=(num1+" "+operator+" "+num2+" = "+res);
       
    }
}

function op(sym) {
    if(operator!="" && num2!=""){
        num1 = res.toString();
        num2="";
    }
    if(num1==""){num1="0";}
    operator=sym
    document.getElementById("result").innerHTML=num1+" "+sym
}

function clean() {
    document.getElementById("result").innerHTML="";
    num1="";
    num2="";
    operator="";
    res=0;
}
function erase() {
    if(num2!="")
    {
        num2 = num2.slice(0,-1);
        if(num2!=""){
            calcres();
            document.getElementById("result").innerHTML=num1+" "+operator+" "+num2+" = "+res;
        }
        else{
            document.getElementById("result").innerHTML=num1+" "+operator;
        }
    }
    else {
        if (operator!=""){
            operator="";
        }else{
            num1 = num1.slice(0,-1);
        }
        document.getElementById("result").innerHTML=num1;
    }

}