import { InputType, Field, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID('all')
  @Field(type => ID)
  lessonId: string

  @IsUUID('all', { each: true })
  @Field(type => [ID])
  studentIds: string[]
}
