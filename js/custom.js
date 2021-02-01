$(document).ready(function () {
   $(".changeMood").click(function (e) {
      e.preventDefault();
      let mode = $(this).attr("mode");
      document.documentElement.setAttribute("data-theme", mode);
   });
});
