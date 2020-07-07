var txtNum = document.getElementById('res')
var n1 = null
var n2 = null
var result = null
var op = null
function numero(num){
    if(num == 10){
        txtNum.innerText += '.'
    }else{
    txtNum.innerText += num
}}
function limpar(){
    var n1 = null
    var n2 = null
    var result = null
    var op = null
    txtNum.innerText = ''
}
function operacao(ope){
    n1 = Number(txtNum.innerText)
    console.log(n1)
    txtNum.innerText = ''
    op = ope
}
function resultado(){
    n2 = Number(txtNum.innerText)
    if(op == 1){
        result = n1/n2
        txtNum.innerText = result
    }else if(op == 2){
        result = n1*n2
        txtNum.innerText = result
    }else if(op == 3){
        result = n1-n2
        txtNum.innerText = result
    }else if(op == 4){
        result = n1+n2
        txtNum.innerText = result
    }
    
}