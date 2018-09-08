import json
from sklearn import datasets
from sklearn.externals import joblib

def handler(event, context):
    iris = datasets.load_iris()
    X, y = iris.data, iris.target

    clf = joblib.load('model.pkl') 

    print(clf.predict(X[0:1]))

    response = {
        "statusCode": 200,
        "body": "OK"
    }

    return response