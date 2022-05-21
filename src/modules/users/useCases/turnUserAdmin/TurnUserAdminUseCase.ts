import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const newAdminById = this.usersRepository.findById(user_id)

    if(!newAdminById) {
      throw new Error("User does not exist.")
    }

    const newAdmin = this.usersRepository.turnAdmin(newAdminById)

    return newAdmin
  }
}

export { TurnUserAdminUseCase };
