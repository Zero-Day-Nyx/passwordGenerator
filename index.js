//length
var length = (passLength[i]);
//if length input is outside 8-128 chars then error appears
if (length <= 7 || length >= 129){
    alert ("Password length must be between 8-128 characters.");
}
//upper alpha
var upper = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
if (upper === true){

}
//lower alpha
var lower = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
if (lower === true){

}
//numeric
var numbers = [0,1,2,3,4,5,6,7,8,9];
if (numbers === true){

}
//special characters
var specChar = ["!,@,#,$,%,&,*"];
if (special === true){

}
//generate password
var genPass = ("");
//changing h5 tag to generated password
h5.textContent = (genPass);
document.body.appendChild(h5);

//    if there is time.
//allow option to generate multiple passwords at a time.

//console logs
console.log(length[i]);