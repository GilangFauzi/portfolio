const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      education: "Pendidikan",
      skills: "Keahlian",
      certifications: "Sertifikasi",
      contact: "Kontak",
    },
    hero: {
      greeting: "HALO, SAYA",
      subtitle: "Lulusan S1 Teknik Informatika Universitas Pamulang. Berpengalaman dalam pengembangan sistem Internet of Things (IoT) dan web development — menciptakan solusi inovatif di berbagai proyek.",
      location: "Bogor, Indonesia",
      scroll: "Gulir",
    },
    stats: {
      yearsExp: "Pengalaman",
      projects: "Proyek",
      certifications: "Sertifikasi",
    },
    about: {
      title: "Tentang",
      highlight: "Saya",
      p1: "Gelar S1 yang saya peroleh dari Fakultas Teknik Informatika, Universitas Pamulang, merupakan landasan pendidikan saya sebagai seorang software engineer. Dengan pengalaman dan keahlian yang saya kembangkan, saya berhasil menciptakan solusi inovatif dalam pengembangan sistem Internet of Things (IoT) dan berkontribusi dalam proyek pengembangan web.",
      p2: "Saya memiliki minat besar dalam bidang teknologi, salah satunya pada pengembangan web dan Internet of Things.",
      location: "Lokasi",
      email: "Email",
    },
    experience: {
      title: "Pengalaman",
      highlight: "Kerja",
      section: "SECTION",
      showMore: "Lihat semua",
      showLess: "Sembunyikan",
      more: "lainnya",
      job1: {
        title: "Software Engineer",
        type: "Penuh Waktu",
        details: [
          "Menyusun, mengimplementasikan, memelihara, dan mengembangkan proyek core system — mencakup desain arsitektur, pengkodean, dan optimalisasi sistem untuk performa optimal.",
          "Berkontribusi dalam pembuatan profil perusahaan dengan merancang dan mengimplementasikan arsitektur backend yang aman, skalabel, dan berkinerja tinggi, serta mengelola operasi database.",
          "Melakukan migrasi database dari sistem lama ke baru menggunakan MySQL — mencakup analisis struktur, pemetaan & transformasi data, ekspor-impor, serta verifikasi konsistensi data.",
          "Pertemuan dengan klien membahas pengembangan program, termasuk analisis kebutuhan bisnis.",
          "Berperan aktif dalam proyek smart booking system terintegrasi IoT — perancangan hardware dan instalasi alat Internet of Things.",
          "Identifikasi bug dan proses debugging untuk meminimalkan insiden pada production — analisis kode sumber dan pengujian menyeluruh.",
          "Mengembangkan Human Resource Management System (HRIS) dengan fitur manajemen penggajian, otentikasi API, dan integrasi pengenalan wajah untuk aplikasi seluler.",
        ],
      },
      job2: {
        title: "Web Developer Trainer",
        type: "Pelatihan",
        details: [
          "Merancang kurikulum terstruktur untuk pemula dalam menguasai HTML, CSS, dan JavaScript.",
          "Menyampaikan materi pembelajaran melalui platform online dengan metode pengajaran interaktif.",
          "Memfasilitasi diskusi kelompok dan sesi tanya jawab.",
        ],
      },
      job3: {
        title: "Backend Developer",
        type: "Magang",
        details: [
          "Berkontribusi membuat website sistem informasi kantor kelurahan Bojongsari sebagai backend developer.",
          "Menjelaskan dan mendemonstrasikan website kepada seluruh staff kantor kelurahan.",
          "Mendeploy website menggunakan platform cPanel.",
        ],
      },
      companies: {
        mandala: "PT Mandala Dwipantara Proteksi",
        training: "Training Online",
        kelurahan: "Kantor Kelurahan Bojongsari Depok",
      },
    },
    projects: {
      title: "Proyek",
      highlight: "Unggulan",
      filters: ["Semua"],
      modal: { close: "Tutup" },
      items: [
        {
          name: "Core System Nasional Re Modul Facultative & SDM Umum",
          desc: "Pengembangan modul facultative dan SDM umum pada core system nasional.",
          fullDesc: "Proyek ini mencakup pengembangan modul facultative dan SDM umum di dalam core system nasional. Sistem menangani manajemen data peserta, perhitungan aktuaria, dan pengelolaan SDM perusahaan.",
        },
        {
          name: "Profile Company PT Askrida Conven",
          desc: "Pembuatan company profile website untuk PT Askrida Conven.",
          fullDesc: "Perancangan dan implementasi company profile website, mencakup arsitektur backend, manajemen database, dan deployment untuk PT Askrida Conven.",
        },
        {
          name: "Smart Booking System (IoT)",
          desc: "Sistem smart booking terintegrasi Internet of Things.",
          fullDesc: "Proyek smart booking system terintegrasi IoT dengan perancangan hardware Arduino, instalasi sensor, dan backend Laravel untuk manajemen booking ruangan secara real-time.",
        },
        {
          name: "System Management Employee",
          desc: "HRIS dengan penggajian, API, dan face recognition.",
          fullDesc: "Human Resource Management System (HRIS) dengan fitur manajemen penggajian karyawan, otentikasi API, dan integrasi pengenalan wajah untuk aplikasi seluler.",
        },
        {
          name: "System E-Procurement",
          desc: "Sistem pengadaan barang/jasa secara elektronik.",
          fullDesc: "Platform e-procurement untuk pengadaan barang dan jasa, mencakup vendor management, tender process, dan approval workflow.",
        },
        {
          name: "Control Management System",
          desc: "Sistem manajemen kontrol untuk monitoring operasional.",
          fullDesc: "Sistem manajemen kontrol untuk monitoring dan pengelolaan operasional perusahaan, termasuk dashboard analytics dan reporting.",
        },
        {
          name: "System ERP",
          desc: "Enterprise Resource Planning system terintegrasi.",
          fullDesc: "Enterprise Resource Planning system untuk manajemen bisnis terintegrasi, mencakup finance, inventory, dan HR modules.",
        },
      ],
    },
    education: {
      title: "Pendidikan",
      highlight: "& Organisasi",
      history: "Riwayat Pendidikan",
      thesis: "Skripsi",
      org: "Organisasi",
    },
    skills: {
      title: "Keahlian",
      highlight: "& Keahlian",
      softSkills: "Soft Skills",
    },
    certifications: {
      title: "Sertifikasi",
      highlight: "& Pelatihan",
    },
    contact: {
      title: "Hubungi",
      highlight: "Saya",
      cta: "Hire Me",
      text: "Saya terbuka untuk peluang kolaborasi, freelance, atau posisi full-time di bidang software engineering, web development, dan IoT. Jangan ragu untuk menghubungi saya!",
      footer: "Dibuat dengan React & Tailwind CSS.",
    },
    period: {
      mandala: "12 Februari 2023 – 19 Februari 2026",
      training: "12 November – 25 November 2023",
      kelurahan: "01 April – 30 Mei 2021",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "HELLO, I'M",
      subtitle: "Bachelor of Computer Science from Universitas Pamulang. Experienced in Internet of Things (IoT) system development and web development — creating innovative solutions across various projects.",
      location: "Bogor, Indonesia",
      scroll: "Scroll",
    },
    stats: {
      yearsExp: "Years Exp",
      projects: "Projects",
      certifications: "Certifications",
    },
    about: {
      title: "About",
      highlight: "Me",
      p1: "My Bachelor's degree in Computer Science from Universitas Pamulang serves as the foundation of my career as a software engineer. With the experience and skills I've developed, I successfully create innovative solutions in Internet of Things (IoT) system development and contribute to web development projects.",
      p2: "I have a strong passion for technology, particularly in web development and Internet of Things.",
      location: "Location",
      email: "Email",
    },
    experience: {
      title: "Work",
      highlight: "Experience",
      section: "SECTION",
      showMore: "Show all",
      showLess: "Show less",
      more: "more",
      job1: {
        title: "Software Engineer",
        type: "Full-time",
        details: [
          "Designed, implemented, maintained, and developed core system projects — covering architecture design, coding, and system optimization for optimal performance.",
          "Contributed to company profile projects by designing and implementing secure, scalable, and high-performance backend architecture, and managing database operations.",
          "Performed database migration from legacy systems to new systems using MySQL — including structure analysis, data mapping & transformation, export-import, and data consistency verification.",
          "Client meetings discussing ongoing program development, including business requirements analysis.",
          "Actively contributed to IoT-integrated smart booking system projects — hardware design and IoT device installation.",
          "Bug identification and debugging to minimize production incidents — in-depth source code analysis and thorough testing.",
          "Developed a Human Resource Management System (HRIS) featuring payroll management, API authentication, and face recognition integration for mobile applications.",
        ],
      },
      job2: {
        title: "Web Developer Trainer",
        type: "Training",
        details: [
          "Designed structured curriculum for beginners mastering HTML, CSS, and JavaScript fundamentals.",
          "Delivered course materials through online platforms with interactive teaching methods.",
          "Facilitated group discussions and Q&A sessions.",
        ],
      },
      job3: {
        title: "Backend Developer",
        type: "Internship",
        details: [
          "Contributed to building the Bojongsari sub-district office information system website as a backend developer.",
          "Presented and demonstrated the website to all sub-district office staff.",
          "Deployed the website using the cPanel platform.",
        ],
      },
      companies: {
        mandala: "PT Mandala Dwipantara Proteksi",
        training: "Online Training",
        kelurahan: "Bojongsari Sub-district Office Depok",
      },
    },
    projects: {
      title: "Featured",
      highlight: "Projects",
      filters: ["All"],
      modal: { close: "Close" },
      items: [
        {
          name: "National Core System — Facultative & HR Module",
          desc: "Development of facultative and general HR modules for the national core system.",
          fullDesc: "This project covers the development of facultative and general HR modules within the national core system. The system handles participant data management, actuarial calculations, and corporate HR management.",
        },
        {
          name: "PT Askrida Conven Company Profile",
          desc: "Company profile website development for PT Askrida Conven.",
          fullDesc: "Design and implementation of a company profile website, covering backend architecture, database management, and deployment for PT Askrida Conven.",
        },
        {
          name: "Smart Booking System (IoT)",
          desc: "IoT-integrated smart booking system.",
          fullDesc: "IoT-integrated smart booking system project with Arduino hardware design, sensor installation, and Laravel backend for real-time room booking management.",
        },
        {
          name: "Employee Management System",
          desc: "HRIS with payroll, API, and face recognition.",
          fullDesc: "Human Resource Management System (HRIS) with employee payroll management, API authentication, and face recognition integration for mobile applications.",
        },
        {
          name: "E-Procurement System",
          desc: "Electronic procurement system for goods and services.",
          fullDesc: "E-procurement platform for goods and services procurement, including vendor management, tender process, and approval workflow.",
        },
        {
          name: "Control Management System",
          desc: "Control management system for operational monitoring.",
          fullDesc: "Control management system for company operational monitoring and management, including analytics dashboard and reporting.",
        },
        {
          name: "ERP System",
          desc: "Integrated Enterprise Resource Planning system.",
          fullDesc: "Enterprise Resource Planning system for integrated business management, covering finance, inventory, and HR modules.",
        },
      ],
    },
    education: {
      title: "Education",
      highlight: "& Organizations",
      history: "Education History",
      thesis: "Thesis",
      org: "Organizations",
    },
    skills: {
      title: "Skills",
      highlight: "& Expertise",
      softSkills: "Soft Skills",
    },
    certifications: {
      title: "Certifications",
      highlight: "& Training",
    },
    contact: {
      title: "Get In",
      highlight: "Touch",
      cta: "Hire Me",
      text: "I am open to collaboration opportunities, freelance, or full-time positions in software engineering, web development, and IoT. Feel free to reach out!",
      footer: "Built with React & Tailwind CSS.",
    },
    period: {
      mandala: "February 12, 2023 – February 19, 2026",
      training: "November 12 – November 25, 2023",
      kelurahan: "April 01 – May 30, 2021",
    },
  },
};

export default translations;
