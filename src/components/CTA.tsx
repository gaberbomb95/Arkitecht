export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-left fade-up">
            <div className="cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h2>Let&apos;s build something worth shipping</h2>
            <a href="#" className="btn-cyan-lg">START A PROJECT</a>
          </div>
          <div className="cta-dashboard fade-up stagger-2">
            <div className="dash-section">
              <div className="dash-title">Active Projects</div>
              <div className="dash-table-wrap">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th className="col-id">ID</th>
                      <th className="col-name">Project</th>
                      <th className="col-path">Stack</th>
                      <th className="col-sev">Priority</th>
                      <th className="col-status">Status</th>
                      <th className="col-date">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>#12</td><td>Fintech Dashboard — Account Analytics Module</td><td>Next.js / PostgreSQL</td><td><span className="sev-badge sev-critical">Urgent</span></td><td>In Progress</td><td>2026-02-04 14:30</td></tr>
                    <tr><td>#11</td><td>Healthcare Platform — Patient Portal v2</td><td>React / Node / AWS</td><td><span className="sev-badge sev-critical">Urgent</span></td><td>In Review</td><td>2026-02-04 11:22</td></tr>
                    <tr><td>#10</td><td>E-Commerce — Checkout Flow Redesign</td><td>Vue / Stripe / Redis</td><td><span className="sev-badge sev-high">High</span></td><td>In Progress</td><td>2026-02-03 16:45</td></tr>
                    <tr><td>#09</td><td>SaaS — Multi-Tenant Auth System</td><td>TypeScript / Auth0</td><td><span className="sev-badge sev-high">High</span></td><td>Shipped</td><td>2026-02-03 09:18</td></tr>
                    <tr><td>#08</td><td>Logistics — Real-Time Fleet Tracker</td><td>React Native / Socket.io</td><td><span className="sev-badge sev-medium">Standard</span></td><td>In Progress</td><td>2026-02-02 22:07</td></tr>
                    <tr><td>#07</td><td>EdTech — Curriculum Builder MVP</td><td>Next.js / Supabase</td><td><span className="sev-badge sev-medium">Standard</span></td><td>Discovery</td><td>2026-02-02 15:33</td></tr>
                    <tr><td>#06</td><td>Marketplace — Vendor Onboarding API</td><td>Python / FastAPI / GCP</td><td><span className="sev-badge sev-medium">Standard</span></td><td>Shipped</td><td>2026-02-01 18:50</td></tr>
                    <tr><td>#05</td><td>Media — Content Management Platform</td><td>Remix / Prisma / Vercel</td><td><span className="sev-badge sev-medium">Standard</span></td><td>QA</td><td>2026-02-01 10:15</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dash-section">
              <div className="dash-title">Recently Shipped</div>
              <div className="dash-table-wrap">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th className="col-id">ID</th>
                      <th className="col-name">Project</th>
                      <th className="col-path">Stack</th>
                      <th className="col-sev">Priority</th>
                      <th className="col-status">Status</th>
                      <th className="col-date">Delivered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>#09</td><td>SaaS — Multi-Tenant Auth System</td><td>TypeScript / Auth0</td><td><span className="sev-badge sev-high">High</span></td><td>Shipped</td><td>2026-02-03 09:18</td></tr>
                    <tr><td>#06</td><td>Marketplace — Vendor Onboarding API</td><td>Python / FastAPI / GCP</td><td><span className="sev-badge sev-medium">Standard</span></td><td>Shipped</td><td>2026-02-01 18:50</td></tr>
                    <tr><td>#04</td><td>ClimateTech — Carbon Tracking Dashboard</td><td>React / D3 / AWS Lambda</td><td><span className="sev-badge sev-high">High</span></td><td>Shipped</td><td>2026-01-28 14:40</td></tr>
                    <tr><td>#03</td><td>PropTech — Tenant Management Portal</td><td>Next.js / Prisma / Stripe</td><td><span className="sev-badge sev-medium">Standard</span></td><td>Shipped</td><td>2026-01-24 11:05</td></tr>
                    <tr><td>#01</td><td>AI Startup — Model Playground MVP</td><td>React / Python / Docker</td><td><span className="sev-badge sev-critical">Urgent</span></td><td>Shipped</td><td>2026-01-18 16:22</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

