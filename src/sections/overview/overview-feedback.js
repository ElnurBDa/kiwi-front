import PropTypes from 'prop-types';
import { Card, CardContent, Stack, SvgIcon, Typography, Button, TextField } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat'; // Importing ChatIcon for use

export const FeedbackForm = (props) => {
  const { sx } = props;

  // Function to handle feedback submission
  const handleFeedbackSubmit = () => {
    console.log("Feedback submitted");
    // Add logic to handle feedback submission here
  };

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" gutterBottom>
            Your Feedback
          </Typography>
          <TextField
            label="Share your thoughts"
            multiline
            rows={4}
            placeholder="Enter your feedback here"
            variant="outlined"
            fullWidth
          />
          <Button 
            variant="contained" 
            onClick={handleFeedbackSubmit}
            sx={{
              backgroundColor: 'primary.main',
              marginTop: '15px',
            }}>
            Submit Feedback
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

FeedbackForm.propTypes = {
  sx: PropTypes.object
};
