function addBuy() {

    document.querySelector(".js-app-add").addEventListener("click", addItem);

    function addItem() {
        var item = $(".itemToAdd");

        if (item.val().length < 1) {
            return;
        }

        var $newItem = $("<div></div>")
            .addClass("listItem");

        var $p = $("<span></span>")
            .addClass("itemWrapper")
            .html(item.val());

        var $bought = $("<button></button>")
            .addClass("button button--completed")
            .click(function () {
                $(this).toggleClass("isActive");
                $(this).parent().find("span").toggleClass("toggleStrike");
            });

        var $remove = $("<button></button>")
            .addClass("button button--delete button--remove-one")
            .click(function () {
                $(this).parent().remove();
            });

        var $icon = $("<i></i>")
            .addClass("fa fa-check")
            .attr("aria-hidden", "true");

        var $iconX = $("<i></i>")
            .addClass("fa fa-minus")
            .attr("aria-hidden", "true");

        $newItem.append($p);
        $remove.append($iconX);
        $bought.append($icon);
        $newItem.append($remove);
        $newItem.append($bought);
        $(".js-app").append($newItem);

        item.val("");
    }
}

function deleteAll() {
    $(this).parent().parent().find(".listItem").remove();
}

$(document).ready(function () {

    addBuy();
    document.querySelector(".js-app-remove").addEventListener("click", deleteAll);

});
