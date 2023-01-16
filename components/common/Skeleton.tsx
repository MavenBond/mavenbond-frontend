import React from "react";

type Props = { num?: number };

const Skeleton = ({ num = 3 }: Props) => {
  return (
    <div className='animate-pulse flex flex-col gap-10 p-8'>
      {[...Array(num).keys()].map((_, idx) => (
        <div key={idx} className='flex-1 space-y-6 py-1'>
          <div className='h-5 bg-slate-300 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-5 bg-slate-300 rounded col-span-2'></div>
              <div className='h-5 bg-slate-300 rounded col-span-1'></div>
            </div>
            <div className='h-5 bg-slate-300 rounded'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
