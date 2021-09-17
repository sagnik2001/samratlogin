import fire from "./Firebase.js"
const socialmediaAuth=(provider)=>{
  return fire
         .auth()
         .signInWithPopup(provider)
         .then((res)=>{
           return res.user
         })
         .catch((res)=>{
           return res;
         })
}
export default socialmediaAuth
