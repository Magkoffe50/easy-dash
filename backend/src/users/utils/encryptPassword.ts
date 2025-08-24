import * as bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
