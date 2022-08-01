import { useNavigate } from "react-router-dom";

import { useAppSelector } from "hooks";
import { StyledCenter } from "styles/misc.styles";
import FormFactory from "components/form-factory";
import fieldSet from "field-sets/generic-form.json";
import { FormProvider } from "contexts/form.context";
import { FieldSet } from "components/form-factory/form-factory.interface";
import { selectLatestSubmissionId } from "features/submission/submission.slice";
import { useGetSubmissionQuery } from "features/submission/submission.service";

function ThankYouPage() {
  const navigate = useNavigate();
  const latestSubmissionId = useAppSelector(selectLatestSubmissionId);
  const { data: latestSubmission, isLoading } = useGetSubmissionQuery(
    latestSubmissionId!
  );

  const navigateHome = () => navigate("/");

  if (!latestSubmissionId) {
    navigateHome();

    return null;
  }

  if (isLoading) {
    return <StyledCenter>Loading...</StyledCenter>;
  }

  return (
    <StyledCenter>
      <h1>Thank You</h1>

      <FormProvider state={latestSubmission!} isReadonly>
        <FormFactory fieldSet={fieldSet as FieldSet} />
      </FormProvider>

      <button onClick={navigateHome}>Create Another Submission</button>
    </StyledCenter>
  );
}

export default ThankYouPage;
