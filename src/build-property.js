#!/usr/bin/env node

/*
* Add and Remove Build properties for ios projects.
*/

var fs = require('fs');
var path = require('path');
var xcode = require('xcode');

function addBuildProperty(context, prop, value, build_name){
  var projectRoot = path.resolve(context.opts.projectRoot);
  var ConfigParser = context.requireCordovaModule('cordova-lib').configparser
  var config = new ConfigParser(path.join(projectRoot, 'config.xml'));
  var projectName = config.name();
  var projectPath = path.join(projectRoot, 'platforms/ios/', projectName+'.xcodeproj','project.pbxproj');
  //var projectPath = './platforms/ios/' + projectName + '.xcodeproj/project.pbxproj';
  console.log('projectPath',projectPath);
  var myProj = xcode.project(projectPath);
  myProj.parse(function(err){
    if(err){
      console.error('Error parsing project', projectPath, 'error', JSON.stringify(err));
    } else {
     myProj.addBuildProperty(prop, value,build_name);
    fs.writeFileSync(projectPath, myProj.writeSync());
    console.log('✔ ', prop,value);
    }
    
  });
}
function removeBuildProperty(context, prop, build_name){
  var projectRoot = path.resolve(context.opts.projectRoot);
  var ConfigParser = context.requireCordovaModule('cordova-lib').configparser
  var config = new ConfigParser(path.join(projectRoot, 'config.xml'));
  var projectName = config.name();
  var projectPath = path.join(projectRoot, 'platforms/ios/', projectName+'.xcodeproj','project.pbxproj');
  var myProj = xcode.project(projectPath);
  myProj.parse(function(err){
    if(err){
      console.error('Error parsing project', projectPath, 'error', JSON.stringify(err));
    } else {
     myProj.removeBuildProperty(prop, build_name);
    fs.writeFileSync(projectPath, myProj.writeSync());
    console.log('✔ ',prop,'removed');
    }
    
  });
}

module.exports = {
 "addBuildProperty":addBuildProperty,
 "removeBuildProperty":removeBuildProperty
};
