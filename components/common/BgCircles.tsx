type BgCirclesProps = {
  className?: string;
};

const BgCircles = ({ className = "" }: BgCirclesProps) => {
  return (
    <div
      className={`absolute flex justify-center items-center z-1 opacity-75 animate-breath ${className}`}
    >
      <div className='absolute border-[2px] border-amber-400/75 rounded-full h-[200px] w-[200px] animate-ping' />
      <div className='absolute border border-amber-400/75 rounded-full h-[300px] w-[300px]' />
      <div className='absolute border border-gray-400/75 rounded-full h-[500px] w-[500px]' />
      <div className='absolute border-[2px] border-amber-400/75 rounded-full h-[650px] w-[650px] animate-pulse' />
      <div className='absolute border border-gray-400/75 rounded-full h-[800px] w-[800px]' />
    </div>
  );
};

export default BgCircles;
