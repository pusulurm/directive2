/**
 * Created by pusulurm on 9/24/2015.
 */
define(['./myDirective2','./_directive2_template_cache', './directive2_locale_cache'],function( directive2){
    angular.module('Directive2Module', ['directive2.templates','directive2.i18n']).
        directive('myDirective2', directive2)
});
