var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var lessons = {
	lesson1: {
		title: 'Physics Lesson',
		heading: 'Ideal Gas Law',
		goal: `
			<p>
				To understand the ideal gas law and be able to apply it to a wide variety of situations.
			</p>
		`,
		definition: `
			<p>
				The absolute temparature <strong><em>T</em></strong>, volume <strong><em>V</em></strong>, and pressure <strong><em>p</em></strong> of an ideal gas sample are related by the <em>ideal gas law</em> which states that
			</p>
			<p>
				<strong><em>pV = nRT</em></strong>
			</p>
			<p>
				where <strong><em>'n'</em></strong> is the number of moles on the gas sample, and <strong><em>'R'</em></strong> is known as Universal Gas Constant 
			</p>
		`
		},
	lesson2: {
		title: 'Physics Lesson',
		heading: 'Alternating Current',
		goal: `
			<p>
				To understand the nature of Alternating Current and its porperties
			</p>
		`,
		definition: `
			<p>
				The voltage or current that changes its polarity / direction over time is known as Alternating Current (AC)
			</p>
		`
	},
	lesson3: {
		title: 'Physics Lesson',
		heading: 'Centre of Mass',
		goal: `
			<p>
				To understand the need for defining the Centre of Mass of a Physical System and use it in solving various practical problems
			</p>
		`,
		definition: `
			<p>
				<em>The Centre of Mass of a system</em> is defined as that point where whole mass of the system appears to be concentrated.
			</p>
		`
	}
};

function createLessonTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var goal = data.goal;
	var definition = data.definition;
	var lessionTemplate = `
		<!doctype html>
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="description" content="Free Web tutorials">
				<meta name="keywords" content="HTML,CSS,XML,JavaScript">
				<meta name="author" content="John Doe">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>${title}</title>
				<link rel="shortcut icon" href="/ui/SC_ICON.ico" />
				<link href="/ui/style.css" rel="stylesheet" />
			</head>
			<body>
				<div class="container">
					<h2><a href="/ui/sushikshana.html">Back to Sushikshana Consultancy</a></h2>
				</div>

				<div class="container">
					<h1 class="center">${heading}</h1>
					<h3>Learning Goal</h3>
					${goal}
					<h3>
						Definition
					</h3>
					${definition}
				</div>
			</body>
		</html>
	`;
	return lessionTemplate;
}

app.get('/:lessonNo', function (req, res) {
	var lessonNo = req.params.lessonNo;
  res.send(createLessonTemplate(lessons[lessonNo]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/SC_ICON.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SC_ICON.ico'));
});

app.get('/ui/SC_LOGO.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SC_LOGO.png'));
});

app.get('/ui/kvkr01.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kvkr01.jpg'));
});

app.get('/ui/academics.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'academics.html'));
});

app.get('/ui/industry.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'industry.html'));
});

app.get('/ui/training.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'training.html'));
});

app.get('/ui/sushikshana.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sushikshana.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8081;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
