import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  getById(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ id: userId });
  }

  update(userId: number, createUserDto: CreateUserDto) {
    const updatedUser: User = new User();

    updatedUser.username = createUserDto.username;
    updatedUser.email = createUserDto.email;
    updatedUser.password = createUserDto.password;
    updatedUser.id = userId;

    this.userRepository.save(updatedUser);
  }

  delete(userId: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(userId);
  }
}
