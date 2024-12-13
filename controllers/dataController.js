const dataModel = require("../models/schema");
const seatModel = require("../models/seatSchema");
const authModel = require("../models/authSchema");
const logSchema = require("../models/logSchema");
const bcrypt = require("bcrypt");

const getData = async (req, res) => {
  try {
    // console.log(req, res);
    const data = await dataModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const createData = async (req, res) => {
  try {
    // console.log(req.body);
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
    // console.log(id);
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
    // console.log(updatedData);
    const updatedUser = await dataModel.findByIdAndUpdate(id, updatedData);
    // console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("this is the error" + error);
  }
};
const deleteData = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    console.log("Data deleted of " + id);
    const deleteUser = await dataModel.findByIdAndDelete(id);
    res.status(200).json({ error: deleteUser });
  } catch (error) {
    console.log("this is the error" + error);
  }
};

const setSeatData = async (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body.seats;
    const seatData = { _id: id, seatsById: data };
    // console.log(id);
    // console.log(data);
    // console.log(seatData)

    try {
      const saveSeatsById = await seatModel.findOneAndUpdate(
        { _id: id },
        { $set: seatData },
        { upsert: true, new: true }
      );
      // console.log(seatData)
      // console.log("successfully saved data of :" + saveSeatsById);
    } catch (error) {
      console.log("this is the seat error:  " + error);
    }

    const saveSeats = await dataModel.findById(id);
    const existingSeats = saveSeats.seats;
    const newSeats = existingSeats.concat(data);
    saveSeats.seats = newSeats;
    await saveSeats.save();
    res.status(200).json(saveSeats.seats);
  } catch (error) {
    console.log("this is error" + error.message);
  }
};

const getSeatData = async (req, res) => {
  const id = req.params.id;
  const data = await dataModel.findById(id);
  console.log("getSeatData");
  res.json({ bookedSeats: data.seats });
};

const setPrice = async (req, res) => {
  try {
    const id = req.body.id;
    const price = req.body.price;
    // console.log(id);
    // console.log(price);
    const savePrice = await dataModel.findByIdAndUpdate(
      id,
      {
        $set: { price: price },
      },
      { new: true }
    );
    res.status(200).json(savePrice);
  } catch (error) {
    console.log("this is error: " + error.message);
  }
};

const deleteSeatData = async (req, res) => {
  try {
    const id = req.body.id;
    const seatIds = req.body.seats;
    console.log(id);
    console.log(seatIds);
    // const update = await dataModel.findByIdAndUpdate(id, {
    //   $pull: { seats: { $in: seatIds } }
    // }, { new: true });
    const update = await dataModel.findByIdAndDelete(
      id,
      {
        $pull: { seats: { $in: seatIds } },
      },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting seats" });
  }
};
const getSeatDataById = async (req, res) => {
  try {
    console.log("getSeatDataById");
    const id = req.params.id;
    const data = await seatModel.findById(id);
    console.log("seats by id " + data);
    res.json({ bookedSeatsByID: data.seatsById });
  } catch (error) {
    console.log("This is IndividualSeat error : " + error);
  }
};

const saveUser = async (req, res) => {
  try {
    // console.log(req.body);
    const payload = req.body;
    const userData = new authModel(payload);
    const saveUser = await userData.save();
    // console.log(saveUser);
    res.status(201).json({ saveUser });
  } catch (error) {
    console.log("Auth error:  " + error);
  }
};

const authentication = async (req, res) => {
  const { _id, name, password, loginTime } = req.body;
  // console.log(req.body);
  const userData = await authModel.findOne({ name });

  if (!userData) {
    // return res.status(401).send({ error: "User not found" });
    console.log("No user");
  }
  // const isValidPassword = await bcrypt.compare(password, userData.hashPassword);
  if (password !== userData.password) {
    console.log("invalid password");
    return res.status(401).send({ error: "Invalid password" });
  }
  console.log(userData);
  if (password == userData.password) {
    console.log("successfull password");
    // console.log(LogData);
    return res.status(200).send(true);
  }
};

const saveLogData = async (req, res) => {
  try {
    const { name, password, loginTime, logOutTime } = req.body;
    LogData = { name, password, loginTime, logOutTime };
    const logData = new logSchema(LogData);
    const saveLogData = await logData.save();
    console.log("This is save log data : "+saveLogData);
    return res.status(200).send(saveLogData);
  } catch (error) {
    res.status(401).send({ error: "invalid logout" });
    console.log("Log error: " + error);
  }
};

const updateLogData = async (req, res) => {
  try {
    const { id, OutTime } = req.body;
    // console.log(OutTime)
    const update = {$set: {logOutTime: OutTime}};
    console.log(update);
    // const filter = {name};
    // const options = { new: true };
    const updateData = await logSchema.findByIdAndUpdate(id, update);
    console.log("This is logout Data :" + updateData);
    return res.status(200).send(updateData);
  } catch (error) {
    console.log("Update log data error:" + error);
    return res.status(401).send("Inalid logoutdata");
  }
};

module.exports = {
  updateLogData,
  saveLogData,
  getData,
  createData,
  getDataById,
  updateData,
  deleteData,
  setSeatData,
  getSeatData,
  setPrice,
  getSeatDataById,
  saveUser,
  authentication,
};
