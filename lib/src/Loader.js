'use strict';
var logger = require('./Logger');
var Q = require('q');
var _ = require('lodash');

module.exports.Loader = function Loader() {
    logger.info('Loader :');
    var loaders = [];

    this.addLoader = function addLoader(loader){
        loaders.push(loader);
    };

    this.loadFeatures = function loadFeatures(){
        var deferred = Q.defer();
        var features = [];
        var results = [];
        _.each(loaders, function(loader){
            results.push(loader.fileNames().then(function(filenames){
                features = features.concat(filenames);
            }));
        });
        Q.allSettled(results).then(function(){
            deferred.resolve(features);
        });
        return deferred.promise;
    };
};
