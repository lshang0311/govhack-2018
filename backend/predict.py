import json
from sklearn.externals import joblib

def handler(event, context):
    print(event)
    body = json.loads(event["body"])

    complianceModel = joblib.load('model_non_compliance.pkl')
    print("Loaded Non Compliance Model")
    print(f"Body is: {body}")

    outcome = complianceModel.predict([[body["sex"], body["familySituation"], body["state"]]])
    print(outcome)

    predictionResponse = {
        "risk": int(outcome[0])
    }

    response = {
        "statusCode": 200,
        "headers": {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        "body": json.dumps(predictionResponse)
    }

    return response
