import React from 'react';
import { Editor } from 'slate';
import { styled, Box, Divider, Typography } from '@mui/material';
import { Redo as RedoIcon, Undo as UndoIcon } from '@mui/icons-material';

import PlusButton from '../subcomponents/plus-button';
import ToggleButtonList from '../subcomponents/toggle-button-list';
import CopyToClipboard from '../subcomponents/copy-to-clipboard';
import Play from 'components/subcomponents/Play';
import ButtonPostData from './button-post-data';
import { serialize } from '../../hooks/currentSelectEditor';

// Styled components
const CharacterCount = styled('div')<{ isWarning: boolean }>(({ theme, isWarning }) => ({
  padding: '0.1em 0.1rem',
  color: isWarning ? theme.palette.warning.main : theme.palette.primary.main,
  fontSize: '80%',
  maxHeight: '24px',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '10%',
}));

// Types
interface FooterEditorBarProps {
  editor: Editor;
  handleTransfer?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  voice?: boolean;
}

export const FooterEditorBar: React.FC<FooterEditorBarProps> = ({
  editor,
  handleTransfer,
  voice = false,
  disabled = false,
}) => {
  const characterCount = serialize(editor).length;
  const isWarning = characterCount > 15000;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Divider sx={{ width: '100%', marginTop: '1.5rem' }} />
      <Box sx={{ display: 'flex', marginTop: '0.15rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          {!disabled && <PlusButton onClick={handleTransfer} />}
          <CopyToClipboard editor={editor} />
          <ButtonPostData editor={editor} />
          {voice && <Play />}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ToggleButtonList
            title="Undo"
            icon={<UndoIcon fontSize="inherit" />}
            onClick={() => editor.undo()}
            disabled={editor.history.undos.length === 0}
          />
          <ToggleButtonList
            title="Redo"
            icon={<RedoIcon fontSize="inherit" />}
            onClick={(e) => {
              e.preventDefault();
              editor.redo();
            }}
            disabled={editor.history.redos.length === 0}
          />
          <ToggleButtonList
            title="Number of Characters"
            icon={
              <Typography variant="caption" display="block" gutterBottom sx={{ mb: 0 }}>
                <CharacterCount isWarning={isWarning}>{characterCount}</CharacterCount>
              </Typography>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterEditorBar;