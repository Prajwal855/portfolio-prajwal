import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalStyles from './styles/GlobalStyles';
import AudioProvider, { useAudio } from  './components/AudioContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import clutchxImage from './assets/clutchx-ui.png';
import contrutcionsiteImage from './assets/construction_site_ops.png';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AppShell = styled.main`
  color: var(--text);
  padding-bottom: 110px;
`;

const Topbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 6vw;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.96) 0%, rgba(10, 10, 10, 0.25) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Brand = styled.a`
  font-size: 18px;
  letter-spacing: 0.2em;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 18px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--muted);

  a:hover {
    color: var(--accent);
  }

  @media (max-width: 940px) {
    display: none;
  }
`;

const Hero = styled.section`
  min-height: 92vh;
  padding: 140px 6vw 60px;
  display: grid;
  align-content: center;
  background:
    linear-gradient(to top, rgba(8, 8, 8, 0.92), rgba(8, 8, 8, 0.32)),
    url('https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=2200&q=80') center/cover no-repeat;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 14px;
  animation: ${reveal} 0.5s ease both;
`;

const HeroTitle = styled.h1`
  font-size: clamp(54px, 12vw, 150px);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  animation: ${reveal} 0.6s ease both;
`;

const HeroMeta = styled.p`
  margin-top: 18px;
  color: #ddd4c9;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(11px, 2vw, 14px);
  animation: ${reveal} 0.8s ease both;
`;

const HeroSummary = styled.p`
  margin-top: 24px;
  max-width: 940px;
  color: var(--muted);
  font-size: clamp(17px, 2.2vw, 23px);
  line-height: 1.36;
  animation: ${reveal} 1s ease both;
`;

const CtaRow = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Button = styled.a<{ $solid?: boolean }>`
  padding: 12px 18px;
  border: 1px solid ${({ $solid }) => ($solid ? 'var(--accent)' : 'var(--line)')};
  background: ${({ $solid }) => ($solid ? 'var(--accent)' : 'transparent')};
  color: ${({ $solid }) => ($solid ? '#0f0f0f' : 'var(--text)')};
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-size: 11px;
  transition: transform 0.18s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ $solid }) => ($solid ? '#e8cf9d' : 'rgba(217, 191, 143, 0.14)')};
  }
`;

const Section = styled.section`
  padding: 92px 6vw;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Label = styled.p`
  color: var(--accent-soft);
  text-transform: uppercase;
  letter-spacing: 0.26em;
  font-size: 12px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(34px, 6vw, 58px);
  font-weight: 600;
  line-height: 1.03;
`;

const Copy = styled.p`
  margin-top: 20px;
  max-width: 1100px;
  color: var(--muted);
  font-size: clamp(17px, 2vw, 22px);
  line-height: 1.38;
`;

const SkillGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.article`
  border: 1px solid var(--line);
  background: linear-gradient(175deg, #161616 0%, #101010 100%);
  padding: 20px;

  h3 {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 15px;
    margin-bottom: 10px;
  }

  p {
    color: var(--muted);
    font-size: 18px;
    line-height: 1.35;
  }
`;

const ExperienceGrid = styled.div`
  margin-top: 24px;
  display: grid;
  gap: 18px;
`;

const ExperienceCard = styled.article`
  border: 1px solid var(--line);
  background: linear-gradient(170deg, #171717 0%, #0f0f0f 100%);
  padding: 24px;

  h3 {
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h4 {
    margin-top: 8px;
    font-size: 17px;
    color: var(--accent);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;

const Meta = styled.p`
  margin-top: 8px;
  color: var(--muted);
  font-size: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const BulletList = styled.ul`
  margin-top: 16px;
  display: grid;
  gap: 10px;

  li {
    color: #c7bfb5;
    font-size: 18px;
    line-height: 1.35;
    position: relative;
    padding-left: 16px;
  }

  li::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: var(--accent);
    position: absolute;
    top: 0.56em;
    left: 0;
  }
`;

const ProjectGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  border: 1px solid var(--line);
  background: linear-gradient(170deg, #171717 0%, #101010 100%);
  padding: 22px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: cover;
  border: 1px solid var(--line);
  margin-bottom: 12px;
`;

const ContactBar = styled.footer`
  padding: 52px 6vw 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  h3 {
    font-size: clamp(34px, 7vw, 64px);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  p {
    color: var(--muted);
    font-size: 18px;
    margin-top: 10px;
    max-width: 920px;
  }
`;

const ContactGrid = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  border: 1px solid var(--line);
  background: linear-gradient(170deg, #171717 0%, #101010 100%);
  padding: 24px;
  min-height: 270px;
`;

const ContactCardTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 14px;
`;

const InfoList = styled.ul`
  display: grid;
  gap: 11px;

  li {
    color: var(--muted);
    font-size: 16px;
    line-height: 1.4;

    a {
      color: var(--text);
      border-bottom: 1px solid rgba(217, 191, 143, 0.4);
    }
  }
`;

const ResumeButton = styled.a`
  margin-top: 20px;
  display: inline-block;
  padding: 11px 16px;
  border: 1px solid var(--accent);
  background: var(--accent);
  color: #101010;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 11px;

  &:hover {
    background: #e8cf9d;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 12px;
`;

const Input = styled.input`
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 12px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--accent-soft);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 12px;
  min-height: 130px;
  font-size: 14px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: var(--accent-soft);
  }
`;

const SubmitButton = styled.button`
  border: 1px solid var(--accent);
  background: var(--accent);
  color: #101010;
  padding: 11px 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background: #e8cf9d;
  }
`;

const GlassBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 50;
  width: min(92vw, 760px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(18, 18, 18, 0.62);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Select = styled.select`
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  padding: 10px 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
`;

const Toggle = styled.button`
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  padding: 10px 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-soft);
  }
`;

const Status = styled.p`
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const AppContent: React.FC = () => {
  const { t } = useTranslation();
  const { audioOn, toggleAudio } = useAudio();
  const { language, setLanguage } = useLanguage();
  const isFr = language === 'fr';
  const isDe = language === 'de';
  const isRu = language === 'ru';
  const isHi = language === 'hi';
  const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xwvnpere';
  type ProjectItem = { title: string; points: string[]; image?: string };

  const skillGroups = [
    { title: isFr ? 'Langages' : 'Languages', content: 'Ruby, Python, JavaScript, TypeScript' },
    { title: isFr ? 'Backend' : 'Backend', content: 'Ruby on Rails, REST APIs, SSO, Wallet Systems, Sidekiq' },
    { title: isFr ? 'Bases de Donnees' : 'Databases', content: 'PostgreSQL, SQL' },
    { title: isFr ? 'Infra / Outils' : 'Infra / Tools', content: 'AWS (EC2, S3, CloudWatch), Docker, Kubernetes, Linux, Jenkins, Git' },
    { title: isFr ? 'Concepts' : 'Concepts', content: isFr ? 'Systemes distribues, conception API, integrations, plateformes config-driven, fiabilite' : 'Distributed Systems, API Design, Integrations, Config-driven Platforms, Reliability' },
  ];

  const experiences = [
    {
      role: 'Senior Engineer (Backend - Ruby on Rails)',
      company: 'Happiest Minds Technologies (Onsite at Razorpay, Engage BU)',
      time: '2024 - Present | Bengaluru, India',
      points: [
        isFr ? 'Responsable backend de plateformes fintech et fidelite pour Audi, Visa, HDFC, Yes Bank et LTFS.' : 'Backend owner for enterprise fintech and loyalty platforms serving Audi, Visa, HDFC, Yes Bank, and LTFS.',
        isFr ? 'Conception d APIs scalables pour SSO, onboarding, creation de wallet, transactions, tableaux de bord, OTP et paiements.' : 'Built scalable APIs for SSO, onboarding, wallet creation, transactions, dashboards, OTP flows, and payments.',
        isFr ? 'Integration de wallets pour debit, credit et reversal avec auditabilite forte.' : 'Integrated wallet systems for debit, credit, and reversal with bank-grade consistency and auditability.',
        isFr ? 'Pilotage de la migration Rails 6.1 vers 7.2 et remediation de 300+ vulnerabilites PCI sur 9+ services.' : 'Led Rails upgrade from 6.1 to 7.2 and helped remediate 300+ PCI vulnerabilities across 9+ services.',
        isFr ? 'Platformisation des remises, inventaires et offres via architecture config-driven.' : 'Platformized discounts, inventory, and offers with config-driven architecture to reduce campaign launch time.',
        isFr ? 'Mise en production de Visa IPL en 2 jours sous forte contrainte de delai.' : 'Delivered Visa IPL production release in 2 days under critical launch timelines.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'CognitiveClouds Software Pvt Ltd',
      time: 'Feb 2022 - 2024 | Bengaluru, India',
      points: [
        isFr ? 'Developpement de backends securises en Ruby on Rails et Python avec authentification, autorisation et RBAC.' : 'Built secure production backend systems in Ruby on Rails and Python with authentication, authorization, and RBAC.',
        isFr ? 'Conception d APIs pour des workflows complexes et integrations tierces.' : 'Designed APIs for complex workflows and third-party integrations across product domains.',
        isFr ? 'Collaboration avec les equipes frontend et produit pour livrer des fonctionnalites fiables.' : 'Collaborated with frontend and product teams to deliver reliable end-to-end features.',
        isFr ? 'Amelioration des workflows de release via Jenkins CI/CD pour reduire l effort manuel.' : 'Improved release workflows through Jenkins CI/CD to reduce manual deployment effort.',
      ],
    },
  ];

  const enterpriseProjects: ProjectItem[] = [
    {
      title: 'Audi Loyalty Program',
      points: [
        isFr ? 'Conception d APIs Poshvine pour SSO, creation utilisateur/wallet, dashboards dealer, solde wallet, paiements et OTP.' : 'Built Poshvine service APIs for SSO login, user and wallet creation, dealer dashboards, wallet balance, payments, and OTP.',
        isFr ? 'Integration avec le service Wallets pour debit, credit et reversal avec auditabilite forte.' : 'Integrated with Wallets service for debit, credit, and reversal with strong auditability guarantees.',
        isFr ? 'Mise en place d une logique transactionnelle robuste pour assurer coherence des soldes et tracabilite complete.' : 'Implemented robust transaction-safe flows to preserve wallet consistency and end-to-end audit trails.',
        isFr ? 'Optimisation des endpoints critiques pour ameliorer les temps de reponse sur les parcours user.' : 'Optimized critical API endpoints to improve response times on high-traffic user journeys.',
      ],
    },
    {
      title: 'PCI-DSS Resolution + Rails Upgrade',
      points: [
        isFr ? 'Contribution a la remediation de 300+ vulnerabilites sur 9+ services pour la conformite PCI.' : 'Contributed to remediation of 300+ vulnerabilities across 9+ services for PCI readiness.',
        isFr ? 'Support de la migration Rails 6.1 vers 7.2 avec deploiements canary securises.' : 'Supported Rails 6.1 to 7.2 migration with safe rollout through canary deployments.',
        isFr ? 'Coordination des tests de non-regression et correction des breaking changes avant rollout complet.' : 'Drove compatibility fixes and non-regression checks to ensure safe production rollout.',
        isFr ? 'Ajout de garde-fous CI/CD pour verification automatique avant deploiements production.' : 'Added CI/CD release gates to automatically validate security and deployment readiness.',
      ],
    },
    {
      title: 'HDFC SI Benefit Fulfillment',
      points: [
        isFr ? 'Ownership complet de la conception a la livraison du produit de fulfilment des benefices abonnement.' : 'Owned end-to-end subscription benefit fulfillment product design and implementation.',
        isFr ? 'Implementation de retry Sidekiq et modelisation parent-enfant des commandes pour une execution fiable.' : 'Implemented Sidekiq retry orchestration and parent-child order modeling for reliable processing.',
        isFr ? 'Reduction des echecs de fulfilment grace a reprise automatique et mecanismes de fallback operationnels.' : 'Reduced failed fulfillment scenarios using automated retries and operational fallback notifications.',
        isFr ? 'Mise en place de monitoring oriente metriques pour suivre les echecs, retries et succes de traitement.' : 'Introduced metric-driven monitoring for failures, retries, and successful fulfillment states.',
      ],
    },
    {
      title: 'Yes Bank Rewards Worker',
      points: [
        isFr ? 'Developpement d un worker de rappel avant confirmation de reservation Airport Transfer.' : 'Built reminder worker for Airport Transfer booking confirmations.',
        isFr ? 'Amelioration de la communication utilisateur et reduction des no-shows via notifications planifiees.' : 'Improved communication reliability and reduced no-shows through scheduled notifications.',
        isFr ? 'Planification precise basee sur fenetres temporelles et etats de reservation en production.' : 'Added time-window based scheduling and booking-state checks for accurate delivery timing.',
        isFr ? 'Renforcement de l idempotence pour eviter les doublons en cas de relance ou d incidents transitoires.' : 'Strengthened idempotency to prevent duplicate notifications during retries and transient failures.',
      ],
    },
    {
      title: 'LTFS Consumer Loyalty',
      points: [
        isFr ? 'Redaction de la specification technique complete: architecture, APIs, modeles de donnees, rollout.' : 'Authored complete technical specification across architecture, APIs, data models, and rollout.',
        isFr ? 'Implementation de l integration SSO et synchronisation wallet-loyalty avec APIs de redemption et releves.' : 'Implemented SSO and wallet-loyalty sync integration with redemption APIs and statements.',
        isFr ? 'Definition claire des contrats API entre domaines loyalty et wallet pour evolutivite long terme.' : 'Defined clear API contracts across loyalty and wallet domains for long-term maintainability.',
        isFr ? 'Clarification des flux de synchronisation inter-systemes pour fiabiliser et reduire les anomalies de donnees.' : 'Clarified cross-system sync flows to improve consistency and reduce data mismatches.',
      ],
    },
    {
      title: 'Visa Programs',
      points: [
        isFr ? 'Ownership de Visa Hajj, Visa IPL et Visa Cambodia de la conception a la production.' : 'Owned Visa Hajj, Visa IPL, and Visa Cambodia delivery from design to production.',
        isFr ? 'Platformisation des offres et integration inventaire fournisseur avec gamification basee sur les depenses.' : 'Platformized offers and integrated vendor inventory; implemented spend-based gamification.',
        isFr ? 'Execution sous forte contrainte de delais avec releases rapides et stabilisation post-production.' : 'Executed under aggressive timelines with fast releases and immediate post-production stabilization.',
        isFr ? 'Coordination avec equipes produit, QA et partenaires pour des livraisons multi-domaine sans blocage.' : 'Coordinated product, QA, and partner teams for unblockable multi-domain launches.',
      ],
    },
  ];

  const personalProjects: ProjectItem[] = [
    {
      title: 'ClutchX - Social Media App',
      image: clutchxImage,
      points: [
        isFr ? 'Application sociale orientee engagement, publication et interactions en temps reel.' : 'Personal project focused on engagement feeds, posting flows, and real-time interactions.',
        isFr ? 'Architecture backend orientee scalabilite pour activite utilisateur, feed et notifications.' : 'Built scalable backend flows for user activity, feed behavior, and notification reliability.',
        isFr ? 'Conception des modeles de donnees pour timeline, reactions, commentaires et recommandations de contenu.' : 'Designed data models for timelines, reactions, comments, and content recommendation signals.',
        isFr ? 'Ajout de modules chats, groupes et events avec traitement asynchrone des notifications et messages.' : 'Implemented chats, groups, and events modules with asynchronous processing for notifications and messaging.',
        isFr ? 'Moteur de recherche sur conversations, channels et profils pour navigation rapide.' : 'Built indexed search across conversations, channels, and profiles for fast navigation.',
        isFr ? 'Deploiement avec conteneurs Docker sur AWS EC2, avec gestion d environnements et supervision CloudWatch.' : 'Deployed ClutchX using Docker containers on AWS EC2 with environment configuration and CloudWatch monitoring.',
        isFr ? 'Pipeline de livraison simplifie avec images Docker versionnees pour des releases reproductibles.' : 'Used versioned Docker images to enable repeatable deployments and safer release rollouts.',
      ],
    },
    {
      title: 'InceptionX - Construction Site Ops',
      image: contrutcionsiteImage,
      points: [
        isFr ? 'Plateforme operationnelle pour chantiers: suivi des taches, coordination terrain et workflows equipes.' : 'Personal project for construction site operations with task tracking and team coordination.',
        isFr ? 'Implementation des APIs et modeles de donnees pour operations quotidiennes, statut de site et reporting.' : 'Implemented APIs and data models for site status, daily workflows, and operations reporting.',
        isFr ? 'Ajout de modules pour affectation des equipes, suivi des jalons et tableaux de bord d avancement.' : 'Added modules for crew assignment, milestone tracking, and progress dashboards.',
        isFr ? 'Conception d un systeme RBAC pour superviseurs, managers de site et executants terrain.' : 'Designed RBAC controls for supervisors, site managers, and field operators.',
        isFr ? 'Mise en place d un journal d activite pour audit, traçabilite et analyse des retards.' : 'Added an operations activity log for auditability, traceability, and delay analysis.',
      ],
    },
  ];

  return (
    <AppShell id="top">
      <Topbar>
        <Brand href="#top">PM</Brand>
        <Nav>
          <a href="#summary">{t('navSummary')}</a>
          <a href="#skills">{t('navSkills')}</a>
          <a href="#experience">{t('navExperience')}</a>
          <a href="#projects">{t('navProjects')}</a>
          <a href="#education">{t('navEducation')}</a>
          <a href="#contact">{t('navContact')}</a>
        </Nav>
      </Topbar>

      <Hero>
        <Eyebrow>
          {isFr
            ? 'Ingenieur Backend'
            : isDe
              ? 'Backend Engineer'
              : isRu
                ? 'Инженер бэкэнда'
                : isHi
                  ? 'बैकएंड इंजीनियर'
                  : 'Backend Engineer'}
        </Eyebrow>
        <HeroTitle>Prajwal M</HeroTitle>
        <HeroMeta>
          +91 9900717474 | Bengaluru, India
        </HeroMeta>
        <HeroSummary>
          {isFr
            ? 'Ingenieur Backend avec plus de 4 ans d experience dans la construction de systemes backend scalables et fiables en Ruby on Rails et PostgreSQL. Actuellement en mission onsite chez Razorpay (Engage BU) sur des plateformes de paiements, wallets, fidelite et rewards pour Audi, Visa, HDFC, Yes Bank et LTFS.'
            : isDe
              ? 'Backend Engineer mit 4+ Jahren Erfahrung im Aufbau skalierbarer, hochzuverlassiger Backend-Systeme mit Ruby on Rails und PostgreSQL. Derzeit onsite bei Razorpay (Engage BU) fur Payments, Wallets, Loyalty und Rewards.'
              : isRu
                ? 'Backend инженер с опытом 4+ года в создании масштабируемых и надежных backend-систем на Ruby on Rails и PostgreSQL. Сейчас работаю onsite в Razorpay (Engage BU) над платформами платежей, кошельков и лояльности.'
                : isHi
                  ? 'Backend Engineer with 4+ years of experience building scalable, high-reliability backend systems using Ruby on Rails and PostgreSQL. Currently working onsite at Razorpay (Engage BU) on payments, wallets, loyalty, and rewards platforms.'
            : 'Backend Engineer with 4+ years of experience building scalable, high-reliability backend systems using Ruby on Rails and PostgreSQL. Currently working onsite at Razorpay (Engage BU) delivering payments, wallets, loyalty, and rewards platforms for enterprise clients including Audi, Visa, HDFC, Yes Bank, and LTFS.'}
        </HeroSummary>
        <CtaRow>
          <Button $solid href="#projects">
            {isFr ? 'Voir Les Projets Cles' : isDe ? 'Projekte Ansehen' : isRu ? 'Смотреть Проекты' : isHi ? 'प्रोजेक्ट्स देखें' : 'View Key Projects'}
          </Button>
          <Button href="https://github.com/Prajwal855" target="_blank" rel="noreferrer">GitHub</Button>
          <Button href="https://www.linkedin.com/in/prajwal-m-30509320b" target="_blank" rel="noreferrer">LinkedIn</Button>
        </CtaRow>
      </Hero>

      <Section id="summary">
        <Label>{isFr ? 'Resume' : isDe ? 'Zusammenfassung' : isRu ? 'Резюме' : isHi ? 'सारांश' : 'Summary'}</Label>
        <Title>{isFr ? 'Ownership backend orientee production avec fiabilite fintech.' : isDe ? 'Production-ready Backend Ownership mit Fintech-Zuverlassigkeit.' : isRu ? 'Надежный backend ownership для продакшена fintech-уровня.' : isHi ? 'Production-ready backend ownership with fintech-grade reliability.' : 'Production-ready backend ownership with fintech-grade reliability.'}</Title>
        <Copy>
          {isFr
            ? 'Expertise en conception API, integrations distribuees, traitements asynchrones, platformisation et ownership end-to-end de l architecture jusqu au rollout. Focus constant sur la vitesse, la qualite et la stabilite operationnelle en production.'
            : 'Strong in API design, distributed integrations, background processing, platformization, and end-to-end ownership from architecture to rollout. Consistently focused on speed, correctness, and operational stability under high-volume production traffic.'}
        </Copy>
      </Section>

      <Section id="skills">
        <Label>{isFr ? 'Competences' : 'Skills'}</Label>
        <Title>{isFr ? 'Capacites principales' : 'Core capabilities'}</Title>
        <SkillGrid>
          {skillGroups.map((item) => (
            <SkillCard key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </SkillCard>
          ))}
        </SkillGrid>
      </Section>

      <Section id="experience">
        <Label>{isFr ? 'Experience' : 'Experience'}</Label>
        <Title>{isFr ? 'Systemes entreprise, ownership de bout en bout.' : 'Enterprise systems, owned end-to-end.'}</Title>
        <ExperienceGrid>
          {experiences.map((item) => (
            <ExperienceCard key={item.role}>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <Meta>{item.time}</Meta>
              <BulletList>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </BulletList>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Section>

      <Section id="projects">
        <Label>{isFr ? 'Projets Cles (Razorpay Engage BU)' : isDe ? 'Schlusselprojekte (Razorpay Engage BU)' : isRu ? 'Ключевые проекты (Razorpay Engage BU)' : isHi ? 'Key Projects (Razorpay Engage BU)' : 'Key Projects (Razorpay Engage BU)'}</Label>
        <Title>{isFr ? 'Livraisons marquantes' : isDe ? 'Ausgewahlte Projekthighlights' : isRu ? 'Выбранные проектные результаты' : isHi ? 'Selected delivery highlights' : 'Selected delivery highlights'}</Title>
        <ProjectGrid>
          {enterpriseProjects.map((project) => (
            <ProjectCard key={project.title}>
              {project.image ? <ProjectImage src={project.image} alt={project.title} /> : null}
              <h3>{project.title}</h3>
              <BulletList>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </BulletList>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>

      {/* <Section id="personal-projects">
        <Label>{isFr ? 'Projets Personnels' : isDe ? 'Personliche Projekte' : isRu ? 'Личные проекты' : isHi ? 'Personal Projects' : 'Personal Projects'}</Label>
        <Title>{isFr ? 'Produits construits personnellement' : isDe ? 'Persoenlich gebaute Produkte' : isRu ? 'Проекты, созданные лично' : isHi ? 'Products built personally' : 'Products built personally'}</Title>
        <ProjectGrid>
          {personalProjects.map((project) => (
            <ProjectCard key={project.title}>
              {project.image ? <ProjectImage src={project.image} alt={project.title} /> : null}
              <h3>{project.title}</h3>
              <BulletList>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </BulletList>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section> */}

      <Section id="education">
        <Label>{isFr ? 'Education' : 'Education'}</Label>
        <Title>{isFr ? 'Bachelor of Engineering' : 'Bachelor of Engineering'}</Title>
        <Copy>
          {isFr ? 'Visvesvaraya Technological University, 2021 | CGPA: 7.0' : 'Visvesvaraya Technological University, 2021 | CGPA: 7.0'}
        </Copy>
      </Section>

      <ContactBar id="contact">
        <h3>{isFr ? 'Contact' : 'Contact'}</h3>
        <p>{isFr ? 'Utilisez le formulaire ou les coordonnees ci-dessous pour me contacter.' : 'Use the form or contact details below to reach out.'}</p>
        <ContactGrid>
          <ContactCard>
            <ContactCardTitle>{isFr ? 'Coordonnees' : 'Contact Details'}</ContactCardTitle>
            <InfoList>
              <li>Email: <a href="mailto:prajwal.mysore0077@gmail.com">prajwal.mysore0077@gmail.com</a></li>
              <li>Phone: <a href="tel:+919900717474">+91 9900717474</a></li>
              <li>GitHub: <a href="https://github.com/Prajwal855" target="_blank" rel="noreferrer">github.com/Prajwal855</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/prajwal-m-30509320b" target="_blank" rel="noreferrer">linkedin.com/in/prajwal-m-30509320b</a></li>
            </InfoList>
            <ResumeButton href={require('./assets/prajwal_resume.pdf')} download>
              Download Resume
            </ResumeButton>
          </ContactCard>

          <ContactCard>
            <ContactCardTitle>{isFr ? 'Envoyer Un Message' : 'Send a Message'}</ContactCardTitle>
            <ContactForm action={formspreeEndpoint} method="POST">
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
              <TextArea name="message" placeholder="Your Message" required />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactCard>
        </ContactGrid>
      </ContactBar>

      <GlassBar>
        <Controls>
          <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="ru">RU</option>
            <option value="hi">HI</option>
          </Select>
          <Toggle onClick={toggleAudio}>{audioOn ? t('audioOn') : t('audioOff')}</Toggle>
        </Controls>
        <Status>{t('language')}: {language.toUpperCase()}</Status>
      </GlassBar>
    </AppShell>
  );
};

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LanguageProvider>
        <AudioProvider>
          <AppContent />
        </AudioProvider>
      </LanguageProvider>
    </>
  );
};

export default App;
