import mongoose = require("mongoose");
interface IUser extends mongoose.Document {
  _id: any;
  address: string;
  createdAt: Date;
  email: string;
  name: string;
  password: string;
  photo: string;
  telephone: string;
  updatedAt: Date;
}

export default IUser;
