import mongoose from "mongoose";
import { AppConst } from "../libs/app-const.js";

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    code: { type: String, required: true },
    status: {
      type: Number,
      default: AppConst.STATUS.ACTIVE,
      enum: [
        AppConst.STATUS["ACTIVE"],
        AppConst.STATUS["INACTIVE"],
        AppConst.STATUS["REMOVED"],
      ],
    },
  },
  { timestamps: true }
);

const Otp = mongoose.model("OTP", otpSchema);
export default Otp;
