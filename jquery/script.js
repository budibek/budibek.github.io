(function () {})();
// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  //   ambil isi href
  var tujuan = $(this).attr("href");
  console.log(tujuan);
  //   tangkap elemen yn bersangkutan
  var elemenTujuan = $(tujuan);
  console.log(elemenTujuan);
  console.log(elemenTujuan.offset());
  // pindahkan body
  //console.log($("body").scrollTop());
  //$("html,body").scrollTop(elemenTujuan.offset().top);
  $("html , body").animate(
    {
      scrollTop: elemenTujuan.offset().top,
    },
    1250,
    "easeInOutExpo"
  );
  e.preventDefault();
});
