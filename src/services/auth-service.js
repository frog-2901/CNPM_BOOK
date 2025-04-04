import { AppConst } from "../libs/app-const.js";
import User from "../models/user.js";

export class AuthService {
  constructor() {}

  async register(input) {
    //Chek pass === conf_pass
    let isMatched = input.password === input.conf_password;
    if (!isMatched) {
      throw new Error("Password is not matched");
    }
    //Check passFormat
    let isPasswordCorrect = AppConst.REGEX.ADMIN_PASSWORD.test(input.password);
    if (!isPasswordCorrect) {
      throw new Error("Password không hợp lệ");
    }
    //Check email exist
    let user = await this._getUserByEmail(input.email);
    if (user) {
      throw new Error("User is existed");
    }
    //Verify otp

    let newUser = await User.create(input);
    return newUser;
  }

  async _getUserByEmail(email) {
    let user = await User.findOne({ email });
    return user;
  }
}
