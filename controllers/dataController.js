const dataModel = require("../models/schema");

const getData = async (req, res) => {
  try {
    console.log(req, res);
    const data = await dataModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const createData = async (req, res) => {
  try {
    console.log(req.body);
    const payload = req.body;
    const userData = new dataModel(payload);
    const saveUser = await userData.save();
    console.log(saveUser);
    res.status(201).json({ saveUser });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getDataById = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const data = await dataModel.findById(id);
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.log("this is error" + error.message);
  }
};

const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    console.log(updatedData);
    const updatedUser = await dataModel.findByIdAndUpdate(id, updatedData);
    console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("this is the error" + error);
  }
};
const deleteData = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id)
    console.log("Data deleted of " + id);
    const deleteUser = await dataModel.findByIdAndDelete(id);
    res.status(200).json({"error": deleteUser });
  } catch (error) {
    console.log("this is the error" + error);
  }
};

module.exports = { getData, createData, getDataById, updateData, deleteData };
