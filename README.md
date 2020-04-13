# NestJS playground

## Setup
Run mongodb

```shell
docker-compose up
```

Run server

```shell
npm run start:dev
```

## Create endpoint

ObjectTypeを作る.
クラスは`@ObjectType()`アノテーション
フィールドは`Field()`アノテーションをする

```ts
@ObjectType('Lesson')
export class LessonType {
  @Field(_ => ID)
  id: string

  @Field()
  name: string
  ...
}
```

Resolverを作る.
クラスは`@Resolver()`アノテーション
Queryは`@Query()`アノテーションで、引数は戻り値の型を返す関数をセットする
(配列を返す場合は、型 \[\] ではなく、\[型\]とする)
引数を伴う場合は、`@Args('引数名')`で受け取れる(`@Body()`, `@Params()`などと同じ感じ)

```ts
@Resolver(_ => LessonType)
export class LessonResolver {
  @Query(_ => LessonType)
  lesson(
    @Args('id') id: string
  ) {
    this.lessonService.getLesson(id)
  }
}
```

```ts
@Query(_ => [LessonType])
lessons() {
  this.lessonService.getLessons()
}
```
