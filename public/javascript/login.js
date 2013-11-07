$(document).ready(function() {
	$("#login_bt").click(function() {
		var data={
			name: $('#name').val(),
			password: $('#password').val()
		};
		$.post("/login",data, function(result){
			if (result=='y') {
				location.href="/";
				window.location="/";
			}
			else
				$('#errorModal').modal('show');
		});
		return false;
	});
});