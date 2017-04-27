var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

mongoose.Promise = global.Promise;
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');

routes_setter(app);



app.listen(8000, function() {
  console.log("listening on port 8000");
})