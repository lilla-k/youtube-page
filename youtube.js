const video1 = {
    name: "30 perces Hatha jóga",
    channelName: "Nirvana Online Jóga",
    views: 10000,
    uploadedMonthAgo: 5
};
const video2 = {
    name: "Reggeli jógagyakorlás Brigivel",
    channelName: "Nirvana Online Jóga",
    views: 26000,
    uploadedMonthAgo: 12
};
const video3 = {
    name: "Super Bowl 54 FULL Game: Kansas City Chiefs vs. San Francisco 49ers",
    channelName: "NFL",
    views: 9800000,
    uploadedMonthAgo: 24
};
const video4 = {
    name: "NFL Most Athletic Plays of All Time",
    channelName: "Football Films",
    views: 6300000,
    uploadedMonthAgo: 9
};
const video5 = {
    name: "Learn JAVASCRIPT in just 5 MINUTES (2020)",
    channelName: "Aaron Jack",
    views: 1200000,
    uploadedMonthAgo: 24
};
const video6 = {
    name: "Learn JavaScript - Full Course for Beginners",
    channelName: "freeCodeCamp.org",
    views: 1200000,
    uploadedMonthAgo: 24
};
const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6
];

for (let i=0; i < videos.length; i++) {
    const videoCard = document.createElement("div");
    document.querySelector("#videos").appendChild(videoCard);
    const imageContainer = document.createElement("div");
    videoCard.appendChild(imageContainer);
    const videoPreview = document.createElement("img");
    imageContainer.appendChild(videoPreview);
    const staticImage = document.createElement("img");
    imageContainer.appendChild(staticImage);
    const details = document.createElement("a");
    videoCard.appendChild(details);
    const profileIcon = document.createElement("div");
    details.appendChild(profileIcon);
    const userIcon = document.createElement("i");
    profileIcon.appendChild(userIcon);
    const intro = document.createElement("div")
}
