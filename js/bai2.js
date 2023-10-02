document.getElementById('calculator').onclick = function(){
    var soThuc1 = document.getElementById('firstDouble').value
    var soThuc2 = document.getElementById('secondDouble').value
    var soThuc3 = document.getElementById('thirdDouble').value
    var soThuc4 = document.getElementById('fourthDouble').value
    var soThuc5 = document.getElementById('fifthDouble').value

    var trungBinh = Math.round((Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5) ) /5).toFixed(2)

    document.getElementById('result').innerHTML = `Giá trị trung bình của 5 số thực là : ${trungBinh}`
}