import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import UploadButton from '../../components/uploadbutton';
import { init } from 'next/dist/compiled/webpack/webpack';
import React from 'react';
import { usePrepareTransactionRequest, WagmiContext } from 'wagmi';
import { readContract } from 'viem/actions';
import {registrationABI, registrationAddress} from '../../Constants/config'
import { parseEther } from 'viem'
import { useWaitForTransactionReceipt, WagmiProvider, useReadContract , useAccount, useWriteContract} from 'wagmi';
import { ethers } from 'ethers';
const { Web3 } = require('web3');


const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network'); 

import { Component } from 'react';


class Create extends Component {

  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      ips: []
    };
  }

  




  


  async handleUpload(hash){
    console.log("here");   
    alert("IPFS hash: "+hash)
  }

  
  

  render() {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Upload to IPFS</h2>
      
    <UploadButton onUpload={this.handleUpload}/>
          </div>
        </div>
        
    );
  }
}

export default Create;