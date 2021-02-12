const { jewelryType } = require('../models/models');

class TypeController {

    async create(req, res) {
      const {type} = req.body;
      const jewelry_type = await jewelryType.create({type})
      return res.json(jewelry_type)
    }

    async get(req, res) {
      const types = await jewelryType.findAll()
      return res.json(types)
    }

}

module.exports = new TypeController();