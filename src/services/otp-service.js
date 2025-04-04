import { AppConst } from "../libs/app-const.js";
import sendMail from "../libs/email-helper.js";
import { generateOTP, gennerateSecret } from "../libs/otp-helper.js";
import Otp from "../models/otp.js";
import User from "../models/user.js";

export class otpService {
  constructor() {}
  async save(param) {
    console.log("Params: ", param);
    let user = await this._getUserByEmail(param.email);
    if (param.type === AppConst.OTP_TYPE.REGISTER) {
      //Đảm bảo User không có trong db nếu đăng kí
      if (user) {
        throw new Error("User is exist");
      } // Đảm bảo User đã tồn tại trong db nếu quên mk
      else if (param.type === AppConst.OTP_TYPE.FORGET_PASSWORD) {
        if (!user) {
          throw new Error("User is not exist");
        }
      }
    } else {
      return false;
    }
    //Send Otp
    let otp = await this._generateOtp();
    //Gửi otp cho email đăng kí
    await this._sendOTP(otp, param);
    // Lưu otp vào db
    let OtpInput = {
      email: param.email,
      code: otp,
    };
    let res = await Otp.create(OtpInput);
    return res;
  }

  async _sendOTP(_otp, _params) {
    let to = _params.email;
    let subject = "Your OTP Code for Email Verification";
    let html = `Your Verification Code: <span style="font-weight: 700">${_otp}</span> - Complete Your Email Verification`;
    let mailOptions = { to, subject, html };
    return sendMail(mailOptions);
  }
  async _getUserByEmail(email) {
    let user = await User.findOne({ email });
    return user;
  }
  async _generateOtp() {
    let secret = gennerateSecret();
    let otp = generateOTP(secret);
    return otp;
  }
  async _getOtpByEmail(param) {}
}
