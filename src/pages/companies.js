import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
const companies = [
  {
    id: '00a1b2c3d4e5f67890ab1c2d',
    createdAt: '18/11/2023',
    description: 'An official dealer of Kia Motors, offering services related to Kia vehicles',
    logo: '/assets/logos/Kia_Express.jpeg',
    title: 'Kia Express',
    transactions: '1024'
  },
  {
    id: '10a2b3c4d5e6f78901ab2c3d',
    createdAt: '18/11/2023',
    description: 'An official dealer of Mercedes-Benz cars in Azerbaijan, providing specialized services for Mercedes-Benz vehicles',
    logo: '/assets/logos/Autocapital_Azerbaijan.jpeg',
    title: 'Autocapital Azerbaijan',
    transactions: '867'
  },
  {
    id: '30c4d5e6f7a8b9012c3d4e5f',
    createdAt: '18/11/2023',
    description: 'An official car service provides all types of technical service for cars. You can use the tune of your car with the help of professional masters.',
    logo: '/assets/logos/Changan_Auto.jpeg',
    title: 'Changan Auto',
    transactions: '658'
  },
  {
    id: '50e6f7a8b9c0d1234e5f6g7h',
    createdAt: '18/11/2023',
    description: 'Offers a variety of car services, catering to different tastes and requirements​',
    logo: '/assets/logos/Auto_Import.jpeg',
    title: 'Auto Import',
    transactions: '322'
  },
  {
    id: '60f7a8b9c0d1e2345f6g7h8i',
    createdAt: '18/11/2023',
    description: 'The official distributor of Audi cars, likely offering specialized services for Audi vehicles',
    logo: '/assets/logos/Audi_Baki_Merkezi.jpeg',
    title: 'Audi Baku Center',
    transactions: '488'
  },
  {
    id: '70a8b9c0d1e2f3456g7h8i9j',
    createdAt: '18/11/2023',
    description: 'Deals with luxury cars, particularly Aston Martin vehicles',
    logo: '/assets/logos/Aston_Martin_Baku.jpeg',
    title: 'Aston Martin Baku',
    transactions: '401'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
      Service Providers | Kiwi
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
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Service Providers
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                
              </Stack>
            </Stack>
            
          </Stack>
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
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
