let $b2c = $('#bc');
let $b2b = $('#bb');
let $text = $('#texte');


$(document).ready(function () {

    //Elements cliqué
    $('figure').click(function () {
        $(this).css('border', ' #0000FF solid 2px');
    });

    //cacher les elements du HTML
    $('#B2B').hide();
    $('#B2C').hide();
    $text.hide();

    //les elements apparaissent au clique
    $b2b.click(function () {
        $('#B2B').show();
        $text.show();
        $('#B2C').hide();
    });

    $b2c.click(function () {
        $('#B2C').show();
        $text.show();
        $('#B2B').hide();
    });

    //Compteur
    $('#input').keyup(function () {
        let nbCaractere = 123 - $(this).val().length;
        let msg = nbCaractere + ' mots';
        let $compteur = $('#compt');
        $compteur.text(msg);

        if (nbCaractere < 0) {
            $compteur.css('color', 'red');
        } else {
            $compteur.css('color', 'blue');
        }
    })

});
