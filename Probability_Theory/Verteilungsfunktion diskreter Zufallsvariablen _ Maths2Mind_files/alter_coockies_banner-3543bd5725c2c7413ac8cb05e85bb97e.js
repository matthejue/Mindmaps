(function ($, Drupal) {
  Drupal.behaviors.cookies = {
    attach: function (context, settings) {
      $(document, context).once('cookies').each(function () {
        // Select the node that will be observed for mutations
        const targetNode = document.getElementById('cookiesjsr');
        
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };
        
        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
          const actions = $("#cookiesjsr").find(".cookiesjsr-banner--action");
          actions.find('.cookiesjsr-settings').remove();
          actions.prepend('<a class="cookiesjsr-btn" href="/cookies-google-analytics-adobe-fonts-wolfram-alpha" target="_blank">' + Drupal.t('Nein, ich wünsche weitere Informationen') + '</a>');

          // Later, you can stop observing
          observer.disconnect();
        };
        
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
      });
    }
  };
})(jQuery, Drupal, drupalSettings);