function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content) => {
        content.classList.add("hidden");
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach((btn) => {
        btn.classList.remove("bg-green-600", "text-white", "font-semibold");
        btn.classList.add("text-gray-600");
    });

    // Show selected tab content
    document.getElementById(tabName).classList.remove("hidden");

    // Add active class to clicked button
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    activeBtn.classList.remove("text-gray-600");
    activeBtn.classList.add("bg-green-600", "text-white", "font-semibold");
    }
