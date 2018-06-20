//Google Login
function onLoadFunction(){
	gapi.client.setApiKey('AIzaSyDwd4X2kny6UA3TA6rkrYu1otma_dW7Pi0');
	gapi.client.load('plus', 'v1', function() {});
}