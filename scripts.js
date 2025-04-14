// Initialize all charts and progress bars when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize radar chart for programming skills
    const programmingCtx = document.getElementById('programmingSkillsChart').getContext('2d');
    const programmingChart = new Chart(programmingCtx, {
        type: 'radar',
        data: {
            labels: ['Flutter', 'Dart', 'JavaScript', 'Java', 'Python', 'C#', 'HTML/CSS'],
            datasets: [{
                label: 'Skill Level',
                data: [95, 90, 85, 80, 75, 65, 85],
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                pointBackgroundColor: 'rgba(13, 110, 253, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(13, 110, 253, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Initialize doughnut chart for tools expertise
    const toolsCtx = document.getElementById('toolsExpertiseChart').getContext('2d');
    const toolsChart = new Chart(toolsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Firebase', 'Git & GitHub', 'VS Code', 'Android Studio', 'Figma'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Animate circular progress bars
    const progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });

    // Initialize achievements progress bars
    const achievementBars = document.querySelectorAll('.achievement-progress');
    achievementBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });

    // Initialize portfolio filters
    const portfolioFilters = document.querySelectorAll('.portfolio-category');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            portfolioFilters.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked filter
            this.classList.add('active');
            
            const category = this.getAttribute('data-filter');
            
            // Show/hide portfolio items based on filter
            portfolioItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize availability chart
    const availabilityCtx = document.getElementById('availabilityChart').getContext('2d');
    const availabilityChart = new Chart(availabilityCtx, {
        type: 'bar',
        data: {
            labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
            datasets: [{
                label: 'Uygunluk Saatleri',
                data: [8, 8, 6, 8, 4, 2, 0],
                backgroundColor: 'rgba(40, 167, 69, 0.7)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    title: {
                        display: true,
                        text: 'Saat'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Gün'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Initialize project success chart
    const projectSuccessCtx = document.getElementById('projectSuccessChart').getContext('2d');
    const projectSuccessChart = new Chart(projectSuccessCtx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Proje Başarı Oranı',
                data: [85, 88, 92, 95, 97],
                fill: true,
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Başarı Oranı (%)'
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

    // Initialize course completion chart
    const courseChartCtx = document.getElementById('courseCompletionChart').getContext('2d');
    const courseChart = new Chart(courseChartCtx, {
        type: 'polarArea',
        data: {
            labels: ['Mobile Development', 'UI/UX Design', 'Project Management', 'Cloud Services', 'Testing'],
            datasets: [{
                data: [25, 20, 15, 20, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                title: {
                    display: true,
                    text: 'Tamamlanan Kurslar (Saat)'
                }
            }
        }
    });

    // Animate on scroll
    const animateElements = document.querySelectorAll('.timeline-item, .portfolio-card, .contact-info, .contact-form, .availability');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}); 