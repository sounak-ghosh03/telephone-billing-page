// Smooth Scrolling for Navigation Links
document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Fetch Billing History by Customer ID
document
    .querySelector("#billing-history form")
    .addEventListener("submit", (e) => {
        e.preventDefault();
        const customerId = document.getElementById("customer-id").value.trim();

        if (!customerId) {
            alert("Please enter a valid Customer ID.");
            return;
        }

        // Mock data (can be replaced with API calls)
        const mockData = [
            { date: "2024-10-01", plan: "Premium", amount: "$20" },
            { date: "2024-11-01", plan: "Premium", amount: "$20" },
            { date: "2024-09-01", plan: "Basic", amount: "$10" },
            { date: "2024-08-01", plan: "Family", amount: "$50" },
            { date: "2025-07-01", plan: "Premium", amount: "$20" },
            { date: "2025-06-01", plan: "Family", amount: "$50" },
            { date: "2025-05-01", plan: "Basic", amount: "$10" },
        ];

        // Populate the table dynamically only when "Fetch History" is clicked
        const table = document.querySelector("#billing-history table");

        // Clear existing rows (except header)
        const rows = table.querySelectorAll("tr:not(:first-child)");
        // const rows = table.querySelectorAll("tr");
        rows.forEach((row) => row.remove());

        // Add new rows from mock data
        mockData.forEach((entry) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.plan}</td>
            <td>${entry.amount}</td>
        `;
            table.appendChild(row);
        });

        alert(
            `Billing history fetched successfully for Customer ID: ${customerId}`
        );
        targetElement.scrollIntoView({ behavior: "smooth" });
    });

// Contact Form Validation
document.querySelector("#contact form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for your message. We will get back to you soon.");
    document.querySelector("#contact form").reset(); // Reset the form
});
