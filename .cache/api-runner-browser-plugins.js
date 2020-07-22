module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Highlights","short_name":"Landing","start_url":"/gatsby-starter-highlights/","background_color":"#663399","theme_color":"#663399","display":"standalone","icon":"src/assets/img/website-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"a3b88ae206a6e9a7b1f2c66127a835f3"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
