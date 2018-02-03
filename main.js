

$(document).ready(function () {
    // write your code here



});




$.getJSON("data.json", function (data) {

    console.log(data);
    var tr;

    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append('<td>' + data[i].name + '</td>');
        tr.append('<td>' + data[i].description + '</td>');
        tr.append('<td><a href="https://www.google.com/maps?q='+ data[i].location + '" class="btn btn-primary  active" role="button">Open in Google</a></td>');
        $('table').append(tr);
    }

});





//create tables. DONE
//create link buttons. DONE
//create a local host DONE
//get json data to load DONE
//create how to use a for loop to display an array DONE
//create javascript function to load into onto tables DONE
//create button to link location with google maps