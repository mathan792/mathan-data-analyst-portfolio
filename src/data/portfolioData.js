// EDIT THIS FILE to change site content. Empty strings/arrays are hidden in the UI.
const D = {
  name: 'MATHAN M', tagline: 'Turning Data Into Decisions', title: 'Power BI Developer | Data Analyst',
  about: 'Power BI Developer | Data Analyst focused on building data-driven reporting and analytics solutions.',
  email: 'nithishmathan792@gmail.com', phone: '+91 6382974371', phoneHref: '+916382974371',
  linkedin: 'https://www.linkedin.com/in/mathan-m-powerbi/',
  education: {degree: 'B.E. Computer Science', school: 'Loyola Institute of Technology and Science', year: '2021', place: 'Nagercoil'},
  resume: {path: '/resume.pdf'},
  formEndpoint: 'https://formspree.io/f/moevbgqq', // replace with your free Formspree/Web3Forms/Getform endpoint
  avatar: { // put optimized files in public/assets/avatar/. Missing files fall back to an MM panel.
    alt: 'Mathan M, Power BI Developer, in a dark blazer and white shirt',
    desktop: {avif: '', webp: '/assets/avatar/avatar-desktop.webp'},
    mobile: {avif: '', webp: '/assets/avatar/avatar-mobile.webp', fallback: '/assets/avatar/avatar-mobile.webp'},
    video: '/assets/avatar/intro.mp4', poster: '/assets/avatar/intro-poster.jpg' // desktop-only intro clip; set video '' to disable. avif '' = skip AVIF
  },
  nav: [['home','Home'],['about','About'],['skills','Technical Skills'],['experience','Experience'],['projects','Key Projects'],['resume','Resume'],['contact','Contact']],
  primarySkills: [
    {name:'Power BI', icon:'bi', desc:'Reports and dashboards for business users.'},
    {name:'DAX', icon:'sigma', desc:'Measures and calculations for the data model.'},
    {name:'Power Query', icon:'filter', desc:'Data shaping and transformation.'},
    {name:'SQL', icon:'db', desc:'Querying and preparing source data.'},
    {name:'RLS', icon:'shield', desc:'Row-level security for controlled data access.'},
    {name:'Data Model', icon:'net', desc:'Relationships and structure behind reports.'},
    {name:'Azure SQL', icon:'cloud', desc:'Cloud-hosted relational data.'},
    {name:'Fabric Deployment Pipeline', icon:'git', desc:'Promoting content across environments.'}],
  secondarySkills: ['SharePoint','Excel','DB2','IBM DataStage (ETL)','Snowflake'],
    skillLevels: [
    {name: 'Power BI', level: '95'},
    {name: 'DAX', level: '80'},
    {name: 'Power Query', level: '95'},
    {name: 'SQL', level: '70'},
    {name: 'RLS', level: '90'},
    {name: 'Data Model', level: '80'},
    {name: 'Fabric', level: '50'}],
    stats: [
    {icon: 'calendar', value: '5', label: 'Years Experience'},
    {icon: 'folder', value: '6+', label: 'Projects Completed'},
    {icon: 'smile', value: '8', label: 'Happy Clients'},
    {icon: 'trophy', value: '100%', label: 'Client Satisfaction'}],
  experience: [
    {role:'Power BI Developer', company:'Alpharithm Technologies pvt ltd', dates:'Apr 2022 – Present',
     responsibilities: ['Designed and maintained 6 enterprise Power BI dashboards for Pharma and GBS teams, using DAX, Power Query, SQL and data models.',
                        'Cut dashboard refresh time from over 10 minutes to under 5 through incremental refresh and DAX/SQL optimization.',
                        'Implemented dynamic Row-Level Security across 5 roles, 9 regions and 551 users.',
                        'Built a Power BI Service scorecard matrix that consolidates employee performance and activity data, adopted as the clients standard reporting approach.',
                        'Automated daily sales report distribution with Power Automate.',
                        'Built star-schema models on Azure SQL Database and SQL Server, including time-intelligence relationships using USERELATIONSHIP.',
                        'Gathered requirements, supported UAT and release management, and provided production support.'], // add your own bullet points
     technologies: ['Power BI','DAX','Power Query','SQL','Azure SQL','Power BI Service','RLS','SharePoint','Power Automate','ADF']},
    {role:'ETL Developer — IBM DataStage', company:'', dates:'Oct 2021 – Mar 2022',
      responsibilities: ['Developed and maintained 8 parallel jobs and 2 sequence jobs in IBM DataStage, loading about 40K records per day into DB2.',
                     'Added validation logic to remove fraudulent and duplicate records before reporting.',
                     'Built Power BI reports from DB2 using Power Query and DAX, and supported requirements and production.']}],
  // per project: context, contribution, technologies:[], impact (only verified, non-confidential facts)
  projects: [
    'Daily Fill Rate Report','HCP Persona RLS','GBS Scorecard Matrix','EM Dashboard','Performance Scorecard','HR Employee Dashboard',
    'Effort Dashboard','Power BI → Outlook CSV/ZIP Automation','NPrinting / Mobcast DSR Automation'
  ].map(name => ({name, context:'', contribution:'', technologies:[], impact:''})),
  initialProjects: 6,
  // Analytics integration point: call your provider's init here later.
  analytics: () => {}
}
export default D
