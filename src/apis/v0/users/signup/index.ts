import UserSchema from "../../../../entities/schemas/User"
import IUser from "../../../../entities/models/interfaces/IUser"
export default async (req: any, res: any) => {
  const data: IUser = <IUser>{
    email: "demo@gmail.com",
    password: "",
    fullName: "Demo",
    telephone: "09679234111",
    address: "57 Xuan Thuong, P4, Q6",
    photo: "/media/background.png",
  }
  const user = await UserSchema.create(data)
  res.send({ status: true, data: user });
}

