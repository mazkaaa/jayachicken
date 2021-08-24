$(document).on('click','#send_form', function(){
    var input_blanter = document.getElementById('wa_number');
    
    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285156414922',
        walink2 = 'Halo jayachiken!';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
    if("" != input_blanter.value){
    
     /* Call Input Form */
    var input_name1 = $("#wa_name").val(),
        input_name2 = $("#wa_name2").val(),
        input_number1 = $("#wa_number").val(),
        input_subject = $("#wa_subject").val(),
        input_textarea1 = $("#exampleFormControlTextarea1").val();
    
    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        'Saya ' + input_name1 + ' ' + input_name2 + ' dengan nomer '+
        input_number1 + ' ingin bertanya mengenai ' + input_subject + '. ' + input_textarea1;
    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    }
});