'use client';
import Banner from '@/components/Banner'
import AboutSection from '@/components/About'
import Classes from '@/components/Classes'
import InstagramPosts from '@/components/InstagramPosts'
import JoinTribe from '@/components/Join'
import SkillsHighlights from '@/components/SkillsHighlights'
import ScrollToTop from "react-scroll-to-top";
export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Classes />
      <SkillsHighlights />
      <InstagramPosts />
      <JoinTribe />
      <ScrollToTop smooth />
    </>
  )
}
