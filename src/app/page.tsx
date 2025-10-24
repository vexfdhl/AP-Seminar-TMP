import { IntroductionSection } from '@/components/poverty-perspectives/introduction-section';
import { CulturalSocialSection } from '@/components/poverty-perspectives/cultural-social-section';
import { ArtisticPhilosophicalSection } from '@/components/poverty-perspectives/artistic-philosophical-section';
import { FuturisticSection } from '@/components/poverty-perspectives/futuristic-section';
import { EnvironmentalSection } from '@/components/poverty-perspectives/environmental-section';
import { ScientificSection } from '@/components/poverty-perspectives/scientific-section';
import { SolutionsSection } from '@/components/poverty-perspectives/solutions-section';
import { TeamSection } from '@/components/poverty-perspectives/team-section';
import { ReferencesSection } from '@/components/poverty-perspectives/references-section';

export default function Home() {
  return (
    <main>
      <div className="scroll-container">
        <IntroductionSection />
        <CulturalSocialSection />
        <ArtisticPhilosophicalSection />
        <FuturisticSection />
        <EnvironmentalSection />
        <ScientificSection />
        <SolutionsSection />
      </div>
      <TeamSection />
      <ReferencesSection />
    </main>
  );
}
