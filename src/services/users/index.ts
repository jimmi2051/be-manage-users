import { validateEmail } from "../../utils/Helpers";
import { REGEX_PHONE } from "../../utils/Constants";
import UserSchema from "../../entities/schemas/User";

const formatError = (field, message) => {
  return {
    field,
    message,
  };
};
export const validateUser = async (user) => {
  const result = {
    status: true,
    errors: [],
  };
  if (!user.email || user.email === "") {
    result.status = false;
    result.errors.push(formatError("email", "Email is require!"));
  }

  if (!user.name || user.name === "") {
    result.status = false;
    result.errors.push(formatError("name", "Name is require!"));
  }
  if (user.email && user.email !== "" && !validateEmail(user.email)) {
    result.status = false;
    result.errors.push(formatError("email", "Email is invalid format!"));
  }
  if (user.telephone) {
    if (!REGEX_PHONE.test(user.telephone)) {
      result.status = false;
      result.errors.push(
        formatError("telephone", "Phone number is invalid format! ")
      );
    }
  }
  if (
    user.photo &&
    (user.photo === "" || user.photo === "/static/uploads/undefined")
  ) {
    result.status = false;
    result.errors.push(formatError("photo", "Photo is required!"));
  }
  if (result.status) {
    const checkExistUser = await UserSchema.findOne({ email: user.email });
    if (checkExistUser) {
      result.status = false;
      result.errors.push(formatError("email", "Email is existed!"));
    }
  }
  return result;
};
