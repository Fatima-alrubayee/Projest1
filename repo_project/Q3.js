var a=[17, 24, 4, 26, 19, 30, 2, 66, 40];
var  m=[];
var position=0;
var  c=0;

while(position<a.length){
       isOdd(c){
          print(position);
          m[c]=a[position];
                if(c!=0){
                    if(m[c]<m[c-1])
                        m[c]=m[c-1];
                        
                        print(c);
                    
                    
                  }
            c=c+1; 
       }
     position=position+1;
}

function isOdd(c){
    if((a[position]%2)!=0){
        return true;
    }
    return false;
}