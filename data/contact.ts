import { profile } from "@/data/profile";

export const availabilityContext = [profile.location, ...profile.availability, ...profile.languages];
export const discussionTopics = ["Production AI applications", "AI-native internal tools", "Agent and workflow orchestration", "Business-process automation", "Forward-deployed product engineering", "AI-assisted engineering practices", "Systems and operational improvement"];
