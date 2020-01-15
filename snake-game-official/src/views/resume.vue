<template>
    <div id="resume">
        <div>
            <div class="resumeSection">
                <div class="resumeSectionTitle">
                    <h2>Skills</h2>
                </div>
                <div class="resumeSubSection">
                    <ul>
                        <li>Proficient in <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>JQuery</strong>, <strong>Php</strong>, <strong>MySQL</strong> and <strong>sass</strong></li>
                        <br>
                        <li>Experience with <strong>frameworks</strong> and <strong>bootstrap</strong></li>
                        <br>
                        <li>Competent in <strong>C++</strong>, <strong>Java</strong>, and <strong>C</strong></li>
                        <br>
                        <li>Comfortable with version control using<strong>git hub</strong></li>
                        <br>
                        <li>Experience using <strong>Jira</strong> and <strong>Confluence</strong> in a agile development</li>
                        <br>
                        <li>Extensive experience developing in <strong>Linux</strong>-based environments at various work placements</li>
                        <br>
                        <li>Familiar with common <strong>networking technologies</strong> and protocols</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="space"></div>
        <div>
            <div class="resumeSection">
                <div class="resumeSectionTitle">
                    <h2>Experience</h2>
                </div>
                <div class="resumeSubSection">
                    <h4><strong>Integration, Quality Assurance</strong> | Kinaxis | Sept 2018 - Aug 2019</h4>
                    <ul>
                        <li>Created test classes using <strong>Java</strong></li>
                        <br>
                        <li>Created and implemented test strategies to verify the product met acceptance criteria</li>
                        <br>
                        <li>Automated tests using Java to verify a variety of product feature which including, robustness, endurance to stress and boundary condition</li>
                        <br>
                        <li>Improved and refactored old test by using clean code (by Robert C. Martin) practices to reduce test flakiness and simplify the codebase</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="space"></div>
        <div class="resumeSection">
                <div class="resumeSectionTitle">
                    <h2>Projects</h2>
                </div>
                <div class="resumeSubSection"> 
                    <h4><strong>Snakes Board Game</strong> |  Jan 2020</h4>
                    <ul>
                        <li>Created a web bases snake game using vue framework</li>
                        <br>
                        <li>Implemented Firebase for authentication and leader board traking</li>
                        <br>
                        <li>Deployed game on my personal website</li>
                        <br>
                        <li>Stored <a href="https://github.com/adamyusuf3494/snakegamevue.git" target="_blank">source code</a> on git hub for version control</li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
li{
    font-size: 20pt;
}
#resume{
    width:90%;
    padding: 25px;
    background: white; 
    border: 1px solid ; 
    margin-top: 15px;
    float:left;
    border-radius: 5px;
    border: 2px solid #7fcd91;
}
.resumeSubSection{
    width: 70%;
}
.resumeSection{
    display: flex;
    margin: 25px;
}
.resumeSectionTitle{
    float:left; 
    width: 30%;
    display: flex;
    align-items: flex-start;
}
#space{
    background: #7fcd91;
    height: 20px;
    border-radius: 5px;
}
h2{
    padding: 5px;
    display:inline-block; 
    font-size: 40pt;
}

h4{
    font-size: 30pt;
}
</style>