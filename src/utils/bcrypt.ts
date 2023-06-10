import * as bcrypt from "bcrypt"

/**
 * It takes a password, generates a salt, and then hashes the password with the salt
 * @param {string} password - The password to hash.
 * @returns The hash of the password.
 */
export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  /**
   * It takes a password and a userPassword, and returns a boolean value.
   * @param {string} password - string - the password that the user entered
   * @param {string} userPassword - string - the password that is stored in the database
   * @returns A promise that resolves to a boolean.
   */
  export const checkPassword = async (
    password: string,
    userPassword: string,
  ): Promise<boolean> => {
    const isEqueal = await bcrypt.compare(password, userPassword);
    return isEqueal;
  };