import { CreateUserDto } from './dto/user.dto';
import { User } from './entitie/user.entity';
import { UserRepository } from './repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findAll(): Promise<User[]>;
    create(userData: CreateUserDto): Promise<User>;
}
