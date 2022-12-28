// if num1 and 2 are kept as numbers when you enter 2 after clearing once it will show 2.00000000000000000000004, so use string

var num1="0"
var num2=""
var operator=""
var res=0

function added(num) {
    if (operator==""){
        if(num1=="0"){num1="";}
        num1+=num
        document.getElementById("result").innerHTML=num1;
    }else{
        num2+=num
        calcres();
        console.log(num1+operator+num2+'='+res);
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
    // else if(operator!=""&&num2==""){

    // }
    operator=sym
    document.getElementById("result").innerHTML=num1+" "+sym
}

function clean() {
    document.getElementById("result").innerHTML="";
    num1="0";
    num2="";
    operator="";
    res=0;
}