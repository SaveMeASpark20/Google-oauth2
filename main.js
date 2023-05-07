function signIn(){
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

  let form = document.createElement('form')
  form.setAttribute('method', 'GET')
  form.setAttribute('action', oauth2Endpoint)

  let params = {
    "client_id":"127406230089-3j77dv9ms61agfs4cavrf0ghinbtd40o.apps.googleusercontent.com",
    "redirect_uri":"http://127.0.0.1:5500/profile.html",
    "response_type":"token",
    "scope":"https://www.googleapis.com/auth/userinfo.profile",
    "include_granted_scopes":"true",
    "state":"pass-through-value"
  }

  for(let param in params){
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', param)
    input.setAttribute('value', params[param])
    form.appendChild(input);
  }

  

  document.body.appendChild(form)

  form.submit()
}