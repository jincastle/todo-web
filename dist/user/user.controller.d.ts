import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<User[]>;
    create(userData: CreateUserDto): Promise<User>;
}
