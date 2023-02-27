import { Button, Tooltip } from '@material-tailwind/react';
import Avatar from 'avataaars';
import React from 'react';

function SideProgress({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: any;
  activeTab: any;
}) {
  return (
    <div className='flex  md:w-[20rem] shadow-md backdrop-blur-lg w-[10rem] h-[94]    flex-col bg-black/10 rounded p-2 mt-20'>
      <Button
        className='w-16 flex justify-center'
        onClick={() => setActiveTab('posts')}>
        BACK
      </Button>
      <div className='flex-flex-col bg-white w-full h-full rounded-lg p-4  relative overflow-y-auto scroll-y-auto'>
        <div className='grid grid-flow-row gap-3 justify-center  rounded '>
          <Tooltip content='Delete Conversation'>
            <button className='absolute -bottom-2 -right-2 rounded-full p-2 hidden group-hover:block    bg-red-400'></button>
          </Tooltip>
          <Avatar
            style={{
              width: '80px',
              height: '80px',
            }}
            avatarStyle='Circle'
          />
          <div className='pl-2'>
            <div className='font-semibold'>
              <button>/Button</button>
            </div>
            <div className='text-xs text-gray-600'>Online</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProgress;
