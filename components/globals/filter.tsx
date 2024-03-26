import React from 'react';
import ButtonRounded from './buttons/buttonRounded';
import ButtonIcon from './buttons/buttonIcon';

export default function Filter() {
  return (
    <div className='block flex-col py-6 sm:flex sm:justify-between lg:flex-row'>
      <div className='mb-4 flex flex-wrap align-middle lg:mb-0'>
        <ButtonRounded
          label='Events'
          icon='calendar'
          iconPos='left'
          rounded='xl'
          active={true}
          styles='mr-2'
        />
        <ButtonRounded
          label='Templates'
          icon='template'
          iconPos='left'
          rounded='xl'
          styles='mr-2'
        />
        <ButtonRounded
          label='Archives'
          icon='archives'
          iconPos='left'
          rounded='xl'
        />
      </div>
      <div className='flex flex-wrap align-middle'>
        <ButtonIcon type='grid' active={true} />

        <ButtonIcon type='list' />

        <ButtonIcon type='sliders' />

        <ButtonRounded
          label='Create New'
          iconPos='right'
          rounded='lg'
          active={true}
          styles='ml-2'
        />
      </div>
    </div>
  );
}
