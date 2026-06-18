import { useState, useEffect } from 'react'
import logo from './assets/westleelogo.png'
import nobglogo from './assets/nobglogo.png'
import './App.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#team', label: 'Team' },
    { href: '#funding', label: 'Support' },
    { href: '#scholarship', label: 'Scholarship' },
    { href: '#events', label: 'Events' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src={nobglogo} alt="Western Lee Community Partners" />
        </a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <img src={nobglogo} alt="WLCP Logo" className="hero-logo" />
        <h1>
          Community Partnership for <span className="accent">Western Lee County</span>
        </h1>
        <p>
          Western Lee Community Partners, Inc. is a 501(c)(3) nonprofit advancing civic
          engagement, local events, and community investment across Southwest Virginia.
        </p>
        <div className="hero-buttons">
          <a href="#events" className="btn btn-primary">View Programs</a>
          <a href="#contact" className="btn btn-outline">Get Involved</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">Who We Are</div>
        <h2 className="section-title">Western Lee Community Partners, Inc.</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              WLCP, Inc. is a registered <strong>501(c)(3) nonprofit organization</strong> located in
              Southwest Virginia. Established in 2020, our mission is to enhance community
              engagement and foster local involvement throughout Western Lee County.
            </p>
            <p>
              We are dedicated to organizing and improving community events that bring
              residents and visitors together. WLCP also manages the annual holiday
              decorations in Rose Hill, VA, creating a festive atmosphere during the
              Christmas season.
            </p>
            <p>
              We are deeply appreciative of the ongoing support from local businesses and
              private citizens, which makes all of our initiatives possible.
            </p>
          </div>
          <div className="flagship-events">
            <h3>Flagship Annual Events</h3>
            <ul>
              <li>
                <span className="dot" />
                <span>Western Lee County Christmas Parade<br /><em>First Saturday in December</em></span>
              </li>
              <li>
                <span className="dot" />
                <span>Western Lee County Craft Show<br /><em>First Saturday in May</em></span>
              </li>
              <li>
                <span className="dot" />
                <span>Western Lee County Car, Truck &amp; Bike Show<br /><em>First Saturday in July</em></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Events() {
  const events = [
    {
      title: 'Western Lee County Christmas Parade',
      date: 'Saturday, December 6th, 2025 — 6PM',
      description:
        'The Grand Marshal is thoughtfully chosen by the Parade Committee through a popular vote, with nominations accepted from the community throughout the year.',
      icon: '01',
    },
    {
      title: 'Western Lee County Craft Show',
      date: 'First Saturday in May',
      description:
        'A beloved community gathering celebrating local artisans and crafters from across the region.',
      icon: '02',
    },
    {
      title: 'Western Lee County Car, Truck & Bike Show',
      date: 'First Saturday in July',
      description:
        'A showcase of classic and contemporary vehicles from across the region, bringing enthusiasts and families together.',
      icon: '03',
    },
  ]

  return (
    <section id="events" className="section events dark-section">
      <div className="container">
        <div className="section-label">What&apos;s Happening</div>
        <h2 className="section-title">Events &amp; Projects</h2>
        <div className="events-grid">
          {events.map((event, i) => (
            <div className="event-card" key={i}>
              <div className="event-icon">{event.icon}</div>
              <h3>{event.title}</h3>
              <div className="event-date">{event.date}</div>
              <p>{event.description}</p>
            </div>
          ))}
        </div>

        <div className="project-highlight">
          <div className="project-badge">2025 Featured Project</div>
          <h3>Christmas Light Upgrade &mdash; LED Display Replacements</h3>
          <p>
            Thanks to a generous <strong>$4,000 grant from the Lee County Community Foundation</strong> and
            unwavering community support, WLCP has purchased 12 state-of-the-art LED light displays
            for the 2025 Christmas Holiday Season &mdash; featuring Candy Cane, Heavenly Angel, and
            Fantasy Tree designs.
          </p>
          <p>
            The total estimated cost for full LED replacement is $14,000. WLCP is actively seeking
            donations to offset costs and aims to have all displays updated by the 2026 holiday season.
          </p>
          <a href="#contact" className="btn btn-primary project-btn">
            Support This Project
          </a>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const board = [
    {
      name: 'Sally Chadwell',
      title: 'Interim President & CEO | Chairwoman',
      bio: 'Co-founder of WLCP, Inc. and a retired K-12 educator, Sally brings extensive experience in executive board leadership with a strong focus on fundraising and charitable initiatives. She is an active member of the Lincoln Memorial University Alumni Association.',
    },
    {
      name: 'Debbie McConnell',
      title: 'Interim Executive Secretary & Treasurer',
      bio: 'Debbie joined WLCP, Inc. in 2020 and plays an instrumental role in event planning and coordination, contributing significantly to the organization\'s operational success.',
    },
    {
      name: 'John Glass',
      title: 'Director',
      bio: 'A dedicated Board member since the inaugural year, John brings over 40 years of business ownership experience and more than three decades of service as Commanding Officer with the Thomas Walker Volunteer Fire Department.',
    },
    {
      name: 'Craig Chadwell',
      title: 'Director',
      bio: 'A retired coal miner from Southwest Virginia, Craig remains actively involved in Thomas Walker sports and community service. He joined the WLCP Board of Directors in 2023 and exemplifies a true spirit of service.',
    },
    {
      name: 'Jared Glass',
      title: 'Founder Emeritus',
      bio: 'Founder of WLCP, Inc. and Chairman from 2020 through December 2025. His commitment to community development and innovative ideas paved the way for WLCP\'s continued growth in Western Lee County.',
    },
  ]

  const volunteers = [
    'Mary Russell — Events Coordinator',
    'Shannon Johnson',
    'Denise Huff',
    'Joe Glass, Sr.',
    'Ariel Chadwell',
    'Casey Fee',
    'Jeff Russell',
    'Dalton Campbell',
    'Preston Campbell',
    'Matthew Glass',
    'Jamie Glass',
    'Brittney Tiller',
    'Michael Riebe',
  ]

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-label">Our People</div>
        <h2 className="section-title">Meet Our Team</h2>

        <h3 className="subsection-title">Board of Directors</h3>
        <div className="team-grid">
          {board.map((member, i) => {
            const initials = member.name.split(' ').filter(w => /^[A-Z]/.test(w)).map(w => w[0]).join('').slice(0, 2)
            return (
              <div className="team-card" key={i}>
                <div className="team-initials">{initials}</div>
                <h4>{member.name}</h4>
                <div className="team-title">{member.title}</div>
                <p>{member.bio}</p>
              </div>
            )
          })}
        </div>

        <h3 className="subsection-title volunteer-heading">Volunteer Staff</h3>
        <div className="volunteer-grid">
          {volunteers.map((v, i) => (
            <div className="volunteer-item" key={i}>{v}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Funding() {
  const tiers = [
    { key: 'diamond', label: 'Diamond', amount: '$1,500+', color: '#b9f2ff', sponsors: ['Timberline Barns', 'Timberline Transport'] },
    { key: 'platinum', label: 'Platinum', amount: '$1,000+', color: '#e5e4e2', sponsors: ['Glass Machinery & Excavation, Inc.'] },
    { key: 'gold', label: 'Gold', amount: '$750+', color: '#ffd700', sponsors: ["Grabeel's IGA"] },
    { key: 'silver', label: 'Silver', amount: '$500+', color: '#c0c0c0', sponsors: ['Riggs Oil Company'] },
    { key: 'bronze', label: 'Bronze', amount: '$250+', color: '#cd7f32', sponsors: ['LG&E-KU ODP', 'Rose Hill Pharmacy'] },
  ]

  const paradeSponsors = [
    "Glass Heating & Air, Inc.", "Holding Funeral Home", "H. Fuller Cridlin, Lee County's CWA",
    "Lee Bank & Trust", "Rose Hill Pharmacy", "Riggs Oil Company", "The Dutch Treat",
    "Nathan Cope, Lee County Treasurer", "Chris Jones, Lee County COR",
  ]

  return (
    <section id="funding" className="section funding dark-section">
      <div className="container">
        <div className="section-label">Support Our Mission</div>
        <h2 className="section-title">Funding &amp; Support</h2>
        <p className="funding-intro">
          We are deeply grateful for the generosity and support of our incredible partners whose
          annual contributions enable us to continue our work and serve the community in meaningful ways.
          Together, we are building a brighter future.
        </p>

        <h3 className="subsection-title">2025 Partners</h3>
        <div className="sponsor-tiers">
          {tiers.map(tier => (
            <div className="sponsor-tier" key={tier.key}>
              <div className="tier-badge" style={{ '--tier-color': tier.color }}>
                <span className="tier-label">{tier.label}</span>
                <span className="tier-amount">{tier.amount}</span>
              </div>
              <div className="tier-sponsors">
                {tier.sponsors.map((s, i) => (
                  <span key={i} className="sponsor-name">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">2025 Christmas Parade Sponsors</h3>
        <div className="parade-sponsors">
          {paradeSponsors.map((s, i) => (
            <span key={i} className="parade-sponsor">{s}</span>
          ))}
        </div>

        <div className="grant-box">
          <div className="grant-label">Grant Awarded</div>
          <h3>2025 Lee County Community Foundation Grant</h3>
          <p>
            WLCP has been awarded a <strong>$4,000 grant</strong> to partially fund the Christmas
            Light Replacement Project. The total estimated cost is $14,000 &mdash; we are actively
            seeking donations to help offset the remainder.
          </p>
        </div>

        <div className="donate-box">
          <h3>Become a Supporter</h3>
          <p>
            Your generous support allows us to continue hosting meaningful events and initiatives.
            All contributions are <strong>tax-deductible</strong>, and documentation is available upon request.
          </p>
          <div className="donate-address">
            <strong>Mail donations payable to:</strong><br />
            WLCP, Inc.<br />
            6066 Dr. Thomas Walker Rd.<br />
            Rose Hill, VA 24281
          </div>
          <a href="#contact" className="btn btn-primary">Contact Us to Donate</a>
        </div>
      </div>
    </section>
  )
}

function Scholarship() {
  return (
    <section id="scholarship" className="section scholarship">
      <div className="container">
        <div className="section-label">Education &amp; Future</div>
        <h2 className="section-title">Scholarship Program</h2>
        <div className="scholarship-grid">
          <div className="scholarship-info">
            <p>
              The WLCP Scholarship Program was established in <strong>2025</strong> by the WLCP, Inc.
              Board of Directors to support the educational aspirations of local students. Funded by
              generous donations, the program awards <strong>two $500 scholarships annually</strong> to
              graduating seniors from Thomas Walker High School pursuing college or trade school.
            </p>
            <p>
              Applications are accepted until <strong>March 31st</strong> of each year. Email us with
              &ldquo;Scholarship Request&rdquo; in the subject line for more information or an application.
            </p>
            <p className="pioneer-shout">GO PIONEERS!!</p>
            <a
              href="mailto:westernleecommunitypartners@gmail.com?subject=Scholarship Request"
              className="btn btn-primary"
            >
              Request an Application
            </a>
          </div>
          <div className="scholarship-donate">
            <div className="donate-highlight">
              <div className="donate-icon">ED</div>
              <h3>Support Our Scholarship Fund</h3>
              <p>
                <strong>100% of all scholarship donations</strong> go directly to the college or
                university of each recipient &mdash; your contribution directly impacts students&apos;
                educational journeys.
              </p>
              <p>All donations are tax-deductible. Documentation provided upon request.</p>
              <div className="donate-address">
                <strong>Make checks payable to:</strong><br />
                WLCP, Inc.<br />
                6066 Dr. Thomas Walker Rd.<br />
                Rose Hill, VA 24281
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="section contact dark-section">
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-detail">
              <div className="contact-icon">A</div>
              <div>
                <strong>Address</strong>
                <p>6066 Dr. Thomas Walker Rd.<br />Rose Hill, VA 24281</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">P</div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:2768321671">276-832-1671</a></p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">E</div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:westernleecommunitypartners@gmail.com">westernleecommunitypartners@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-social">
              <a
                href="https://www.facebook.com/wleechristmas/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" type="text" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" type="text" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Doe" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="276-000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <img src={logo} alt="Western Lee Community Partners" className="footer-logo" />
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#funding">Support</a>
            <a href="#scholarship">Scholarship</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-social">
            <a href="https://www.facebook.com/wleechristmas/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <p className="footer-copy">
            &copy; 2024 Western Lee Community Partners, Inc. All Rights Reserved.<br />
            <span>501(c)(3) Nonprofit Organization &mdash; Rose Hill, VA</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Funding />
        <Scholarship />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
