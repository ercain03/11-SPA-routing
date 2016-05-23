(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* Done: We only want to display the about section! */
    $('section').hide();
    $('#about').show();
    $('#about section').show();
  };

  module.aboutController = aboutController;
})(window);
