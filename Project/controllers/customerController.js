//All complete
const { Customer } = require("../models/Customer.js")


exports.postCustomer = (req, res) => {
    let newCustomer = new Customer({
        cname: req.body.cname,
        email: req.body.email,
        age: req.body.age,
        sex: req.body.sex,
        weight: req.body.weight,
        height: req.body.height,
        plan: req.body.plan
    });

    newCustomer.save()
        .then(result => {
            res.json({
                data: newCustomer,   //data that will be sent when an obj is created.
                url: `customers/${newCustomer._id}`      //where the client can access the new created document
            });
        })
        .catch(err => res.status(500).send(err));
}

exports.getCustomers = (req, res) => {
    Customer.find({}).exec()
        .then(results => {
            res.json(results)
        })
        .catch(error => res.status(500).send(error));
}

exports.getCustomer = (req, res) => {
    Customer.findOne({ '_id': req.params.id }).exec()
        .then(results => {
            res.json(results);
        })
        .catch(error => res.status(500).json(error))
}