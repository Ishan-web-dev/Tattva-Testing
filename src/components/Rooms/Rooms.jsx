import React from 'react'
import RoomsPage from './RoomsPage'
import DirectReservationPrivileges from './DirectReservationPrivileges '
import RoomAssistance from './RoomAssistance'

const Rooms = () => {
  return (
    <div>
      <RoomsPage />
      <DirectReservationPrivileges />
      <RoomAssistance/>
    </div>
  )
}

export default Rooms
