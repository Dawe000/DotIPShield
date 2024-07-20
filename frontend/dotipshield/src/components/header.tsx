import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <div className="py-10 bg-blue-300 pl-auto pr-10">
              <div className="flex justify-start">
                <Link
                  className="ml-10 items-center justify-centerflex rounded-full border-black bg-blue-500 px-5 py-1.5 duration-300 ease-in-out placeholder-blue-200 text-lg text-white "
                  href="/">Home</Link>
                <Link
                  className="ml-10 items-center justify-centerflex rounded-full border-black bg-blue-500 px-5 py-1.5 duration-300 ease-in-out placeholder-blue-200 text-lg text-white "
                  href="/View">View</Link><div className="ml-12">
                <Link
                  className="ml-10 items-center justify-centerflex rounded-full border-black bg-blue-500 px-5 py-1.5 duration-300 ease-in-out placeholder-blue-200 text-lg text-white "
                  href="/Create">Create</Link><div className="ml-12"></div>
                <Link
                  className="ml-10 items-center justify-centerflex rounded-full border-black bg-blue-500 px-5 py-1.5 duration-300 ease-in-out placeholder-blue-200 text-lg text-white "
                  href="/Transfer">Transfer</Link><div className="ml-12">
                <ConnectButton/>
              </div>
            </div>
          </div>
        </div>
    </div> 
    )
}