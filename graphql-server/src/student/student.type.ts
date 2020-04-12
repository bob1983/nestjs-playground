import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Student') // Type名をStudentTypeではなく、Studentにする
export class StudentType {
  @Field(type => ID) // idの型をStringではなくGraphQLScalarTypeにする
  id: string

  @Field()
  firstName: string

  @Field()
  lastName: string
}
