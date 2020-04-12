import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService
  ) {}

  @Mutation(returns => StudentType)
  createStudent(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string
  ) {
    return this.studentService.createStudent(firstName, lastName)
  }
}
