import bcrypt from "bcryptjs";

const SaltRound = 10;
//plainPassword: mk trước khi mã hóa
//hashedPassword: mk sau khi mã hóa
export async function hashPassword(plainPassword) {
  const hashedPassword = await bcrypt.hash(plainPassword, SaltRound);
  return hashPassword;
}

export async function comparePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
