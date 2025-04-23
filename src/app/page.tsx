import Header from '@/components/index/Header';
import Stacks from '@/components/index/Stacks';
import WorkExperience from '@/components/index/WorkExperience';
import FeaturedProjects from '@/components/index/FeaturedProjects';

export default function Home() {
    return (
        <>
        <Header />
        <WorkExperience />
        <FeaturedProjects />
        <Stacks />
        </>
    )
}