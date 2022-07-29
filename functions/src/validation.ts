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
  let parsedBody: Submission;

  try {
    parsedBody = JSON.parse(body || "{}");
  } catch (err) {
    const error: ZodIssue = {
      code: "custom",
      path: [],
      message: "Invalid JSON"
    };

    return { errors: [error] };
  }

  try {
    submissionSchema.parse(parsedBody);
    return { errors: [], body: parsedBody };
  } catch (errors: any) {
    return { errors: errors.issues };
  }
};
