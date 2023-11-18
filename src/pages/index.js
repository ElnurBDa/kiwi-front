import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewClaimsPaid } from 'src/sections/overview/overview-claims-paid';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { ActivitiesCard } from 'src/sections/overview/overview-progress';

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
            <OverviewClaimsPaid
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$13.3k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            lg={6}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="3"
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            lg={6}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={12}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
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
