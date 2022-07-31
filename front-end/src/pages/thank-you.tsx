import { useAppSelector } from "hooks";
import { selectLatestSubmissionId } from "features/submission/submission.slice";
import { useGetSubmissionQuery } from "features/submission/submission.service";

function ThankYouPage() {
  const latestSubmissionId = useAppSelector(selectLatestSubmissionId);
  const { data } = useGetSubmissionQuery(latestSubmissionId!);
  return <h1>thank you, {JSON.stringify(data)}</h1>
}

export default ThankYouPage;