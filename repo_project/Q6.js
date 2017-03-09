
var a=[17, 24, 4, 26, 19, 30, 2, 66, 40];
var  m=[];
var b=[];
var position=0;
var  c=0;
var i=0;
while(position<a.length){
    if((a[position]%2)!=0){
          a.sort();
        a.reverse();
        console.log(position);
        
        m[c]=a[position];
        if(c!=0){
            if(m[c]<m[c-1])
                m[c]=m[c-1];
                
                console.log(c);
        }
       c=c+1; 
    }
    else(a[position]%2==0){
        a.sort();
        a.reverse();
        console.log(position);
        
        b[i]=a[position];
        if(i!=0){
            if(b[i]<b[i-1])
                b[i]=b[i-1];
                
                console.log(i);
        }
        i=i+1;
    }
    position=position+1;
}
function sort(a,b) {
   
   return(a-b);
}
function reverse(b,a){
    return(b-a);
}
