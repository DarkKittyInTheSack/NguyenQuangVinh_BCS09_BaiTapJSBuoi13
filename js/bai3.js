document.getElementById("calculator").onclick = function(){
    var tienUSD = document.getElementById('usdMoney').value
    var giaQuyDoi = 23500

    var tienVND = tienUSD * giaQuyDoi
    document.getElementById('result').innerHTML = `Tỉ giá quy đổi từ ${tienUSD.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })} qua VND là ${tienVND.toLocaleString('it-IT',{
        style: 'currency',
        currency:'VND'
    })}`
}