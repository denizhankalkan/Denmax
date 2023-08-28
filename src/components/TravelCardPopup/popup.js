import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function PopupComponent(props) {
  const { open, onClose, title, content } = props;
  //const [open, setOpen] = React.useState(false);

  const handleRedirect = () => {
    window.location.href = '/new-page';  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>{content}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRedirect} color="primary">
          Go to travel plan!
        </Button>
        
      </DialogActions>
    </Dialog>
  );
}

export default PopupComponent;
