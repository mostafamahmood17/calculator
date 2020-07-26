function insert(num) {
    
    console.log(document.form.textview.value + num);
    return document.form.textview.value = document.form.textview.value + eval(num);
    
}

function equal() {
    var exp = document.form.textview.value
    if (exp) {
       exp = eval(exp);
       console.log(exp);
    }
}
function clean() {
    document.form.textview.value = "";
    
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
