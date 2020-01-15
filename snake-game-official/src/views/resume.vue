<template>
    <div id="resume">
        <div>
            <div class="resumeSection">
                <div class="resumeSectionTitle">
                    <h2>Skills</h2>
                </div>
                <div class="resumeSubSection">
                    <p>- Proficient in <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>JQuery</strong>, <strong>Php</strong>, <strong>MySQL</strong> and <strong>sass</strong></p>
                    <p>- Experience with <strong>frameworks</strong> and <strong>bootstrap</strong></p>
                    <p>-  in <strong>C++</strong>, <strong>Java</strong>, and <strong>C</strong></P>
                    <p>- Comfortable with blah blah <strong>git hub</strong></p>
                    <p>- Experience using <strong>Jira</strong> and <strong>Confluence</strong> in a agile development</p>
                    <p>- Extensive experience developing in <strong>Linux</strong>-based environments at various work placements</p>
                    <p>- Familiar with common <strong>networking technologies</strong> and protocols</p>
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
                    <p>- Created test classes using <strong>Java</strong></p>
                    <p>- Created and implemented test strategies to verify the product met acceptance criteria</p>
                    <p>- Automated tests using Java to verify a variety of product feature which including,<br> robustness, endurance to stress and boundary condition</P>
                    <p>- Improved and refactored old test by using clean code (by Robert C. Martin) practices<br> to reduce test flakiness and simplify the codebase</p>
                    <p></p>
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
                    <p>- Created a website snake game using vue</P>
                    <p>- Implemented Firebase for authentication and leader board traking/p>
                    <p>- Deployed game on personal website</p>
                    <p>- Stored <a href="#">source code</a> on git hub</p>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div{
    
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
    font-size: 12pt;
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
}
</style>