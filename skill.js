document.addEventListener('DOMContentLoaded', () => {
    const skillsContent = document.getElementById('skills-content');

    // Technical Skills Section with Icons
    const technicalSkillsHTML = `
        <div class="skills-section technical-skills">
            <h3>Technical Skills</h3>
            <div class="skill-box" id="html-skill">
                <i class="fab fa-html5 skill-icon"></i>
                <h4>HTML</h4>
                <button class="certificate-btn" onclick="showCertificate('html.pdf')">View Certificate</button>
            </div>
            <div class="skill-box" id="css-skill">
                <i class="fab fa-css3-alt skill-icon"></i>
                <h4>CSS</h4>
                <button class="certificate-btn" onclick="showCertificate('css-certificate.pdf')">View Certificate</button>
            </div>
            <div class="skill-box" id="js-skill">
                <i class="fab fa-js-square skill-icon"></i>
                <h4>JavaScript</h4>
                <button class="certificate-btn" onclick="showCertificate('javascript-certificate.pdf')">View Certificate</button>
            </div>
            <div class="skill-box" id="react-skill">
                <i class="fab fa-react skill-icon"></i>
                <h4>React/Angular JS</h4>
                <button class="certificate-btn" onclick="showCertificate('react-certificate.pdf')">View Certificate</button>
            </div>
        </div>
    `;

    // Soft Skills Section with Dynamic Colors
    const softSkillsHTML = `
        <div class="skills-section soft-skills">
            <h3>Soft Skills</h3>
            <div class="skill-box" style="background-color: #f0e68c;">
                <h4>Communication</h4>
            </div>
            <div class="skill-box" style="background-color: #ffcccb;">
                <h4>Teamwork</h4>
            </div>
            <div class="skill-box" style="background-color: #add8e6;">
                <h4>Problem Solving</h4>
            </div>
            <div class="skill-box" style="background-color: #90ee90;">
                <h4>Adaptability</h4>
            </div>
        </div>
    `;

    // Combine both sections
    skillsContent.innerHTML = technicalSkillsHTML + softSkillsHTML;
});

// Function to show the certificate
function showCertificate(certificateFile) {
    window.open(certificateFile, '_blank');
}
