'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { FormatBold, FormatItalic, StrikethroughS } from '@mui/icons-material';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Markdown } from '@tiptap/markdown';
import { TextStyle } from '@tiptap/extension-text-style';
import { FontSize } from '@tiptap/extension-text-style/font-size';
import { Input } from '@/shared/ui';
import { NoteCreatePayload, NoteUpdatePayload } from '@/entities/note';

interface NoteEditorProps {
  initialData?: Partial<NoteCreatePayload>;
  onSubmit: (data: NoteCreatePayload | NoteUpdatePayload) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  submitLabel?: string;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
  submitLabel = 'Save',
}) => {
  const [title, setTitle] = useState(initialData?.title || '');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown,
      TextStyle,
      FontSize.configure({
        types: ['textStyle'],
      }),
    ],
    content: initialData?.content || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4',
      },
    },
  });

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      if (editor && initialData.content) {
        editor.commands.setContent(initialData.content, {
          contentType: 'markdown',
        });
      }
    }
  }, [initialData, editor]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editor) return;

    const markdownContent = editor.getMarkdown();
    const payload: NoteCreatePayload = {
      title,
      description: markdownContent.substring(0, 200) || '',
      content: markdownContent,
      tags: initialData?.tags || [],
    };
    await onSubmit(payload);
  };

  if (!editor) {
    return null;
  }

  return (
    <Card>
      <CardContent sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <Input
                type="text"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    p: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'grey.50',
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    color={editor.isActive('bold') ? 'primary' : 'default'}
                  >
                    <FormatBold />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    color={editor.isActive('italic') ? 'primary' : 'default'}
                  >
                    <FormatItalic />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    color={editor.isActive('strike') ? 'primary' : 'default'}
                  >
                    <StrikethroughS />
                  </IconButton>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Font Size</InputLabel>
                    <Select
                      value={
                        editor.getAttributes('textStyle').fontSize || '14px'
                      }
                      label="Font Size"
                      onChange={(e) =>
                        editor.chain().focus().setFontSize(e.target.value).run()
                      }
                    >
                      <MenuItem value="12px">12px</MenuItem>
                      <MenuItem value="14px">14px</MenuItem>
                      <MenuItem value="16px">16px</MenuItem>
                      <MenuItem value="18px">18px</MenuItem>
                      <MenuItem value="20px">20px</MenuItem>
                      <MenuItem value="24px">24px</MenuItem>
                      <MenuItem value="28px">28px</MenuItem>
                      <MenuItem value="32px">32px</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    '& .ProseMirror': {
                      minHeight: '400px',
                      p: 2,
                      outline: 'none',
                    },
                    '& .ProseMirror p.is-editor-empty:first-child::before': {
                      color: 'text.disabled',
                      content: 'attr(data-placeholder)',
                      float: 'left',
                      height: 0,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <EditorContent editor={editor} />
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={onCancel}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" disabled={isLoading}>
                  {isLoading ? 'Saving...' : submitLabel}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
