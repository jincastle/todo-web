import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entitie/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository, // 1. DB와의 연결을 정의
  ) {}

  findAll(): Promise<User[]> {
    console.log('유저 전체 불러오기');
    return this.userRepository.find();
  }

  async create(userData: CreateUserDto): Promise<User> {
    // 2.
    const { email, username, password } = userData;

    const user = new User();
    user.email = email;
    user.password = password;
    user.username = username;

    await this.userRepository.save(user);
    user.password = undefined;
    console.log(user);

    return user;
  }
}
