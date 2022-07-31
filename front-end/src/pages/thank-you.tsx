import { useAppSelector } from "hooks";
import { selectSubmission } from "features/submission/submission.slice";

function ThankYouPage() {
  const submissionState = useAppSelector(selectSubmission);

  return <h1>thank you, {submissionState.firstName}</h1>
}

export default ThankYouPage;