Yeoman Generator: Upstatement Style Guide
==========================

[Yeoman Generator](http://yeoman.io) to quickly scaffold the [Upstatement Style Guide Template](https://github.com/Upstatement/style-guide-twig) for Twig/Timber

## Getting Started
Go to the Terminal, we'll be doing everything from there.

#### Make sure [Yeoman](http://yeoman.io) is installed
Run `yo -v`. If you don’t have it installed, run the following: `npm install -g yo`

#### Install the Style Guide Generator:
```bash
npm install -g generator-style-guide-twig
```
#### Install the Style Guide in your project
Navigate to your WordPress project’s theme folder. This is where you’ll install the Style Guide. Initiate the generator:
```bash
yo style-guide-twig
```
Follow the prompts and you'll have a shiny new Style Guide sitting in your project, ready to customize! 

### Render the Style Guide in WordPress
The WordPress database needs to know these pages exist in order to render them, so you need to go the WP Admin > Pages and add new pages. They should be named Style Guide and Style Guide Source. It’s important that their permalinks exactly match the name of the files between the `page-` prefix and `.twig` suffix. Here’s what it should look like …

_Style Guide_
![Style Guide](http://i.imgur.com/1gHvvfS.jpg)

_Style Guide Source_
![Style Guide Source](http://i.imgur.com/XM2tVRY.jpg)

### Run Compass
Navigate to the newly created `style-guide` directory in your theme and run `compass watch`

That’s it! You’re all set up! For more about what you can do with the Style Guide, visit the main repo for the  [Upstatement Style Guide Template](https://github.com/Upstatement/style-guide-twig).

### Dependencies
* **Node** - [Install Node](http://nodejs.org/)
* **NPM** - [Install NPM](https://www.npmjs.org/package/npm-install)
