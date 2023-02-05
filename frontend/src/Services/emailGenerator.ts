// for sake of simplicity, I'm adding all things in this file.

const url = 'http://localhost:3000/api/v1/generateEmail';

interface EmailResponseDTO {
    status: number;
    email: string;
    error: string
}

// used to type the interface used on your app
export interface Emails {
  email: string;
}

export interface EmailParts {
    name: string;
    domain: string;
}

type GetEmailsSuccessResponse = {
  isOk: boolean;
  data: Emails;
  error: null;
};

type GetEmailsErrorResponse = {
  isOk: boolean;
  data: null;
  error: string;
};

type GetEmailDetailsResponse =
  | GetEmailsSuccessResponse
  | GetEmailsErrorResponse;

export const getEmailDetails = async (
  name: string,
  domain: string,
): Promise<GetEmailDetailsResponse> => {
  try {
    const resp = await fetch(`${url}?fullName=${name}&domain=${domain}`);
    const data: EmailResponseDTO = await resp.json();

    // catched scenario
    if (data.error) {
      return {
        isOk: false,
        data: null,
        error: data.error,
      };
    }
    // transform data
    const transformedData: Emails = {
      email: data.email,
    };

    return {
      isOk: true,
      data: transformedData,
      error: null,
    };
  } catch (e) {
    return {
      isOk: false,
      data: null,
      error: (e as Error).message,
    };
  }
};
