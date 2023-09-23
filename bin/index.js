#!/usr/bin/env node
import OpenAI from "openai";

import yargs from 'yargs/yargs';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
const options = yargs(process.argv.slice(2)).usage("Usage : -s <SearchQuery>").option("s",{alias : "search", describe: "Enter Search query",type:"string", demandOption : true}).argv;
async function main(){
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": options.search}],
      });
      console.log(chatCompletion.choices[0].message.content);
}
if(options.search.trim()){
options.search += " "+options._.join(" ");
main();
}
else
{
    console.log("No Query");
}