const form = document.getElementById("websiteForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = form.querySelector(".submit-button");

    submitButton.disabled = true;

    submitButton.innerHTML = "Submitting...";

    try {

        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Submission failed.");
        }

        // Submission worked.
        // Send the client to the separate thank-you page.
        window.location.href = "thank-you.html";

    } catch (error) {

        alert(
            "Something went wrong while submitting the form. Please try again."
        );

        submitButton.disabled = false;

        submitButton.innerHTML =
            'Submit Questionnaire <span>→</span>';
    }

});