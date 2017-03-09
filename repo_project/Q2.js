
var a=[17, 24, 4, 26, 19, 30, 2, 66, 40];
    m=[];
var position=0;
    c=0;

while(position<a.length){
    if((a[position]%2)not equal to 0){
        print(position);
        m[c]=a[position];
        if(c not equal to 0){
            if(m[c]<m[c-1])
                m[c]=m[c-1];
                
                print(c);
            
            
              }
         c=c+1; 
     }
    position=position+1;
}