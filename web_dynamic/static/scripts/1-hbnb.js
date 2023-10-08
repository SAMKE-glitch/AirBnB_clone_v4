$(document).ready(function() {
    var selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).prop('checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        var amenitiesList = '';
        for (var id in selectedAmenities) {
            amenitiesList += '<li>' + selectedAmenities[id] + '</li>';
        }

        $('#selected-amenities').html(amenitiesList);
    });
});
