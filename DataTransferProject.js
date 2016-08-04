var playlistMaker = "https://maker.ifttt.com/trigger/spotify/with/key/Zf5H5EzuqmfI2jJ9fAxiL";

function submitIt(){
	var song = $("#song").val();
	var artist = $("#artist").val();
	var sendoff = {
		"value1":song,
		"value2":artist,
	}
	$.post(playlistMaker,sendoff);
	$("#song").val("");
	$("#artist").val("");
}