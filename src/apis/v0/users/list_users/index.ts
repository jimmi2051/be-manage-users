import UserSchema from "../../../../entities/schemas/User";
import { REGEX_NUMBER } from "../../../../utils/Constants";
import { parseInt } from "lodash";
export default async (req: any, res: any) => {
  try {
    const { keySearch } = req.query;
    let { page = 1, pageSize = 10 } = req.query;
    let queryCond = {};
    if (keySearch && keySearch !== "") {
      queryCond = {
        $or: [
          { name: { $regex: keySearch, $options: "i" } },
          { email: { $regex: keySearch, $options: "i" } },
        ],
      };
    }
    page = REGEX_NUMBER.test(page) ? parseInt(page, 10) : 1;
    pageSize = REGEX_NUMBER.test(pageSize) ? parseInt(pageSize, 10) : 10;
    const skip = (page - 1) * pageSize;
    const users = await UserSchema.find(queryCond).skip(skip).limit(pageSize);
    const total = await UserSchema.collection.countDocuments(queryCond);
    res.send({ status: true, data: { data: users, total } });
  } catch (err) {
    res.status(500);
    res.send({
      status: false,
      errors: [{ field: "unknow", message: err.message }],
    });
  }
};
