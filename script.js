$(document).ready(function () {
    // Get all the SVG path elements inside the #map-container
    const $mapPaths = $('#map-container svg path');
    const $tooltip = $('#tooltip');

    // Initialize the svg.js instance
    const svg = SVG('svg2').size('100%', '100%');



    // Function to handle the mouseover event
    function handleMouseOver(event) {
        //const regionId = event.target.id;
        const regionId = $(this).attr('id');
        const wholeStyle = $(this).attr('style');
        console.log(`Mouseover on region: ${regionId}`);
        
        if (regionId == "Coast" || regionId == "Lines" || regionId == "polyline1422" || regionId == "Scotland" || regionId == "Wales" || regionId == "England" || regionId == "Eire" || regionId == "Euro-regions" || regionId == "France" || regionId == "Northern-Ireland" || regionId == "path26" || regionId == "Lakes") {
            console.log("Not over Cornish land, don't highlight anywhere!");
        }
        else {
            $(this).css('fill', '#3f7d1a');
            // Position the tooltip next to the cursor
            $tooltip.text(regionId);
            $tooltip.css({
                left: event.pageX + 10, // Add some space to the right of the cursor
                top: event.pageY + 10 // Add some space below the cursor
            });

            // Show the tooltip
            $tooltip.show();
        }
    }

    // Function to handle the mouseout event
    function handleMouseOut(event) {
        const regionId = event.target.id;
        
        console.log(`Mouse leaving region: ${regionId}`);
        // Reset the fill color of the region to its original color
        //$(event.target).attr('fill', ''); // Reset to the original color (empty string) to use the SVG's fill value
        //$(this).attr('fill', '');
        if (regionId == "Coast" || regionId == "Lines" || regionId == "polyline1422" || regionId == "Scotland" || regionId == "Wales" || regionId == "England" || regionId == "Eire" || regionId == "Euro-regions" || regionId == "France" || regionId == "Northern-Ireland" || regionId == "path26" || regionId == "Lakes") {
            console.log("Not over Cornish land, don't highlight anywhere!");
        }
        else {
            $(this).css('fill', '#7fd34d');
            $tooltip.hide();
        }
        // Add your custom actions here when the user stops hovering
    }

    // Attach the mouseover event handler to each SVG path element
    $mapPaths.on('mouseover', handleMouseOver);
    $mapPaths.on('mouseout', handleMouseOut);
});