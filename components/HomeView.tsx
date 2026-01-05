
import React from 'react';
import ExpertCard from './ExpertCard';
import PromoBanner from './PromoBanner';
import DashboardGrid from './DashboardGrid';
import AskBar from './AskBar';
import SuggestionRail from './SuggestionRail';

interface Props {
  onOpenExperts?: () => void;
}

const HomeView: React.FC<Props> = ({ onOpenExperts }) => {
  return (
    <div className="pt-4 pb-32">
       {/* Expert Profile Card */}
       <ExpertCard onClick={onOpenExperts} />

       {/* Dynamic Suggestion Rail */}
       <SuggestionRail />

       {/* Banner */}
       <PromoBanner />

       {/* Functional Grid */}
       <DashboardGrid />

       {/* Floating Input Section (Sticky Bottom) */}
       <AskBar />
    </div>
  );
};

export default HomeView;
