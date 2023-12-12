const testcon = require("../models/test.model");

exports.create = (req, res) => {
  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};


exports.create = (req, res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
}

const testcon = new testcon({
    name: req.body.name,
    
  });

  testcon.create(testcon, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });


  exports.findOne = (req, res) => {
    Tutorial.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  


    