import json
from sklearn.externals import joblib

def handler(event, context):
    print(event)
    body = json.loads(event["body"])

    complianceModel = joblib.load('model.pkl')
    print("Loaded Non Compliance Model")
    print(f"Body is: {body}")

    state = body["state"]
    sex = body["sex"]
    familySituation = body["familySituation"]
    occupation = body["occupation"]
    income = body["income"]
    primarySourceIncome = body["primaryIncome"]
    unsecuredDebts = body["unsecuredDebts"]
    assets = body["assets"]

    outcome = complianceModel.predict_proba([[state, sex, familySituation, occupation, income, primarySourceIncome, unsecuredDebts, assets]])
    print(outcome)

    predictionResponse = {
        "risk": float(outcome[0][5] + float(outcome[0][6]))
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
