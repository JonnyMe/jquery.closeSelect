$.fn.closeSelect = function() {
    if($(this).is("select")){
        var fakeSelect = $(this).clone();
        $(this).replaceWith(fakeSelect);
    }
};
