'use strict';

var logger = require('./src/Logger');
var Q = require('q');
var _ = require('lodash');

var Loader = require('./src/Loader').Loader;

module.exports.FeatureRunner = function FeatureRunner() {
    logger.info('Feature Runner :');
    var featureLoader = new Loader();

    this.run = function () {
        var deferred = Q.defer();
        runFeatureRunner(deferred);
        return deferred.promise;
    };

    this.addLoaderStep = function (loader) {
        featureLoader.addLoader(loader);
    };

    this.addSetupStep = function (step) {
    };

    this.addFilterStep = function (step) {
    };
    this.addBeforeFeatureStep = function (step) {
    };
    this.addBeforeScenarioStep = function (step) {
    };
    this.addBeforeStepStep = function (step) {
    };
    this.addAfterStepStep = function (step) {
    };
    this.addAfterScenarioStep = function (step) {
    };
    this.addAfterFeatureStep = function (step) {
    };
    this.addTeardownStep = function (step) {
    };

    function runFeatureRunner(deferred) {
        var result = {};
        var steps = [];
        steps.push(featureLoader.loadFeatures());
        Q.all(steps).spread(function(features){
            result.features = features;
            deferred.resolve(result);
        });
    }
};