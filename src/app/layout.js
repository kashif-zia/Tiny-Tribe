import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://recruit.idenbrid.com'),
  title: 'TinyTribe | IDENBRID INC',
  description: ` `,
  keywords: [
    'Human Resources Services',
    'Employee Engagement',
    'HR Solutions',
    'Workforce Management',
    'Talent Acquisition',
    'Performance Management',
    'HR Consulting',
    'Benefits Administration',
    'Payroll Services',
    'Training and Development',
    'Workplace Culture',
    'Compliance Services',
    'HR Technology',
    'Recruitment Strategies',
    'Employee Relations',
    'Diversity and Inclusion',
    'Organizational Development',
    'Remote Work Policies',
    'Retention Strategies',
    'HR Policies',
    'Workplace Diversity',
    'Succession Planning',
    'Hiring Strategies',
    'Employee Feedback',
  ],
  publisher: 'https://www.facebook.com/idenbridinc',
  alternates: {
    canonical: 'https://recruit.idenbrid.com',
  },
  openGraph: {
    title: 'Streamlined HR Services for Success | IDENBRID INC',
    description: `Discover tailored HR solutions designed to maximize productivity and foster a positive workplace culture. Partner with us for comprehensive HR support.`,
    url: 'https://recruit.idenbrid.com',
    siteName: 'Streamlined HR Services for Success | IDENBRID INC',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
