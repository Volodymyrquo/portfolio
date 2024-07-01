import React from 'react';

import { workExperience } from '@/data';

import { Button } from './ui/MovingBorders';

const Experience = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>
            <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderClassName="1.75rem"
                        className="flex-1 border-neutral-200 text-white dark:border-slate-800"
                    >
                        <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="md:w-20 lg:w-32"
                            />
                        </div>
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl font-bold md:text-2xl">
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
