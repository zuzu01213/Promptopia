import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request) => {
  try {
    const { userId, prompt, tag } = await request.json();

    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error creating prompt:', error);
    return new Response("Failed to create a new prompt", {
      status: 500
    });
  }
};
