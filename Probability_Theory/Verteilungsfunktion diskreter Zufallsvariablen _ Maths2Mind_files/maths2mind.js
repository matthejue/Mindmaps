/**
 * @file
 * maths2mind behaviors.
 */

(function ($, Drupal) {

    'use strict';


    /**
     * Behavior description.
     */
    Drupal.behaviors.maths2mind = {
        attach: function (context, settings) {
            //$('a.link-top-tab.formeln').bind('click', function () { $(".horizontal-tabs-list a[href$='#tab-formeln']").trigger('click'); $("#tab-formeln summary").trigger('click'); });
            //$('a.link-top-tab.aufgaben').bind('click', function () { $(".horizontal-tabs-list a[href$='#tab-aufgaben']").trigger('click'); $("#tab-aufgaben summary").trigger('click'); });
            /*
                        $('a.link-top-tab.formeln').bind('click', function () { $(".horizontal-tabs-list a.click-formeln").trigger('click'); });
                        $('a.link-top-tab.aufgaben').bind('click', function () { $(".horizontal-tabs-list a.click-aufgaben").trigger('click'); });
                        $('a.link-top-tab.grundkompetenzen').bind('click', function () { $(".horizontal-tabs-list a[href$='#tab-grundkompetenzen']").trigger('click'); $("#tab-grundkompetenzen summary").trigger('click'); });*/

            $('.button--clipboard').bind('click', function () {
                const cb = navigator.clipboard;
                cb.writeText($(this).attr("data-clipboard-text")).then(() => $(this).html("Link kopiert!"));
            });

            $(document, context).once('maths2mind ').each(function () {
                var classImageCycle = ['imageCycle1', 'imageCycle2', 'imageCycle3'];
                var randomNumber = Math.floor(Math.random() * classImageCycle.length);
                var classToAdd = classImageCycle[randomNumber];
                $('body.path-frontpage div.imageCycle').addClass(classToAdd);
            });
        }
    };

}(jQuery, Drupal));