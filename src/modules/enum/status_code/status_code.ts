export enum e_status_code{
    NotFoundCode=404,
    NotFoundMessage="404 not found",
    SuccessCode=200,
    SuccessMessage="200 ok!",
    AcceptedCode=202,
    AcceptedMessage="202 accepted",
    BadRequestCode=400,
    BadRequestMessage="400 bad request",
    ServerErrorCode=500,
    ServerErrorMessage="500 internal server error",
    TooMuchRequestCode=429 ,
    TooMuchRequestMessage="429 too much request try again later" 
}

// todo https://www.w3schools.com/typescript/typescript_enums.php