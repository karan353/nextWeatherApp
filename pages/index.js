import Head from "next/head";

import Location from "../components/Location";

import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Location />
      </Container>
    </div>
  );
}
