function customFormat(value) {
 
  const locale = d3.formatLocale({
      decimal: ",",
      thousands: "\u00a0",
      grouping: [3],
    })
  const fformat = locale.format(",")
      // Check if the value is within the range to be displayed as "k" or "m"
      if (value >= 1000 && value < 1000000) {
          // Round the value and append "k" suffix
          return fformat(value);
      } else if (value >= 1000000) {
          // Round the value and append "m" suffix
          return (value / 1000000).toFixed(1) + " million";
      }
}

function startCountingAnimation(elementId, endValue) {
    const element = document.getElementById(elementId);
    const tolerance = 1; 
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const interpolator = d3.interpolateNumber(0, endValue);
                const timer = d3.timer(function(elapsed) {
                    const currentValue = Math.round(interpolator(elapsed / 1000)); // Round interpolated value
                    d3.select(element).text(customFormat(currentValue));
                    if (currentValue >= endValue - tolerance) { // Check if current value is close to or exceeds end value
                        d3.select(element).text(customFormat(endValue)); // Ensure the end value is displayed
                        timer.stop();
                    }
                });
                observer.unobserve(element);
            }
        });
    }, { threshold: 0 });
    observer.observe(element);
}



// Call the function to start counting animations for each key figure
startCountingAnimation('key-figure-1', 959000);
startCountingAnimation('key-figure-2', 1800000);
startCountingAnimation('key-figure-3', 265000);
startCountingAnimation('key-figure-4', 558000);
startCountingAnimation('key-figure-5', 387000);
startCountingAnimation('key-figure-6', 634000);
