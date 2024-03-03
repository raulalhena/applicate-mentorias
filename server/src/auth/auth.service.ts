import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    try {
      const { password, email } = loginUserDto;
      const userFound = await this.userService.getUserByEmail(email);
      if (!userFound)
        throw new HttpException(
          'Incorrect credentials',
          HttpStatus.BAD_REQUEST,
        );

      const userPassword = userFound.password;

      console.log(password, userPassword)

      const checkedPassword = await compare(password, userPassword);
      console.log(checkedPassword)
      if (!checkedPassword)
        throw new HttpException('Incorrect credentials', HttpStatus.FORBIDDEN);

      const user = {
        _id: userFound._id,
        email: userFound.email,
        token: await this.jwtService.signAsync({
          sub: userFound._id,
          email: userFound.email,
        }),
      };

      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
