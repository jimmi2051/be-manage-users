import UserSchema from "../../../../entities/schemas/User";
import IUser from "../../../../entities/models/interfaces/IUser";
import { uploadPhotoMiddleware } from "../../../../middlewares/upload";
import { deleteFile, validateEmail } from "../../../../utils/Helpers";
export default async (req: any, res: any) => {
  try {
    await uploadPhotoMiddleware(req, res);
    const { email } = req.body;
    if (validateEmail(email)) {
      const data: IUser = <IUser>{
        ...req.body,
        photo: req?.file?.originalname ?? "",
      };
      const user = await UserSchema.create(data);
      res.send({ status: true, data: user });
    } else {
      // Revert file uploaded
      deleteFile(req.file.path);
      res.status(400);
      res.send({
        status: false,
        message: `Email '${email}' is invalid.`,
        path: req.file.path,
      });
    }
  } catch (err) {
    // Revert file uploaded when error
    if (req?.file?.path) {
      deleteFile(req.file.path);
    }
    res.status(500);
    res.send({ status: false, message: err.message });
  }
};
