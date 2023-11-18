import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const VARIANTS_CONFIG = {
	small: {
		headerMb: 0,
		titleMb: 0.5,
		titleVariant: 'h5',
	},
	medium: {
		headerMb: 3,
		titleMb: 1,
		titleVariant: 'h4',
	},
	large: {
		headerMb: 3,
		titleMb: 1,
		titleVariant: 'h3',
	},
};


const ACTIVITIES_DATA = [
  {
      title: 'Claim Initiation',
      status: 'Claim Received',
      description: 'Notification that the claim has been successfully received by the insurance company.',
      period: 'Initial step',
      color: 'primary.main',
      Icon: 'AssignmentTurnedInIcon',
  },
  {
      title: 'Claim Verification',
      status: 'Claim Verification in Progress',
      description: 'The insurance company is verifying the details of the claim, including the validity of the policy and the circumstances of the incident.',
      period: '1-2 days (after initiation)',
      color: 'primary.main',
      Icon: 'SearchIcon',
  },
  {
      title: 'Damage Assessment',
      status: 'Damage Assessment Scheduled/Underway',
      description: 'A professional assessor is scheduled to evaluate the extent of the damage to the vehicle.',
      period: '2-3 days (after verification)',
      color: 'primary.main',
      Icon: 'AssessmentIcon',
  },
  {
      title: 'Assessment Review',
      status: 'Damage Assessment Review',
      description: 'The insurance company reviews the assessor’s report to understand the extent of damage and the estimated cost of repair.',
      period: '3-4 days (after assessment)',
      color: 'primary.main',
      Icon: 'FactCheckIcon',
  },
  {
      title: 'Claim Approval',
      status: 'Claim Under Review for Approval',
      description: 'The claim is being reviewed for approval based on the assessment report and policy terms.',
      period: '2-3 days (after assessment review)',
      color: 'primary.main',
      Icon: 'ThumbsUpDownIcon',
  },
  {
      title: 'Repair Approval',
      status: 'Repair Approval',
      description: 'Notification that the repair work has been approved, detailing the covered repairs.',
      period: '1-2 days (after claim approval)',
      color: '',
      Icon: 'BuildCircleIcon',
  },
  {
      title: 'Vehicle Repair',
      status: 'Vehicle Sent to Service/Repair in Progress',
      description: 'The vehicle is at the service center, and repair work is underway.',
      period: '5-7 days (after repair approval)',
      color: '',
      Icon: 'LocalGarageIcon',
  },
  {
      title: 'Repair Completion',
      status: 'Repair Completion',
      description: 'The vehicle has been repaired and is ready for pickup or has been delivered.',
      period: '2-3 days (after repair start)',
      color: '',
      Icon: 'CheckCircleOutlineIcon',
  },
  {
      title: 'Claim Settlement',
      status: 'Settlement Processing',
      description: 'The insurance company is processing the payment of the claim.',
      period: '3-5 days (after repair completion)',
      color: '',
      Icon: 'PaymentsIcon',
  },
  {
      title: 'Payment Issued',
      status: 'Payment Issued/Claim Settled',
      description: 'Notification that the payment has been issued to either the policyholder or directly to the service provider.',
      period: '1-2 days (after settlement processing)',
      color: '',
      Icon: 'MonetizationOnIcon',
  },
  {
      title: 'Feedback and Closure',
      status: 'Claim Closed – Feedback Requested',
      description: 'The claim has been closed, and feedback is requested from the customer about their experience.',
      period: '1-2 days (after payment issued)',
      color: '',
      Icon: 'FeedbackIcon',
  },
];




const CardHeader = ({ children, title, subtitle, size = 'medium', sx }) => {
	return (
		<Stack
			mb={VARIANTS_CONFIG?.[size]?.headerMb}
			direction="row"
			justifyContent="space-between"
			flexWrap="wrap"
			sx={sx}
		>
			<Stack>
				<Typography
					variant={VARIANTS_CONFIG?.[size]?.titleVariant}
					mb={VARIANTS_CONFIG?.[size]?.titleMb}
					fontWeight="500"
					textTransform="uppercase"
				>
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{subtitle}
				</Typography>
			</Stack>
			{children}
		</Stack>
	);
}





export const ActivitiesCard = () => {
	return (
		<Card sx={{ paddingLeft: '5%',paddingTop: '5%' }}>
			<CardHeader
				title="Insurance Claim Status"
				size="small"
				sx={{
					mb: 2,
				}}
				subtitle="27 days left until completion"
			/>
			<Stack direction="column" spacing={0}>
				{ACTIVITIES_DATA.map((activity, index) => (
					<ActivityListItem key={index} activity={activity} />
				))}
			</Stack>
		</Card>
	);
}

function ActivityListItem({ activity: { title, description, period, color, Icon } }) {
	return (
		<Stack
			direction="row"
			position="relative"
			spacing={2}
			overflow="hidden"
			sx={{
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 25,
					height: '100%',
					borderLeft: 2,
					borderColor: (theme) => theme.palette.border,
				},
			}}
		>
			<Avatar
				sx={{
					bgcolor: color,
					width: 50,
					height: 50,
				}}
			>
				<Icon fontSize="medium" />
			</Avatar>
			<Stack spacing={0.5} pb={2} pt={1}>
				<Typography variant="h6">{title}</Typography>
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
				<Typography variant="caption">{period}</Typography>
			</Stack>
		</Stack>
	);
}

