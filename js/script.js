$(document).ready(function(){
	$("#back-top a").click(function (e){
        e.preventDefault();
		$("body,html").animate({ scrollTop: 0 }, 800);
	});

	var imgHead = [
			'img/fon3.png',
            'img/fon1.png'
        ]
	var index=0;

    function csaHead(){
        $('.page-header').animate({'opacity':'0'}, 200,function(){
            $('.page-header').css({'background':'url('+imgHead[index % 2]+')'});
            index++;
        });
        $('.page-header').animate({'opacity':'1'}, 200);
    }
    var intervalCsaHead = setInterval(csaHead, 7000);
});




