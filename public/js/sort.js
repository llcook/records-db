// DEBUG: CLICK FUNCTION ONLY DOES SHOW / HIDE / SHOW
// THEN IT WILL NO LONGER HIDE
// THEN IT STARTS DUPLICATING THE <input>

// SHOW/HIDE SEARCH INPUT FORM
$("#searchIcon").click(function () {
    if ($(this).is(".active")) {
        $(this).removeClass("active");
        $("#searchInput").hide();
    } else {
        $(this).addClass("active");
        $(".table-header").append("<input type='text' id='searchInput' placeholder='Search by keyword...'>");
    }

    // TAKE SEARCH INPUT TEXT, MAKE IT LOWERCASE AND FILTER VS. DATATABLE
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#dataTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// 
$("th").each(function (col) {
    $(this).hover(
        function () { $(this).addClass("focus"); },
        function () { $(this).removeClass("focus"); }
    );
    $(this).click(function () {
        if ($(this).is(".asc")) {
            $(this).removeClass("asc");
            $(this).addClass("desc selected");
            sortOrder = -1;
        }
        else {
            $(this).addClass("asc selected");
            $(this).removeClass("desc");
            sortOrder = 1;
        }
        $(this).siblings().removeClass("asc selected");
        $(this).siblings().removeClass("desc selected");

        var arrData = $("table").find("tbody >tr:has(td)").get();

        arrData.sort(function (a, b) {

            var val1 = $(a).children("td").eq(col).text().toUpperCase();
            var val2 = $(b).children("td").eq(col).text().toUpperCase();

            if ($.isNumeric(val1) && $.isNumeric(val2))
                return sortOrder == 1 ? val1 - val2 : val2 - val1;

            else
                return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
        });

        $.each(arrData, function (index, row) {
            $("tbody").append(row);
        });
    });
});
