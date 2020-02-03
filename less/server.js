const http = require("http");
const fs = require("fs");
const less = require("less");

http
	.createServer(function(request, response) {
		fs.readFile("LessStyleSheet.less", "utf8", function(error, data) {
			less.render(data, function(error, style) {
				console.log(style);
				response.writeHead(200, { "Content-Type": "text/css" });
				response.end(style.css);
			});
		});
	})
	.listen(3000, function() {
		console.log("Listening on port 3000...");
	});
