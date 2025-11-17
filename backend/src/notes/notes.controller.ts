import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../users/user.entity';

type UserWithoutPassword = Omit<User, 'password'>;

@ApiTags('notes')
@Controller('notes')
@UseGuards(JwtAuthGuard)
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  @ApiOperation({ summary: "Get all current user's notes" })
  @ApiResponse({
    status: 200,
    description: 'List of user notes',
    type: [Note],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getUserNotes(@Req() req: Request): Promise<Note[]> {
    const user = req.user as UserWithoutPassword;
    return this.notesService.getUserNotes(user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: "Get current user's note by ID" })
  @ApiResponse({ status: 200, description: 'Note found', type: Note })
  @ApiResponse({ status: 404, description: 'Note not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getUserNoteById(
    @Req() req: Request,
    @Param('id') noteId: string,
  ): Promise<Note> {
    const user = req.user as UserWithoutPassword;
    return this.notesService.getUserNoteById(user.id, noteId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiResponse({
    status: 201,
    description: 'Note created successfully',
    type: Note,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  createNote(
    @Req() req: Request,
    @Body() createNoteDto: CreateNoteDto,
  ): Promise<Note> {
    const user = req.user as UserWithoutPassword;
    return this.notesService.createNote(user.id, createNoteDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update current user's note by ID" })
  @ApiResponse({
    status: 200,
    description: 'Note updated successfully',
    type: Note,
  })
  @ApiResponse({ status: 404, description: 'Note not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  updateNote(
    @Req() req: Request,
    @Param('id') noteId: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ): Promise<Note> {
    const user = req.user as UserWithoutPassword;
    return this.notesService.updateNote(user.id, noteId, updateNoteDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete current user's note by ID" })
  @ApiResponse({ status: 204, description: 'Note deleted successfully' })
  @ApiResponse({ status: 404, description: 'Note not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  deleteNote(@Req() req: Request, @Param('id') noteId: string): Promise<void> {
    const user = req.user as UserWithoutPassword;
    return this.notesService.deleteNote(user.id, noteId);
  }
}
