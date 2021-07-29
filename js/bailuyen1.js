/**
 * Khối 1: Input
 * 2 cạnh góc vuông
 * edge1
 * edge2
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị cho 2 cạnh goc vuông
 * B2: Tạo biến chứa độ dài cạnh huyền
 * B3: Xây dựng công thức tính cạnh huyền
 * a2 + b2 =c2 
 * Chuyển sang lập trình: edge3 * edge3 = edge1 *  edge1 + edge2 * edge2
 * B4: lấy độ dài cạnh huyền từ công thức
 * lấy căn bậc 2 của cạnh huyền
 * edge3 = Math.sqrt(edge3 * edge3);
 * B5: hiện kết quả lên console
 * 
 * Khối 3: Output
 * edge3: độ dài cạnh huyền
 *  
 */

//Tạo và gán trị
var edge1 = 3;
var edge2 = 4;
var edge3 = 0;

//Viết công thức tính toán:
// edge3 * edge3 = edge1 *  edge1 + edge2 * edge2;
// edge3 : cạnh huyền bình phương
edge3 = edge1 * edge1 + edge2 * edge2;
//Rút gọn dùng Math.pow
// edge3 = Math.pow(edge1,2)  + Math.pow(edge2,2);
console.log("Bình phương cạnh huyền: "+edge3);

//Lấy căn bậc 2
edge3 = Math.sqrt(edge3);
console.log("cạnh huyền: "+edge3);

//Rút gọn 2 bước  tính công thức và lấy căn bậc 2
// edge3 = Math.sqrt(Math.pow(edge1,2) + Math.pow(edge2,2));
// console.log("cạnh huyền: "+edge3);