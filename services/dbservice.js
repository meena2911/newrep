var MongoClient=enquire('mongodb').MongoClient;

exports.createConnection=function({
MongoClient.connect("mongodb://mydb:hello@ds047325.mlab.com:47325/projector").then(function(client){
  console.log("connected to database");
exports.database=client.db("projector");

});
}
