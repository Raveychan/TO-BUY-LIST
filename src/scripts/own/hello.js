function addBuy () {

    document.getElementById("add").addEventListener("click", addItem);

    function addItem() {
        var item = $("input#item");

        var $newItem = $("<div/>")
            .addClass("items")
            .html(item.val());

        $(".itemList").append($newItem);

        item.val("");

    }
    
}

$(document).ready(function () {

    addBuy();
    
});
