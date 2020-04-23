// var uploadFiles;
// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//       $('#selected_image')
//         .attr('src', e.target.result)
//         .width(220)
//         .height(220);

//     };
//     alert("Image selected,Click analyse to proceed further");
//     reader.readAsDataURL(input.files[0]);
//     uploadFiles = input.files;
//   }
// }
// function analyze() {
//   if (uploadFiles == null) {
//     alert("Please select a file to analyze!");
//   }
//   else {
//     document.getElementById("analyze-button").innerHTML = "Analyzing..";
//     var xhr = new XMLHttpRequest();
//     var loc = window.location;
//     xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
//       true);
//     xhr.onerror = function () {
//       alert(xhr.responseText);
//     };
//     xhr.responseType = 'json';
//     // xhr.setRequestHeader('document');
//     xhr.onload = () => {
//       if (this.readyState === 4) {
//         var response = xhr.response;
//         document.getElementById("result").innerHTML = `Result = ${response["result"]}`;
//       }
//       document.getElementById("analyze-button").innerHTML = "Analyze";
//     };
//     var fileData = new FormData();
//     fileData.append("file", uploadFiles[0]);
//     xhr.send(fileData);
//   }
// }

$(document).ready(function () {

	$("form#analysis-form").submit(function (event) {
		event.preventDefault();

		var analyze_button = $("button#analyze-button");
		var imagefile = $('#imagefile')[0].files;

		if (!imagefile.length > 0) {
			alert("Please select a file to analyze!");
		}
		else {
			analyze_button.html("Analyzing..");
			analyze_button.prop("disabled", "true");

			var fd = new FormData();
			fd.append('file', imagefile[0]);

			var loc = window.location;

			$.ajax({
				method: 'POST',
				async: true,
				url: loc.protocol + '//' + loc.hostname + ':' + loc.port + '/analyze',
				data: fd,
				processData: false,
				contentType: false,
			}).done(function (data) {
				console.log("Done Request!");
				console.log(data)
			}).fail(function (e) {
				console.log("Fail Request!");
				console.log(e);
			});
		};

		analyze_button.prop("disabled", "");
		analyze_button.html("Analyze");
		console.log("Submitted!");
	});
});