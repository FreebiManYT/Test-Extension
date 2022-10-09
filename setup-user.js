var user = document.getElementsByClassName('text-overflow age-bracket-label-username font-caption-header')[0]
var link = document.getElementsByClassName('text-link dynamic-overflow-container')[0].href.replace('https://www.roblox.com/users/','').replace('/profile','')

fetch('https://users.roblox.com/v1/users/'+link, {
  method: "GET",
  redirect: "follow"
}).then((r) => r.json()).then((data) => console.log(data)).then((error) => console.log('error', error));
