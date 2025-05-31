// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');

    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }

    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.style.display = 'none';
                    q.querySelector('i').classList.remove('fa-chevron-up');
                    q.querySelector('i').classList.add('fa-chevron-down');
                }
            });

            // Toggle current FAQ
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });

    document.querySelector('.next').addEventListener('click', () => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    });

    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);

    // Pause on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                let nextIndex = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(nextIndex);
            }, 5000);
        });
    }

    // Form step navigation
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.form-step');
            const nextStepId = this.getAttribute('data-next');

            currentStep.classList.remove('active');
            document.getElementById(nextStepId).classList.add('active');

            // Update step indicator
            const step = document.querySelector(`.step[data-step="${nextStepId}"]`);
            if (step) {
                document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
                step.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.form-step');
            const prevStepId = this.getAttribute('data-prev');

            currentStep.classList.remove('active');
            document.getElementById(prevStepId).classList.add('active');

            // Update step indicator
            const step = document.querySelector(`.step[data-step="${prevStepId}"]`);
            if (step) {
                document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
                step.classList.add('active');
            }
        });
    });

    // Live chat button
    const chatBtn = document.querySelector('.chat-btn');
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            alert('Live chat functionality would connect to a chat service in production');
        });
    }

    // Modal functionality
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        document.querySelector('.close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});