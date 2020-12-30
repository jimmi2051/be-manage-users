import mongoose = require("mongoose");
interface IUser extends mongoose.Document {
  _id: any;
  address: string;
  email: string;
  fullName: string;
  password: string;
  photo: string;
  telephone: string;
}

export default IUser;