/**
 * 
 */
var params = location.search.substr(location.search.indexOf("?") + 1);
var p_id = params.split("=")[1];

$(function() {
	var detail = {
		init:function() {
			this.setEvent();
			searchUser();
		},
		setEvent : function() {
			
			$('#updateBtn').on('click', function(){
				updateUser();
			
			});
			
			$('#deleteBtn').on('click', function(){
				deleteUser();
			});
		}
	};
	detail.init();
});

function searchUser() {
	$.post('/searchUser', {"PERSON_ID" : p_id}, function(data){
		
		var detail = data.detail;
		
		var LAST_NAME = detail['LAST_NAME'];
		var FIRST_NAME = detail['FIRST_NAME'];
		var ADDRESS = detail['ADDRESS'];
		var CITY = detail['CITY'];
		
		$('#LAST_NAME').val(LAST_NAME);
		$('#FIRST_NAME').val(FIRST_NAME);
		$('#ADDRESS').val(ADDRESS);
		$('#CITY').val(CITY);
	});
}

function updateUser() {
	
	var param = {
		
		"PERSON_ID" : p_id,
		"LAST_NAME" : $('#LAST_NAME').val(),
		"FIRST_NAME" : $('#FIRST_NAME').val(),
		"ADDRESS" : $('#ADDRESS').val(),
		"AGE" : $('#AGE').val(),
		"HEIGHT" : $('#HEIGHT').val(),
		"CITY" : $('#CITY').val()		
	}
	
	$.post('/updateUser', param, function(data){
		
		var result = data.result;
		
		if(result > 0) {
			alert('수정 완료!');
		}
		else {
			alert('수정 실패!');
		}
	});
}

function deleteUser() {
	$.post('/deleteUser', {"PERSON_ID" : p_id}, function(data){
		
		var result = data.result;
		
		if(result > 0) {
			location.href = "http://localhost:8080/main"
			alert('삭제 완료!');
		}
		else {
			alert('삭제 실패!');
		}
	});
}