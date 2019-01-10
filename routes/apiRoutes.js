var db = require("../models");

module.exports = function(app) {
  // Get all documents
  app.get("/api/documents", function(req, res) {
    db.Document.findAll({}).then(function(dbDocuments) {
      res.json(dbDocuments);
    });
  });

  // Create a new document
  app.post("/api/documents", function(req, res) {
    db.Document.create(req.body).then(function(dbDocuments) {
      res.json(dbDocuments);
    });
  });

  // Delete a document by id
  app.delete("/api/documents/:id", function(req, res) {
    db.Document.destroy({ where: { id: req.params.id } }).then(function(dbDocuments) {
      res.json(dbDocuments);
    });
  });
};
