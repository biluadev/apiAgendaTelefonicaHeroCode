import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({ name, email } : UserCreate): Promise<User>{
        const verifyIfUserAlreadyExists = await this.userRepository.findByEmail(email);
        if (verifyIfUserAlreadyExists) {
            throw new Error('User already exists');
        }
        const result = await this.userRepository.create({ name, email });

        return result
    }
}

export { UserUseCase }