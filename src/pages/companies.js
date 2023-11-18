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
    description: 'Baku Medical Hospital offers comprehensive medical and emergency services, with state-of-the-art facilities.',
    logo: '/assets/logos/logo-baku-Medical-hospital.png',
    title: 'Baku Medical Hospital',
    transactions: '1024'
  },
  {
    id: '10a2b3c4d5e6f78901ab2c3d',
    createdAt: '18/11/2023',
    description: 'AutoFix Azerbaijan provides quality repair and maintenance services for all types of vehicles.',
    logo: '/assets/logos/logo-autofix.png',
    title: 'AutoFix Azerbaijan',
    transactions: '867'
  },
  {
    id: '20b3c4d5e6f7a8901b2c3d4e',
    createdAt: '18/11/2023',
    description: 'Caspian Life Insurance covers a wide range of life insurance policies to secure your family’s future.',
    logo: '/assets/logos/logo-caspian-life.png',
    title: 'Caspian Life Insurance',
    transactions: '739'
  },
  {
    id: '30c4d5e6f7a8b9012c3d4e5f',
    createdAt: '18/11/2023',
    description: 'AzerHealth Insurance offers health coverage for individuals, families, and companies with extensive care options.',
    logo: '/assets/logos/logo-azerhealth.png',
    title: 'AzerHealth Insurance',
    transactions: '658'
  },
  {
    id: '40d5e6f7a8b9c0123d4e5f6g',
    createdAt: '18/11/2023',
    description: 'QuickService Auto provides fast and reliable auto services and emergency roadside assistance.',
    logo: '/assets/logos/logo-quickservice-auto.png',
    title: 'QuickService Auto',
    transactions: '541'
  },
  {
    id: '50e6f7a8b9c0d1234e5f6g7h',
    createdAt: '18/11/2023',
    description: 'MediAssist Azerbaijan specializes in medical assistance and insurance for travelers and expatriates.',
    logo: '/assets/logos/logo-mediassist.png',
    title: 'MediAssist Azerbaijan',
    transactions: '322'
  },
  {
    id: '60f7a8b9c0d1e2345f6g7h8i',
    createdAt: '18/11/2023',
    description: 'Baku Vehicle Service Center offers comprehensive diagnostics and repair services for modern automobiles.',
    logo: '/assets/logos/logo-baku-vehicle-service.png',
    title: 'Baku Vehicle Service Center',
    transactions: '488'
  },
  {
    id: '70a8b9c0d1e2f3456g7h8i9j',
    createdAt: '18/11/2023',
    description: 'SecureHome Insurance provides property and liability insurance for homeowners and renters.',
    logo: '/assets/logos/logo-securehome.png',
    title: 'SecureHome Insurance',
    transactions: '401'
  },
  {
    id: '89b0c1d2e3f4567h8i9j0k1l',
    createdAt: '18/11/2023',
    description: 'TravelGuard Insurance offers comprehensive travel insurance packages for safe and secure journeys.',
    logo: '/assets/logos/logo-travelguard.png',
    title: 'TravelGuard Insurance',
    transactions: '284'
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
                Companies
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
