import { AuthService } from "../services/auth-service.js";

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register = async (req, res) => {
    let input = req.body;
    let newUser = await this.authService.register(input);
    return newUser;
  };
}
export default new AuthController();
