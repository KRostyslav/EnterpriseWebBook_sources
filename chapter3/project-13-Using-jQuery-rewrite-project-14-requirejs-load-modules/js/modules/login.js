define(['jquery'],function($) {
	
	function showLoginForm() {
		$('#login-link, #login-form, #login-submit').toggle();
	}


	$('#login-link').on('click', showLoginForm);

	function showAuthorizedSection() {
		$('#authorized, #login-form, #login-submit').toggle();
	}

	function logIn() {
		var userNameValue = $('#username').val();
		var userNameValueLength = userNameValue.length;
		var userPasswordValue = $('#password').val();
		var userPasswordLength = userPasswordValue.length;
		//check credential
		if (userNameValueLength == 0 || userPasswordLength == 0) {
			if (userNameValueLength == 0) {
				console.log('username is empty');
			}
			if (userPasswordLength == 0) {
				console.log('password is empty');
			}
		} else if (userNameValue != 'admin' || userPasswordValue != '1234') {
			console.log('username or password is invalid');
		} else if (userNameValue == 'admin' && userPasswordValue == '1234') {
			showAuthorizedSection();
		}
	}


	$('#login-submit').on('click', logIn);

	function logOut() {
		$('#username, #password').val('')
		$('#authorized, #login-link').toggle();
	}


	$('#logout-link').on('click', logOut);

	$('#profile-link').on('click', function() {
		console.log('Profile link was clicked');
	});

});
