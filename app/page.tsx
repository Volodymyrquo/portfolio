import { FaHome } from 'react-icons/fa';

import { navItems } from '@/data';

import Clients from '@/components/Clients';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav';

export default function Home() {
    return (
        <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 text-white sm:px-10">
            <div className="w-full max-w-7xl">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
            </div>
        </main>
    );
}
