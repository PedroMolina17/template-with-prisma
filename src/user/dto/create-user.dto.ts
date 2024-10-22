export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  lastName: string;
  roleId: number;
  isActive: boolean;
}
