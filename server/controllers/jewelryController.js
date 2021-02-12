const uuid = require('uuid');
const path = require('path');
const { jewelry } = require('../models/models');

class JewelryController {

  async create(req, res) {
    try {
      let { name, price, description, type, jewelryTypeId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const Jewelry = await jewelry.create({name, price, description, type, jewelryTypeId, img: fileName});
      return res.json(Jewelry)
    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    const Jewelry = await jewelry.findAll();
    return res.json(Jewelry)
  }

  async getOne(req, res) {
    const { id } = req.params;
    const Jewelry = await jewelry.findOne(
      {
        where: {id},
      }
    );
    return res.json(Jewelry);
  }
}

module.exports = new JewelryController()