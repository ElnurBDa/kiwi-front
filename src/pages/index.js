import Head from 'next/head';
import { Box, Card,Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewClaimsPaid } from 'src/sections/overview/overview-claims-paid';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewUrgentMore } from 'src/sections/overview/overview-total-customers';
import { ActivitiesCard } from 'src/sections/overview/overview-progress';
import { Urgent } from 'src/sections/overview/overview-urgent';
import { ChatbotInfo } from 'src/sections/overview/overview-chatbot';
import { FeedbackForm } from 'src/sections/overview/overview-feedback';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard | Kiwi
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            lg={6}
            sm={6}

          >
            <ActivitiesCard/>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={6} // the right
            container
            spacing={3}
          > 
          <Grid
            xs={12}
            sm={12}
            lg={6}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={45.4}
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            lg={6}
          >
            <OverviewUrgentMore
              sx={{ height: '100%' }}
              value="Urgent"
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            lg={6}
          >
            <OverviewClaimsPaid
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="13.3k₼"
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            lg={6}
          >
          <Card sx={{backgroundImage:'url("/assets/kiwi.jpg")',minHeight:"200px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',}}>
          <Typography variant="h5" fontWeight="bold" color="white">
          Kiwi Insurance - Securing Tomorrow, Delivering Today!
          </Typography>
          </Card>
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
            >
            <ChatbotInfo/>
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
            >
            <Urgent/>
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
            >
            <FeedbackForm/>
          </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
