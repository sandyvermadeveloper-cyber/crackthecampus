import { SITE_LINKS } from '@/lib/links';

export const PROMO_BANNER = {
  text: 'Summer coupon — Get your discount now.',
  ctaText: 'Claim on pricing',
  ctaHref: SITE_LINKS.pricing,
};

export const NAV_LINKS = [
  { label: 'Institution', href: SITE_LINKS.institution },
  { label: 'Explore', href: SITE_LINKS.explore },
  { label: 'Pricing', href: SITE_LINKS.pricing },
  { label: 'Download', href: SITE_LINKS.download },
];

export const NAV_ACTIONS = [
  { label: 'Signup', href: SITE_LINKS.signup, variant: 'ghost' },
  { label: 'Contact', href: SITE_LINKS.contact, variant: 'ghost' },
  { label: 'Login', href: SITE_LINKS.login, variant: 'primary' },
];

export const HERO_CONTENT = {
  badge: 'Campus-to-Career Transformation',
  heading: 'Your Fast Track to Top Placements.',
  subtitles: [
    'Upskill with industry-expert courses and master Corporate Pathways built for your dream companies.',
    'Build a CTC Score that gets you noticed by top recruiters.',
  ],
  primaryCta: {
    label: 'Start Upskilling',
    href: SITE_LINKS.explore,
  },
  secondaryCta: {
    label: 'Get Started',
    href: SITE_LINKS.signup,
  },
  highlights: [
    { value: 'AI-Proctored', label: 'Pro-Suite Assessments' },
    { value: 'Recruiter-Trusted', label: 'CTC Score Credential' },
    { value: 'Free Student Access', label: 'Learning & Practice' },
  ],
};

export const TRUSTED_COMPANIES_ROW1 = [
  {
    name: 'SAP',
    color: '#0FAAFF',
    viewBox: '0 0 24 24',
    path: 'M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z',
  },
  {
    name: 'Google',
    color: '#4285F4',
    viewBox: '0 0 24 24',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  },
  {
    name: 'Accenture',
    color: '#A100FF',
    viewBox: '0 0 24 24',
    path: 'm.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z',
  },
  {
    name: 'Tata Consultancy Services',
    color: '#EE3984',
    viewBox: '0 0 24 24',
    path: 'M24 16.262c0-1.305-.522-2.174-1.827-3.088l-1.785-1.24c-.033-.022-.06-.045-.092-.068-.629-.473-.91-.912-.91-1.43 0-.696.567-1.13 1.371-1.13 1.022 0 1.503.477 2.111.477.479 0 .805-.326.805-.804 0-.348-.174-.631-.631-.848-.718-.348-1.503-.48-2.35-.48-.892 0-1.676.262-2.241.697a.984.984 0 0 0 0-.001 3.64 3.64 0 0 0-.326.283l-.008.01c-.65.695-1.19 1.714-1.623 3.145l-.501 1.652c-.893 2.912-2.306 4.304-4.504 4.304-2.415 0-3.938-1.675-3.938-4.153v.026-.025c0-2.468 1.509-4.159 3.69-4.174l.03-.002a4.857 4.857 0 0 1 2.089.457c.282.13.522.174.74.174.1 0 .192-.017.279-.041.362-.103.592-.408.592-.83 0-.326-.196-.653-.653-.87-.827-.414-1.894-.653-3.046-.653-.86 0-1.653.152-2.359.436-2.117.851-3.452 2.886-3.452 5.545l.002-.024-.001.024c0 .931.169 1.783.479 2.536-.452.985-1.143 1.509-2.046 1.509-1.087 0-1.804-.63-1.806-2.06V9.477h2.546c.588 0 .979-.348.979-.848s-.39-.848-.98-.848H2.09V5.563c0-.653-.435-1.088-1.044-1.088C.435 4.475 0 4.911 0 5.563v10.285c0 2.393 1.37 3.655 3.7 3.655.486.001.97-.08 1.43-.24h.005a3.49 3.49 0 0 0 1.81-1.514c1.034 1.117 2.565 1.775 4.48 1.775.999 0 1.868-.195 2.65-.607h.003c1.588-.827 2.72-2.502 3.503-5.068l.457-1.5a2.984 2.984 0 0 1-.162-.234c.308.492.785.953 1.468 1.43l1.631 1.13c.244.17.463.34.668.51.289.322.378.67.378 1.078 0 .935-.74 1.566-1.807 1.566-1.022 0-1.893-.522-2.371-.522s-.806.325-.806.804c0 .348.174.63.632.848.631.304 1.653.566 2.567.566 1.153 0 2.111-.348 2.785-.957a1.59 1.59 0 0 0 .156-.161A3.104 3.104 0 0 0 24 16.262z',
  },
  {
    name: 'Infosys',
    color: '#007CC3',
    viewBox: '0 0 24 24',
    path: 'M23.2734 7.5703c-.3984 0-.7246.3282-.7246.7266 0 .4013.3262.7246.7246.7246.3982 0 .7266-.3233.7266-.7246 0-.3984-.3284-.7266-.7266-.7266zm0 .1074c.3395 0 .6192.2795.6192.6192 0 .3396-.2797.6172-.6192.6172-.3397 0-.6171-.2776-.6171-.6172 0-.3397.2774-.6192.6171-.6192zm-15.1367.0547c-.9001 0-1.549.5917-1.6387 1.6406h-.6953v.5215h.6856c.0028 1.6664-.002 3.334-.002 4.998h.7774c-.0022-1.6659-.002-3.3319-.002-4.998h1.748c-.646.5242-1.0663 1.3739-1.0663 2.334 0 1.593 1.1564 2.8848 2.582 2.8848 1.4258 0 2.582-1.2918 2.582-2.8848 0-.1896-.0174-.3753-.0488-.5547.2565.4131.7488.6133 1.4082.8985.7784.329 1.2129.6165 1.2129 1.1074 0 .5885-.556.8955-1.1817.8906-.611 0-1.0883-.249-1.6191-.7305v.9239c.3239.2088.8256.3281 1.3691.3281.6844-.0023 2.0918-.249 2.0918-1.6758-.0044-.8557-.715-1.2239-1.4863-1.5586-.9383-.4653-1.2965-.5629-1.2871-1.0957 0-.7088.6178-.9219 1.0996-.9219.2099 0 .3891.0293.5586.086.3163.1194.4209.3553.5332.6113.5283 1.2356 1.0344 2.4811 1.5488 3.7227-.2464.5637-.526 1.1519-.7168 1.5273l-.0039.0098-.1601.2969-.1797.336h.7617c.3322-.7342 1.7436-4.1688 2.0469-4.9083.1995.533.6857.7467 1.4297 1.0684.7783.329 1.2148.6166 1.2148 1.1074 0 .5886-.5562.8936-1.1816.8887-.6348 0-1.1257-.2685-1.6817-.7871l-.0507-.041v.9413c.3115.259.8713.4102 1.4824.4102.6844-.0022 2.0918-.249 2.0918-1.6758-.0042-.8557-.7151-1.2258-1.4863-1.5605-.9384-.4654-1.2593-.563-1.25-1.0957 0-.709.5787-.9219 1.0605-.9219.5483 0 .8958.2037 1.379.5547V9.584c-.3923-.1381-.7212-.1915-1.1642-.1895-.8912-.0018-1.6966.3234-1.9004 1.0762l-1.1054 2.7344-.1153.3437-.1015-.3437c-.5022-1.2089-.9934-2.4236-1.4863-3.6309-.3154-.0828-.8307-.201-1.1934-.1953-.0377-.0007-.0758-.0002-.1152 0-1.0302-.002-2.0235.4332-2.0235 1.457 0 .0596.0022.1155.006.17-.412-.9813-1.3036-1.6602-2.338-1.6602-.1245 0-.2472.0085-.3672.0273H7.254c-.1194-.733.2228-1.1503.7383-1.1503.6472-.0006.9242.192 1.205.4511 0 0 .0195-.0007.0274 0 .0038-.2457.002-.5318.002-.7949-.185-.0857-.5061-.1465-1.0899-.1465zM0 7.756v7.1367h.8594V7.7559zm23 .1386v.7657h.1387v-.3086h.164l.1192.3086h.1543l-.1407-.3301c.0494-.0248.1329-.0518.1329-.1875 0-.2224-.1673-.248-.3125-.248zm.1387.1328h.1543c.0834 0 .1289.0337.1289.1016 0 .068-.0524.0996-.1172.0996h-.166zM4.1719 9.3555c-.945 0-1.3429.3359-1.6582.6738a.2474.2474 0 00-.0352.0644h-.0078v-.043l-.0098-.623H1.707v5.4649h.7754v-3.9961c.0226-.4905.7134-.9746 1.252-.9746.6477 0 1.1777.4364 1.1777 1.039v3.9317h.7754c-.0019-1.429-.002-2.858-.002-4.2871-.0234-.4835-.6094-1.25-1.5136-1.25zm6.2832.5566c.9741-.0175 1.7825 1.0214 1.8047 2.3184.022 1.297-.7504 2.3614-1.7246 2.3789-.9742.0171-1.7825-1.0195-1.8047-2.3164-.0221-1.2971.7503-2.3634 1.7246-2.3809Z',
  },
  {
    name: 'Wipro',
    color: '#341C53',
    viewBox: '0 0 24 24',
    path: 'M15.5415 12.0352c0-.8754-.69-1.5851-1.541-1.5851-.8513 0-1.5415.7097-1.5415 1.585 0 .8757.6902 1.5854 1.5416 1.5854.851 0 1.541-.7097 1.541-1.5853zm-1.541.837c-.4373 0-.7927-.3755-.7927-.837 0-.4611.3554-.8366.7928-.8366.437 0 .7923.3755.7923.8366 0 .4615-.3554.837-.7923.837zm-9.5842-2.2084l-.9272 2.8733c-.0148.046-.0665.0835-.1152.0835h-.084c-.0484 0-.1064-.0352-.1287-.078l-.95-1.8242-.9496 1.8243c-.0225.0427-.0803.0779-.1289.0779h-.0842c-.0483 0-.1002-.0374-.115-.0835L.006 10.6638c-.0222-.0693.019-.126.0915-.126h.5677c.0483 0 .1002.0379.115.084l.4688 1.452.8047-1.5458c.0223-.0428.0804-.0779.1289-.0779H2.24c.0485 0 .1063.0351.1289.0779l.805 1.5458.4685-1.452c.0148-.0461.0667-.084.1152-.084h.5672c.0727 0 .1138.0567.0915.126zm1.368 2.7367a.1323.1323 0 01-.1321.1322h-.5726a.1321.1321 0 01-.132-.1322v-2.7304c0-.0729.059-.1322.132-.1322h.5726a.1323.1323 0 01.1322.1322v2.7304z',
  },
  {
    name: 'Tata',
    color: '#486AAE',
    viewBox: '0 0 24 24',
    path: 'M9.774 11.568c.193-1.322.168-2.013-1.768-1.906-2.223.124-4.476.265-7.849 1.027A5.63 5.63 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254 1.06 1.144 2.556 2.095 4.326 2.752a15.48 15.48 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-1.026-1.937-.107-1.962.584-1.768 1.906l.046.298c.65 3.848 1.458 7.16 1.598 7.72C20.595 18.508 24 15.516 24 12c0-.443-.054-.88-.157-1.311m-.491-1.324a7.163 7.163 0 0 0-1.14-1.618c-1.06-1.144-2.555-2.095-4.325-2.752-1.784-.662-3.82-1.011-5.887-1.011-2.068 0-4.103.35-5.887 1.01-1.77.658-3.266 1.61-4.326 2.753A7.17 7.17 0 0 0 .648 9.366c2.304-.557 6.245-1.293 9.904-1.37.353-.008.596.105.756.307.196.248.18 1.128.175 1.522l-.104 10.18a18.507 18.507 0 0 0 1.244 0l-.104-10.18c-.005-.394-.02-1.274.175-1.522.16-.202.403-.315.756-.308 3.658.078 7.597.813 9.902 1.37z',
  },
];

export const TRUSTED_COMPANIES_ROW2 = [
  {
    name: 'HP',
    color: '#0096D6',
    viewBox: '0 0 24 24',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 17.5L7.2 6.5h2.2l2.4 11h-2.2zm4.8 0l-2.4-11h2.2l2.4 11h-2.2z',
  },
  {
    name: 'Samsung',
    color: '#1428A0',
    viewBox: '0 0 24 24',
    path: 'M0 8.5v7h24v-7H0zm21.6 5.5h-1.8v-4h1.8v4zm-3.6 0h-2.2v-4h2.2v4zm-4.2 0h-1.8v-4h1.8v4zm-3.6 0H8.4v-4h1.8v4zm-3.6 0H4.8v-4h1.8v4zm-3.6 0H1.2v-4h1.8v4z',
  },
  {
    name: 'PayPal',
    color: '#003087',
    viewBox: '0 0 24 24',
    path: 'M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.762.762 0 0 1 .753-.642h7.007c2.327 0 4.148.6 5.129 1.688.941 1.044 1.157 2.508.641 4.354-.74 2.646-2.585 4.303-5.068 4.303H10.11a.762.762 0 0 0-.752.643l-1.127 7.152a.641.641 0 0 1-.633.528z',
  },
  {
    name: 'Ericsson',
    color: '#002561',
    viewBox: '0 0 24 24',
    path: 'M3 5h18v2.5H3V5zm0 5.75h18v2.5H3v-2.5zm0 5.75h18V19H3v-2.5z',
  },
  {
    name: 'Intel',
    color: '#0068B5',
    viewBox: '0 0 24 24',
    path: 'M5.5 8h2v8h-2V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8zM3 4h18v2H3V4zm0 14h18v2H3v-2z',
  },
  {
    name: 'Meta',
    color: '#0081FB',
    viewBox: '0 0 24 24',
    path: 'M22.5 12c0-2.8-1.5-5.2-3.6-6.5-2.1-1.3-4.7-1.3-6.9 0L7.5 8.3C6 9.3 5 11 5 12.8c0 1.8 1 3.5 2.5 4.5l4.5 2.8c2.2 1.3 4.8 1.3 6.9 0 2.1-1.3 3.6-3.7 3.6-6.5zm-3.5 0c0 1.6-.8 3.1-2.1 3.9-1.3.8-2.9.8-4.2 0L8.2 13.4C7.5 12.9 7 12.1 7 11.2c0-.9.5-1.7 1.2-2.2l4.5-2.5c1.3-.8 2.9-.8 4.2 0 1.3.8 2.1 2.3 2.1 3.9z',
  },
  {
    name: 'Nvidia',
    color: '#76B900',
    viewBox: '0 0 24 24',
    path: 'M3 4h18v16H3V4zm2 2v12h14V6H5zm3 3h8v6H8V9z',
  },
  {
    name: 'Cisco',
    color: '#1BA0D7',
    viewBox: '0 0 24 24',
    path: 'M3 14h2v5H3v-5zm4-4h2v9H7v-9zm4-4h2v13h-2V6zm4 4h2v9h-2v-9zm4 4h2v5h-2v-5z',
  },
  {
    name: 'VMware',
    color: '#60707E',
    viewBox: '0 0 24 24',
    path: 'M2 6h20v12H2V6zm2 2v8h16V8H4z',
  },
  {
    name: 'Dell',
    color: '#007DB8',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-12h2v8H9V8zm4 0h2v8h-2V8z',
  },
];

export const TRUSTED_COMPANIES = [...TRUSTED_COMPANIES_ROW1, ...TRUSTED_COMPANIES_ROW2];

export const ECOSYSTEM_CONTENT = {
  tag: 'Dual-Core Structure',
  title: 'One Ecosystem. Two Ways to Win.',
  subtitle:
    'Start with open-access learning on the web, then prove your skills in a professional hiring environment.',
  cores: [
    {
      id: 'web',
      step: '01 · Web',
      title: 'The Web Hub (Learning & Discovery)',
      subtitle: 'Your Daily Training Ground',
      desc: 'Open access to prepare anytime, anywhere.',
      badge: 'Open Access',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      features: [
        {
          name: 'AI-Assisted Courses',
          detail: 'Upskill with interactive, industry-mapped modules.',
        },
        {
          name: 'Corporate Pathways',
          detail: 'Master the specific requirements for your dream jobs.',
        },
        {
          name: 'AI Resume Builder',
          detail: 'Create a professional, ATS-ready resume in minutes.',
        },
        {
          name: 'Practice Assessments',
          detail: 'Unlimited mock tests to sharpen your skills without the pressure.',
        },
      ],
      ctaLabel: 'Explore Courses & Pathways',
      ctaHref: SITE_LINKS.explore,
      accent: 'from-[#7C3AED]/20 to-[#3B82F6]/10 border-[#7C3AED]/30',
    },
    {
      id: 'software',
      step: '02 · Software',
      title: 'The Pro-Suite (Performance & Hiring)',
      subtitle: 'The Official Hiring Environment',
      desc: 'The software that secures your placement.',
      badge: 'High Integrity',
      badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
      features: [
        {
          name: 'Official Hiring Drives',
          detail: 'Attend actual recruitment assessments for top companies.',
        },
        {
          name: 'Simulated Environments',
          detail: 'Practice in a real, proctored coding and interview setting.',
        },
        {
          name: 'High-Stakes Evaluation',
          detail: 'Complete verified assessments that generate your CTC Score.',
        },
        {
          name: 'Direct Placement Access',
          detail: 'Connect directly with recruiters through official test scores.',
        },
      ],
      ctaLabel: 'Download Software Suite',
      ctaHref: SITE_LINKS.download,
      accent: 'from-[#A855F7]/20 to-[#EC4899]/10 border-[#A855F7]/30',
    },
  ],
};

export const CTC_SCORE_CONTENT = {
  tag: 'The Why',
  title: 'Beyond the Resume: The CTC Score.',
  subtitle:
    'Give recruiters a defensible, institution-grade signal. Web Hub builds the foundation; Pro-Suite verifies performance, rolled into one credential.',
  pillars: [
    {
      title: 'Skills',
      category: 'Web Hub Telemetry',
      desc: 'Capability signal mapped from your Web Hub profile, courses, and pathways.',
      icon: 'brain',
      metric: 'Course Completion & Track Mastery',
      scoreImpact: '+3.0 Pts',
    },
    {
      title: 'Practice',
      category: 'Web Hub Consistency',
      desc: 'Consistency and reps recorded in the Web Hub: mocks, drills, and readiness.',
      icon: 'repeat',
      metric: 'Mock Assessment Speed & Accuracy',
      scoreImpact: '+2.5 Pts',
    },
    {
      title: 'Software Performance',
      category: 'Pro-Suite Verification',
      desc: 'Proctored outcomes and high-stakes results from the Pro-Suite environment.',
      icon: 'shield',
      metric: 'AI-Proctored Test Verification',
      scoreImpact: '+4.5 Pts',
    },
  ],
  scoreCard: {
    sampleScore: '9.2',
    maxScore: '10.0',
    status: 'Verified Placement Ready',
    studentName: 'Ananya S. (B.Tech CS)',
    verifiedDate: '2026 Batch Verified',
  },
};

export const CONTESTS_CONTENT = {
  tag: 'The Monthly Sprint',
  title: 'The Monthly Performance Series.',
  subtitle:
    'Test your growth, compete with your peers, and win rewards while you upskill.',
  desc:
    'Monthly Challenges. Real Rewards. Every month, we launch a new Corporate Pathway contest. Master the specific tech stack, top the leaderboard, and claim your prize.',
  rewardTiers: [
    {
      tier: 'Elite Tier',
      reward: 'Premium tech hardware or course scholarships.',
      badge: 'Top 1%',
      accent: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    },
    {
      tier: 'Growth Tier',
      reward: 'Exclusive access to premium hiring events.',
      badge: 'Top 5%',
      accent: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    },
    {
      tier: 'Participation Tier',
      reward: 'Recognition for all participants in your CTC Score profile.',
      badge: 'All Entrants',
      accent: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
    },
  ],
  liveContest: {
    status: 'COMPLETED CHALLENGE',
    title: 'CORPORATE PATHWAY CTC CONTEST',
    deadline: 'Series window Closed • All deadlines UTC',
    bounties: [
      'Hardware & scholarship pool (Elite)',
      'Premium hiring event passes (Growth)',
      'Profile badge + score visibility (Credential)',
    ],
    leaderboard: [
      { rank: '01', name: 'PRI****YA', pts: '8.0', badge: 'Elite Gold' },
      { rank: '02', name: 'ARJ****AN', pts: '7.8', badge: 'Elite Silver' },
      { rank: '03', name: 'NEH****RI', pts: '7.2', badge: 'Elite Bronze' },
    ],
  },
};

export const INFRASTRUCTURE_CONTENT = {
  tag: 'Institutional Scale',
  title: 'Enterprise-Grade Infrastructure for High-Stakes Placements.',
  subtitle:
    'Powering 1,300+ large-scale candidate drives with 99.9% uptime and zero-latency proctoring.',
  stats: [
    {
      value: '1,300+',
      label: 'Institutional Drives',
      detail: 'Large-scale recruitment assessments conducted seamlessly across India.',
    },
    {
      value: 'Zero-Latency',
      label: 'Proctoring Engine',
      detail: 'AI-driven integrity monitoring running locally with minimal network overhead.',
    },
    {
      value: '99.9%',
      label: 'Uptime Reliability',
      detail: 'Engineered for concurrent peak loads during high-volume placement drives.',
    },
  ],
};

export const FAQ_CONTENT = {
  tag: 'FAQ',
  title: 'Common questions about Crack The Campus',
  subtitle:
    'Crack The Campus (CTC) is India’s campus-to-career platform for engineering students and colleges — combining AI-proctored assessments, structured practice, CTC Score credentialing, and placement opportunities.',
  items: [
    {
      id: 'faq-1',
      question: 'What is Crack The Campus?',
      answer:
        'Crack The Campus (CTC) is India’s campus-to-career platform that helps engineering students prepare for placements through AI-proctored assessments, structured coding and aptitude practice, skill courses, contests, a recruiter-trusted CTC Score, and job opportunities.',
    },
    {
      id: 'faq-2',
      question: 'Who is Crack The Campus for?',
      answer:
        'Crack The Campus is built for engineering students preparing for campus placements and internships, and for colleges that need secure assessments, student performance analytics, and placement-readiness tracking.',
    },
    {
      id: 'faq-3',
      question: 'What is the CTC Score?',
      answer:
        'The CTC Score is a composite placement-readiness credential on Crack The Campus. It reflects a student’s skills, practice consistency, assessment performance, and verified proctored test results — designed to help recruiters quickly identify job-ready candidates.',
    },
    {
      id: 'faq-4',
      question: 'How does Crack The Campus help with campus placements?',
      answer:
        'Students practice aptitude, coding, and technical rounds through timed assessments that mirror real hiring patterns. Colleges can run secure proctored exams, track readiness dashboards, and students can build a CTC Score and apply to opportunities via Job Desk.',
    },
    {
      id: 'faq-5',
      question: 'Does Crack The Campus support aptitude and coding preparation?',
      answer:
        'Yes. The platform covers aptitude, coding, technical preparation, structured learning modules in Skill Center, live contests, archived practice, and AI-guided learning — not coding alone.',
    },
    {
      id: 'faq-6',
      question: 'How are assessments proctored on Crack The Campus?',
      answer:
        'High-stakes assessments run in the Crack The Campus desktop suite (Windows, macOS, Linux) with AI proctoring and integrity monitoring. This provides a secure, controlled environment similar to real company hiring tests.',
    },
    {
      id: 'faq-7',
      question: 'Is there a free plan on Crack The Campus?',
      answer:
        'Yes. Crack The Campus offers a free student plan with no time limit. Students can explore courses, practice, and use core features without a credit card. Paid plans unlock additional premium capabilities.',
    },
    {
      id: 'faq-8',
      question: 'Can colleges and institutions use Crack The Campus?',
      answer:
        'Yes. Institutions get an admin suite for assessment creation, batch management, AI-proctored exams, curriculum enrichment, placement analytics, and student engagement reporting. Visit crackthecampus.com/institution for details.',
    },
    {
      id: 'faq-9',
      question: 'How is Crack The Campus different from generic practice websites?',
      answer:
        'Unlike standalone practice sites, CTC combines structured learning, timed proctored assessments, contests, recruiter-trusted scoring, institutional dashboards, and job-related outcomes in one campus-to-career ecosystem.',
    },
    {
      id: 'faq-10',
      question: 'Where can I download the Crack The Campus software?',
      answer:
        'Download the desktop suite for Windows, macOS, or Linux at crackthecampus.com/download. The software is required for secure proctored assessments.',
    },
  ],
};

export const FOOTER_CONTENT = {
  summary:
    'Campus-to-career infrastructure: Web Hub training, Pro-Suite verification, recruiter-trusted scores.',
  productLinks: [
    { label: 'Explore courses', href: SITE_LINKS.explore },
    { label: 'Download suite', href: SITE_LINKS.download },
    { label: 'Pricing', href: SITE_LINKS.pricing },
    { label: 'Documentation', href: SITE_LINKS.documentation },
    { label: 'Ecosystem', href: SITE_LINKS.ecosystem },
    { label: 'FAQ', href: SITE_LINKS.faq },
  ],
  contact: {
    email: 'info@crackthecampus.com',
    emailHref: SITE_LINKS.email,
    note: 'Partnerships, institutions, and press.',
    address:
      'Ground Floor, ThiDiff Tech Park Metro Station - Patalamma Temple, near Singasandra Aishwarya Crystal Layout, Singasandra Bengaluru, Karnataka 560068',
    mapHref: SITE_LINKS.addressMap,
  },
  copyright: '© 2026 Crack The Campus. All rights reserved.',
  legalLinks: [
    { label: 'Privacy', href: SITE_LINKS.privacy },
    { label: 'Terms', href: SITE_LINKS.terms },
  ],
};
