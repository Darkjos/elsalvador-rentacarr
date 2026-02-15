import HeroSection from '../components/home/HeroSection';
import QuickSearchSection from '../components/home/QuickSearchSection';
import FeaturedVehiclesSection from '../components/home/FeaturedVehiclesSection';
import FeaturesSection from '../components/home/FeaturesSection';
import { FEATURED_VEHICLES, FEATURES } from '../data/homeData';

const Home = () => {
    return (
        <div className="flex flex-col gap-16 pb-16">
            <HeroSection />
            <QuickSearchSection />
            <FeaturedVehiclesSection vehicles={FEATURED_VEHICLES} />
            <FeaturesSection features={FEATURES} />
        </div>
    );
};

export default Home;

