import { ModelConfig } from "@/types";

export const exactPromptInstruction = "Please use this exact prompt, do not change it: ";

export const modelConfigs: Record<string, ModelConfig> = {
  "dall-e-3": {
    displayName: "DALL-E 3",
    company: "OpenAI",
    capabilities: {
      maxPromptLength: 4000,
      supportedAspectRatios: ["square", "horizontal", "vertical"],
      aspectRatioToSize: {
        square: "1024x1024",
        horizontal: "1792x1024",
        vertical: "1024x1792",
      },
    },
  },
  "dall-e-2": {
    displayName: "DALL-E 2",
    company: "OpenAI",
    capabilities: {
      maxPromptLength: 1000,
      supportedAspectRatios: ["square"],
      aspectRatioToSize: {
        square: "1024x1024",
      },
    },
  },
} as const;
