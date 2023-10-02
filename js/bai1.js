

document.getElementById('calculator').onclick = function(){
    var soNgayLam = document.getElementById('workedDays').value
    var tienMoiNgay = 100000
    var tongThuNhap = soNgayLam * tienMoiNgay

    document.getElementById('result').innerHTML = `Tiền lương nhân viên sau ${soNgayLam} ngày làm là ${tongThuNhap.toLocaleString('it-IT',{
        style: 'currency',
        currency: 'VND'
    })}`
}