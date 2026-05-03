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
      badge: 'Bilkent Üniversitesi Senior Year Project',
      headline1: 'Akıllı Çiftçilik İçin ',
      headlineHighlight: 'Yapay Zeka Destekli',
      headline2: 'Kızgınlık Tespiti',
      subtitle:
        'Moo-tion, kamera görüntülerini kullanarak kızgınlık belirtilerini tespit eden, doğuma yaklaşan hayvanları izlemeye yardımcı olan ve sürü aktivitesini takip eden bilgisayarlı görü tabanlı bir karar destek sistemidir. Giyilebilir sensör gerektirmez.',
      ctaReports: 'Raporları Gör',
      ctaTeam: 'Ekibi Gör',
      ctaDemo: 'Sistem Demosu',
      mockupLive: 'Canlı kamera akışı',
      mockupAlert: 'Kızgınlık riski',
      mockupAction: 'Mobil uyarı hazır',
      mockupCowAction: 'İnek #17 · Şimdi incele',
      imageAlt: 'Kızgınlık tespiti yapılan bir ineği gösteren ahır kamera görüntüsü',
      liveLabel: 'CANLI',
      proofLine: 'Gerçek ahır görüntüleriyle test edilir; sonuçlar gerçek zamanlı değerlendirilir.',
      scroll: 'Kaydır',
    },

    problemSolution: {
      sectionLabel: 'Neden Moo-tion?',
      sectionTitle1: 'Çözmeye Odaklandığımız ',
      sectionTitleHighlight: 'Sorun',
      problemLabel: 'Problem',
      solutionLabel: 'Çözümümüz',
      previousPairAria: 'Önceki sorun ve çözümü göster',
      nextPairAria: 'Sonraki sorun ve çözümü göster',
      problems: [
        {
          title: 'Kaçırılan Kızgınlık Dönemleri',
          desc: 'Yalnızca manuel gözleme dayalı takipte önemli kızgınlık belirtileri kaçabilir; bu da doğru zamanda tohumlama yapma olasılığını düşürür.',
        },
        {
          title: 'Artan İşletme Maliyetleri',
          desc: 'Kaçırılan her döngü; geciken süt üretimi, uzayan açık gün sayısı ve tekrarlanan tohumlamalar nedeniyle işletmeye ek maliyet getirir.',
        },
        {
          title: 'Sürekli Takip Zorluğu',
          desc: 'Özellikle büyük sürülerde 7/24 manuel gözlem yapmak yorucudur ve uzun vadede sürdürülebilir değildir.',
        },
      ],
      solutions: [
        {
          title: 'Yapay Zeka Destekli Tespit',
          desc: 'Bilgisayarlı görü hattı, manuel takipte fark edilmesi zor davranış sinyallerini görünür hale getirir.',
        },
        {
          title: 'Zamanında Bildirimler',
          desc: 'Sistem kızgınlıkla ilişkili davranışları algıladığında çiftçiye gecikmeden bildirim gönderir.',
        },
        {
          title: 'Temassız İzleme',
          desc: 'Hayvanlara cihaz takmadan, yalnızca kamera görüntüsü üzerinden sürekli takip yapılır.',
        },
      ],
    },

    features: {
      sectionLabel: 'Özellikler',
      sectionTitle1: 'Öne Çıkan ',
      sectionTitleHighlight: 'Yetenekler',
      sectionSubtitle:
        'Moo-tion, süt çiftliklerinin günlük saha ihtiyaçlarına odaklanan açık, uygulanabilir ve kesintisiz bir izleme deneyimi sunar.',
      items: [
        {
          title: 'Gerçek Zamanlı Ahır İzleme',
          description:
            'Canlı kamera akışları, günlük ahır düzenini bozmadan inekleri tespit etmek ve takip etmek için sürekli analiz edilir.',
        },
        {
          title: 'Kamera Tabanlı Davranış Analizi',
          description:
            'Hareket örüntüleri ve poz verileri; kızgınlık, doğuma hazırlık veya sağlık sorunlarına işaret edebilecek davranış değişimlerini belirlemeye yardımcı olur.',
        },
        {
          title: 'Akıllı Uyarılar ve Güven Skorları',
          description:
            'Sistem artan bir risk tespit ettiğinde mobil uygulama, güven skoru ve önerilen sonraki adımla birlikte bildirim gönderir.',
        },
        {
          title: 'Sürü Aktivite Paneli',
          description:
            'Çiftçiler sürü aktivitesini, uyarı geçmişini, sağlık görevlerini ve davranış eğilimlerini tek bir panelden inceleyebilir.',
        },
      ],
    },

    demo: {
      sectionLabel: 'Sistem Akışı',
      sectionTitle1: 'Kameradan ',
      sectionTitleHighlight: 'Uyarıya',
      sectionSubtitle:
        'Demo videosu, kamera görüntüsünün nasıl analiz edilip anlaşılır bir mobil bildirime dönüştürüldüğünü adım adım gösterir.',
      videoTitle: 'Sistem görünümü',
      watchVideo: "YouTube'da İzle",
      latencyBadge: '~120 ms gecikme hedefi',
      notificationTitle: 'Moo-tion uyarısı',
      notificationBody: '17 numaralı inekte olası kızgınlık sinyali incelenmeli.',
      imageAlt: 'Kızgınlık tespiti yapılan bir ineği gösteren ahır kamera görüntüsü',
      liveLabel: 'CANLI',
      timeline: ['Tespit', 'Davranış', 'Uyarı'],
      items: [
        { title: 'Kamera Akışı', description: 'Kamera görüntüsü sisteme aktarılır.' },
        { title: 'İnek Tespiti', description: 'İnekler görüntü üzerinde işaretlenir.' },
        { title: 'Kızgınlık Sinyali', description: 'Davranışa dayalı risk hesaplanır.' },
        { title: 'Mobil Bildirim', description: 'Çiftçiye açık ve anlaşılır bir bildirim gönderilir.' },
      ],
    },

    reports: {
      sectionLabel: 'Teslimler',
      sectionTitle1: 'Proje ',
      sectionTitleHighlight: 'Raporları',
      sectionSubtitle: 'Senior Year Project kapsamında hazırlanan proje raporları ve teslimleri.',
      completed: 'Hazır',
      comingSoon: 'Yakında hazır',
      viewPdf: 'PDF Görüntüle',
      pending: 'Beklemede',
      footerNote: 'Raporlar proje ilerledikçe güncellenecek.',
      previewLabel: 'Belge önizlemesi',
      previewAction: 'Önizle',
      downloadAction: 'İndir',
      type: 'Tür',
      reportType: 'PDF rapor',
      items: [
        { title: 'Proje Şartnamesi', deadline: 'project-specification-document.pdf' },
        { title: 'Analiz ve Gereksinim Raporu', deadline: 'analysis-and-requirement-report.pdf' },
        { title: 'Detaylı Tasarım Raporu', deadline: 'detailed-design-report.pdf' },
        { title: 'Final Raporu', deadline: 'T2517_Final_Report.pdf' },
      ],
    },

    team: {
      sectionLabel: 'Ekibimiz',
      sectionTitle1: 'Ekibi ',
      sectionTitleHighlight: 'Tanıyın',
      sectionSubtitle:
        'Bilkent Üniversitesi Bilgisayar Mühendisliği öğrencileri olarak süt çiftlikleri için görüntü tabanlı bir karar destek sistemi geliştiriyoruz.',
      supervisor: 'Danışman',
      instructors: 'Ders Sorumluları',
      innovationExpert: 'İnovasyon Uzmanı',
      photoPlaceholder: 'Fotoğraf yok',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      logbook: 'Çalışma günlüğü',
      downloadLogbook: 'Çalışma günlüğünü indir',
      groupPhotoTitle: 'Moo-tion Ekibi',
      groupPhotoSubtitle: 'Grup fotoğrafını seçerek ekip üyelerini ve iletişim bilgilerini görün.',
      groupPhotoAlt: 'Moo-tion ekibinin grup fotoğrafı',
      flipHint: 'Kartı çevir',
      backToGroup: 'Grup fotoğrafına dön',
    },

    architecture: {
      sectionLabel: 'Mimari',
      sectionTitle1: 'Sistemi Güçlendiren ',
      sectionTitleHighlight: 'Teknolojiler',
      sectionSubtitle: 'Kamera akışından mobil bildirime uzanan sade, anlaşılır ve uygulanabilir bir sistem hattı.',
      items: [
        { name: 'Flutter', role: 'Mobil uygulama ve çiftçi bildirim arayüzü', icon: 'mobile' },
        { name: 'FastAPI', role: 'Model çıktıları ve uygulama verileri için API katmanı', icon: 'api' },
        { name: 'YOLO', role: 'Kamera görüntülerinde inek tespiti', icon: 'target' },
        { name: 'OpenCV', role: 'Görüntü işleme ve davranış sinyallerini hazırlama', icon: 'vision' },
        { name: 'PostgreSQL', role: 'Sürü, uyarı ve geçmiş kayıtlarının depolanması', icon: 'database' },
      ],
      metrics: [
        { label: 'Kare gecikmesi', value: '<1 ms / kare hedef' },
        { label: 'Mobil yanıt', value: '~120 ms bildirim hedefi' },
      ],
    },

    technical: {
      sectionLabel: 'Teknik Detaylar',
      sectionTitle1: 'Ölçülebilir ',
      sectionTitleHighlight: 'Sistem Performansı',
      sectionSubtitle: 'Model, görüntü işleme ve bildirim katmanları saha koşullarında hızlı ve anlaşılır sonuçlar üretmek için tasarlanır.',
      items: [
        { label: 'Model hattı', value: 'YOLO + OpenCV' },
        { label: 'Kare gecikmesi', value: '<1 ms / kare hedef' },
        { label: 'Girdi kaynağı', value: 'Canlı kamera akışı' },
        { label: 'Bildirim yanıtı', value: '~120 ms hedef' },
      ],
    },

    finalCta: {
      title: "Moo-tion'u Keşfedin",
      subtitle: 'Koda, raporlara ve demo videosuna tek yerden erişin.',
      github: "GitHub'u İncele",
      reports: 'Raporları Gör',
      demo: 'Demo Videosunu İzle',
    },

    footer: {
      university: 'Bilkent Üniversitesi - Bilgisayar Mühendisliği Bölümü',
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
      badge: 'Senior Year Project - Bilkent University',
      headline1: 'AI-Powered ',
      headlineHighlight: 'Estrus Detection',
      headline2: 'for Smart Farming',
      subtitle:
        'Moo-tion is a computer-vision decision support system for dairy farms. It detects estrus signals, helps monitor cows approaching calving, and tracks herd activity without relying on wearable sensors.',
      ctaReports: 'View Reports',
      ctaTeam: 'Meet the Team',
      ctaDemo: 'System Demo',
      mockupLive: 'Live camera feed',
      mockupAlert: 'Estrus risk',
      mockupAction: 'Mobile alert ready',
      mockupCowAction: 'Cow #17 · Review now',
      imageAlt: 'Barn camera feed showing estrus detection on a cow',
      liveLabel: 'LIVE',
      proofLine: 'Tested on real barn footage and evaluated in real time.',
      scroll: 'Scroll',
    },

    problemSolution: {
      sectionLabel: 'Why Moo-tion?',
      sectionTitle1: 'The Problems We Are ',
      sectionTitleHighlight: 'Solving',
      problemLabel: 'Problem',
      solutionLabel: 'Our Solution',
      previousPairAria: 'Show previous problem and solution',
      nextPairAria: 'Show next problem and solution',
      problems: [
        {
          title: 'Missed Estrus Windows',
          desc: 'Manual observation alone can miss important estrus signals, reducing the chance of timely insemination.',
        },
        {
          title: 'Rising Operating Costs',
          desc: 'Each missed cycle can add costs through delayed milk production, longer open periods, and repeated insemination.',
        },
        {
          title: 'Continuous Monitoring Is Hard to Sustain',
          desc: 'Manual 24/7 observation is exhausting and hard to sustain, especially in larger herds.',
        },
      ],
      solutions: [
        {
          title: 'AI-Assisted Detection',
          desc: 'The computer vision pipeline highlights behavioral signals that are easy to miss during manual observation.',
        },
        {
          title: 'Real-Time Alerts',
          desc: 'Farmers are notified as soon as the system detects behavior that may indicate estrus.',
        },
        {
          title: 'Contactless Monitoring',
          desc: 'The system works through camera footage, without attaching any devices to the animals.',
        },
      ],
    },

    features: {
      sectionLabel: 'Features',
      sectionTitle1: 'Core ',
      sectionTitleHighlight: 'Capabilities',
      sectionSubtitle:
        'Moo-tion delivers a clear, practical monitoring experience built around the everyday needs of dairy farms.',
      items: [
        {
          title: 'Real-Time Barn Monitoring',
          description:
            'Live camera feeds are analyzed continuously to detect, track, and monitor cows without interrupting daily barn activity.',
        },
        {
          title: 'Camera-Based Behavior Analysis',
          description:
            'Motion patterns and pose data help identify behavioral changes that may indicate estrus, calving readiness, or health-related concerns.',
        },
        {
          title: 'Smart Alerts and Confidence Scores',
          description:
            'When the system detects elevated risk, the mobile app sends a notification with a confidence score and a suggested next step.',
        },
        {
          title: 'Herd Activity Dashboard',
          description:
            'Farmers can review herd activity, alert history, health tasks, and behavior trends from one centralized dashboard.',
        },
      ],
    },

    demo: {
      sectionLabel: 'System Flow',
      sectionTitle1: 'From Camera ',
      sectionTitleHighlight: 'to Alert',
      sectionSubtitle: 'The demo video shows how camera footage is analyzed and turned into a clear mobile alert.',
      videoTitle: 'System view',
      watchVideo: 'Watch on YouTube',
      latencyBadge: '~120 ms latency target',
      notificationTitle: 'Moo-tion alert',
      notificationBody: 'Review cow #17 for a possible estrus signal.',
      imageAlt: 'Barn camera feed showing estrus detection on a cow',
      liveLabel: 'LIVE',
      timeline: ['Detection', 'Behavior', 'Alert'],
      items: [
        { title: 'Camera Feed', description: 'Camera footage is streamed into the system.' },
        { title: 'Cow Detection', description: 'Cows are identified in each video frame.' },
        { title: 'Estrus Signal', description: 'Behavior-based risk is calculated.' },
        { title: 'Mobile Notification', description: 'A clear alert is sent to the farmer.' },
      ],
    },

    reports: {
      sectionLabel: 'Deliverables',
      sectionTitle1: 'Project ',
      sectionTitleHighlight: 'Reports',
      sectionSubtitle: 'Project reports and deliverables prepared for the Senior Year Project.',
      completed: 'Available',
      comingSoon: 'Coming soon',
      viewPdf: 'View PDF',
      pending: 'Pending',
      footerNote: 'Reports will continue to be updated as the project progresses.',
      previewLabel: 'Document preview',
      previewAction: 'Preview',
      downloadAction: 'Download',
      type: 'Type',
      reportType: 'PDF report',
      items: [
        { title: 'Project Specification Document', deadline: 'project-specification-document.pdf' },
        { title: 'Analysis and Requirements Report', deadline: 'analysis-and-requirement-report.pdf' },
        { title: 'Detailed Design Report', deadline: 'detailed-design-report.pdf' },
        { title: 'Final Report', deadline: 'T2517_Final_Report.pdf' },
      ],
    },

    team: {
      sectionLabel: 'Our Team',
      sectionTitle1: 'Meet the ',
      sectionTitleHighlight: 'Team',
      sectionSubtitle:
        'We are Bilkent University Computer Engineering students building a vision-based decision support system for dairy farms.',
      supervisor: 'Supervisor',
      instructors: 'Course Instructors',
      innovationExpert: 'Innovation Expert',
      photoPlaceholder: 'Photo unavailable',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      logbook: 'Logbook',
      downloadLogbook: 'Download logbook',
      groupPhotoTitle: 'Moo-tion Team',
      groupPhotoSubtitle: 'Select the group photo to see the team members and their contact details.',
      groupPhotoAlt: 'Moo-tion team group photo',
      flipHint: 'Flip card',
      backToGroup: 'Back to group photo',
    },

    architecture: {
      sectionLabel: 'Architecture',
      sectionTitle1: 'Technology Behind ',
      sectionTitleHighlight: 'the System',
      sectionSubtitle: 'A clear, practical pipeline from camera feed to mobile alert.',
      items: [
        { name: 'Flutter', role: 'Mobile app and farmer notification interface', icon: 'mobile' },
        { name: 'FastAPI', role: 'API layer for model outputs and application data', icon: 'api' },
        { name: 'YOLO', role: 'Cow detection in camera frames', icon: 'target' },
        { name: 'OpenCV', role: 'Image processing and behavioral signal preparation', icon: 'vision' },
        { name: 'PostgreSQL', role: 'Storage for herd, alert, and historical record data', icon: 'database' },
      ],
      metrics: [
        { label: 'Frame latency', value: '<1 ms / frame target' },
        { label: 'Mobile response', value: '~120 ms alert target' },
      ],
    },

    technical: {
      sectionLabel: 'Technical Details',
      sectionTitle1: 'Measurable ',
      sectionTitleHighlight: 'System Performance',
      sectionSubtitle: 'The model, vision, and notification layers are designed to produce fast, understandable results in farm conditions.',
      items: [
        { label: 'Model pipeline', value: 'YOLO + OpenCV' },
        { label: 'Frame latency', value: '<1 ms / frame target' },
        { label: 'Input source', value: 'Live camera feed' },
        { label: 'Alert response', value: '~120 ms target' },
      ],
    },

    finalCta: {
      title: 'Explore Moo-tion',
      subtitle: 'Access the code, reports, and demo video in one place.',
      github: 'View GitHub',
      reports: 'View Reports',
      demo: 'Watch Demo Video',
    },

    footer: {
      university: 'Bilkent University - Department of Computer Engineering',
      lastUpdated: 'Last updated',
    },
  },
} as const;

export type Translations = typeof translations.tr;

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
