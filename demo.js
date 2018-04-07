var fs = require('fs');

var dirName = process.argv[2];

if (fs.existsSync("./")) {
    fs.mkdirSync("./"+dirName);
    process.chdir("./"+dirName);
    fs.mkdirSync('css');
    fs.mkdirSync('js');
    fs.writeFileSync("./index.html","<!DOCTYPE>\n<title>Hello\</title>\n<h1>Hi</h1>");
    fs.writeFileSync("css/style.css","h1 {\ncolor:red;\n}");
    fs.writeFileSync("./js/main.js","var string = 'hello world';\n    alert(string);");
    process.exit(0);
}else{
    console.log(dirName+"目录已经存在！");
    callback();
}
