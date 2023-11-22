
import React, { useEffect } from "react";

export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}
import LoadingContainer from '@/components/loadingContainer'

export default async function Home({ params }: any) {


  return (
  <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center justify-center p-8 w-350 h-350">
      <LoadingContainer />
      <p className="text-center mt-5">Loading!</p>
    </div>
  </div>
  )
}