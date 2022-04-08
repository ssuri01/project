//All complete
const { Package } = require("../models/Package.js")

exports.postPackage = (req, res) => {
    let newPackage = new Package({
        title: req.body.title
    });

    newPackage.save()
        .then(result => {
            res.json({
                data: newPackage,   //data that will be sent when an obj is created.
                url: `packages/${newPackage._id}`      //where the client can access the new created document
            });
        })
        .catch(error => res.status(500).send(error));
}

exports.getPackages = (req, res) => {
    Package.find({}).exec()
        .then(results => {
            res.json(results)
        })
        .catch(error => res.status(500).send(error));
}
