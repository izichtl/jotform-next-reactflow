
import React from "react";

export const metadata = {
  title: 'Mapa da Vida',
  description: 'Page description',
}
import FlowContainer from '@/components/FlowContainer'
import MapForm from "@/components/MapForm";
import MapListContainer from "@/components/MapListContainer";

export default async function Home({ params }: any) {
  return (
    <>
      <MapListContainer />
    </>
  )
}
