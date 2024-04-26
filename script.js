
$(document).ready(function(){
    $("#button1").click(function(){
        $("#table td").each(function(){
            let text = $(this).text();
            if (text.includes("#id1") || text.includes("London")) {
                $(this).css("font-style", "italic");
                $(this).css("color", "rgb(48, 101, 239)");
            } else {
                $(this).find("figcaption").hide();
            }
        });
    });

    $("#button2").click(function(){
        $("#table img").each(function(){
            if ($(this).css("width") === "300px") {
                $(this).css({
                    "border": "3px solid rgb(48, 101, 239)",
                });
            }
        });
    });
});
