

const StatusCard = ({ text = "", title = "", onClick = undefined }) => {

  return (
    <div
      className='rounded-lg shadow-lg sm:w-[10rem] pt-4 pl-4 cursor-pointer bg-white dark:bg-[#0d204c] hover:bg-gray-100 dark:hover:bg-[#122D6B] border border-gray-200 dark:border-gray-700'
      onClick={onClick}
    >
      <div
        className={`
                text-3xl
                font-medium
                ${title == "Open" && `text-blue-500`}
                ${title == "In Progress" && `text-amber-500`}
                ${title == "Completed" && `text-red-500`}
                ${title == "New Event" && `text-green-500`}
              `}
      >
        {text}
      </div>
      <div className='pt-1 pb-4'>
        <h5 className='text-md font-medium text-gray-700 dark:text-white'>{title}</h5>
      </div>
    </div>
  );
};

export default StatusCard;