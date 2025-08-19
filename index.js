document.getElementById("downloadCVBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "DZHIVHUHO NETSHEDZO CV.docx";
    link.download = "DZHIVHUHO NETSHEDZO CV.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Show contact info function
  document.getElementById("contactInfoBtn").addEventListener("click", function () {
    const contactDiv = document.getElementById("contactDetails");
    contactDiv.style.display = contactDiv.style.display === "none" ? "block" : "none";
  });