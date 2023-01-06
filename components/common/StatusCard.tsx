

const StatusCard = ({ text = "", title = "", onClick = undefined }) => {

  return (
    <div
      className='rounded-lg shadow-xl sm:w-[10rem] pt-5 pl-4 cursor-pointer bg-gray-200 dark:bg-[#0d204c] hover:bg-gray-300 dark:hover:bg-[#529ecc]'
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
      <div className='pt-2 pb-2'>
        <h5 className='text-md font-medium text-gray-700 dark:text-white'>{title}</h5>
      </div>
    </div>
  );
};

export default StatusCard;