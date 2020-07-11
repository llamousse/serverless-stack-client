export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-13"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://d94cjy8ed2.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_lUbXs9yhw",
        APP_CLIENT_ID: "nevp33juff9923vjnrt7idktq",
        IDENTITY_POOL_ID: "us-east-1:f373318a-1e67-48b2-b414-52e76f472733"
    }
};