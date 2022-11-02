/**
 * INPUT:
 * Điểm chuẩn
 * Điểm môn Toán
 * Điểm môn Văn
 * Điểm môn TA
 * Khu vực ưu tiên: A + 2; B + 1 ; C + 0.25
 * Đối tượng ưu tiên: 1 + 2.5; 2 + 1.5; 3 + 1
 * PROCESS:
 *  nếu: (toán + văn + anh văn) + khu vực + đối tượng >= Điểm chuẩn
 *  và toán > 0, văn > 0, anh văn >0
 *  => đậu
 * còn không thì rớt
 * OUTPUT:
 *  Đậu hoặc rớt
 */
function handleTotalScore() {
  var score1 = document.getElementById("testScore1").value*1;
  var score2 = document.getElementById("testScore2").value*1;
  var score3 = document.getElementById("testScore3").value*1;
  var priorityPerson = document.getElementById("priorityPerson").value*1;
  var priorityArea = document.getElementById("priorityArea").value*1;
  var passExam = document.getElementById("passExam").value*1;
  var isPassExam = document.getElementById("isPassExam");
  var totalScore = score1+ score2 + score3 + priorityArea + priorityPerson;
  if (totalScore >= passExam && score1 > 0 && score2 >0 && score3 >0) {
    isPassExam.innerHTML = "Chúc mừng bạn đã đậu kỳ thi với tổng điểm: " + totalScore;
    isPassExam.style.backgroundColor = "green";
  } else {
    isPassExam.innerHTML = "Thi rớt, tổng điểm: "+ totalScore;
    isPassExam.style.backgroundColor = "orange";
  }
}
/**
 * INPUT:
 * Nhập vào tên khách hàng
 * Nhập vào số điện sử dụng
 * PROCESS:
 * 50 số đầu : 500đ/
 * Nếu <= 50: dùng* 500
 * từ >50 đến 100: 650đ/
 * từ 50 đến 100: 50*500 + (dùng - 50)*650
 * từ >100 đến 200: 850đ/
 * từ 100 đến 200: 50*500 + 50*650 + (dùng -100)*850
 * từ >200 đến 350: 1,100đ/
 * từ 200 đén 350: 50*500 + 50*650 + 100*850 + (dùng -200)*1,100
 * trên 350: 1,300đ/
 * từ >350: 50*500 + 50*650 + 100*850 + 150*1,100 + (dùng - 350)*1,300
 * OUPUT:
 * tên khách hàng + tiền
 */
 function handleElectricBill() {
  var electricUser = document.getElementById("elec_UserName").value;
  var electricUsed = document.getElementById("elec_KWUsed").value * 1;
  var electricBill = document.getElementById("elec_TotalBill");
  var m1 = 500; // 50 số đầu
  var m2 = 650; // số thứ 50+ đến 100
  var m3 = 850; // số thứ 100+ đến 200
  var m4 = 1100; // số thứ 200+ đến 350
  var m5 = 1300; // từ 350+
  if (electricUsed < 0 ) {
    alert("Nhập vào số KWh hợp lệ");
  } else if (electricUsed <= 50) {
    totalBill = electricUsed * m1;
  } else if (electricUsed > 50 && electricUsed <= 100) {
    totalBill = 50*m1 + (electricUsed - 50) * m2;
  } else if (electricUsed > 100 && electricUsed <= 200) {
    totalBill = 50*m1 + 50*m2 + (electricUsed - 100) * m3;
  } else if (electricUsed > 200 && electricUsed <= 350) {
    totalBill = 50*m1 + 50*m2 + 100*m3 + (electricUsed - 200) * m4;
  } else {
    totalBill = 50*m1 + 50*m2 + 100*m3 + 150*m5 + (electricUsed - 350) * m5
  }
  electricBill.style.color = "white"
  electricBill.style.backgroundColor = "green"
  electricBill.innerHTML ="Khách hàng: " + electricUser + ", Tiền điện: " + totalBill + "đ";
}
