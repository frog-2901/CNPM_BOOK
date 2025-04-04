import { authenticator } from "otplib";
const OTP_EXPIRATION_TIME = 1 * 60 * 1000;
//Cấu hình thời gian sống của otp
authenticator.options = { step: OTP_EXPIRATION_TIME };
export function generateOTP(_secret) {
  //Thiết lập số chữ số cho Otp
  authenticator.options = { digits: 6 };
  //Tạo otp từ secret
  return authenticator.generate(_secret);
}

export function gennerateSecret() {
  return authenticator.generateSecret();
}

export function verifyOtp(_token, _secret) {
  return authenticator.verify(_token, _secret);
}
