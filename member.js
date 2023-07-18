function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsList = document.getElementById("memberSkillsList");

    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsList.style.display = "block";
        member.style.display = "none";
    } else {
        memberSkills.style.display = "none";
        memberSkillsList.style.display = "none";
        member.style.display = "block";
    }
}