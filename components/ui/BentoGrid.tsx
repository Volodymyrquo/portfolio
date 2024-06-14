import React from 'react';

import { cn } from '@/lib/utils';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    return (
        <div
            className={cn(
                'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
                className
            )}
            style={{
                background: 'rgb(4,7,29)',
                backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
            }}
        >
            <div
                className={`${id === 6} && 'flex relative h-full justify-center`}
            >
                <div className="absolute h-full w-full">
                    {img && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                'object-cover object-center'
                            )}
                        />
                    )}
                </div>
            </div>

            <div className="transition duration-200 group-hover/bento:translate-x-2">
                <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {title}
                </div>
                <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
