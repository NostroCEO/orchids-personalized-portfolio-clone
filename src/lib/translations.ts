export type Locale = 'fr' | 'en';

export const translations = {
  fr: {
    // Presentation
    presentation: {
      tags: ['Social Media', 'Création Vidéo', 'Communication Globale', 'IA & Automatisation', 'Identité Visuelle'],
      bio: 'Salut ! Je suis Umit, Content Manager avec 4+ ans d\'experience en communication 360 (Strategie, Video, Reseaux Sociaux). Anime les reseaux sociaux, produit des videos courtes impactantes et contribue a la strategie de communication globale. Passionne par l\'IA, j\'integre des outils d\'automatisation pour accelerer la production de contenu.',
    },
    // Skills
    skills: {
      title: 'Competences & Expertise',
      categories: {
        ai_skills: 'Competences IA',
        content_brand: 'Contenu & Marque',
        creative_tools: 'Outils Creatifs',
        growth_data: 'Growth & Data',
        certifications: 'Certifications',
        languages: 'Langues',
      },
    },
    // Strategy
    strategy: {
      title: 'Ma Methodologie',
      subtitle: 'Une approche structuree en 4 etapes pour chaque projet de communication.',
      steps: {
        analyse: {
          title: 'Veille & Analyse',
          description: 'Monitoring des tendances, analyse des performances des publications, veille concurrentielle et identification des audiences cibles (institutions, associations, grand public).',
        },
        conception: {
          title: 'Creation de Contenu',
          description: 'Production de visuels (posts sociaux, bannieres, supports de presentation), tournage et montage de videos courtes (formats pedagogiques, interviews, teasers, reels).',
        },
        planification: {
          title: 'Planification & Diffusion',
          description: 'Calendrier editorial multi-plateforme (LinkedIn, X, Instagram), adaptation des messages selon les audiences et programmation des publications.',
        },
        suivi: {
          title: 'Suivi & Optimisation',
          description: 'Analyse des KPIs de chaque canal, reporting regulier, ajustement des formats et amelioration continue de la portee et de l\'engagement.',
        },
      },
    },
    // Expertise
    expertise: {
      title: 'Domaines d\'Expertise',
      subtitle: 'Social media, creation visuelle et communication globale.',
      blocks: {
        social: {
          title: 'Social Media & Community',
          description: 'Animation des reseaux sociaux (LinkedIn, X, Instagram). Creation, planification et publication de contenu. Adaptation des messages selon les audiences.',
        },
        video: {
          title: 'Creation Video & Visuelle',
          description: 'Production de videos courtes (formats pedagogiques, interviews, teasers, reels). Montage axe clarte et impact. Design de visuels pour posts, bannieres et supports.',
        },
        brand: {
          title: 'Identite Visuelle & Editoriale',
          description: 'Contribution a l\'evolution de l\'identite visuelle et editoriale. Conception de chartes graphiques et storytelling de marque.',
        },
        web: {
          title: 'Communication Globale',
          description: 'Contribution a la strategie de communication globale. Mise en valeur des projets, outils et partenariats. Support sur les contenus institutionnels (site web, presentations, evenements).',
        },
        ai: {
          title: 'IA & Automatisation',
          description: 'Workflows IA avec n8n et OpenRouter pour la production de contenu a grande echelle. Vibe Coding avec Claude et Cursor pour le developpement d\'apps et de sites.',
        },
        design: {
          title: 'Design & Crea',
          description: 'Conception graphique avec Figma, Framer et la suite Adobe. Du print au digital, creation de supports de communication impactants.',
        },
      },
    },
    // Soft Skills
    softSkills: {
      title: 'Qualites Professionnelles',
      items: [
        { label: 'Creatif', description: 'Toujours a la recherche de nouveaux formats et approches originales pour engager les audiences.' },
        { label: 'Adaptable', description: 'A l\'aise avec differents publics : institutions, associations, partenaires, grand public.' },
        { label: 'Force de proposition', description: 'Proactif dans la suggestion de formats, d\'ameliorations et de nouvelles idees de contenu.' },
        { label: 'Esprit d\'equipe', description: 'Collaboratif, a l\'ecoute des besoins des equipes projet et communication.' },
        { label: 'Rigoureux', description: 'Attention aux details dans le montage video, le design et le respect des deadlines editoriales.' },
        { label: 'Curieux', description: 'Veille constante sur les tendances social media, les outils IA et les nouveaux formats de contenu.' },
      ],
    },
    // Projects
    projects: {
      title: 'Projets & Realisations',
      subtitle: 'Videos, motion design, rebranding et projets de developpement IA.',
      uploadVideo: 'Telecharger une video ou image',
      clickBrowse: 'Cliquez pour parcourir',
      before: 'AVANT',
      after: 'APRES',
      videoComingSoon: 'Video bientot disponible',
      clickUpload: 'Cliquez pour telecharger',
      items: {
        'groupe-idec': {
          title: 'Groupe IDEC',
          subtitle: 'Communication Interne & Content Factory',
          description: 'Production video de bout en bout (tournage iPhone, montage Premiere Pro, storyboard, interviews), supports print (brochures, PLV), rebranding de l\'Espace Carriere et community management pour la marque employeur.',
        },
        'gridx': {
          title: 'Video pour GridX',
          subtitle: 'Production Video',
          description: 'Video promotionnelle realisee pour GridX : mise en valeur du produit et de la marque a travers des visuels dynamiques, du motion design et du storytelling.',
        },
        'scpf': {
          title: 'Video de Presentation -- SCPF',
          subtitle: 'Motion Design',
          description: 'Video de presentation en motion design pour SCPF. Graphismes animes, transitions fluides et mise en scene professionnelle pour un pitch impactant.',
        },
        'espace-carrier': {
          title: 'Rebrand Espace Carrier',
          subtitle: 'AVANT / APRES -- Groupe IDEC',
          description: 'Refonte visuelle complete d\'Espace Carrier pour le Groupe IDEC. Nouvelle identite de marque, UX/UI repensee et community management pour booster l\'attractivite employeur.',
        },
          'vibe-coding': {
            title: 'IA Vibe Coding',
            subtitle: 'Developpement assiste par IA',
            description: 'Creation d\'applications et de sites web via le Vibe Coding : developpement pilote par des agents IA (Claude, Cursor). Landing page UD Labs, workflows automatises, et ce portfolio lui-meme construit avec l\'IA.',
          },
          'culinea-ios': {
            title: 'Culinea -- App iOS',
            subtitle: 'Application Mobile IA -- Vibe Coding',
            description: 'Application iOS de cuisine construite en Vibe Coding avec des agents IA. Interface mobile native (React Native / Expo), authentification, recherche de recettes et experience utilisateur soignee. Developpee de A a Z avec Claude et Cursor.',
          },
            'diverse': {
            title: 'Projets Divers',
            subtitle: 'Production IA & Experimentations',
            description: 'Production video IA avec Higgsfield Cinema Studio, design graphique, contenu reseaux sociaux et experimentations creatives avec les derniers outils d\'IA generative.',
          },
          'ceram-pierre': {
            title: 'Ceram Pierre',
            subtitle: 'SEO & Growth Strategy',
            description: 'Strategie SEO et creation de contenu pour Ceram Pierre. Optimisation du referencement naturel, propulsant le site au Top 1 Google sur des mots-cles strategiques avec +200% de trafic organique.',
          },
          'dashboard-ia': {
            title: 'Dashboard IA',
            subtitle: 'Outil de Pilotage IA',
            description: 'Conception et developpement d\'un tableau de bord intelligent pour le suivi des performances et l\'automatisation des taches de communication. Integration d\'APIs d\'IA pour l\'analyse de donnees.',
          },
            'linkedin-idec': {
              title: 'LinkedIn -- Groupe IDEC',
              subtitle: 'Strategie Marque Employeur',
              description: 'Gestion et animation de la page LinkedIn du Groupe IDEC. Creation de posts impactants pour la marque employeur, valorisation des projets et engagement de la communaute.',
            },
          },
        },
    // Availability
    availability: {
      availableFor: 'Disponible pour des Opportunites',
      availableNow: 'Disponible',
      openTo: 'Ouvert aux CDI, stages & missions freelance',
      currentStatus: 'Statut de Disponibilite',
      status: 'Statut',
      statusValue: 'Disponible immediatement',
      lookingFor: 'Recherche',
      lookingForValue: 'CDI, Stages & Missions freelance',
      duration: 'Duree',
      durationValue: 'Disponible pour un poste a temps plein immediatement',
      location: 'Localisation',
      locationValue: 'Base a Paris, France',
      techStack: 'Stack technique',
      seeMore: 'Voir plus',
      whatIBring: 'Ce que j\'apporte',
      bringLine1: '4+ ans d\'experience en communication 360 : strategie, video, reseaux sociaux et community management.',
      bringLine2: 'Propulse un site web au Top 1 Google avec +200% de trafic organique (Ceram Pierre).',
      bringLine3: 'Creation de workflows IA (n8n, OpenRouter) et d\'applications pour accelerer la production de contenu.',
      goal: 'Objectif',
      goalText: 'Rejoindre une equipe ou je peux combiner mon expertise en communication (social media, video, strategie) avec l\'innovation IA. Je veux produire du contenu creatif et impactant, animer des communautes engagees et contribuer a des projets qui font la difference.',
      contactMe: 'Me contacter',
    },
    // Resume
    resume: {
      preview: 'Apercu du CV',
      openFull: 'Ouvrir',
      updated: 'Mis a jour',
    },
    // Contact
    contact: {
      title: 'Contacts',
    },
    // Language toggle
    langToggle: 'EN',
  },
  en: {
    presentation: {
      tags: ['Social Media', 'Video Creation', 'Global Communication', 'AI & Automation', 'Visual Identity'],
      bio: 'Hey! I\'m Umit, a Content Manager with 4+ years of experience in 360 communication (Strategy, Video, Social Media). I manage social media channels, produce impactful short-form videos, and contribute to global communication strategy. Passionate about AI, I integrate automation tools to accelerate content production.',
    },
    skills: {
      title: 'Skills & Expertise',
      categories: {
        ai_skills: 'AI Skills',
        content_brand: 'Content & Brand',
        creative_tools: 'Creative Tools',
        growth_data: 'Growth & Data',
        certifications: 'Certifications',
        languages: 'Languages',
      },
    },
    strategy: {
      title: 'My Methodology',
      subtitle: 'A structured 4-step approach for every communication project.',
      steps: {
        analyse: {
          title: 'Watch & Analyze',
          description: 'Trend monitoring, publication performance analysis, competitive watch, and target audience identification (institutions, nonprofits, partners, general public).',
        },
        conception: {
          title: 'Content Creation',
          description: 'Visual asset production (social posts, banners, presentation materials), short video shooting and editing (educational formats, interviews, teasers, reels).',
        },
        planification: {
          title: 'Planning & Distribution',
          description: 'Multi-platform editorial calendar (LinkedIn, X, Instagram), audience-adapted messaging, and publication scheduling.',
        },
        suivi: {
          title: 'Monitoring & Optimization',
          description: 'Per-channel KPI analysis, regular reporting, format adjustments, and continuous improvement of reach and engagement.',
        },
      },
    },
    expertise: {
      title: 'Areas of Expertise',
      subtitle: 'Social media, visual creation, and global communication.',
      blocks: {
        social: {
          title: 'Social Media & Community',
          description: 'Managing and animating social media channels (LinkedIn, X, Instagram). Content creation, planning, publishing, and audience-adapted messaging.',
        },
        video: {
          title: 'Video & Visual Creation',
          description: 'Short-form video production (educational formats, interviews, teasers, reels). Clarity and impact-focused editing. Visual design for posts, banners, and materials.',
        },
        brand: {
          title: 'Visual & Editorial Identity',
          description: 'Contributing to the evolution of visual and editorial identity. Brand guideline design and brand storytelling.',
        },
        web: {
          title: 'Global Communication',
          description: 'Contributing to overall communication strategy. Highlighting projects, tools, and partnerships. Supporting institutional materials (website content, presentations, events).',
        },
        ai: {
          title: 'AI & Automation',
          description: 'AI workflows with n8n and OpenRouter for large-scale content production. Vibe Coding with Claude and Cursor for app and website development.',
        },
        design: {
          title: 'Design & Creative',
          description: 'Graphic design with Figma, Framer, and Adobe Suite. From print to digital, creating impactful communication materials.',
        },
      },
    },
    softSkills: {
      title: 'Professional Qualities',
      items: [
        { label: 'Creative', description: 'Always exploring new formats and original approaches to engage audiences.' },
        { label: 'Adaptable', description: 'Comfortable working with diverse audiences: institutions, nonprofits, partners, general public.' },
        { label: 'Proactive', description: 'Takes initiative in suggesting formats, improvements, and new content ideas.' },
        { label: 'Team Player', description: 'Collaborative, attentive to the needs of project and communication teams.' },
        { label: 'Detail-Oriented', description: 'Meticulous in video editing, design, and meeting editorial deadlines.' },
        { label: 'Curious', description: 'Constant watch on social media trends, AI tools, and new content formats.' },
      ],
    },
    projects: {
      title: 'Projects & Work',
      subtitle: 'Videos, motion design, rebranding, and AI development projects.',
      uploadVideo: 'Upload video or image',
      clickBrowse: 'Click to browse files',
      before: 'BEFORE',
      after: 'AFTER',
      videoComingSoon: 'Video coming soon',
      clickUpload: 'Click to upload',
      items: {
        'groupe-idec': {
          title: 'Groupe IDEC',
          subtitle: 'Internal Comms & Content Factory',
          description: 'End-to-end video production (iPhone shooting, Premiere Pro editing, storyboard, interviews), print materials (brochures, POS displays), Career space rebranding, and community management for the employer brand.',
        },
        'gridx': {
          title: 'Video for GridX',
          subtitle: 'Video Production',
          description: 'Promotional video crafted for GridX: product and brand showcase through dynamic visuals, motion design, and storytelling.',
        },
        'scpf': {
          title: 'Presentation Video -- SCPF',
          subtitle: 'Motion Design',
          description: 'Motion design presentation video for SCPF. Animated graphics, smooth transitions, and professional staging for an impactful pitch.',
        },
        'espace-carrier': {
          title: 'Espace Carrier Rebrand',
          subtitle: 'BEFORE / AFTER -- Groupe IDEC',
          description: 'Complete visual rebrand of Espace Carrier for Groupe IDEC. New brand identity, redesigned UX/UI, and community management to boost employer attractiveness.',
        },
          'vibe-coding': {
            title: 'AI Vibe Coding',
            subtitle: 'AI-Assisted Development',
            description: 'Building apps and websites through Vibe Coding: development driven by AI agents (Claude, Cursor). UD Labs landing page, automated workflows, and this portfolio itself built with AI.',
          },
          'culinea-ios': {
            title: 'Culinea -- iOS App',
            subtitle: 'AI Mobile Application -- Vibe Coding',
            description: 'iOS cooking app built through Vibe Coding with AI agents. Native mobile interface (React Native / Expo), authentication, recipe search, and polished user experience. Built end-to-end with Claude and Cursor.',
          },
            'diverse': {
            title: 'Diverse Projects',
            subtitle: 'AI Production & Experiments',
            description: 'AI video production with Higgsfield Cinema Studio, graphic design, social media content, and creative experiments with the latest generative AI tools.',
          },
          'ceram-pierre': {
            title: 'Ceram Pierre',
            subtitle: 'SEO & Growth Strategy',
            description: 'SEO strategy and content creation for Ceram Pierre. Organic search optimization, propelling the site to Google Top 1 on strategic keywords with +200% organic traffic.',
          },
          'dashboard-ia': {
            title: 'AI Dashboard',
            subtitle: 'AI Management Tool',
            description: 'Design and development of an intelligent dashboard for performance tracking and communication task automation. Integration of AI APIs for data analysis.',
          },
            'linkedin-idec': {
              title: 'LinkedIn -- Groupe IDEC',
              subtitle: 'Employer Brand Strategy',
              description: 'Management and animation of the Groupe IDEC LinkedIn page. Creating impactful employer brand posts, showcasing projects, and engaging the community.',
            },
          },
        },
    availability: {
      availableFor: 'Available for Opportunities',
      availableNow: 'Available Now',
      openTo: 'Open to full-time, internship & freelance roles',
      currentStatus: 'Current Availability Status',
      status: 'Status',
      statusValue: 'Available for immediate start',
      lookingFor: 'Looking for',
      lookingForValue: 'Full-time roles, Internships & Freelance',
      duration: 'Duration',
      durationValue: 'Available for full-time roles starting immediately',
      location: 'Location',
      locationValue: 'Based in Paris, France',
      techStack: 'Tech stack',
      seeMore: 'See more',
      whatIBring: 'What I bring',
      bringLine1: '4+ years of 360 communication experience: strategy, video, social media, and community management.',
      bringLine2: 'Propelled a website to Google Top 1 with +200% organic traffic (Ceram Pierre).',
      bringLine3: 'Building AI workflows (n8n, OpenRouter) and apps to accelerate content production.',
      goal: 'Goal',
      goalText: 'Join a team where I can combine my communication expertise (social media, video, strategy) with AI innovation. I want to produce creative and impactful content, grow engaged communities, and contribute to projects that make a difference.',
      contactMe: 'Contact me',
    },
    resume: {
      preview: 'Resume Preview',
      openFull: 'Open Full',
      updated: 'Updated',
    },
    contact: {
      title: 'Contacts',
    },
    langToggle: 'FR',
  },
} as const;
