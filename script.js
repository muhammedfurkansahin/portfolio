// DOM içeriği yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Sayfa gezinme (smooth scrolling)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Mobil menüyü kapat (eğer açıksa)
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Animasyonlar için waypoints
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkInView = () => {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('show');
            }
        });
    };
    
    // İlk yükleme kontrolü
    checkInView();
    
    // Kaydırma sırasında kontrol
    window.addEventListener('scroll', checkInView);
    
    // Yetenek barları animasyonu
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };
    
    // Başlangıçta yetenek barlarını animasyon ile doldur
    animateSkillBars();
    
    // Başarı barları animasyonu
    const achievementBars = document.querySelectorAll('.achievement-progress');
    
    const animateAchievementBars = () => {
        achievementBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = value;
        });
    };
    
    // Başlangıçta başarı barlarını animasyon ile doldur
    animateAchievementBars();
    
    // Proje filtresi
    const categoryButtons = document.querySelectorAll('.portfolio-category');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktif kategori butonunu güncelle
            document.querySelector('.portfolio-category.active').classList.remove('active');
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === '*') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter.replace('.', ''))) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Radar Chart - Programlama & Geliştirme Yetenekleri
    const radarChart = document.getElementById('radarChart');
    if (radarChart) {
        new Chart(radarChart, {
            type: 'radar',
            data: {
                labels: ['Flutter', 'Dart', 'Firebase', 'UI/UX', 'State Management', 'API Entegrasyonu'],
                datasets: [{
                    label: 'Yetenek Seviyesi',
                    data: [90, 85, 80, 75, 85, 80],
                    backgroundColor: 'rgba(74, 107, 223, 0.3)',
                    borderColor: '#4a6bdf',
                    borderWidth: 2,
                    pointBackgroundColor: '#4a6bdf',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#4a6bdf'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#343a40',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 14
                        },
                        padding: 15,
                        displayColors: false
                    }
                }
            }
        });
    }
    
    // Doughnut Chart - Geliştirme Araçları Uzmanlığı
    const doughnutChart = document.getElementById('doughnutChart');
    if (doughnutChart) {
        new Chart(doughnutChart, {
            type: 'doughnut',
            data: {
                labels: ['Android Studio', 'VS Code', 'Firebase Console', 'Git/GitHub', 'Figma'],
                datasets: [{
    // Beceri grafiği - Araçlar
    const toolsChart = document.getElementById('toolsChart');
    if (toolsChart) {
        new Chart(toolsChart, {
            type: 'polarArea',
            data: {
                labels: ['Git', 'Android Studio', 'VS Code', 'Firebase', 'Figma'],
                datasets: [{
                    data: [90, 95, 80, 85, 75],
                    backgroundColor: [
                        'rgba(74, 107, 223, 0.7)',
                        'rgba(40, 167, 69, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(23, 162, 184, 0.7)',
                        'rgba(220, 53, 69, 0.7)'
                    ],
                    borderColor: [
                        '#4a6bdf',
                        '#28a745',
                        '#ffc107',
                        '#17a2b8',
                        '#dc3545'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            padding: 15,
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#343a40',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 14
                        },
                        padding: 15,
                        displayColors: false
                    }
                }
            }
        });
    }
    
    // Proje başarı grafiği
    const projectSuccessChart = document.getElementById('projectSuccessChart');
    if (projectSuccessChart) {
        new Chart(projectSuccessChart, {
            type: 'bar',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Tamamlanan Projeler',
                    data: [4, 7, 12, 15, 20],
                    backgroundColor: 'rgba(74, 107, 223, 0.7)',
                    borderColor: '#4a6bdf',
                    borderWidth: 1
                }, {
                    label: 'Müşteri Memnuniyeti (%)',
                    data: [85, 88, 90, 93, 95],
                    backgroundColor: 'rgba(40, 167, 69, 0.7)',
                    borderColor: '#28a745',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#343a40',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 14
                        },
                        padding: 15
                    }
                }
            }
        });
    }
    
    // Kurs tamamlama grafiği
    const courseCompletionChart = document.getElementById('courseCompletionChart');
    if (courseCompletionChart) {
        new Chart(courseCompletionChart, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Tamamlanan Kurslar',
                    data: [3, 7, 12, 18, 25],
                    fill: true,
                    backgroundColor: 'rgba(74, 107, 223, 0.2)',
                    borderColor: '#4a6bdf',
                    tension: 0.4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#4a6bdf',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#343a40',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 14
                        },
                        padding: 15
                    }
                }
            }
        });
    }
    
    // İlerleme Daireleri Animasyonu
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });
    
    // İletişim formu gönderim işlemi
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Normalde burada bir AJAX isteği olur
            console.log('Form verileri:', formValues);
            
            // Başarılı gönderim mesajı (gerçek uygulamada AJAX cevabından sonra yapılır)
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.';
            contactForm.reset();
            contactForm.appendChild(successMessage);
            
            // 5 saniye sonra mesajı kaldır
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Sayaç animasyonu (İstatistikler için)
    const counterElements = document.querySelectorAll('.stat-card h3');
    
    const startCounters = () => {
        counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 saniye
            const step = Math.ceil(target / (duration / 20)); // 20ms aralıklarla güncelleme
            
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = current;
                }
            }, 20);
        });
    };
    
    // Sayfa yüklenirken sayaçları başlat
    startCounters();
}); 