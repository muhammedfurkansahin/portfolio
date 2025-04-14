document.addEventListener('DOMContentLoaded', function() {
    // Animasyonların başlatılması
    initializeAnimations();
    
    // Grafiklerin oluşturulması
    initializeCharts();
    
    // Portföy filtreleme özelliğinin etkinleştirilmesi
    initializePortfolioFilter();

    // Tema değiştirme işlevselliğini başlat
    initializeThemeSwitcher();
});

// Tema değiştirme işlevselliği
function initializeThemeSwitcher() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    
    if (!themeSwitcher) {
        console.error('Tema değiştirme butonu bulunamadı!');
        return;
    }
    
    const themeIcon = themeSwitcher.querySelector('i');
    
    // Local storage'dan kaydedilmiş temayı al
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Sayfa yüklendiğinde kaydedilmiş temayı uygula
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // İkon'u mevcut temaya göre güncelle
    updateThemeIcon(themeIcon, savedTheme);
    
    // Tema değiştirme butonuna tıklama olayı ekle
    themeSwitcher.addEventListener('click', function() {
        // Butona tıklandığında animasyon ekleyelim
        this.classList.add('clicked');
        
        // Mevcut temayı öğren
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Temayı değiştir
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Yeni temayı uygula
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Yeni temayı local storage'a kaydet
        localStorage.setItem('theme', newTheme);
        
        // İkonu güncelle
        updateThemeIcon(themeIcon, newTheme);
        
        // Animasyonu kaldır
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
        
        // Grafikleri yeniden oluştur (koyu mod renkleri için)
        setTimeout(() => {
            // Mevcut grafikleri temizle
            clearCharts();
            // Grafikleri yeniden oluştur
            initializeCharts();
        }, 300);
    });
    
    // İlk yüklemede, sayfa tamamen yüklendikten sonra tema değişikliğini garanti etmek 
    // için setTimeout kullanılabilir.
    setTimeout(() => {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        document.body.classList.add('theme-loaded');
    }, 300);
}

// Tema ikonunu güncelleme fonksiyonu
function updateThemeIcon(iconElement, theme) {
    if (!iconElement) return;
    
    if (theme === 'dark') {
        iconElement.className = 'fas fa-sun'; // Koyu modda güneş ikonu göster
    } else {
        iconElement.className = 'fas fa-moon'; // Açık modda ay ikonu göster
    }
}

// Grafikleri temizleme fonksiyonu
function clearCharts() {
    const chartIds = [
        'courseCompletionChart', 
        'projectSuccessChart', 
        'technicalSkillsChart', 
        'personalSkillsChart', 
        'techExperienceChart', 
        'learningTimelineChart', 
        'availabilityChart'
    ];
    
    chartIds.forEach(id => {
        const chartElement = document.getElementById(id);
        if (chartElement) {
            const chartInstance = Chart.getChart(chartElement);
            if (chartInstance) {
                chartInstance.destroy();
            }
        }
    });
}

// İlerleme çubuğu animasyonları
function initializeAnimations() {
    // İlerleme çubuklarını canlandırma
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 100);
    });

    // Sayaç animasyonları
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        counter.innerText = '0';
        
        const duration = 2000; // ms cinsinden süre
        const increment = Math.ceil(target / (duration / 16)); // 60FPS için yaklaşık değer
        
        function updateCount() {
            const current = parseInt(counter.innerText);
            if (current < target) {
                counter.innerText = Math.min(current + increment, target);
                setTimeout(updateCount, 16);
            }
        }
        
        setTimeout(updateCount, 400); // Animasyonu gecikme ile başlat
    });
    
    // Başarım öğeleri animasyonu
    const achievementProgressBars = document.querySelectorAll('.achievement-progress');
    achievementProgressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value;
        }, 500);
    });
}

// Tüm grafiklerin başlatılması
function initializeCharts() {
    // Tema renklerini kontrol et
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const isDarkMode = currentTheme === 'dark';
    
    // Grafik renk şemalarını ayarla
    const chartColors = getChartColorScheme(isDarkMode);
    
    createCourseCompletionChart(chartColors);
    createProjectSuccessChart(chartColors);
    createTechnicalSkillsChart(chartColors);
    createPersonalSkillsChart(chartColors);
    createTechExperienceChart(chartColors);
    createLearningTimelineChart(chartColors);
    createAvailabilityChart(chartColors);
}

// Tema için renk şeması oluşturucu
function getChartColorScheme(isDarkMode) {
    return {
        backgroundColor: isDarkMode ? '#343a40' : '#ffffff',
        textColor: isDarkMode ? '#f8f9fa' : '#666666',
        gridColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        colors: {
            blue: isDarkMode ? 'rgba(99, 148, 255, 0.7)' : 'rgba(54, 162, 235, 0.7)',
            blueBorder: isDarkMode ? 'rgba(99, 148, 255, 1)' : 'rgba(54, 162, 235, 1)',
            red: isDarkMode ? 'rgba(255, 120, 147, 0.7)' : 'rgba(255, 99, 132, 0.7)',
            redBorder: isDarkMode ? 'rgba(255, 120, 147, 1)' : 'rgba(255, 99, 132, 1)',
            yellow: isDarkMode ? 'rgba(255, 222, 125, 0.7)' : 'rgba(255, 206, 86, 0.7)',
            yellowBorder: isDarkMode ? 'rgba(255, 222, 125, 1)' : 'rgba(255, 206, 86, 1)',
            green: isDarkMode ? 'rgba(102, 221, 209, 0.7)' : 'rgba(75, 192, 192, 0.7)',
            greenBorder: isDarkMode ? 'rgba(102, 221, 209, 1)' : 'rgba(75, 192, 192, 1)',
            purple: isDarkMode ? 'rgba(179, 138, 255, 0.7)' : 'rgba(153, 102, 255, 0.7)',
            purpleBorder: isDarkMode ? 'rgba(179, 138, 255, 1)' : 'rgba(153, 102, 255, 1)',
            orange: isDarkMode ? 'rgba(255, 183, 98, 0.7)' : 'rgba(255, 159, 64, 0.7)',
            orangeBorder: isDarkMode ? 'rgba(255, 183, 98, 1)' : 'rgba(255, 159, 64, 1)'
        }
    };
}

// Ders tamamlama grafiği
function createCourseCompletionChart(chartColors) {
    const courseCtx = document.getElementById('courseCompletionChart');
    
    if (courseCtx) {
        new Chart(courseCtx, {
            type: 'doughnut',
            data: {
                labels: ['Tamamlanan', 'Devam Eden', 'Planlanan'],
                datasets: [{
                    data: [85, 10, 5],
                    backgroundColor: [
                        chartColors.colors.blue,
                        chartColors.colors.yellow,
                        chartColors.colors.red
                    ],
                    borderColor: [
                        chartColors.colors.blueBorder,
                        chartColors.colors.yellowBorder,
                        chartColors.colors.redBorder
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: chartColors.textColor
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        },
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Proje başarı oranları grafiği
function createProjectSuccessChart(chartColors) {
    const projectCtx = document.getElementById('projectSuccessChart');
    
    if (projectCtx) {
        new Chart(projectCtx, {
            type: 'bar',
            data: {
                labels: ['Mobil Uygulamalar', 'Web Projeleri', 'Backend API', 'UI/UX Tasarım', 'Veri Tabanı'],
                datasets: [{
                    label: 'Tamamlanma Oranı (%)',
                    data: [95, 88, 92, 75, 85],
                    backgroundColor: [
                        chartColors.colors.blue,
                        chartColors.colors.red,
                        chartColors.colors.yellow,
                        chartColors.colors.green,
                        chartColors.colors.purple
                    ],
                    borderColor: [
                        chartColors.colors.blueBorder,
                        chartColors.colors.redBorder,
                        chartColors.colors.yellowBorder,
                        chartColors.colors.greenBorder,
                        chartColors.colors.purpleBorder
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: chartColors.gridColor
                        },
                        ticks: {
                            color: chartColors.textColor
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: chartColors.textColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Teknik beceriler grafiği
function createTechnicalSkillsChart(chartColors) {
    const techSkillsCtx = document.getElementById('technicalSkillsChart');
    
    if (techSkillsCtx) {
        new Chart(techSkillsCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Mobil Geliştirme',
                    'Backend',
                    'Veritabanı',
                    'CI/CD',
                    'Test',
                    'Cloud',
                    'Güvenlik'
                ],
                datasets: [{
                    label: 'Beceri Seviyesi',
                    data: [95, 80, 85, 75, 90, 70, 65],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: chartColors.colors.blueBorder,
                    pointBackgroundColor: chartColors.colors.blueBorder,
                    pointBorderColor: chartColors.backgroundColor,
                    pointHoverBackgroundColor: chartColors.backgroundColor,
                    pointHoverBorderColor: chartColors.colors.blueBorder
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            color: chartColors.textColor,
                            backdropColor: 'transparent'
                        },
                        angleLines: {
                            color: chartColors.gridColor
                        },
                        grid: {
                            color: chartColors.gridColor
                        },
                        pointLabels: {
                            color: chartColors.textColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Kişisel beceriler grafiği
function createPersonalSkillsChart(chartColors) {
    const personalSkillsCtx = document.getElementById('personalSkillsChart');
    
    if (personalSkillsCtx) {
        new Chart(personalSkillsCtx, {
            type: 'polarArea',
            data: {
                labels: [
                    'İletişim',
                    'Liderlik',
                    'Problem Çözme',
                    'Takım Çalışması',
                    'Adaptasyon',
                    'Zaman Yönetimi'
                ],
                datasets: [{
                    data: [90, 85, 95, 90, 88, 85],
                    backgroundColor: [
                        chartColors.colors.red,
                        chartColors.colors.blue,
                        chartColors.colors.yellow,
                        chartColors.colors.green,
                        chartColors.colors.purple,
                        chartColors.colors.orange
                    ],
                    borderColor: [
                        chartColors.colors.redBorder,
                        chartColors.colors.blueBorder,
                        chartColors.colors.yellowBorder,
                        chartColors.colors.greenBorder,
                        chartColors.colors.purpleBorder,
                        chartColors.colors.orangeBorder
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            display: true,
                            color: chartColors.textColor
                        },
                        grid: {
                            color: chartColors.gridColor
                        },
                        angleLines: {
                            color: chartColors.gridColor
                        },
                        pointLabels: {
                            color: chartColors.textColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: chartColors.textColor
                        }
                    },
                    tooltip: {
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Teknoloji deneyimi grafiği
function createTechExperienceChart(chartColors) {
    const techExpCtx = document.getElementById('techExperienceChart');
    
    if (techExpCtx) {
        new Chart(techExpCtx, {
            type: 'pie',
            data: {
                labels: ['Flutter', 'Android (Kotlin)', 'iOS (Swift)', 'React Native', 'Backend (Node.js)', 'Diğer'],
                datasets: [{
                    data: [40, 25, 15, 10, 7, 3],
                    backgroundColor: [
                        chartColors.colors.blue,
                        chartColors.colors.green,
                        chartColors.colors.red,
                        chartColors.colors.yellow,
                        chartColors.colors.purple,
                        chartColors.colors.orange
                    ],
                    borderColor: [
                        chartColors.colors.blueBorder,
                        chartColors.colors.greenBorder,
                        chartColors.colors.redBorder,
                        chartColors.colors.yellowBorder,
                        chartColors.colors.purpleBorder,
                        chartColors.colors.orangeBorder
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: chartColors.textColor
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        },
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Öğrenme yolculuğu zaman çizelgesi grafiği
function createLearningTimelineChart(chartColors) {
    const timelineCtx = document.getElementById('learningTimelineChart');
    
    if (timelineCtx) {
        new Chart(timelineCtx, {
            type: 'line',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Öğrenilen Teknoloji Sayısı',
                    data: [2, 5, 8, 12, 15, 20, 25, 30],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: chartColors.colors.blueBorder,
                    borderWidth: 2,
                    pointBackgroundColor: chartColors.colors.blueBorder,
                    pointBorderColor: chartColors.backgroundColor,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Teknoloji Sayısı',
                            color: chartColors.textColor
                        },
                        ticks: {
                            color: chartColors.textColor
                        },
                        grid: {
                            color: chartColors.gridColor
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Yıl',
                            color: chartColors.textColor
                        },
                        ticks: {
                            color: chartColors.textColor
                        },
                        grid: {
                            color: chartColors.gridColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: chartColors.textColor
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Müsaitlik grafiği
function createAvailabilityChart(chartColors) {
    const availabilityCtx = document.getElementById('availabilityChart');
    
    if (availabilityCtx) {
        new Chart(availabilityCtx, {
            type: 'bar',
            data: {
                labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Hafta Sonu'],
                datasets: [{
                    label: 'Çalışma Saatleri',
                    data: [8, 9, 10, 8, 7, 4],
                    backgroundColor: chartColors.colors.green,
                    borderColor: chartColors.colors.greenBorder,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 12,
                        title: {
                            display: true,
                            text: 'Saat',
                            color: chartColors.textColor
                        },
                        ticks: {
                            color: chartColors.textColor
                        },
                        grid: {
                            color: chartColors.gridColor
                        }
                    },
                    x: {
                        ticks: {
                            color: chartColors.textColor
                        },
                        grid: {
                            color: chartColors.gridColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: chartColors.backgroundColor === '#ffffff' ? '#343a40' : '#f8f9fa',
                        titleColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40',
                        bodyColor: chartColors.backgroundColor === '#ffffff' ? '#f8f9fa' : '#343a40'
                    }
                }
            }
        });
    }
}

// Portföy filtreleme işlevselliği
function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-category');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Aktif filtre düğmesini güncelle
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Portföy öğelerini filtrele
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 500); // Geçiş süresi kadar bekle
                    }
                });
            });
        });
    }
}

// Sayfa yüklendiğinde tema tercihini kontrol et
document.addEventListener('DOMContentLoaded', function() {
    // Sistem tema tercihi kontrolü
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Local storage'da tema ayarı yoksa, sistem tercihini kullan
    if (!localStorage.getItem('theme')) {
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Tema değişikliklerini dinle ve gerekli güncellemeleri yap
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
            
            // Temaya göre grafikleri güncelle
            clearCharts();
            initializeCharts();
        }
    });
    
    // Animasyonların başlatılması
    initializeAnimations();
    
    // Grafiklerin oluşturulması
    initializeCharts();
    
    // Portföy filtreleme özelliğinin etkinleştirilmesi
    initializePortfolioFilter();

    // Tema değiştirme işlevselliğini başlat
    initializeThemeSwitcher();
}); 