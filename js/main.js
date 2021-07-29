//ES5

// console : dev sử dụng, browers đọc

console.log("Goodbye World");



// Block comment
/**
 * Variable
 */

// Tạo/Khai báo biến
// từkhóa tenbien = giatri;
// firstName:  Camel case
// = : gán giá trị 
//Không được đặt tên biến trùng
var fullName = "Nguyễn THị Khách Hàng";


/**
 * Kiểu dữ liệu
 */

// number
var age = 10;
//String
var address = "103 Nguyễn Hữu Dật";
//boolean
var isLogin = true;

//Gọi biến
console.log(fullName);
console.log(age);
console.log(address,isLogin);

/**
 * Hằng Số
 * tên cho biến hằng số: chữ in hoa
 * Không cho đặt trùng tên
 * camel case cho biến thường
 * Không được gán lại giá trị
 * Chỉ được thay đổi giá trị ở dòng khai báo biến
 */

//Khai báo biến và gắn giá trị khởi tạo
const PI = 3.14;
var age2 = 10;

//Var thì cho trùng tên
// var age2 = 12;

//+ : cộng số, nối chuỗi ký tự
console.log("Giá trị khởi tạo của age2:" + age2);

// const PI = 3.14141414;
// console.log(PI);

//Gán lại giá trị
age2 = 20;
console.log("Giá trị gán lại của age2:" + age2);

//Không cho gán lại giá trị
// PI = 3.20202;
// console.log("Giá trị gán lại của PI:" + PI);


/**
 * Toán Tử
 * +
 * -
 * *
 * /
 * %
 * ++
 * --
 */

var num1 = 5;
var num2 = 8;

//Cộng
var sum = num1 + num2;
console.log("Tổng: " + sum);
console.log(num1 + num2);

//Trừ
var hieu = num1 - num2;
console.log("Trừ: " + hieu);
console.log(num1 - num2);

//Nhan
var nhan = num1 * num2;
console.log("Nhan: " + nhan);
console.log(num1 * num2);

//Chia
var chia = num2 / num1;
console.log("Chia: " + chia);
console.log(num2 / num1);

//% : lấy phần dư
//giải quyết bài toán chia hết cho 2, 3
console.log(14 % 3);
console.log(14 / 3);

/**
 * Toán tử tăng giảm biến
 */

var lanThi = 0;
// Lần 1
lanThi = lanThi + 1;
console.log("Lần đi thi:" + lanThi);

// Lần 2
lanThi = lanThi + 1;
console.log("Lần đi thi:" + lanThi);
 
// lanThi = lanThi + 1 => viết rút gọn: lanThi += 1
//Lan 3
lanThi += 1;
console.log("Lần đi thi:" + lanThi);

//Lan 4: cách rút gọn của lần 3
//++: nếu khong có dấu =(gán giá trị) thì để trước biên hay sau đều được (không khác giá trị)
// lanThi++;
// ++lanThi;
// console.log("Lần đi thi:" + lanThi);

//Nếu có dấu gán (=)
//lanThi++: nếu dấu cộng ở sau => gán trước, cộng sau
// lanThi = lanThi++;
// console.log("Lần đi thi:" + lanThi);
//++lanThi: nếu dấu cộng ở trước => cộng trước, gán sau
lanThi = ++lanThi;
console.log("Lần đi thi:" + lanThi);