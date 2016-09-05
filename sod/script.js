$(document).ready(function () {
    $(document).on('click', '.icon--new-select__clean', function(){
        $(this).closest('.--new-select__wrapper').find('input.--new-select').val('');
    });

    $(document).on('keyup', 'input.--new-select', function () {
        check_new__select($(this));
    })

    $('input.--new-select').each(function () {
        check_new__select($(this));
    })
});

function check_new__select(input) {
    if(input.val() != '') {
        input.closest('.--new-select__wrapper').find('.icon--new-select__clean').show();
    } else {
        input.closest('.--new-select__wrapper').find('.icon--new-select__clean').hide();
    }
}