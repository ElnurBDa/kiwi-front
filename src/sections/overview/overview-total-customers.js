import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Button, Stack, SvgIcon, Typography } from '@mui/material';


export const OverviewUrgentMore = (props) => {
  const { difference, positive = false, sx, value } = props;

  const focusOnElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={'Urgent'}
        >
          <Stack spacing={1}>
            
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Button variant="contained"
onClick={() => focusOnElement('urgentX')}
            sx={{
              backgroundColor: 'success.main',
              marginTop: '15px',
            }}>
          Learn More!
        </Button>
      </CardContent>
    </Card>
  );
};

OverviewUrgentMore.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object
};

