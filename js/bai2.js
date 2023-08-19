let baiTap2 = document.getElementById("baiTap2");
baiTap2.innerHTML = `
<form action="">
<label for="hideSearch">Nhập nội dung tìm kiếm</label>
<input type="text" name="hideSearch" id="hideSearch">
<a href="#" id="an" >Ẩn tìm kiếm nâng cao</a>
<br id="br2">
<select name="loai" id="loai">
    <option value="quanAo">Quần áo</option>
    <option value="giayDep">Giày dép</option>
    <option value="myPham">Mỹ phẩm</option>
</select>
<br>
<br>
<button onclick="search()">Tìm kiếm</button>
`
let br2 =document.getElementById("br2");
let loai = document.getElementById("loai");
loai.style.display === "none";
// hiện bằng click
let anTimKiem = document.getElementById("an");
anTimKiem.onclick = function () {
    if (loai.style.display === "none") {
        loai.style.display = "block";
        br2.style.display="block";
        anTimKiem.innerHTML="Ẩn tìm kiếm nâng cao"
    }else {
        loai.style.display="none";
        br2.style.display="none";
        anTimKiem.innerHTML="Tìm kiếm nâng cao";
    }
}

