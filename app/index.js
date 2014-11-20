'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var StyleGuideTwigGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the praiseworthy StyleGuideTwig generator!'
    ));

    var prompts = [{
      name: 'clientName',
      message: 'What is the client\'s name ?'
    },{
      name: 'themeName',
      message: 'What is the name of your WordPress theme directory?',
      default: process.cwd().split(path.sep).pop()
    },{
      name: 'customPageDir',
      message: 'In what folder do you keep custom page types?',
      default: 'templates'
    }];

    this.prompt(prompts, function (props) {
      this.clientName = props.clientName;
      this.themeName = props.themeName;
      this.customPageDir = props.customPageDir;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('style-guide');

        this.src.copy('bower.json', 'style-guide/bower.json');
        this.src.copy('config.rb', 'style-guide/config.rb');
        this.src.copy('readme.md', 'style-guide/readme.md');
        this.src.copy('.bowerrc', 'style-guide/.bowerrc');

        this.src.copy('page-style-guide.twig', this.customPageDir + '/page-style-guide.twig');
        this.src.copy('page-style-guide-source.twig', this.customPageDir + '/page-style-guide-source.twig');


      this.dest.mkdir('style-guide/templates/components');
        this.directory('templates/components', 'style-guide/templates/components');

        var context = {
          client_name: this.clientName,
          theme_name: this.themeName
        };

        this.template('templates/style-guide.twig', 'style-guide/templates/style-guide.twig', context);

      this.dest.mkdir('style-guide/sass');
        this.directory('sass', 'style-guide/sass');

      this.dest.mkdir('style-guide/css');
        this.directory('css', 'style-guide/css');

      this.dest.mkdir('style-guide/js');
        this.directory('js', 'style-guide/js');

    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    // Change working directory to 'gulp' for dependency install
    var npmdir = process.cwd() + '/style-guide';
    process.chdir(npmdir)

    // Run Bower
    this.bowerInstall();

    // Install Compass
    this.spawnCommand('compass', ['install']);

  }
});

module.exports = StyleGuideTwigGenerator;
