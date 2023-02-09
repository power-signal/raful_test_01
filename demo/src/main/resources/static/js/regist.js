/**
 * 
 */

$(function() {
	var regist = {
		init : function() {
			this.setEvent();
		},
		setEvent : function() {
			$('#registBtn').on('click',function(){
				registUser();
			});
		}
	};
	regist.init();
});

function registUser() {
	
	var param = {
		
		"LAST_NAME" : $('#LAST_NAME').val(),
		"FIRST_NAME" : $('#FIRST_NAME').val(),
		"ADDRESS" : $('#ADDRESS').val(),
		"HEIGHT" : $('#HEIGHT').val(),
		"AGE" : $('#AGE').val(),
		"CITY" : $('#CITY').val()
	}
	
	$.post('registUser', param, function(data) {
		
		var result = data.result;
		
		if(result > 0) {
			alert('등록이 완료되었습니다!');
			location.href = "detail?p_id="+data.PERSON_ID;
		}
		else{
			alert('등록 실패!');
		}
		
	});
}