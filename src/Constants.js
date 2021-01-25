export const DEV_URL = 'http://localhost:8080'
export const PROD_URL = 'http://kingshotel.us-east-2.elasticbeanstalk.com'
export const API_URL = PROD_URL
const aws_s3_policy = {
    "Version": "2012-10-17",
    "Statement":[
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::kingzhotels/*"
        }
    ]
}

export const SET_HOTEL = "SET_HOTEL"
export const SHOW_ADD = "SHOW_ADD"
