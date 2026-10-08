import React from 'react'
import Hero from './Hero'
import Philosophy from './Philosophy'
import PrivateSanctuaries from './PrivateSanctuaries'
import SensoryImmersion from './SensoryImmersion'
import GuestReflections from './GuestReflections'
import EnclaveLocation from './EnclaveLocation'

function Home() {
  return (
    <div>
      <Hero />
      <Philosophy />
      <PrivateSanctuaries /> 
      <SensoryImmersion/>
      <GuestReflections/>
      <EnclaveLocation/>
    </div>
  )
}

export default Home
