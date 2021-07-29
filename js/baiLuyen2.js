/**
 * Khối 1: Input
 * Số nguyên dương có 3 chữ số
 * num
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị
 * num, unit(số hàng đơn vị), ten(số hàng chục), hundred(số hàng trăm)
 * 
 * B2: Lấy số hàng trăm
 * VD: 586/100 => 5.86
 * hundred = Math.floor(num/100) => lấy được phần nguyên trong phép chia
 *  B3: Lấy số hàng chục
 * VD:  586%100 => 86 =>phanDuHangTram/10 (86/10) => Math.floor(86/10) => 8
 * phanDuHangTram(86) = 586%100
 *  ten = Math.floor(phanDuHangTram/10);
 * 
 * B4: Lấy hàng đơn vị
 * unit = phanDuHangTram%10;
 * 
 * B5: Tính tổng
 * sum = hundred + ten + unit
 * 
 * Khối 3:
 * Tổng của 3 ký số trong số nguyên dương (586)
 * sum
 * 
 */

//Tạo và gán giá trị
var num = 586;
var hundred = 0;
var ten = 0;
var unit = 0;
var phanDu = 0;

//Lấy hàng trăm
//Math.floor:Lấy phần nguyên trong phép chia
hundred = Math.floor(num/100);
console.log("Hàng trăm: " +hundred);

//Lấy hàng chục
// phanDu = num%100;
// console.log("Phần dư hàng trăm: " +phanDu);
// ten = Math.floor(phanDu/10);
// console.log("Hàng chục: " +ten);

ten = Math.floor(num%100/10);
console.log("Hàng chục: " +ten);

// Lấy đơn vị
// unit = phanDu%10;
// console.log("Hàng đơn vị: " +unit);

unit = num%100%10;
console.log("Hàng đơn vị: " +unit);

//Tính tổng
sum = hundred + ten + unit;
console.log("Tổng: " +sum);
