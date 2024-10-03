export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date
}

export interface UserCreate {
    name: string;
    email: string;
}

export interface UserRepository {
    create(user: UserCreate): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}