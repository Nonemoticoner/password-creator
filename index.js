exports.PasswordCreator = (function () {
		function PasswordCreator () {
			this.sets = {
				letters: "abcdefghijklmnopqrstuvwxyz",
				digits: "0123456789",
				special: "!@#$%^&*()_+-={}[]|:;\"\'<>,.?/\\~`";
			};
		}

		PasswordCreator.prototype.create = function(config) {
			var password = "";

			// creating algorithm
			// ...

			return password;
		}

		return PasswordCreator;
})();