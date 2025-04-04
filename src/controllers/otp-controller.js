import { otpService } from "../services/otp-service.js";

class OtpController {
  constructor() {
    this.otpService = new otpService();
  }
  save = async (req, res) => {
    let input = req.body;
    let _res = this.otpService.save(input);
    return _res;
  };
}

export default new OtpController();
