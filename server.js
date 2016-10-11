var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title: 'Article-one||Atul panwar',
    heading:'Article one',
    date:'october 8,2016',
    content:`<p>
            This the the content for my first article    This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   
            </p>
            <p>
            This the the content for my first article    This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   
            </p>
            <p>
            This the the content for my first article    This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   This the the content for my first article   
            </p>`
     
},
'article-two':{
title: 'Article-two||Atul panwar',
heading:'Article two',
date:'october 15,2016',
content:`<p>
    This the the content for my second article    
    </p>`
},
'article-three':{
    title: 'Article-three||Atul panwar',
heading:'Article three',
date:'october 20,2016',
content:`<p>
    This the the content for my third article    
    </p>`
}

};
function createtemplate(data){
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
var htmltemplate=`<html>
    <head>
        <title>
        ${title}
        </title>
        
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container" >
        <div>
            <a href="/">Home </a>
        </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
        <div>
            ${date}
        </div >
            <div >
            ${content}
            </div>
        </div>
    </body>
</html>`;
return htmltemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
 res.send(createtemplate(articles[articleName]));
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
