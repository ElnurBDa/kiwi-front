import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Card from '@mui/material/Card';

const TextBox = () => (
  <Card
    sx={{
      p: 2,
      borderRadius: '4px',
      marginBottom: '20px',
    }}
  >
  
    <p>The full car insurance in PASHA Insurance includes 3 sections:</p>
    <ul>
      <li>Section 1: Damage or destruction of vehicles (Casco)</li>
      <li>Section 2: Third-party liability</li>
      <li>Section 3: Driver and Passengers Personal Accident insurance</li>
    </ul>
    <p>Our customers have an option to choose one of the above mentioned sections separately.</p>

    <p>Section 1. Damage or destruction of vehicles (CASCO):</p>
    <ul>
      <li>Traffic accident</li>
      <li>Dropped or falling objects</li>
      <li>Illegal actions of the third party</li>
      <li>Theft</li>
      <li>Fire and explosion</li>
      <li>Animals actions</li>
      <li>Natural disasters</li>
    </ul>
    <p>Section 2: Third-party liability. This section covers paying material damage and compensation for body injuries caused to third parties as a result of an insured event.</p>
    <p>Section 3: Driver and Passengers Personal Accident insurance.</p>
    <p>Insurance coverage for section 3 covers the risks of death, total and/or partial disability and injuries to insured persons.</p>
  </Card>
);

function createData(service, free, standard, premium, pashaLadies) {
  return { service, free, standard, premium, pashaLadies };
}

const rows = [
  createData('Taxi service (1)', '-', '-', '14 days', '14 days'),
  createData('Evacuation service (2)', '-', '2 times', '3 times', '2 times'),
  createData('Being exempt from paying the deductible if the insured/policyholder are not at fault in road traffic accident (3)', '+', '+', '+', '+'),
  createData('Partial payment based on the value of the car', '+', '+', '+', '+'),
  createData('Partial payment up to 10 months regardless of the value of the car', '-', '-', '+', '-'),
  createData('Discounts for other types of insurance products', '+', '+', '+', '+'),
  createData('Any driver (4)', '+', '+', '+', '+')
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Additional services and benefits</TableCell>
            <TableCell align="right">Free</TableCell>
            <TableCell align="right">Standard</TableCell>
            <TableCell align="right">Premium</TableCell>
            <TableCell align="right">PASHA Ladies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.service}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.service}
              </TableCell>
              <TableCell align="right">{row.free}</TableCell>
              <TableCell align="right">{row.standard}</TableCell>
              <TableCell align="right">{row.premium}</TableCell>
              <TableCell align="right">{row.pashaLadies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const TextBox2 = () => (
  <Card
    sx={{
      p: 2,
      borderRadius: '4px',
      marginBottom: '20px',
    }}
  >
    <p>(1) The service is available for 14 days with daily limit of 20 AZN. Free taxi rides provided while the car is being repaired in a service station, will be suspended after the repairment. If the value of the damage to the insured car is paid to the beneficiary, after a damage assessment, taxi service will be suspended. Please, call +994502508383 or *0007 to use this service. Taxi service is only available in Baku-Absheron-Khirdalan-Sumgayit. </p>
    <p>(2) Free evacuation of the insured vehicle is provided to the nearest auto service in case of the car breakdown. Free evacuation is applied in case of the impossibility of the car to move for any reasons, and only available in Baku-Absheron, Khirdalan, Sumgait (transportation to the nearest service station). If the cause of car breakdown is not an insurance accident, please call +994502508383 or *0007.</p>
    <p>(3) Deductible is not applied to the loss if insured/policyholder are not at fault in road traffic accident. If the third party involved in the traffic accident cannot be identified, deductible is applied.</p>
    <p>(4) Damage caused by any driver who has the right to drive the car on a legal basis is covered by insurance.</p> <br></br>
    <p>PASHA Ladies package is only applicable to female drivers.</p><br></br>
    <p>Please, note that the benefits will be provided to you as shown on the website.</p>
   </Card>
);


const Page = () => {
  return (
    <>
    <Head>
      <title>
      Claims & Policies | Kiwi
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Claims & Policies
          </Typography>
          <TextBox />
          <BasicTable />
          <TextBox2 />
        </Stack>
      </Container>
    </Box>
    </>
  );
};
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;