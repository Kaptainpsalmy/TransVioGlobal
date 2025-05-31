document.addEventListener('DOMContentLoaded', function() {
    // Tracking form submission
    const trackingForm = document.getElementById('trackingForm');
    const trackingResults = document.getElementById('trackingResults');

    if (trackingForm && trackingResults) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const trackingNumber = document.getElementById('trackingNumber').value.trim();

            if (trackingNumber) {
                // In a real app, this would call an API to get tracking info
                document.getElementById('displayTrackingNumber').textContent = trackingNumber;
                trackingResults.style.display = 'block';

                // Scroll to results
                trackingResults.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Print button
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Simulate progress bar animation
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        // In a real app, this would update based on actual shipment status
        progressBar.style.width = '75%'; // 75% complete (out for delivery)
    }
});