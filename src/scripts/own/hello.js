function addBuy () {

    document.querySelector(".add").addEventListener("click", addItem);

    function addItem() {
        var item = $(".itemToAdd");

        var $newItem = $("<div></div>")
            .addClass("items");

        var $p = $("<span></span>")
            .html(item.val());

        var $bought = $("<button></button>")
            .addClass("bought");

        var $icon = $("<i></i>")
            .addClass("fa fa-check")
            .attr("aria-hidden", "true");

        $newItem.append($p);
        $bought.append($icon);
        $newItem.append($bought);
        $(".itemList").append($newItem);

        item.val("");
    }
}

$(document).ready(function () {

    addBuy();

});
