// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../../components/header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-8 p-4">
        <h1 className="text-4xl font-bold mb-4">Project Name</h1>
        <p className="text-lg">
          Decentralizing Intellectual Property
        </p>
        <p className="text-lg mt-4">
          Detailed information about the project goes here. Explain the purpose, goals, and other relevant details that users need to know.
        </p>
      </div>
    </div>
  );
};

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;
