function toggleSection(sectionId) {
    const sectionContent = document.getElementById(sectionId);
    if (sectionContent.style.display === "none" || sectionContent.style.display === "") {
        sectionContent.style.display = "block";
    } else {
        sectionContent.style.display = "none";
    }
}