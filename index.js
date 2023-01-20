const https = require('https');
const fs = require('fs');
const crypto = require('crypto');


https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';
  const challengeToken = 'k0myq86352af';

  // parse json data here...
  
  resp.on('data', function(chunck){
    data += chunck
  });

  resp.on('end', function(){
    let sortedItems = [];

    let parsedData = JSON.parse(data).data.split(",");
    for(let index = 0; index< parsedData.length; index++){
        if(parsedData[index].includes("key=")){
          let itemKey = parsedData[index].replace('key=', '');
          let itemAge = parsedData[index+1].replace('age=','');

          if(itemAge == 32){
            sortedItems.push(itemKey.trim());
          }
        }
      }

    const writeStream = fs.createWriteStream('output.txt');
    sortedItems.forEach((item) => writeStream.write(`${item}\n`));

    writeStream.on("finish", () => {
      let finalOutput = '';

      const buffer = fs.readFileSync('output.txt',{encoding:'utf8',flag:'r'});
      const hash = crypto.createHash('sha1');
      hash.update(buffer);

      const hex = hash.digest('hex');
      const concatenatingHex = hex.concat(challengeToken);

      for(let index = 0; index < concatenatingHex.length; index++){
        if((index+1)%3 ==0){
          finalOutput += 'X'
        } else{
          finalOutput += concatenatingHex[index]
        }
      }
      
      console.log(finalOutput)
    });

    writeStream.end();

  })

});
