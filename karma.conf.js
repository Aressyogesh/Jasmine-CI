module.exports = function(config){
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            './src/*.js' : ['coverage']
            
            
        },
        files :[
            //'./customer-matchers.js',
            './src/*.js',
            './spec/*.spec.js'
        ],
        plugin: ['karma-jasmine', 'karma-jasmine-matchers', 'karma-chrome-launcher', 'karma-coverage'],
        //reporters: ['dots', 'progress'],
        reporters: ['dots', 'coverage'],
        color: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'html', subdir: 'html'}
            ]
        }

    });
};