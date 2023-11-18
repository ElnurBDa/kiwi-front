import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import FaceFrownIcon from '@heroicons/react/24/solid/FaceFrownIcon';
import { Avatar, Card,Box, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const Urgent = (props) => {
  const { sx } = props;

  return (
    <Card sx={sx} id='urgentX'>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" gutterBottom>
            Urgent Ticket Options for Expedited Payout Insurance
          </Typography>
          <Typography variant="body1">
            Need your payout insurance processed quickly? Choose from our two urgent ticket options:
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon component={CurrencyDollarIcon} />
            <Typography variant="subtitle1">
              One-Week Urgent Ticket - Get your payout in 1 week with an additional fee of 5% of the total payout.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon component={CurrencyDollarIcon} />
            <Typography variant="subtitle1">
              Two-Week Urgent Ticket - Receive your payout in 2 weeks with an additional fee of 3% of the total payout.
            </Typography>
          </Stack>
          
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon component={FaceFrownIcon} />
            <Typography variant="subtitle1">
            Free Usage Option - This cost-free option may lead to longer waiting periods and potential delays, making it less suitable for urgent financial requirements.
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

Urgent.propTypes = {
  sx: PropTypes.object
};
