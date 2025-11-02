import { SPORTS, type Sport } from "../types/sports";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const teamEntityPropsSchema = z.object({
  id: z.string(),
  name: z.string(),
  sport: z.enum(SPORTS),
});

export type TeamEntityProps = z.infer<typeof teamEntityPropsSchema>;

export class TeamEntity {
  id: string;
  name: string;
  sport: Sport;

  constructor(props: TeamEntityProps) {
    this.id = props.id;
    this.name = props.name;
    this.sport = props.sport;
  }
}
