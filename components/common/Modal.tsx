import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
};

export default function ({ title, isOpen, closeModal, children }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[200]' onClose={closeModal}>
        <div className='fixed inset-0 bg-gray-400/60 overflow-y-auto scrollbar-hide'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            leave='ease-in-out duration-500'
            enterFrom='opacity-0 -right-[1200px]'
            enterTo='opacity-100 right-0'
            leaveFrom='opacity-100 right-0'
            leaveTo='opacity-0 -right-[600px]'
          >
            <Dialog.Panel
              className='absolute flex flex-col h-full right-0 w-[600px] 
                transform overflow-hidden
               bg-white p-6 text-left align-middle shadow-xl transition-all'
            >
              <h2 className='text-[1.25rem] font-bold text-[#0d1626]'>
                {title.toUpperCase()}
                <XMarkIcon
                  onClick={closeModal}
                  className='h-8 w-8 absolute top-[1.25rem] right-[1rem] cursor-pointer'
                />
              </h2>
              <div className='divider' />
              <div className='h-full w-full'>{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
