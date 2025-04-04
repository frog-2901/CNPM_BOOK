import mongoose from "mongoose";
import { AppConst } from "../libs/app-const.js";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    password: {
      type: String,
      require: true,
    },
    conf_password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      default: AppConst.STATUS.ACTIVE,
      enum: [
        AppConst.STATUS["ACTIVE"],
        AppConst.STATUS["INACTIVE"],
        AppConst.STATUS["REMOVED"],
      ],
    },
    code: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
