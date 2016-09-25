var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var content={
    title:'article1',
    heading:'PARAGRAPHS',
    date:'25 Sep',
    content: `<p>
            this is the first paragraph which i am writing here
            </p>
            <p>
            this is second para.
            </p>`
};
function createtemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate=`
        <html>
        <head>
        <title>
            ${title}
        </title>
        </head>
        <body>
            <h1>${heading}</h1>
            <div> ${date} </div>
            <div>
            ${content}
            </div>
        </body>
        </html>
    `;
    return htmltemplate;
}

app.get('/article1', function (req, res) {
  res.send(createtemplate(content))
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
