import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if(user.admin) {
      const all = this.usersRepository.list()

      return all
    } else {
      throw new Error("User does not exist or is not an admin.")
    }

  }
}

export { ListAllUsersUseCase };
