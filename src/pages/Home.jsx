import React from 'react'
import LatestRelease from '../components/latestRelease/LatestRelease'
import MainLayout from '../layouts/MainLayout'
import Welcome from '../components/welcome/Welcome'

export default function Home() {
  return (
    <MainLayout>
        <Welcome/>
        <LatestRelease/>
    </MainLayout>
  )
}
