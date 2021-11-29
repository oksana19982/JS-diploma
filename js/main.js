$(document).ready(()=>{
    $('#makers-info').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".category").click((e) => {

        let currentElement = $(e.target);

        $(".products-container").hide();
        let id = currentElement.data("id");
        let founded_element = $("#" + id)
        founded_element.show();
        founded_element.css("display", "grid");

        $(".category").removeClass("active");
        currentElement.addClass("active");
    });

    $('.magnific').magnificPopup({type:'image'});

    $("#reservation-action > button").click(() => {
        let name = $("#name");
        let phone = $("#phone-number");

        if (name.val() && phone.val()) {
            let loader = $('#loader');
            loader.css('display', 'flex');

            $.ajax({
                type: "post",
                url: "mail.php",
                data: "name=" + name.val() + "&phone" + phone.val(),
                success: () => {
                    loader.hide();
                    $("#reservation-sent").show();
                    $("#reservation").hide();
                },
                error: () => {
                    loader.hide();
                    $("#reservation").hide();
                    alert("Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.");
                }
            });
        } else {
                $('.form-error').hide();

                name.css('border-color', 'rgb(98, 36, 223)').css('margin-bottom', '20px');
                phone.css('border-color', 'rgb(98, 36, 223)').css('margin-bottom', '20px');

                if (!name.val()) {
                    name.siblings('.form-error').show();
                    name.css('border-color', 'red').css('margin-bottom', '0');
                }
                if (!phone.val()) {
                    phone.siblings('.form-error').show();
                    phone.css('border-color', 'red').css('margin-bottom', '0');
                }
        }
    })

    // new WOW().init();

    $("#phone-number").mask("9(999) 999-9999");
})