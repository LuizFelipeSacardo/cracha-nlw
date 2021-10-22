const linksSocialMedia = {
  github: 'LuizFelipeSacardo',
  youtube: '',
  facebook: 'LuizFelipeSacardo',
  instagram: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;    
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url).then(response => response.json()).then(data => {    
    userName.textContent = data.name;    
    gitHubUrl.href = data.html_url;    
    userBio.textContent = data.bio;    
    profilePicture.src = data.avatar_url;    
    gitHubId.textContent = data.login;
  });
}

getGitHubProfileInfos();
