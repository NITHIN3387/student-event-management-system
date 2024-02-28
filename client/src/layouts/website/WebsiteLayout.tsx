"use client"
import { FC, ReactNode, useState } from 'react';
import WebsiteHeader from '@/components/Headers/WebsiteHeader/WebsiteHeader';
import SideNavbar from '@/components/Navbars/SideNavbar/SideNavbar';
import AuthUserProvider from '@/contexts/authUser.context';
import AccessAlertModel from '@/components/Modals/AccessAlertModel/AccessAlertModel';
import IntroLoader from '@/components/Loaders/IntroLoader/IntroLoader';
import './websiteLayout.css';

interface propsType {
  children: ReactNode,
  navList?: {
    label: string;
    icon: JSX.Element;
    link: string;
  }[]
}

const WebsiteLayout: FC<propsType> = ({ children, navList }): JSX.Element => {
  return (
    <AuthUserProvider>
      <div className='grid grid-cols-[auto_1fr] website-container'>
        <div>
          <SideNavbar navList={navList}/>
        </div>

        <div className='flex flex-col max-h-screen'>
          <div>
            <WebsiteHeader />
          </div>

          <div className='bg-[#f0f2f5] p-7 grid overflow-y-scroll h-full'>
            {children}
          </div>
        </div>
      </div>
      <IntroLoader />
      <AccessAlertModel />
    </AuthUserProvider>
  );
};

export default WebsiteLayout;
