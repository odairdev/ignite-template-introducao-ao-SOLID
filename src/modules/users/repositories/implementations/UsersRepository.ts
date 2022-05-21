import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User()

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(newUser)

    return newUser
  }

  findById(id: string): User | undefined {
    const user = this.users.find(user => id === user.id)

    return user
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(user => email === user.email)

    return user
  }

  turnAdmin(receivedUser: User): User {
    const newAdmin = receivedUser

    Object.assign(newAdmin, {
      admin: true,
      updated_at: new Date()
    })

    this.users.forEach(user => {
      if(user.id === newAdmin.id) {
        user = newAdmin
      }
    })

    return newAdmin
  }

  list(): User[] {
    const all: User[] = this.users

    return all
  }
}

export { UsersRepository };
