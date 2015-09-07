/**
 * password-creator
 * https://github.com/Nonemoticoner/password-creator
 *
 * Copyright (c) 2015 Nonemoticoner
 * Licensed under the MIT license.
 */

module.exports = {
	// available sets of signs those can be used
	sets: {
		letters: "abcdefghijklmnopqrstuvwxyz",
		digits: "0123456789",
		special: "!@#$%^&*()_+-={}[]|:;\"\'<>,.?/\\~`"
	},
	
	// main algorithm function
	create: function(config) {
		// here result will be stored
		var password = "";

		// defines default configuration
		var settings = {
			sets: {
				letters: true,
				lowercase: true,
				uppercase: true,
				digits: true,
				special: true,
				space: false,
				exclude: ""
			},
			length: 6
		};

		// changes configuration if specified to do so
		if(typeof config == "number"){
			// only length was specified
			settings.length = (config >= 0) ? Math.floor(config) : 0;
		}
		else if(typeof config == "object"){
			// overwrite
			settings.sets.letters = (typeof config.sets.letters == "boolean") ? config.sets.letters : settings.sets.letters;
			settings.sets.lowercase = (typeof config.sets.lowercase == "boolean") ? config.sets.lowercase : settings.sets.lowercase;
			settings.sets.uppercase = (typeof config.sets.uppercase == "boolean") ? config.sets.uppercase : settings.sets.uppercase;
			settings.sets.digits = (typeof config.sets.digits == "boolean") ? config.sets.digits : settings.sets.digits;
			settings.sets.special = (typeof config.sets.special == "boolean") ? config.sets.special : settings.sets.special;
			settings.sets.space = (typeof config.sets.space == "boolean") ? config.sets.space : settings.sets.space;
			settings.sets.exclude = (typeof config.sets.exclude == "string") ? config.sets.exclude : settings.sets.exclude;

			settings.length = (typeof config.length == "number" && config.length >= 0) ? Math.floor(config.length) : settings.length;
		}

		// create the set from which signs will be randomly taken to password
		var signs = "";

		// append wanted signs due to settings
		if(settings.sets.letters){
			if(settings.sets.lowercase)
				signs += this.sets.letters;
			if(settings.sets.uppercase)
				signs += this.sets.letters.toUpperCase();
		}
		if(settings.sets.digits){
			signs += this.sets.digits;
		}
		if(settings.sets.special){
			signs += this.sets.special;
		}
		if(settings.sets.space){
			signs += " ";
		}

		// exclude unwanted signs
		if(settings.sets.exclude != ""){
			for(var i = settings.sets.exclude.length - 1; i >= 0; i--){
				signs = signs.replace(settings.sets.exclude[i], "");
			}
		}

		// creating algorithm
		while(settings.length--){
			password += signs[Math.floor(Math.random() * signs.length)];
		}

		return password;
	}
};