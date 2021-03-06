import IUser from "./interfaces/IUser";

class User {
  constructor(userModel: IUser) {
    this._userModel = userModel;
  }
  private _userModel: IUser;
  get address(): string {
    return this._userModel.address;
  }
  get email(): string {
    return this._userModel.email;
  }
  get name(): string {
    return this._userModel.name;
  }
  get photo(): string {
    return this._userModel.photo;
  }
  get telephone(): string {
    return this._userModel.telephone;
  }
  get createdAt(): Date {
    return this._userModel.createdAt;
  }
  get updatedAt(): Date {
    return this._userModel.updatedAt;
  }
}

Object.seal(User);

export default User;
