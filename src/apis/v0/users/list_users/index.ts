import UserSchema from "../../../../entities/schemas/User";
import { REGEX_NUMBER } from "../../../../utils/Constants";
import { parseInt } from "lodash";
export default async (req: any, res: any) => {
  const { email, name } = req.query;
  let { page = 1, pageSize = 10 } = req.query;
  let queryCond = {};
  queryCond = {
    ...(name && { name: { $regex: name, $options: "i" } }),
    ...(email && { email: { $regex: email, $options: "i" } }),
  };
  page = REGEX_NUMBER.test(page) ? parseInt(page, 10) : 1;
  pageSize = REGEX_NUMBER.test(pageSize) ? parseInt(pageSize, 10) : 10;
  const skip = (page - 1) * pageSize;
  const users = await UserSchema.find(queryCond).skip(skip).limit(pageSize);
  const total = await UserSchema.collection.countDocuments();
  res.send({ status: true, data: { data: users, total } });
};
