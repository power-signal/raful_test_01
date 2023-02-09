/**
 * 
 */
$(function() {
	var main = {
		init : function() {
			this.setEvent();
			searchUserList();
		},
		setEvent : function() {
			$('#UserTableTbody').on('click','#updateBtn',function(){
				var this_=$(this);
				var p_id=this_.val();
				location.href="detail?p_id="+p_id;
			})
		}
	};
	main.init();
});

function searchUserList() {
	
	$.post('/searchUserList', function(data){
		var list=data.list;
		var qs='';
		for(var i in list){
			var obj=list[i];
			var NO=obj['NO'];
			var PERSON_ID=obj['PERSON_ID'];
			var LAST_NAME=obj['LAST_NAME'];
			var FIRST_NAME=obj['FIRST_NAME'];
			var ADDRESS=obj['ADDRESS'];
			var CITY=obj['CITY'];
			var HEIGHT=obj['HEIGHT'];
			var AGE=obj['AGE'];
			var REG_DT=obj['REG_DT'];
			
			qs += '<tr>'
				+	'<td>'+NO+'</td>'
				+	'<td>'+LAST_NAME+'</td>'
				+	'<td>'+FIRST_NAME+'</td>'
				+	'<td>'+ADDRESS+'</td>'
				+	'<td>'+CITY+'</td>'
				+	'<td>'+HEIGHT+'</td>'
				+	'<td>'+AGE+'</td>'
				+	'<td>'+REG_DT+'</td>'
				+	'<td>'
				+		'<div class="btn-group" role="group" aria-label="Basic example">'
				+			'<button id="updateBtn" class="btn btn-light" value="'+PERSON_ID+'">상세보기</button>'
				+		'</div>'
				+	'</td>'
				+'</tr>'
		}
		$('#UserTableTbody').html(qs);
	});
}