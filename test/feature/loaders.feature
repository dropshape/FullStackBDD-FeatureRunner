Feature: Runner can load feature files
  In order to : Be able to configure the feature runner
  As a        : Developer
  I want to   : Be able to setup the runner with feature file locations.


  Scenario: Loading feature files from the filesystem
    Given A feature file on the filesystem
    When  I run the feature runner
    Then  My features should be read from the filesystem

  Scenario: Loading feature files from Github
    Given A feature file in github
    When  I run the feature runner
    Then  My features should be read from Github