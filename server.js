var express = require('express');
var app = express();
// Design system static directory
app.use('/assets', express.static(__dirname + '/node_modules/@salesforce-ux/design-system/assets'));
app.use(express.static(__dirname + '/build'));

app.listen(8000);

