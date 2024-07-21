// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>DotIPShield</title>
      </Head>
      <Header />
      <div className="container mx-auto my-8 p-4">
        <h1 className="text-4xl font-bold mb-4">DotIPShield</h1>
        <p className="text-lg">
          Decentralizing Intellectual Property
        </p>
        <p className="text-lg mt-4">
        DotIPShield enables you to record your intellectual property documentation to an immutable, verifiable database to aid with obtaining protection. IP registration and transaction timestamps prove when IP was created. 
        </p>
        <div className="flex justify-center mt-8">
          <Image 
            src="/ipfs.png" // Update with your image path
            alt="Descriptive Alt Text"
            width={200} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-lg shadow-md"
          />
           <p className="text-lg mt-4">
        Integrated with IPFS
        </p>
        </div>
      </div>
    </div>
  );
};

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;