export type Locale = 'tr' | 'en';

export const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      features: 'Özellikler',
      demo: 'Demo',
      reports: 'Raporlar',
      team: 'Ekip',
      architecture: 'Mimari',
    },

    hero: {
      badge: 'Senior Year Project — Bilkent Üniversitesi',
      headline1: 'Yapay Zeka Destekli ',
      headlineHighlight: 'Kızgınlık Tespiti',
      headline2: 'Akıllı Çiftçilik İçin',
      subtitle:
        'Moo-tion, kamera görüntülerinden yararlanarak kızgınlık belirtilerini tespit eden, doğum sürecini öngörmeye yardımcı olan ve sürü aktivitesini takip eden bilgisayarlı görü tabanlı bir sistemdir. Giyilebilir sensör gerektirmez.',
      ctaReports: 'Raporları Gör',
      ctaTeam: 'Ekibi Gör',
      ctaDemo: 'Sistem Demosu',
      statMonitoring: 'Gerçek Zamanlı İzleme',
      statMonitoringValue: '7/24',
      statCamera: 'Kamera Tabanlı',
      statCameraValue: 'CV',
      statSensor: 'Giyilebilir Sensör Yok',
      statSensorValue: '0',
      statAnalysis: 'Yapay Zeka Analizi',
      statAnalysisValue: '120 ms',
      mockupLive: 'Canlı kamera akışı',
      mockupAlert: 'Kızgınlık riski',
      mockupAction: 'Mobil uyarı hazır',
      proofLine: 'Gerçek ahır görüntüleriyle test edilir, sonuçlar anlık olarak değerlendirilir.',
      scroll: 'Kaydır',
    },

    problemSolution: {
      sectionLabel: 'Neden Moo-tion?',
      sectionTitle1: 'Çözdüğümüz ',
      sectionTitleHighlight: 'Problem',
      problemLabel: 'Problem',
      solutionLabel: 'Çözümümüz',
      problems: [
        {
          title: 'Kaçırılan Kızgınlık Dönemleri',
          desc: 'Sadece gözleme dayalı takipte kızgınlık belirtilerinin önemli bir kısmı kaçabilir; bu da doğru zamanda tohumlama şansını azaltır.',
        },
        {
          title: 'Ek Maliyet',
          desc: 'Kaçırılan her döngü, geciken süt üretimi ve tekrar eden tohumlama süreçleri nedeniyle işletmeye yüzlerce dolar ek yük getirebilir.',
        },
        {
          title: 'Sürekli Takip Zorluğu',
          desc: 'Büyük sürülerde 7/24 manuel gözlem yapmak hem yorucu hem de sürdürülebilir değildir.',
        },
      ],
      solutions: [
        {
          title: 'Model Destekli Tespit',
          desc: 'Bilgisayarlı görü hattı, manuel gözlem sırasında fark edilmesi zor olan davranış sinyallerini görünür hale getirir.',
        },
        {
          title: 'Anlık Bildirimler',
          desc: 'Kızgınlık davranışı algılandığında çiftçiye zaman kaybetmeden uyarı gönderilir.',
        },
        {
          title: 'Temassız İzleme',
          desc: 'Hayvanların üzerine cihaz takmadan, yalnızca kamera görüntüsü üzerinden izleme yapılır.',
        },
      ],
      pipelineTitle1: 'Nasıl ',
      pipelineTitleHighlight: 'Çalışır',
      pipelineSubtitle: 'Kameradan uyarıya uzanan tespit akışı',
      pipelineSteps: ['Kamera', 'Tespit', 'Davranış Analizi', 'Kızgınlık Tahmini', 'Akıllı Uyarı'],
      pipelineLatency: ['Anlık', '<1 ms/kare', '~120 ms', 'Gerçek zamanlı', 'Mobil'],
    },

    features: {
      sectionLabel: 'Özellikler',
      sectionTitle1: 'Akıllı İzleme İçin ',
      sectionTitleHighlight: 'Gerekenler',
      sectionSubtitle: 'Modern süt çiftlikleri için kamera tabanlı, anlaşılır ve uygulanabilir bir yapay zeka çözümü.',
      coreFeature: 'Temel Özellik',
      items: [
        {
          title: 'Gerçek Zamanlı Tespit',
          description: 'Video akışı sürekli analiz edilir; inekler YOLO tabanlı modellerle görüntü üzerinde tespit ve takip edilir.',
        },
        {
          title: 'Canlı Kamera Takibi',
          description: 'Çiftlikteki kamera görüntüleri canlı olarak izlenir; sistem önemli davranış değişimlerini anında görünür hale getirir.',
        },
        {
          title: 'Sensör Gerektirmez',
          description: 'Hayvanların üzerine fiziksel cihaz takılmadığı için stres ve bakım maliyeti azalır.',
        },
        {
          title: 'Davranış Analizi',
          description: 'Hareket örüntüleri ve poz bilgisi kullanılarak kızgınlığa işaret edebilecek davranışlar değerlendirilir.',
        },
        {
          title: 'Akıllı Uyarılar',
          description: 'Risk yükseldiğinde mobil cihaza güven puanı ve önerilen aksiyonla birlikte bildirim gönderilir.',
        },
        {
          title: 'Doğum Tahmini',
          description: 'Davranış değişiklikleri izlenerek yaklaşan doğum süreci için erken hazırlık yapılmasına yardımcı olunur.',
        },
        {
          title: 'Hayvan Sağlığı Takibi',
          description: 'Doğum öncesi kontroller ve koruyucu aşı takvimi gibi sağlık adımlarının düzenli takip edilmesine yardımcı olur.',
        },
        {
          title: 'Aktivite Paneli',
          description: 'Sürü aktivitesi, geçmiş uyarılar ve eğilimler tek bir panelden takip edilebilir.',
        },
      ],
    },

    demo: {
      sectionLabel: 'Sistem Akışı',
      sectionTitle1: 'Kameradan ',
      sectionTitleHighlight: 'Uyarıya',
      sectionSubtitle: 'Demo videosu, kamera görüntüsünün nasıl analiz edilip anlaşılır bir mobil uyarıya dönüştüğünü adım adım gösterir.',
      videoTitle: 'Sistem görünümü',
      watchVideo: 'YouTube’da İzle',
      latencyBadge: '~120 ms gecikme hedefi',
      notificationTitle: 'Moo-tion uyarısı',
      notificationBody: 'Cow #17 için kızgınlık sinyali incelenmeli.',
      timeline: ['Tespit', 'Davranış', 'Uyarı'],
      items: [
        { title: 'Kamera Akışı', description: 'Kamera görüntüsü sisteme alınır.' },
        { title: 'İnek Tespiti', description: 'İnekler görüntü üzerinde işaretlenir.' },
        { title: 'Kızgınlık Sinyali', description: 'Davranış riski hesaplanır.' },
        { title: 'Mobil Bildirim', description: 'Çiftçiye anlaşılır bir uyarı gönderilir.' },
      ],
    },

    reports: {
      sectionLabel: 'Teslimler',
      sectionTitle1: 'Proje ',
      sectionTitleHighlight: 'Raporları',
      sectionSubtitle: 'Senior Year Project kapsamında hazırlanan raporlar ve teslimler.',
      completed: 'Tamamlandı',
      comingSoon: 'Yakında',
      viewPdf: 'PDF Görüntüle',
      pending: 'Beklemede',
      footerNote: 'Raporlar proje ilerledikçe güncellenir.',
      previewLabel: 'Belge önizlemesi',
      previewAction: 'Önizle',
      downloadAction: 'İndir',
      type: 'Tür',
      reportType: 'PDF rapor',
      items: [
        { title: 'Proje Şartname Dokümanı', deadline: 'project-specification-document.pdf' },
        { title: 'Analiz ve Gereksinim Raporu', deadline: 'analysis-and-requirement-report.pdf' },
        { title: 'Detaylı Tasarım Raporu', deadline: 'detailed-design-report.pdf' },
        { title: 'Final Raporu', deadline: 'final-report.pdf' },
      ],
    },

    team: {
      sectionLabel: 'Ekibimiz',
      sectionTitle1: 'Ekibi ',
      sectionTitleHighlight: 'Tanıyın',
      sectionSubtitle: 'Bilkent Üniversitesi Bilgisayar Mühendisliği öğrencileri, süt çiftlikleri için görüntü tabanlı karar destek sistemi geliştiriyor.',
      supervisor: 'Danışman',
      instructors: 'Ders Sorumluları',
      innovationExpert: 'İnovasyon Uzmanı',
      photoPlaceholder: 'Fotoğraf alanı',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },

    architecture: {
      sectionLabel: 'Mimari',
      sectionTitle1: 'Sistemi Taşıyan ',
      sectionTitleHighlight: 'Teknoloji',
      sectionSubtitle: 'Kamera akışından mobil uyarıya kadar sade ve anlaşılır bir ürün hattı.',
      items: [
        { name: 'Flutter', role: 'Mobil uygulama ve çiftçi bildirim arayüzü', icon: 'mobile' },
        { name: 'FastAPI', role: 'Model çıktıları ve uygulama verileri için API katmanı', icon: 'api' },
        { name: 'YOLO', role: 'Kamera görüntüsünde inek tespiti', icon: 'target' },
        { name: 'OpenCV', role: 'Görüntü işleme ve davranış sinyali hazırlığı', icon: 'vision' },
        { name: 'PostgreSQL', role: 'Sürü, uyarı ve geçmiş kayıt verisi', icon: 'database' },
      ],
    },

    technical: {
      sectionLabel: 'Teknik Detaylar',
      sectionTitle1: 'Model ve ',
      sectionTitleHighlight: 'Performans',
      sectionSubtitle: 'Jüri için teknik varsayımlar ve ölçüm noktaları açık şekilde gösterilir.',
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
      demo: 'Demo Videosunu İzle',
    },

    footer: {
      project: 'Senior Year Project',
      university: 'Bilkent Üniversitesi — Bilgisayar Mühendisliği Bölümü',
      course: 'Senior Year Project',
      lastUpdated: 'Son güncelleme',
    },
  },

  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      demo: 'Demo',
      reports: 'Reports',
      team: 'Team',
      architecture: 'Architecture',
    },

    hero: {
      badge: 'Senior Year Project — Bilkent University',
      headline1: 'AI-Powered ',
      headlineHighlight: 'Estrus Detection',
      headline2: 'for Smart Farming',
      subtitle:
        'Moo-tion is a computer-vision-based herd management system that detects estrus signals, supports calving prediction, and monitors cow activity without wearable sensors.',
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
      statAnalysisValue: '120 ms',
      mockupLive: 'Live camera feed',
      mockupAlert: 'Estrus risk',
      mockupAction: 'Mobile alert ready',
      proofLine: 'Tested with real barn footage and evaluated in real time.',
      scroll: 'Scroll',
    },

    problemSolution: {
      sectionLabel: 'Why Moo-tion?',
      sectionTitle1: 'The Problem We’re ',
      sectionTitleHighlight: 'Solving',
      problemLabel: 'Problem',
      solutionLabel: 'Our Solution',
      problems: [
        {
          title: 'Missed Estrus Events',
          desc: 'Observation-based monitoring can miss important estrus signals, reducing the chance of timely insemination.',
        },
        {
          title: 'Added Cost',
          desc: 'Each missed cycle can create hundreds of dollars in additional cost through delayed milk production and repeated insemination.',
        },
        {
          title: 'Hard to Monitor Continuously',
          desc: 'Manual 24/7 observation is tiring and difficult to sustain, especially in larger herds.',
        },
      ],
      solutions: [
        {
          title: 'Model-assisted Detection',
          desc: 'The computer-vision pipeline surfaces behavior signals that are easy to miss during manual observation.',
        },
        {
          title: 'Instant Alerts',
          desc: 'Farmers receive timely alerts when the system detects behavior that may indicate estrus.',
        },
        {
          title: 'Contactless Monitoring',
          desc: 'The system works through camera footage only, without attaching devices to animals.',
        },
      ],
      pipelineTitle1: 'How It ',
      pipelineTitleHighlight: 'Works',
      pipelineSubtitle: 'An end-to-end flow from camera feed to alert',
      pipelineSteps: ['Camera Feed', 'Detection', 'Behavior Analysis', 'Estrus Prediction', 'Smart Alert'],
      pipelineLatency: ['Instant', '<1 ms/frame', '~120 ms', 'Real-time', 'Mobile'],
    },

    features: {
      sectionLabel: 'Features',
      sectionTitle1: 'Everything Needed for ',
      sectionTitleHighlight: 'Smart Monitoring',
      sectionSubtitle: 'A practical camera-based AI solution for modern dairy farm management.',
      coreFeature: 'Core Feature',
      items: [
        {
          title: 'Real-time Detection',
          description: 'The video stream is analyzed continuously, and cows are detected and tracked using YOLO-based models.',
        },
        {
          title: 'Live Camera Monitoring',
          description: 'Live barn camera feeds can be monitored continuously while the system surfaces important behavior changes in real time.',
        },
        {
          title: 'No Wearable Sensors',
          description: 'Camera-based monitoring reduces stress and maintenance cost by removing the need for devices on animals.',
        },
        {
          title: 'Behavior Analysis',
          description: 'Motion patterns and pose information are used to evaluate behaviors that may indicate estrus.',
        },
        {
          title: 'Smart Alerts',
          description: 'When risk increases, the mobile app sends a notification with a confidence score and suggested action.',
        },
        {
          title: 'Calving Prediction',
          description: 'Behavior changes are monitored to help farmers prepare earlier for the calving period.',
        },
        {
          title: 'Animal Health Tracking',
          description: 'Helps farmers keep track of prenatal checks, preventive vaccination schedules, and other routine health steps.',
        },
        {
          title: 'Activity Dashboard',
          description: 'Herd activity, alert history, and trends can be followed from a single dashboard.',
        },
      ],
    },

    demo: {
      sectionLabel: 'System Flow',
      sectionTitle1: 'From Camera ',
      sectionTitleHighlight: 'to Alert',
      sectionSubtitle: 'The demo video shows how camera footage is analyzed and turned into a clear mobile alert, step by step.',
      videoTitle: 'System view',
      watchVideo: 'Watch on YouTube',
      latencyBadge: '~120 ms latency target',
      notificationTitle: 'Moo-tion alert',
      notificationBody: 'Cow #17 should be reviewed for an estrus signal.',
      timeline: ['Detection', 'Behavior', 'Alert'],
      items: [
        { title: 'Camera Feed', description: 'Camera footage is received by the system.' },
        { title: 'Cow Detection', description: 'Cows are marked on the video frame.' },
        { title: 'Estrus Signal', description: 'Behavior risk is calculated.' },
        { title: 'Mobile Notification', description: 'A clear alert is sent to the farmer.' },
      ],
    },

    reports: {
      sectionLabel: 'Deliverables',
      sectionTitle1: 'Project ',
      sectionTitleHighlight: 'Reports',
      sectionSubtitle: 'Reports and deliverables prepared for the Senior Year Project.',
      completed: 'Completed',
      comingSoon: 'Coming Soon',
      viewPdf: 'View PDF',
      pending: 'Pending',
      footerNote: 'Reports are updated as the project progresses.',
      previewLabel: 'Document preview',
      previewAction: 'Preview',
      downloadAction: 'Download',
      type: 'Type',
      reportType: 'PDF report',
      items: [
        { title: 'Project Specification Document', deadline: 'project-specification-document.pdf' },
        { title: 'Analysis and Requirement Report', deadline: 'analysis-and-requirement-report.pdf' },
        { title: 'Detailed Design Report', deadline: 'detailed-design-report.pdf' },
        { title: 'Final Report', deadline: 'final-report.pdf' },
      ],
    },

    team: {
      sectionLabel: 'Our Team',
      sectionTitle1: 'Meet the ',
      sectionTitleHighlight: 'Team',
      sectionSubtitle: 'Bilkent University Computer Engineering students building a vision-based decision support system for dairy farms.',
      supervisor: 'Supervisor',
      instructors: 'Course Instructors',
      innovationExpert: 'Innovation Expert',
      photoPlaceholder: 'Photo slot',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },

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
      sectionSubtitle: 'Technical assumptions and measurement points are clearly visible for the jury.',
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

    footer: {
      project: 'Senior Year Project',
      university: 'Bilkent University — Computer Engineering Department',
      course: 'Senior Year Project',
      lastUpdated: 'Last updated',
    },
  },
} as const;

export type Translations = typeof translations.tr;

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
