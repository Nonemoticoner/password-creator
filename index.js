exports.PasswordCreator = (function () {
		// constructor
		function PasswordCreator () {
			// available sets of signs those can be used
			this.sets = {
				letters: "abcdefghijklmnopqrstuvwxyz",
				digits: "0123456789",
				special: "!@#$%^&*()_+-={}[]|:;\"\'<>,.?/\\~`";
			};
		}

		// main algorithm function
		PasswordCreator.prototype.create = function(config) {
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
					include: []
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
				settings.sets.include = (Object.prototype.toString.call(config.sets.include) == "[object Array]") ? config.sets.include : settings.sets.include;

				settings.length = (typeof config.length == "number" && config.length >= 0) ? Math.floor(config.length) : 0;
			}

			// creating algorithm
			// ...

			return password;
		}

		return PasswordCreator;
})();