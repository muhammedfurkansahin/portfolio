document.addEventListener("DOMContentLoaded", function() {
    // Radar Chart - Teknik Yetenekler
    const technicalSkillsCtx = document.getElementById('technicalSkillsChart').getContext('2d');
    const technicalSkillsChart = new Chart(technicalSkillsCtx, {
        type: 'radar',
        data: {
            labels: ['Problem Çözme', 'Algoritma', 'Veritabanı Tasarımı', 'API Entegrasyonu', 'Sistem Mimarisi', 'UI/UX Anlayışı'],
            datasets: [{
                label: 'Yetkinlik (1-10)',
                data: [9, 8, 7, 8, 7, 8],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });

    // Radar Chart - Kişisel Yetenekler
    const personalSkillsCtx = document.getElementById('personalSkillsChart').getContext('2d');
    const personalSkillsChart = new Chart(personalSkillsCtx, {
        type: 'radar',
        data: {
            labels: ['İletişim', 'Takım Çalışması', 'Liderlik', 'Zaman Yönetimi', 'Adaptasyon', 'Yaratıcılık'],
            datasets: [{
                label: 'Yetkinlik (1-10)',
                data: [8, 9, 7, 8, 9, 8],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });

    // Bar Chart - Teknoloji Deneyimi
    const techExpCtx = document.getElementById('techExperienceChart').getContext('2d');
    const techExpChart = new Chart(techExpCtx, {
        type: 'bar',
        data: {
            labels: ['Android', 'Java', 'Kotlin', 'SQLite', 'Firebase', 'Node.js', 'Flutter', 'Vue.js'],
            datasets: [{
                label: 'Deneyim (Yıl)',
                data: [5, 5, 3, 4, 3, 2, 1, 1],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 6
                }
            }
        }
    });

    // Doughnut Chart - Proje Başarı Oranları
    const successRateCtx = document.getElementById('projectSuccessChart').getContext('2d');
    const successRateChart = new Chart(successRateCtx, {
        type: 'doughnut',
        data: {
            labels: ['Zamanında Tamamlanan', 'Geciken', 'Devam Eden', 'Geliştirme Aşamasında'],
            datasets: [{
                label: 'Projeler',
                data: [70, 10, 15, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Line Chart - Öğrenme Süreci Zaman Çizelgesi
    const timelineCtx = document.getElementById('learningTimelineChart').getContext('2d');
    const timelineChart = new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Java',
                data: [60, 70, 75, 85, 90, 95, 95],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Android',
                data: [50, 65, 75, 80, 85, 90, 95],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Kotlin',
                data: [0, 0, 40, 60, 70, 85, 90],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Yetkinlik (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Yıl'
                    }
                }
            }
        }
    });

    // Progress barları animasyonu
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.width = value + "%";
        }, 500);
    });
}); 