//bài 3: Tính thuế thu nhập cá nhân
document.getElementById('btnTinhThue').onclick = function () {
    var hoTen = document.getElementById('hoTen1').value;
    var thuNhap = Number(document.getElementById('thuNhap').value);
    var phuThuoc = Number(document.getElementById('phuThuoc').value);

    var tinhTienThue = 0;
    if (thuNhap <= 60) {
        tongThuNhap = thuNhap * 0.05;
    } else if (thuNhap >= 60 && thuNhap <= 120) {
        tongThuNhap = thuNhap * 0.1;
    } else if (thuNhap >= 120 && thuNhap <= 210) {
        tongThuNhap = thuNhap * 0.15;
    } else if (thuNhap >= 210 && thuNhap <= 384) {
        tongThuNhap = thuNhap * 0.2;
    } else if (thuNhap >= 384 && thuNhap <= 624) {
        tongThuNhap = thuNhap * 0.25;
    } else if (thuNhap >= 624 && thuNhap <= 960) {
        tongThuNhap = thuNhap * 0.3;
    } else if (thuNhap >= 960) {
        tongThuNhap = thuNhap * 0.35;
    } else {
        tongThuNhap = 'con số không hợp lệ';
    }
    tinhTienThue = tongThuNhap - 4e+6 - (phuThuoc * 1.6e+6);
    document.getElementById('ketQua_2').innerHTML = 'Họ tên : ' + hoTen + ', Tiền thuế thu nhập cá nhân : ' + tinhTienThue.toLocaleString();
}
//bài 4: tính tiền điện
document.getElementById('userType').onchange = disableInput();

function disableInput() {
    var option = document.getElementById('userType').value;
    var connections = document.getElementById('connections');
    if (option === "business") {
        connections.style.display = "block";
    } else if (option === "personal") {
        connections.style.display = "none";
    }

}

document.getElementById('btnTinhCap').onclick = function () {
    var userType = document.getElementById('userType').value;
    var userID = document.getElementById('userID').value;
    var premiumChannel = +document.getElementById('premiumChannel').value;
    var ketNoi = +document.getElementById('connections').value;

    //output: 

    var tienCap = 0;

    //progress:

    if (userType = "personal") {
        tienCap = tinhTienPersonal(premiumChannel);
    } else if (userType = "business") {
        tienCap = tinhTienBusiness(premiumChannel, ketNoi);
    }

    //in output ra giao diện

    document.getElementById('ketQua_B4').innerHTML = tienCap;
}

function tinhTienPersonal(premiumChannel) {
    const billingFee = 4.5;
    const serviceFee = 20.5;
    const premiumCFee = 7.5;

    tienCap = billingFee + serviceFee + premiumCFee * premiumChannel;

    return tienCap;
}

function tinhTienBusiness(premiumChannel, ketNoi) {
    const billingFee = 15;
    const premiumCFee = 50;
    var serviceFee = 0;
    if (ketNoi <= 10) {
        serviceFee = 75;
    } if (ketNoi > 10) {
        serviceFee = 75 + (ketNoi - 10) * 5;
    }

    tienCap = billingFee + serviceFee + premiumCFee * premiumChannel;

    return tienCap;
}