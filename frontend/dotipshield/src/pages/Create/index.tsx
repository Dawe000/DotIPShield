import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import UploadButton from '../../components/uploadbutton';
import { init } from 'next/dist/compiled/webpack/webpack';
import React from 'react';
import { WagmiContext } from 'wagmi';
import { readContract, writeContract } from 'viem/actions';
import {registrationABI, registrationAddress} from '../../Constants/config'
const { Web3 } = require('web3');

const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network'); 
const registrationContract = new web3.eth.Contract(registrationABI, registrationAddress);
registrationContract.handleRevert = true;

import { Component } from 'react';

class Create extends Component {

  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      ips: []
    };
  }

  async init() {
    try {
      const ips = await registrationContract.methods.getAllIPs().call();
      this.setState({ ips });
      console.log(ips);
    } catch (error) {
      console.error("Error fetching IPs", error);
    }
  }

  async submit(event){
    event.preventDefault();
    alert(event.target.ipfs.value);
  }

  
  

  render() {
    return (
      <div>
        <Header/>
        <p>View page</p>
        <button onClick={this.init}>clickme</button>
        <div className="flex">
        <form className="flex flex-col" onSubmit={this.submit}>
      <label htmlFor="ipfs" className="mb-2 italic">ipfs</label>
      <input
        className="mb-4 border-b-2"
        id="ipfs"
        name="ipfs"
        type="text"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    <UploadButton/>;
          </div>
        </div>
        
    );
  }
}

export default Create;