import { ObjectType, Field, ID } from "@nestjs/graphql"
import { StudentType } from "src/student/student.type"

@ObjectType('Lesson') // Type名前をLessonTypeではなくLessonにする
export class LessonType {
  @Field(type => ID) // idの型をStringではなくGraphQLIDにする

  id: string

  @Field()
  name: string

  @Field()
  startDate: string

  @Field()
  endDate: string

  @Field(type => [StudentType])
  students: string[]
}
