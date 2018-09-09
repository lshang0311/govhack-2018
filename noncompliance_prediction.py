import pickle

import pandas as pd
from imblearn.metrics import classification_report_imbalanced
from imblearn.metrics import geometric_mean_score
from imblearn.over_sampling import RandomOverSampler
from sklearn import preprocessing
from sklearn.metrics import balanced_accuracy_score
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier

"""
GovHack 2018 - Non-compliance prediction
"""


class MultiColumnLabelEncoder:
    def __init__(self, columns=None):
        self.columns = columns  # array of column names to encode

    def fit(self, X, y=None):
        return self  # not relevant here

    def transform(self, X):
        """
        Transforms columns of X specified in self.columns using
        LabelEncoder(). If no columns specified, transforms all
        columns in X.
        """

        output = X.copy()
        if self.columns is not None:
            for col in self.columns:
                le = preprocessing.LabelEncoder()
                le.fit(output[col])
                # print(list(le.classes_))

                output[col] = LabelEncoder().fit_transform(output[col])
        else:
            for colname, col in output.iteritems():
                output[colname] = LabelEncoder().fit_transform(col)
        return output

    def fit_transform(self, X, y=None):
        return self.fit(X, y).transform(X)


# ---------------------------
# load data
input_filename = 'non-compliance-in-personal-insolvencies.csv'
iter_csv = pd.read_csv(
    input_filename,
    iterator=True,
    chunksize=1000000,
)
df = pd.concat([chunk for chunk in iter_csv])
assert df.shape == (356500, 23)

# fill nan
df['Debtor Occupation Name (ANZSCO)'] = df['Debtor Occupation Name (ANZSCO)'].fillna('unknown')

# encoding
feature_columns = [
    'State of Debtor',
    'Sex of Debtor',
    'Family Situation',
    'Debtor Occupation Name (ANZSCO)',
    'Debtor Income',
    'Primary Income Source',
    'Unsecured Debts',
    'Value of Assets'
]
df = MultiColumnLabelEncoder(
    columns=feature_columns
).fit_transform(df)

# cast type
for col in feature_columns:
    df[col] = df[col].astype(int)
print(df.dtypes)

# prepare the target
target = 'Non-Compliance Type'
df[target] = df[target].fillna('Inactive')

le = preprocessing.LabelEncoder()
le.fit(df[target])
df[target] = le.transform(df[target])
df[target] = df[target].astype(int)

target_names = le.classes_

# build model
X = df[feature_columns]
y = df[target]

ros = RandomOverSampler()
X, y = ros.fit_resample(X, y)
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    stratify=y,
    random_state=0
)
tree = DecisionTreeClassifier()
tree.fit(X_train, y_train)
y_pred_tree = tree.predict(X_test)

print(tree.predict_proba(X_test[0:10]))

# show model performance
print('Decision tree classifier performance:')
print('Balanced accuracy: {:.2f} - Geometric mean {:.2f}'
      .format(balanced_accuracy_score(y_test, y_pred_tree),
              geometric_mean_score(y_test, y_pred_tree)))

print(classification_report_imbalanced(y_test, y_pred_tree, target_names=target_names))

# save the model
filename = 'model.pkl'
pickle.dump(tree, open(filename, 'wb'))
