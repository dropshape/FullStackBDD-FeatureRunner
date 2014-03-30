'use strict';

var FeatureRunner = require('./lib/FeatureRunner').FeatureRunner;
var FeatureLoader = require('fullstackbdd-featureloader').FeatureLoader;
var FileSystemLoader = require('fullstackbdd-featureloader').FileSystemLoader;
var GitHubLoader = require('fullstackbdd-featureloader').GitHubLoader;

module.exports.FeatureRunner = FeatureRunner;

module.exports.run = function run(options){
    var runner = new FeatureRunner();
    addFeatureLoaders(options, runner);
    return runner.run();
};

//-------------------------------------------------------------------------
//
// Private Methods
//
//-------------------------------------------------------------------------

function addFeatureLoaders(options, runner) {
    var loader = new FeatureLoader(new FileSystemLoader(options.features));
    loader.addLoader(new GitHubLoader(options.features));
    runner.addLoaderStep(loader);
}
