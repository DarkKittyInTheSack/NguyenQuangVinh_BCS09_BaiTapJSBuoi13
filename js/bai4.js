document.getElementById('calculator').onclick = function(){
    let chieuDai = document.getElementById('widthRec').value
    let chieuRong = document.getElementById('largeRec').value

    var chuVi = (Number(chieuDai) + Number(chieuRong) ) *2
    var dienTich = chieuDai * chieuRong

    document.getElementById('result').innerHTML = `Hình chữ nhật có chiều dài ${chieuDai} và chiều rộng ${chieuRong} với chu vi là ${chuVi} và diện tích là ${dienTich}`
}