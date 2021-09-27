import React from 'react'
import { ClassInfo } from '../../store/dashboard/types';

export type Props = {
  data: ClassInfo
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-2 p-3 space-y-3 border border-gray-400 rounded-md flex flex-wrap w-80">
      <span className="font-bold w-full">Name</span>
      <span className="font-semibold w-full">{data.name}</span>
      <span className="font-bold w-full">Students</span>
      <span className="font-semibold w-full">{data.students}</span>
    </div>
  )
};

export default Card;
