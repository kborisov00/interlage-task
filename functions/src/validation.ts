import { z, TypeOf, ZodError, ZodIssue } from "zod";

const submissionSchema = z.object({
  firstName: z.string(), // required
  lastName: z.string(), // required
  email: z.string(), // required
  address1: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  phone: z.string(), // required
  jobTitle: z.string().optional(),
  reason: z.string().optional(),
});

type Submission = TypeOf<typeof submissionSchema>;

interface ValidationReturn {
  errors: ZodError["issues"];
  body?: Submission;
}

export const validateSubmission = (body: string | null): ValidationReturn => {
  try {
    const parsedBody = JSON.parse(body || "{}");
    submissionSchema.parse(parsedBody);

    return { errors: [], body: parsedBody };
  } catch (e: any) {
    if (e instanceof ZodError) {
      return { errors: e.issues };
    }

    if (e instanceof SyntaxError) {
      const error: ZodIssue = {
        code: "custom",
        path: [],
        message: e.message,
      };

      return { errors: [error] };
    }

    return { errors: [e] };
  }
};
