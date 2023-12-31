import PropTypes from 'prop-types';
import ChatBubbleOvalLeftIcon from '@heroicons/react/24/solid/ChatBubbleOvalLeftIcon';
import { Card, CardContent, Stack, SvgIcon, Typography, Button } from '@mui/material';

export const ChatbotInfo = (props) => {
  const { sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" gutterBottom>
            Chatbot Assistance for Urgent Tickets
          </Typography>
          <Typography variant="body1">
            Get instant help with your urgent ticket choices!
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon component={ChatBubbleOvalLeftIcon} />
            <Typography variant="subtitle1">
              Our chatbot is ready to assist you 24/7. Whether you need help choosing between the one-week or two-week urgent ticket, or have any queries about the process, just ask away!
            </Typography>
            <Button variant="contained"
              onClick={() => window.open('http://127.0.0.1:5173/')}
                sx={{
                  backgroundColor: 'success.main',
                  marginTop: '15px',
                }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

ChatbotInfo.propTypes = {
  sx: PropTypes.object
};
