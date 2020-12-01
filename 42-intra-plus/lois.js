function execute()
{
    var userName = document.getElementsByClassName("name")[0];
    var profileBanner = document.getElementsByClassName("profile-banner")[0];

    if (userName.innerText == "Loïs Duplain" || userName.innerText == "Fabien Herraud")
    {
        profileBanner.style.backgroundImage = 'url("https://loisduplain.fr/img/42-banner.png")';

        userName.style.color = "#be2edd";
        userName.style.textShadow = "0px 0px 21px rgba(255, 255, 255, 1)";
        userName.style.fontSize = "25px";

        if (document.URL.startsWith("https://profile.intra.42.fr/users/"))
        {
            var evalutationPointsSpan = document.getElementsByClassName("user-correction-point-value")[0];
            evalutationPointsSpan.innerText = "∞";

            var cursusList = document.getElementsByClassName("cursus-user-select")[0];
            for (i = cursusList.length - 1; i >= 0; i--)
            {
                cursusList.remove(i);
            }

            var newCursus = document.createElement("option");
            newCursus.value = "1";
            newCursus.text = "Trop loin pour toi";

            cursusList.add(newCursus);

            var newGrade = document.getElementsByClassName("user-grade-value")[0];
            newGrade.innerText = "Dieu";
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
    while (true)
    {
        await sleep(500);
        execute();
    }
}

start();