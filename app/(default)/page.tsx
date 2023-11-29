
import React from "react";
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

const RedirectComponent = ({ externalUrl }: any): null => {
  redirect(externalUrl)
}

export default async function Home({ params }: any) {

  return (
    <RedirectComponent externalUrl={"http://mapadavida.com"}/>
  )
}