// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  if (!req.body.recipe && !req.body.ingredients) return;
  const recipe = req.body.recipe;
  const ingredients = req.body.ingredients.map((ingredient:any)=>ingredient);

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
  const openai = new OpenAIApi(configuration);
  try{
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `generate ${recipe?recipe:'random'} recipe ${ingredients.length ?'made from ' + ingredients:''} in this exact format:
      {
        "name":"recipe name",
        "description":"recipe description"
        "ingredients":["ingredient1","ingredient2",...],
        "instructions":["instruction1","instruction2",...]
      }`,
      temperature: 1,
      max_tokens: 2048,
    });
    try{
      const recipe = JSON.parse(response.data.choices[0].text);
      res.status(200).json(recipe);
    }catch(err){
      res.status(400).send('Something went wrong.. Please try again.');
    }
  }catch(error){
    console.log(error);
    res.status(400).send('Something went wrong.. Please try again.');
  }

  
}
