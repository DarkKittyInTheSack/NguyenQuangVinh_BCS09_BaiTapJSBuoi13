document.getElementById('calculator').onclick = function(){
    var kySo = document.getElementById('numberInput').value
    var soDonVi = kySo %10
    var soHangChuc = kySo /10

    var tongKySo = soDonVi + Math.floor(soHangChuc)
    document.getElementById('result').innerHTML = `Tổng các chữ số của ký số là : ${tongKySo}`
}