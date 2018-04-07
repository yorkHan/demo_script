if [ -d $1 ]; then
 echo "$1 目录已经存在"
 exit 1
else
 mkdir $1
 cd $1
 mkdir css js
 echo "<!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>
 " > index.html
 echo "h1 {
     color:red;
     }" > css/style.css
 echo "var string = 'hello world';
 alert(string);
 " > js/main.js
 exit 0
fi