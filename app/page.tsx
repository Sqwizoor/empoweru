'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import HeroSection from '@/components/home-hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <main>
        <section className="flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 pt-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl mb-8">Fostering sustainable growth and development within communities</p>
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            >
              About Us
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base sm:text-lg mb-4">
                  EmpowerU Community Development Institute, originally established as Lindelani Youth Forum (LYF) in 2015, 
                  is a recognized youth development organization based in Lindelani, EThekwini. Our team of young, enthusiastic, 
                  creative, and dynamic professionals is dedicated to addressing the myriad challenges faced by youth in our community.
                </p>
                <p className="text-base sm:text-lg mb-4">
                  Through the creation of empowerment programs, awareness campaigns, capacity-building initiatives, and skills 
                  development activities, EmpowerU strives to benefit young people and foster sustainable community growth.
                </p>
                <p className="text-base sm:text-lg">
                  Our uniqueness lies in our inclusive approach to capacity-building, ensuring that our initiatives are open to 
                  all young people, without limitations on entry or participation. This inclusivity ensures that every individual, 
                  regardless of their background, has the opportunity to develop their skills and contribute to community development.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/hero5.jpg" 
                  alt="EmpowerU team" 
                  width={500} 
                  height={300} 
                  className="rounded-lg shadow-lg w-[90vw]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            >
              Our Programs
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ProgramCard 
                title="Youth Employability Project" 
                description="We aim to equip young people with the skills, resources, and networks needed to excel in the job market. By collaborating with industry leaders and experts, our programs offer tailored training sessions, internships, and mentorship opportunities. Participants also gain access to job fairs, resume-building workshops, and interview preparation sessions to boost their confidence and market readiness."
                image="/img2.jpg"
              />
              <ProgramCard 
                title="Vocational Training" 
                description="Our vocational training initiative focuses on empowering youth with hands-on skills in various trades. Through practical workshops, participants are trained in areas such as carpentry, plumbing, electrical work, and digital skills. This program aims to fill the skills gap in the job market while enabling individuals to start their businesses or join the workforce with confidence."
                image="/img8.jpg"
              />
              <ProgramCard 
                title="Human Rights Education" 
                description="This program is designed to educate youth about their rights and responsibilities as active citizens. Through interactive workshops and role-playing activities, participants learn the importance of advocacy and community involvement. The program also creates platforms for youth to engage in policy discussions and contribute to societal change by championing human rights within their communities."
                image="/img.jpg"
              />
            </div>
          </div>
        </section>

        '<section id="achievements" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            >
              Our Achievements
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              <AchievementCard 
                title="Training and Qualification" 
                description="Through a strategic partnership with Elangeni College, EmpowerU successfully trained 233 young individuals in artisan programs. This initiative not only provided technical skills but also instilled confidence and self-reliance in participants. Many of these graduates have since secured meaningful employment or embarked on entrepreneurial ventures, contributing to economic growth in their communities.

This program reflects our commitment to empowering youth with tangible skills that meet market demands. By equipping participants with specialized training, we aim to address unemployment and create sustainable career paths. These training sessions also foster innovation and problem-solving, critical skills in today’s job market.

Furthermore, the artisan programs focus on inclusivity, ensuring accessibility for youth from diverse backgrounds. The initiative has become a cornerstone of our efforts to uplift the community by enabling self-sufficiency and economic independence." 
                image="/img6.jpg"
              />
              <AchievementCard 
                title="Educational Support" 
                description="EmpowerU has made significant strides in enhancing educational access and quality for underprivileged learners. By donating stationery to 100 learners and providing full school uniforms to 82 learners, we have removed critical barriers to education. These contributions ensure that learners can attend school with dignity and confidence.

Education is a fundamental right, and our support aims to bridge the gap for marginalized communities. These efforts have inspired academic excellence among recipients, fostering a culture of learning and aspiration. Additionally, our team collaborates with schools to identify the most pressing needs and address them effectively.

Beyond material support, we also engage with families to emphasize the importance of education. By creating an ecosystem of encouragement and resourcefulness, we empower both learners and their families to prioritize academic success." 
                image="/img3.jpg"
              />
              <AchievementCard 
                title="Emergency Assistance" 
                description="In times of crisis, EmpowerU has been at the forefront of providing relief and support. During the devastating floods and periods of unrest, we assisted over 200 families by distributing food hampers. This initiative not only addressed immediate needs but also showcased our unwavering commitment to community welfare.

Our emergency assistance programs are designed to provide rapid response in the face of unforeseen challenges. By working closely with local partners and stakeholders, we ensure that aid reaches those who need it most. These efforts have strengthened community resilience and fostered a spirit of unity.

The experiences gained through these initiatives inform our long-term strategies for disaster preparedness. We aim to build robust systems that can mitigate the impact of future crises while empowering communities to recover and thrive." 
                image="/help.jpg"
              />
              <AchievementCard 
                title="Awards and Recognition" 
                description="EmpowerUs dedication to community upliftment has earned us the title of Most Active NPO in the eThekwini North District by the Department of Social Development. This recognition reflects the impact of our programs and the trust we have built within the community.

Our achievements are a testament to the hard work and collaboration of our team, volunteers, and partners. This award highlights our innovative approach to addressing social challenges and our ability to adapt to changing community needs. It also serves as motivation to continue striving for excellence.

Recognition from esteemed organizations validates our efforts and encourages us to expand our reach. By setting benchmarks in community development, we inspire other organizations to adopt sustainable and impactful practices." 
                image="/img4.jpg"
              />
            </div>
          </div>
        </section>'

      </main>
      <Footer />
    </div>
  )
}

function ProgramCard({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="rounded-lg shadow-lg overflow-hidden">
        <Image src={image} alt={title} width={400} height={200} className="w-full h-68 object-cover" />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function AchievementCard({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <Image src={image} alt={title} width={400} height={200} className="rounded-lg w-full h-68 object-cover" />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
