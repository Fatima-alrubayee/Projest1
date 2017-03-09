var a=[17, 24, 4, 26, 19, 30, 2, 66, 40];
var  m=[];
var b=[];
var position=0;
var  c=0;
var i=0;

while(position<a.length){
    if((a[position]%2) not equal to 0){
        print(position);
        m[c]=a[position];
        if(c not equal to 0){
            if(m[c]<m[c-1])
                m[c]=m[c-1];
                
                print(c);
            
            
        }
       c=c+1; 
    }
    if((a[position]%2 equal to 0){
        print(position);
        b[i]=a[position];
        if(i not equal to 0){
            if(b[i] less b[i-1])
                b[i]=b[i-1];
                
                print(i);
            
        }
        i=i+1;
    }
    position=position+1;
}