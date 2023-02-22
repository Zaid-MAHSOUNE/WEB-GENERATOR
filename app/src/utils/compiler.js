export default CompilerFn = (json) => {
    const fs = require('fs');
    let finalData = "";
    try {
        finalData = fs.readFileSync('defaultCss.css', 'utf8');
        console.log(finalData);
      } catch (err) {
        console.error(err);
      }
    data.map((element)=>{
        finalData = finalData+"\n."+element.class+"{\n";
        finalData = finalData+element.attributes.map((element)=>""+element.name+":"+element.value+";\n");
        finalData = finalData+"}\n";
    })

    finalData = finalData.replace(/,/g, "");

    console.log(finalData);

    fs.writeFile('../assets/css/dashboard.module.css',finalData,{
        encoding: "utf8",
        flag: "w",
        mode: 0o666
      },err =>{
        if(err) throw err;
    })
}