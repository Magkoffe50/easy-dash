import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
    private usersService: UsersService,
  ) {}

  async getUserNotes(userId: string): Promise<Note[]> {
    await this.usersService.findOne(userId);

    return await this.notesRepository.find({
      where: { userId },
      order: { lastUpdated: 'DESC' },
    });
  }

  async getUserNoteById(userId: string, noteId: string): Promise<Note> {
    await this.usersService.findOne(userId);

    const note = await this.notesRepository.findOne({
      where: { id: noteId, userId },
    });

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    return note;
  }

  async createNote(
    userId: string,
    createNoteDto: CreateNoteDto,
  ): Promise<Note> {
    if (!createNoteDto.title || !createNoteDto.description) {
      throw new BadRequestException('Title and description are required');
    }

    await this.usersService.findOne(userId);

    const note = this.notesRepository.create({
      ...createNoteDto,
      userId,
    });

    return await this.notesRepository.save(note);
  }

  async updateNote(
    userId: string,
    noteId: string,
    updateNoteDto: UpdateNoteDto,
  ): Promise<Note> {
    await this.usersService.findOne(userId);

    const note = await this.notesRepository.findOne({
      where: { id: noteId, userId },
    });

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    await this.notesRepository.update(noteId, updateNoteDto);

    const updatedNote = await this.notesRepository.findOne({
      where: { id: noteId },
    });

    if (!updatedNote) {
      throw new NotFoundException('Note not found after update');
    }

    return updatedNote;
  }

  async deleteNote(userId: string, noteId: string): Promise<void> {
    await this.usersService.findOne(userId);

    const note = await this.notesRepository.findOne({
      where: { id: noteId, userId },
    });

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    await this.notesRepository.delete(noteId);
  }
}
