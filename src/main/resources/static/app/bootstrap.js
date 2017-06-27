(function($) {

    $(document).ready(function() {

	window.defaultMyImage =
	    new MyImage({filename: '3.png',
			 data: 'img/3.png',
			 bucket: 'helloworld',
			 acl: 'public-read',
			 successActionRedirect: 'http://localhost:8080/index.html',
			 contentType: 'image/png',
			 folder: '',
			 AWSAccessKeyId: 'U2A27HEBIS06RIF3JOBC',
			 AWSSecretKeyId: 'C4UB88kkbR5QQhBEnKau2zUmkqxdttQOYSexIcDg'
			});

	window.imagePreviewView =
	    new ImagePreviewView({model: window.defaultMyImage});
	window.imageFileView =
	    new ImageFileView({model: window.defaultMyImage});

	window.App = new window.ImageRouter();
	Backbone.history.start();
    });

})(jQuery);
