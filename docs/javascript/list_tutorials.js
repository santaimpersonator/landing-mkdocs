$(document).ready(function() {
    // Retrieve JSON data from "jsonexdata.json" file
    $.getJSON("json/tutorial_repos.json", function(data) {
    var tableBody = $("#data-table tbody");

    // Iterate over each person object in the JSON data
    $.each(data, function(index, repo) {

        var row = $("<tr></tr>"); // Create a new table row

        // Repo
        var $td_r = $("<td></td>").html('<a href="' + repo.url + '">' + repo.name + '</a>');
        row.append($td_r);
        
        // Documentation
        var $td = $("<td></td>").html('<a href="' + repo.homepage + '">' + repo.name.replace(/_/g, ' ') + '</a>');

        row.append($td);         

        // Description
        row.append($("<td></td>").text(repo.description));

        tableBody.append(row); // Add the row to the table body
    });
    });
});