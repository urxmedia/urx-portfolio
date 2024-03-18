// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

// Hero section typing animation
var typed = new Typed("#backend-developer-hero-animation", {
  strings: ["<i>Backend Developer</i>"],
  typeSpeed: 50,
  smartBackspace: true,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// Download CV
var downloadCVButton = document.getElementById("download-cv-button");
downloadCVButton.addEventListener("click", downloadCV);

function downloadCV() {
  window.open("CV.pdf");
}

// Handle Project Details View popup

// Get the popup and button objects
const popup = document.getElementById("popup");
const overlay = document.getElementById("popup-overlay");
const closeButton = document.getElementById("popup-close-button");
const projectSummaryButtons = document.querySelectorAll(
  ".project-summary-button"
);
const keyResponsibilitiesButtons = document.querySelectorAll(
  ".key-responsibilities-button"
);

// Add event listener for close button
closeButton.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

// Define project details
let projectDetails = new Map();

projectDetails.set("rubicon", {
  project_summary: `
  <span class="work-experience-bold-text">Rubicon</span> Platform provides a collection of containerized micro-services for delivering scalable, rapidly deployable, tools for Comcast employees. Rubicon Platform currently supports 30 services, 4k+ users, and is used by 60 plus teams. Running in 6 data centres across OpenStack (ElasticCloud CH2) and VIVA CH2. Supporting CI/CD pipeline, Kubernetes/Rancher orchestration, and Docker containerization.
  <br/><br/>
  Key functions of Rubicon team: AUDITING Tools (BroadSoft: User access audit / report, ADTRAN: Customer device audit / report, CDR: Customer call records audit / report), GATEWAY APIs (BroadSoft: Application Server / Network Server gateway, ADTRAN: Device management gateway), PROVISIONING Tools (BroadSoft: account & user configuration management, ADTRAN: configuration management, device reboot, firmware update, User Access Control: Internal, employee only, tool for managing access to BroadSoft Servers. Tool links employee account to LDAP. Allowing supervisor to manage access.)
  `,
  key_responsibilities: [
    `
    Worked on <span class="work-experience-bold-text">development</span> team for various APIs under the Rubicon project. These APIs are consumed by other projects in Comcast; Prime role was as Go developer to <span class="work-experience-bold-text">implement new features</span> and <span class="work-experience-bold-text">update existing features (based on client requirements)</span> on various Rubicon applications; All Rubicon applications are based on the <span class="work-experience-bold-text">Echo web framework</span> of Go
    `,
    `
    Exchange of <span class="work-experience-bold-text">JSON</span> data using <span class="work-experience-bold-text">REST APIs</span> within Rubicon applications and also with applications from other projects; <span class="work-experience-bold-text">CRUD (Create, Read, Update, Delete)</span> operations implemented to interact with data stored in backend <span class="work-experience-bold-text">ElasticSearch</span> database server
    `,
    `
    <span class="work-experience-bold-text">Hazelcast IMDG</span> is used for <span class="work-experience-bold-text">caching</span> data inside Rubicon applications; <span class="work-experience-bold-text">Credentials management</span> for Rubicon applications using <span class="work-experience-bold-text">Hashicorp Vault/span>; <span class="work-experience-bold-text">Task management</span> in Rubicon project is done using <span class="work-experience-bold-text">Rally</span>
    `,
    `
    Worked on Bash scripting to automate certain processes in Rubicon apps
    `,
    `
    Unit Testing of newly implemented features and corrected features
    `,
    `
    The <span class="work-experience-bold-text">Rubicon Kubernetes clusters</span> are installed and configured with the <span class="work-experience-bold-text">Rancher Kubernetes Engine (RKE)</span>.
    `,
    `
    <span class="work-experience-bold-text">CI/CD pipeline</span> is configured and managed using <span class="work-experience-bold-text">Concourse</span>.
    `,
    `
    <span class="work-experience-bold-text">Tools and Technologies used:</span> Go, Bash, Docker, Kubernetes, Helm, Rancher, Concourse, Artifactory, Git, GitHub, ElasticSearch (DB), Hazelcast IMDG (cache), Postman, Splunk
    `,
  ],
});

projectDetails.set("mtcil", {
  project_summary: `
  <span class="work-experience-bold-text">MTCIL</span> is a layer in the Mavenir Webscale Platform (MWP) that provides 3GPP and cloud-native compliant northbound and southbound interfaces for OSS, ORAN, SMO and PaaS integrations. It delivers the high levels of reliability, agility and scalability that are expected of distributed and cloud-native systems. <span class="work-experience-bold-text">MTCIL backend is used by telecom companies providing 3G, 4G and 5G services.</span>
  `,
  key_responsibilities: [
    `
    Worked on <span class="work-experience-bold-text">LIMaaS (Lawful Interception Management as a Service)</span> module of MTCIL; LIMaaS feature is <span class="work-experience-bold-text">used by 5G and 4G networks</span> to provide <span class="work-experience-bold-text">Lawful Interception</span> functionality to <span class="work-experience-bold-text">Law Enforcement Agencies</span>
    `,
    `
    Prime role was as <span class="work-experience-bold-text">Go developer</span> to <span class="work-experience-bold-text">implement new features</span> and <span class="work-experience-bold-text">update existing features (based on client requirements)</span> on the two <span class="work-experience-bold-text">sub-modules of LIMaaS - LI Manager and LI Proxy</span>
    `,
    `
    Exchange of <span class="work-experience-bold-text">JSON</span> and <span class="work-experience-bold-text">XML</span> data using <span class="work-experience-bold-text">REST APIs</span> and between LIMaaS components and other MTCIL components; <span class="work-experience-bold-text">CRUD (Create, Read, Update, Delete)</span> operations implemented to interact with data stored in backend <span class="work-experience-bold-text">Couchbase server</span>
    `,
    `
    Security of application interfaces using TLS
    `,
    `
    Worked on Bash scripting to automate certain processes in LI modules
    `,
    `
    Used <span class="work-experience-bold-text">Kafka</span> as <span class="work-experience-bold-text">Message Queue</span> for Interfacing between 5G/4G CNFs and LI proxy
    `,
    `
    Unit Testing of newly implemented features and corrected features
    `,
    `
    Worked on bug fixes for both LI modules
    `,
    `
    <span class="work-experience-bold-text">Tools and Technologies used:</span> Go, Bash, Docker, Kubernetes, Helm, Git, Bitbucket, Couchbase, Kafka, Etcd, Postman
    `,
  ],
});

projectDetails.set("bcp", {
  project_summary: `
  The project involves development of a business cloud platform that allows zero-touch provisioning of network-services at end-customer premises and the cloud infrastructure. <span class="work-experience-bold-text">BCP</span> is Comcast’s platform for serving next-generation business product portfolio, providing native capabilities, withing Comcast to innovate on behalf of customers and for the customers.
  <br/><br/>
  This involves solving the customers’ pain points of maintaining and expanding infrastructure physically within the branch or virtually within a cloud or geographically. The focus for this platform and team is to build, develop and integrate solutions that enable orchestration and control of services and underlying resources such as compute, network and storage of every customer.
  `,
  key_responsibilities: [
    `
    Involved in the development & maintenance of an end-to-end <span class="work-experience-bold-text">Telemetry Framework</span> consisting of separate components running on separate servers; Development tasks mostly involved consistent development, maintenance, bug fixing and updating of the components based on client requirements
    `,
    `
    <span class="work-experience-bold-text">Components developed: Monitoring Probe, CPE Exporter, Metrics Collector</span>
    `,
    `
    <span class="work-experience-bold-text">A. Monitoring Probe (developed using Golang)</span> - collects system metrics using <span class="work-experience-bold-text">REST API</span> exposed by <span class="work-experience-bold-text">Netdata</span> exporter, <span class="work-experience-bold-text">CPE Exporter</span> and some other 3rd party APIs, streams them periodically through <span class="work-experience-bold-text">gRPC</span> to Metrics Collector, and runs on docker; <span class="work-experience-bold-text">B. CPE Exporter (developed using Golang, runs as Linux service)</span> - collects some specific <span class="work-experience-bold-text">service metrics</span> and exposes them as <span class="work-experience-bold-text">REST API</span> for Monitoring Probe to consume; <span class="work-experience-bold-text">C. Metrics Collector (developed using Java)</span> - runs on the cloud; receives metrics through <span class="work-experience-bold-text">gRPC</span> from Monitoring Probe and exposes them to <span class="work-experience-bold-text">Prometheus DB</span> which then are queried and displayed by <span class="work-experience-bold-text">Grafana Web UI</span>
    `,
    `
    Other tasks included: Installer development in Bash Scripting for CPE Telemetry Deployment, Task and Bug tracking and fixing using JIRA, monitoring metrics in Grafana, Telemetry package release management, building packages using CI/CD pipeline
    `,
    `
    <span class="work-experience-bold-text">Tools and Technologies used:</span> Go, Bash, Git, GitHub, Jenkins, Docker, Docker Compose, Maven, Kubernetes, Nexus Repository, Prometheus, Couchbase, Netdata, Grafana, Node Exporter
    `,
  ],
});

projectDetails.set("cp", {
  project_summary: `
  This project involves creation (using HP Exstream) and delivery of Insurance policy forms for customers of GAIC.
  `,
  key_responsibilities: [
    `
    Worked on GAIC’s CP project under HCL Technologies
    `,
    `
    Involved in development and maintenance of Web Application using Core Java as the primary language for Automating the generation of Insurance forms (using Exstream engine in the background)
    `,
    `
    Insurance forms development using HP Exstream
    `,
    `
    Tools and Technologies used: HP Exstream, HP Application Lifecycle Management (ALM), Service Now, JIRA, SOAP UI, Core Java, JSP, Servlets, Eclipse, MySQL Server
    `,
  ],
});

// Add event listener for Project Summary buttons
projectSummaryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    launchPopup(button.id);
  });
});

// Add event listener for Key Responsibilities buttons
keyResponsibilitiesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    launchPopup(button.id);
  });
});

function launchPopup(buttonID) {
  // Get the button category and project name
  const projectName = buttonID.substring(0, buttonID.indexOf("-"));
  const buttonCategory = buttonID.substring(buttonID.indexOf("-") + 1);

  switch (buttonCategory) {
    case "project-summary":
      document.getElementById("popup-title").innerHTML = "Project Summary";

      const projectSummary = projectDetails.get(projectName).project_summary;
      document.getElementById("popup-body").innerHTML = projectSummary;
      break;

    case "key-responsibilities":
      const keyResponsibilities =
        projectDetails.get(projectName).key_responsibilities;
      const keyResponsibilitiesList = document.createElement("ul");
      keyResponsibilities.forEach((responsibility) => {
        const responsibilityItem = document.createElement("li");
        responsibilityItem.innerHTML = responsibility;
        keyResponsibilitiesList.appendChild(responsibilityItem);
      });

      document.getElementById("popup-title").innerHTML = "Key Responsibilities";

      let popupBody = document.getElementById("popup-body");
      popupBody.innerHTML = "";
      popupBody.appendChild(keyResponsibilitiesList);
      break;
  }

  popup.classList.add("active");
  overlay.classList.add("active");
}

// Handle Contact Form submission
const contactFormAlert = document.getElementById("contact-form-alert");
const contactFormAlertMessage = document.getElementById("alert-message");
const contactFormOKButton = document.getElementById("alert-ok-button");

window.onload = function () {
  document.getElementById("contactFormNameBox").innerHTML = "";
  document.getElementById("contactFormEmailBox").innerHTML = "";
  document.getElementById("contactFormSubjectBox").innerHTML = "";
  document.getElementById("comment").innerHTML = "";

  emailjs.init({
    publicKey: "8ehYuKdFueYQh0PqI",
  });

  const contactMeForm = document.getElementById("contact-me-submit-form");
  contactMeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("gmail_service", "contact_form", this).then(
      () => {
        document.getElementById("contactFormNameBox").value = "";
        document.getElementById("contactFormEmailBox").value = "";
        document.getElementById("contactFormSubjectBox").value = "";
        document.getElementById("comment").value = "";

        contactFormAlertMessage.innerHTML =
          "Thank You! Your contact form has been successfully submitted.";
        contactFormAlert.classList.add("active");
        overlay.classList.add("active");
      },
      (error) => {
        document.getElementById("contactFormNameBox").value = "";
        document.getElementById("contactFormEmailBox").value = "";
        document.getElementById("contactFormSubjectBox").value = "";
        document.getElementById("comment").value = "";

        contactFormAlertMessage.innerHTML = "ERROR: " + error;
        contactFormAlert.classList.remove("active");
        overlay.classList.remove("active");
      }
    );
  });
};

contactFormOKButton.addEventListener("click", () => {
  contactFormAlert.classList.remove("active");
  overlay.classList.remove("active");
});
