export type UserUpdatePayload = {
  name: string;
  email: string;
  oldPassword?: string;
  password?: string;
  passwordConfirmation?: string;
}
