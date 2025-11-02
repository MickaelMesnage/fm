import { SPORTS, type Sport } from "../types/sports";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { ValidationError } from "../errors";

export const teamEntityPropsSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  sport: z.enum(SPORTS),
});

export type TeamEntityProps = z.infer<typeof teamEntityPropsSchema>;

export class TeamEntity {
  id: string;
  name: string;
  sport: Sport;

  constructor(props: unknown) {
    const { success, error, data } = teamEntityPropsSchema.safeParse(props);

    if (!success) {
      throw new ValidationError(error.message);
    }

    this.id = data.id ?? uuidv4();
    this.name = data.name;
    this.sport = data.sport;
  }
}
