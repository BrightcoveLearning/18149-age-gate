videojs.registerPlugin('ageGate', function() {
  // Get a reference to the player when it is ready
    var myPlayer = this,
        eAgeGateButton;;
    // Add the class which hides the player controls and the big play button
    myPlayer.addClass("video-agelist");

    // +++ Set up listening for when the user clicks the age verification text +++
    // Listen for when the player has initial duration and dimension information
    myPlayer.on("loadedmetadata", function() {
      // Get a reference to the age verification text in the overlay
      eAgeGateButton = document.getElementById("ageGateButton");
        //
        // Listen for age verification text click events
        eAgeGateButton.addEventListener("click", function() {
          // Remove the class which hides the player controls and the big play button
          myPlayer.removeClass("video-agelist");
          // Start video playback
          myPlayer.play();
        });
    });

});
