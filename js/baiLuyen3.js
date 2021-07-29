/**
 * Khối 1:Input
 * tenPhim
 * giaVeNguoiLon
 * giaVeTreEm
 * soVeTreEm: (Số lượng vé bán được của loại trẻ em)
 * soVeNguoiLon: (Số lượng vé bán được của loại nguoi lon)
 * phanTram : (phần trăm từ thiện)
 * 
 * Khối 2:
 * B1: Tạo và gán giá trị
 * B2: Tính tổng vé
 * tongSoVe = soVeTreEm + soVeNguoiLon
 * B3: Tính doanh thu
 * doanhThu = giaVeNguoiLon * soVeNguoiLon + giaVeTreEm * soVeTreEm
 * B4: Tính từ thiện
 * tienTuThien = doanhThu * phanTram / 100;
 * B5: Tính tiền còn lại
 * tienConLai = doanhThu - tienTuThien
 * 
 * Khối 3: Output
 * tenPhim
 * tongSoVe
 * doanhThu
 * tienTuThien
 * tienConLai
 * phanTram
 * 
 */

//Tạo và gán giá trị
var tenPhim = "Loki";
var giaVeNguoiLon = 10000;
var giaVeTreEm = 8000;
var soVeTreEm = 50;
var soVeNguoiLon = 80;
var phanTram = 10;
var tongSoVe =0;
var doanhThu =0;
var tienTuThien = 0;
var tienConLai = 0;

//Tính tong ve
tongSoVe = soVeTreEm + soVeNguoiLon;
console.log(tongSoVe);

//Tính doanh thu
doanhThu = giaVeNguoiLon * soVeNguoiLon + giaVeTreEm * soVeTreEm;
console.log(doanhThu);

//Tinh tien tu thien
tienTuThien = doanhThu * phanTram / 100;
console.log(tienTuThien);

//Tinh tien con lai
tienConLai = doanhThu - tienTuThien;
console.log(tienConLai);

console.log("*-**-**-**-* \n" + "Ten Phim: "+tenPhim +"\n"+"Tong ve: "+tongSoVe);