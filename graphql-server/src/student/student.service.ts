import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid'

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}

  async createStudent(firstName: string, lastName: string): Promise<Student> {
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName
    })
    return await this.studentRepository.save(student)
  }
}
