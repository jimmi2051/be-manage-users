import MyContext from "../Context";
import IUser from "../models/interfaces/IUser";

const mongoose = MyContext.mongooseInstance;
const mongooseConnection = MyContext.mongooseConnection;

class UserSchema {
  static get schema() {
    const schema = mongoose.Schema({
      address: { type: String },
      email: { type: String, required: true, unique: true },
      fullName: { type: String },
      password: { type: String },
      photo: { type: String },
      telephone: { type: String },
    });
    return schema;
  }
}

const schema = mongooseConnection.model<IUser>("Users", UserSchema.schema);

export default schema;
