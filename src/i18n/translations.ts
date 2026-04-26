export type Locale = 'tr' | 'en';

export const translations = {
  tr: {
    // Navbar
    nav: {
      home: 'Ana Sayfa',
      features: 'Özellikler',
      demo: 'Demo',
      reports: 'Raporlar',
      team: 'Ekip',
      architecture: 'Mimari',
    },

    // Hero
    hero: {
      badge: 'Senior Year Project — Bilkent Üniversitesi',
      headline1: 'Yapay Zeka Destekli ',
      headlineHighlight: 'Kızgınlık Tespiti',
      headline2: 'Akıllı Çiftçilik İçin',
      subtitle:
        'Bilgisayarlı görü tabanlı sürü yönetim sistemi: kızgınlık tespiti, doğum tahmini ve inek aktivite takibi — giyilebilir sensör gerektirmez.',
      ctaReports: 'Raporları Gör',
      ctaTeam: 'Ekibi Gör',
      ctaDemo: 'Sistem Demosu',
      statMonitoring: 'Gerçek Zamanlı İzleme',
      statMonitoringValue: '24/7',
      statCamera: 'Kamera Tabanlı',
      statCameraValue: 'CV',
      statSensor: 'Giyilebilir Sensör Yok',
      statSensorValue: '0',
      statAnalysis: 'AI Davranış Analizi',
      statAnalysisValue: '120ms',
      mockupLive: 'Canlı kamera akışı',
      mockupAlert: 'Kızgınlık riski',
      mockupAction: 'Mobil uyarı hazır',
      proofLine: 'Gerçek ahır görüntüleriyle test edildi • Gerçek zamanlı çıkarım',
      scroll: 'Kaydır',
    },

    // Problem & Solution
    problemSolution: {
      sectionLabel: 'Neden Moo-tion?',
      sectionTitle1: 'Çözdüğümüz ',
      sectionTitleHighlight: 'Problem',
      problemLabel: 'Problem',
      solutionLabel: 'Çözümümüz',
      problems: [
        {
          title: 'Kaçırılan Kızgınlık',
          desc: 'Görsel gözlem, kızgınlık olaylarının yalnızca %50-60\'ını yakalayarak üreme fırsatlarının kaçırılmasına yol açar.',
        },
        {
          title: 'Maddi Kayıp',
          desc: 'Her kaçırılan döngü, geciken süt üretimi ve ek tohumlama maliyetleri nedeniyle 300-500$+ kayba yol açar.',
        },
        {
          title: 'Yoğun İş Gücü',
          desc: 'Geleneksel izleme 7/24 manuel gözlem gerektirir, bu büyük sürüler için pratik değildir.',
        },
      ],
      solutions: [
        {
          title: 'Model Destekli Tespit',
          desc: 'Bilgisayarlı görü hattı, manuel gözlemde kaçabilecek davranış sinyallerini görünür hale getirir.',
        },
        {
          title: 'Anlık Uyarılar',
          desc: 'Kızgınlık davranışı tespit edildiğinde çiftçilere anında bildirim — gece gündüz.',
        },
        {
          title: 'Non-İnvaziv',
          desc: 'Giyilebilir sensör veya fiziksel temas gerektirmez. Tamamen kamera tabanlı görsel izleme.',
        },
      ],
      pipelineTitle1: 'Nasıl ',
      pipelineTitleHighlight: 'Çalışır',
      pipelineSubtitle: 'Uçtan uca tespit hattımız',
      pipelineSteps: ['Kamera', 'Tespit', 'Davranış Analizi', 'Kızgınlık Tahmini', 'Akıllı Uyarı'],
      pipelineLatency: ['Anlık', '<1 ms/kare', '~120 ms', 'Gerçek zamanlı', 'Mobil'],
    },

    // Features
    features: {
      sectionLabel: 'Özellikler',
      sectionTitle1: 'Akıllı İzleme İçin ',
      sectionTitleHighlight: 'Her Şey',
      sectionSubtitle: 'Modern süt çiftliği yönetimi için eksiksiz yapay zeka çözümü.',
      coreFeature: 'Temel Özellik',
      items: [
        {
          title: 'Gerçek Zamanlı Tespit',
          description: 'YOLO tabanlı modeller kullanarak inekleri gerçek zamanlı tanımlama ve takip eden sürekli video akışı analizi.',
        },
        {
          title: 'Sensör Gerektirmez',
          description: 'Tamamen kamera tabanlı izleme, hayvanlar üzerindeki fiziksel cihaz ihtiyacını ortadan kaldırarak stresi ve maliyeti azaltır.',
        },
        {
          title: 'Davranış Analizi',
          description: 'Poz tahmini ve hareket kalıpları ile atlama, huzursuzluk ve diğer kızgınlığa özgü davranışları takip eder.',
        },
        {
          title: 'Akıllı Uyarılar',
          description: 'Kızgınlık tespit edildiğinde mobil cihazınıza güven puanları ve önerilen eylemlerle anlık bildirim.',
        },
        {
          title: 'Doğum Tahmini',
          description: 'Davranış değişikliklerine dayalı beklenen doğum tarihlerini tahmin ederek çiftçilerin önceden hazırlanmasına yardımcı olur.',
        },
        {
          title: 'Aktivite Paneli',
          description: 'Sürü sağlık metrikleri, aktivite trendleri ve geçmiş verileri gösteren kapsamlı analiz panosu.',
        },
      ],
    },

    // Demo
    demo: {
      sectionLabel: 'Sistem Akışı',
      sectionTitle1: 'Kameradan ',
      sectionTitleHighlight: 'Uyarıya',
      sectionSubtitle: 'Jürinin sistemi tek bakışta anlaması için uçtan uca demo akışı.',
      videoTitle: 'Statik sistem görünümü',
      watchVideo: 'YouTube’da İzle',
      latencyBadge: '~120 ms gecikme hedefi',
      notificationTitle: 'Moo-tion uyarısı',
      notificationBody: 'Cow #17 için kızgınlık sinyali incelenmeli.',
      timeline: ['Tespit', 'Davranış', 'Uyarı'],
      items: [
        {
          title: 'Kamera Akışı',
          description: 'Kamera görüntüsü alınır.',
        },
        {
          title: 'İnek Tespiti',
          description: 'İnekler kutularla işaretlenir.',
        },
        {
          title: 'Kızgınlık Sinyali',
          description: 'Davranış riski hesaplanır.',
        },
        {
          title: 'Mobil Bildirim',
          description: 'Çiftçiye uyarı gönderilir.',
        },
      ],
    },

    // Reports
    reports: {
      sectionLabel: 'Teslimler',
      sectionTitle1: 'Proje ',
      sectionTitleHighlight: 'Raporları',
      sectionSubtitle: 'Senior Year Project teslim ve belgeleri.',
      completed: 'Tamamlandı',
      comingSoon: 'Yakında',
      deadline: 'Son Tarih',
      viewPdf: 'PDF Görüntüle',
      pending: 'Beklemede',
      footerNote: 'Raporlar, Senior Year Project ilerledikçe güncellenir.',
      previewLabel: 'Belge önizlemesi',
      previewAction: 'Önizle',
      downloadAction: 'İndir',
      type: 'Tür',
      reportType: 'PDF rapor',
      items: [
        {
          title: 'Proje Bilgi Formu',
          deadline: '24 Ekim 2025',
        },
        {
          title: 'Yenilik Değerlendirmesi',
          deadline: '24 Ekim 2025',
        },
        {
          title: 'Proje Şartname Raporu',
          deadline: '21 Kasım 2025',
        },
        {
          title: 'Analiz ve Gereksinimler Raporu',
          deadline: '12 Aralık 2025',
        },
      ],
    },

    // Team
    team: {
      sectionLabel: 'Ekibimiz',
      sectionTitle1: 'Ekibi ',
      sectionTitleHighlight: 'Tanıyın',
      sectionSubtitle: 'Bilkent Üniversitesi Bilgisayar Mühendisliği öğrencileri, süt çiftçiliğinin geleceğini inşa ediyor.',
      supervisor: 'Danışman',
      instructors: 'Ders Sorumluları',
      github: 'GitHub',
    },

    // Architecture
    architecture: {
      sectionLabel: 'Mimari',
      sectionTitle1: 'Sistemi Taşıyan ',
      sectionTitleHighlight: 'Teknoloji',
      sectionSubtitle: 'Kamera akışından mobil uyarıya kadar yalın ve anlaşılır bir ürün hattı.',
      items: [
        { name: 'Flutter', role: 'Mobil uygulama ve çiftçi bildirim arayüzü', icon: 'mobile' },
        { name: 'FastAPI', role: 'Model çıktıları ve uygulama API katmanı', icon: 'api' },
        { name: 'YOLO', role: 'Kamera görüntüsünde inek tespiti', icon: 'target' },
        { name: 'OpenCV', role: 'Görüntü işleme ve davranış sinyali hazırlığı', icon: 'vision' },
        { name: 'PostgreSQL', role: 'Sürü, uyarı ve geçmiş kayıt verisi', icon: 'database' },
      ],
    },

    technical: {
      sectionLabel: 'Teknik Detaylar',
      sectionTitle1: 'Model ve ',
      sectionTitleHighlight: 'Performans',
      sectionSubtitle: 'Jüri için teknik varsayımlar ve ölçüm noktaları açıkça gösterilir.',
      items: [
        { label: 'Model', value: 'YOLO tabanlı tespit hattı' },
        { label: 'Kare gecikmesi', value: '<1 ms / kare hedefi' },
        { label: 'Video hattı', value: 'OpenCV ön işleme' },
        { label: 'Mobil yanıt', value: '~120 ms uyarı hedefi' },
      ],
    },

    finalCta: {
      title: 'Moo-tion’u inceleyin',
      subtitle: 'Kod, raporlar ve demo videosu tek yerden erişilebilir.',
      github: 'GitHub’u İncele',
      reports: 'Raporları Gör',
      demo: 'Demo Videosu İzle',
    },

    // Footer
    footer: {
      project: 'Senior Year Project',
      university: 'Bilkent Üniversitesi — Bilgisayar Mühendisliği Bölümü',
      course: 'Senior Year Project',
      lastUpdated: 'Son güncelleme',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      features: 'Features',
      demo: 'Demo',
      reports: 'Reports',
      team: 'Team',
      architecture: 'Architecture',
    },

    // Hero
    hero: {
      badge: 'Senior Year Project — Bilkent University',
      headline1: 'AI-Powered ',
      headlineHighlight: 'Estrus Detection',
      headline2: 'for Smart Farming',
      subtitle:
        'A computer-vision-based herd management system that detects estrus, predicts calving, and monitors cow activity using visual tags — no wearable sensors required.',
      ctaReports: 'View Reports',
      ctaTeam: 'View Team',
      ctaDemo: 'System Demo',
      statMonitoring: 'Real-time Monitoring',
      statMonitoringValue: '24/7',
      statCamera: 'Camera-based',
      statCameraValue: 'CV',
      statSensor: 'No Wearable Sensor',
      statSensorValue: '0',
      statAnalysis: 'AI Behavior Analysis',
      statAnalysisValue: '120ms',
      mockupLive: 'Live camera feed',
      mockupAlert: 'Estrus risk',
      mockupAction: 'Mobile alert ready',
      proofLine: 'Tested on real barn footage • Real-time inference',
      scroll: 'Scroll',
    },

    // Problem & Solution
    problemSolution: {
      sectionLabel: 'Why Moo-tion?',
      sectionTitle1: 'The Problem We\'re ',
      sectionTitleHighlight: 'Solving',
      problemLabel: 'The Problem',
      solutionLabel: 'Our Solution',
      problems: [
        {
          title: 'Missed Estrus',
          desc: 'Visual observation catches only 50-60% of estrus events, leading to missed breeding opportunities.',
        },
        {
          title: 'Financial Loss',
          desc: 'Each missed cycle costs $300-500+ in delayed milk production and additional insemination costs.',
        },
        {
          title: 'Labor Intensive',
          desc: 'Traditional monitoring requires 24/7 manual observation, which is impractical for large herds.',
        },
      ],
      solutions: [
        {
          title: 'Model-assisted Detection',
          desc: 'The computer-vision pipeline surfaces behavior signals that can be missed during manual observation.',
        },
        {
          title: 'Real-time Alerts',
          desc: 'Instant notifications to farmers when estrus behavior is detected — day or night.',
        },
        {
          title: 'Non-Invasive',
          desc: 'No wearable sensors or physical contact needed. Pure camera-based visual monitoring.',
        },
      ],
      pipelineTitle1: 'How It ',
      pipelineTitleHighlight: 'Works',
      pipelineSubtitle: 'Our end-to-end detection pipeline',
      pipelineSteps: ['Camera Feed', 'Detection', 'Behavior Analysis', 'Estrus Prediction', 'Smart Alert'],
      pipelineLatency: ['Instant', '<1 ms/frame', '~120 ms', 'Real-time', 'Mobile'],
    },

    // Features
    features: {
      sectionLabel: 'Features',
      sectionTitle1: 'Everything You Need for ',
      sectionTitleHighlight: 'Smart Monitoring',
      sectionSubtitle: 'A complete AI-powered solution for modern dairy farm management.',
      coreFeature: 'Core Feature',
      items: [
        {
          title: 'Real-time Detection',
          description: 'Continuous video stream analysis using YOLO-based models to identify and track individual cows in real time.',
        },
        {
          title: 'No Wearable Sensors',
          description: 'Pure camera-based monitoring eliminates the need for physical devices on animals, reducing stress and cost.',
        },
        {
          title: 'Behavior Analysis',
          description: 'Tracks mounting, restlessness, and other estrus-specific behaviors through pose estimation and motion patterns.',
        },
        {
          title: 'Smart Alerts',
          description: 'Push notifications to your mobile device when estrus is detected, with confidence scores and recommended actions.',
        },
        {
          title: 'Calving Prediction',
          description: 'Predicts expected calving dates based on behavioral changes, helping farmers prepare in advance.',
        },
        {
          title: 'Activity Dashboard',
          description: 'Comprehensive analytics dashboard showing herd health metrics, activity trends, and historical data.',
        },
      ],
    },

    // Demo
    demo: {
      sectionLabel: 'System Flow',
      sectionTitle1: 'From Camera ',
      sectionTitleHighlight: 'to Alert',
      sectionSubtitle: 'A clear end-to-end demo flow for showing the system to the jury.',
      videoTitle: 'Static system mockup',
      watchVideo: 'Watch on YouTube',
      latencyBadge: '~120 ms latency target',
      notificationTitle: 'Moo-tion alert',
      notificationBody: 'Cow #17 should be reviewed for estrus signal.',
      timeline: ['Detection', 'Behavior', 'Alert'],
      items: [
        {
          title: 'Camera Feed',
          description: 'Camera footage is received.',
        },
        {
          title: 'Cow Detection',
          description: 'Cows are marked with boxes.',
        },
        {
          title: 'Estrus Signal',
          description: 'Behavior risk is calculated.',
        },
        {
          title: 'Mobile Notification',
          description: 'An alert is sent to the farmer.',
        },
      ],
    },

    // Reports
    reports: {
      sectionLabel: 'Deliverables',
      sectionTitle1: 'Project ',
      sectionTitleHighlight: 'Reports',
      sectionSubtitle: 'Senior Year Project deliverables and documentation.',
      completed: 'Completed',
      comingSoon: 'Coming Soon',
      deadline: 'Deadline',
      viewPdf: 'View PDF',
      pending: 'Pending',
      footerNote: 'Reports are updated as the Senior Year Project progresses.',
      previewLabel: 'Document preview',
      previewAction: 'Preview',
      downloadAction: 'Download',
      type: 'Type',
      reportType: 'PDF report',
      items: [
        {
          title: 'Project Information Form',
          deadline: 'October 24, 2025',
        },
        {
          title: 'Assessment of Innovation',
          deadline: 'October 24, 2025',
        },
        {
          title: 'Project Specification Report',
          deadline: 'November 21, 2025',
        },
        {
          title: 'Analysis & Requirements Report',
          deadline: 'December 12, 2025',
        },
      ],
    },

    // Team
    team: {
      sectionLabel: 'Our Team',
      sectionTitle1: 'Meet the ',
      sectionTitleHighlight: 'Team',
      sectionSubtitle: 'Bilkent University Computer Engineering students building the future of dairy farming.',
      supervisor: 'Supervisor',
      instructors: 'Course Instructors',
      github: 'GitHub',
    },

    // Architecture
    architecture: {
      sectionLabel: 'Architecture',
      sectionTitle1: 'Technology Behind ',
      sectionTitleHighlight: 'the System',
      sectionSubtitle: 'A practical product pipeline from camera feed to mobile alert.',
      items: [
        { name: 'Flutter', role: 'Mobile app and farmer notification surface', icon: 'mobile' },
        { name: 'FastAPI', role: 'API layer for model outputs and app data', icon: 'api' },
        { name: 'YOLO', role: 'Cow detection in camera frames', icon: 'target' },
        { name: 'OpenCV', role: 'Video processing and behavior-signal preparation', icon: 'vision' },
        { name: 'PostgreSQL', role: 'Herd, alert, and history data storage', icon: 'database' },
      ],
    },

    technical: {
      sectionLabel: 'Technical Details',
      sectionTitle1: 'Model and ',
      sectionTitleHighlight: 'Performance',
      sectionSubtitle: 'Technical assumptions and measurement points are visible for the jury.',
      items: [
        { label: 'Model', value: 'YOLO-based detection pipeline' },
        { label: 'Frame latency', value: '<1 ms / frame target' },
        { label: 'Video pipeline', value: 'OpenCV preprocessing' },
        { label: 'Mobile response', value: '~120 ms alert target' },
      ],
    },

    finalCta: {
      title: 'Explore Moo-tion',
      subtitle: 'Review the code, reports, and demo video from one place.',
      github: 'Open GitHub',
      reports: 'View Reports',
      demo: 'Watch Demo Video',
    },

    // Footer
    footer: {
      project: 'Senior Year Project',
      university: 'Bilkent University — Computer Science Department',
      course: 'Senior Year Project',
      lastUpdated: 'Last updated',
    },
  },
} as const;

export type Translations = typeof translations.tr;

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
