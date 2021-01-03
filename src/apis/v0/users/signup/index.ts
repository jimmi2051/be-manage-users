import UserSchema from "../../../../entities/schemas/User";
import IUser from "../../../../entities/models/interfaces/IUser";
import { uploadPhotoMiddleware } from "../../../../middlewares/upload";
import { deleteFile } from "../../../../utils/Helpers";
import { validateUser } from "../../../../services/users";
export default async (req: any, res: any) => {
  try {
    await uploadPhotoMiddleware(req, res);
    const data: IUser = <IUser>{
      ...req.body,
      photo: "/static/uploads/" + req?.file?.originalname ?? "",
    };
    const isValidate = await validateUser(data);
    if (isValidate.status) {
      const user = await UserSchema.create(data);
      res.send({ status: true, data: user });
    } else {
      // Revert file uploaded
      if (req?.file?.path) {
        deleteFile(req.file.path);
      }
      res.status(400);
      res.send(isValidate);
    }
  } catch (err) {
    // Revert file uploaded when error
    if (req?.file?.path) {
      deleteFile(req.file.path);
    }
    res.status(500);

    res.send({
      status: false,
      errors: [{ field: "unknow", message: err.message }],
    });
  }
};
