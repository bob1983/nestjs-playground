import { ObjectType, Field, ID } from "@nestjs/graphql"

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
}
