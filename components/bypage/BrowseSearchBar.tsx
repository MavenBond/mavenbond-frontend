type Props = {
  value: string;
  onChange: any;
  onClick: any;
};

export default function BrowseSearchBar({ value, onChange, onClick }: Props) {
  return (
    <div className='form-control py-5'>
      <div className='input-group'>
        <input
          type='text'
          placeholder='Search…'
          className='input input-bordered w-full'
          onChange={onChange}
          value={value}
        />
        <button className='btn btn-square' onClick={onClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
