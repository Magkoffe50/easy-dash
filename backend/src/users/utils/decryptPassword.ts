import * as bcrypt from 'bcrypt';

export const decryptPassword = async (
  password: string,
  hashedPassword: string,
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
