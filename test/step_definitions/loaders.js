'use strict';
/*jshint -W030*/
module.exports = function steps() {

    var expect = require('chai').expect;
    var runner = require('../../index');
    var runnerResult;
    var config = {};

    this.Given(/^A feature file on the filesystem$/, function (callback) {
        config.features = '**/**/loaders.feature';
        callback();
    });

    this.When(/^I run the feature runner$/, function (callback) {
        runnerResult = runner.run(config);
        callback();
    });

    this.Then(/^My features should be read from the filesystem$/, function (callback) {
        runnerResult.then(function (result) {
            expect(result.features).to.contain('test/feature/loaders.feature');
            callback();
        }).fail(function (err) {
                callback.fail(err);
            });
    });

    this.Given(/^A feature file in github$/, function (callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^My features should be read from Github$/, function (callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });
};