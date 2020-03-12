 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#in')
                        .attr('src', e.target.result)
                        .width(220)
                        .height(220);

                };
                alert("Image selected,Click analyse to proceed further");
                reader.readAsDataURL(input.files[0]);
            }
        }