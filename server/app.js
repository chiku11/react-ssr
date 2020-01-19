
const express = require('express');
const ejs = require('ejs');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 8181;

//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, '../client/build'),{
    extensions: ['js', 'css'],
    index:false,
}));

//app.use('/static/css*',express.static(path.join(__dirname, '../client/build')));

//app.use('/manifest*',express.static(path.join(__dirname, '../client/build')));

app.get('/', async (req, res) => {
    const preloadedState = {
        slide: {texts: ['SSR', 'made', 'easy']}
    }
    const htmlString = await fs.readFile(path.join(__dirname, '../client/build/index.html'), "utf8");
    const replacedString = htmlString.replace('<replace />',"window.__PRELOADED_STATE__ = <%- JSON.stringify(preloadedState).replace(/</g,'\\u003c') %>");
    const rendered = ejs.render(replacedString, {preloadedState});
    res.send(rendered);
});

app.listen(port, () => console.log(`SSR listening on port ${port}!`));