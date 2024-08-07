import Pricing from '@/components/subscriptions/pricing';
import Hero from './_components/hero';
import Features from './_components/features';
import FAQs from './_components/faqs';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQs />
    </>
  );
}
