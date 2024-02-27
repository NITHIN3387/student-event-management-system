import AttendenceTable from '@/components/Tables/AttendenceTable/AttendenceTable'
import React, { FC } from 'react'

const page: FC = (): JSX.Element => {
  return (
    <div>
      Attendence
      <div>
        <AttendenceTable />
      </div>
    </div>
  )
}

export default page