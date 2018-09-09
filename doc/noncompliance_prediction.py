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


def cv_optimize(clf, parameters, X, y, n_jobs=1, n_folds=5, score_func=None, verbose=0):
    if score_func:
        gs = GridSearchCV(clf, param_grid=parameters, cv=n_folds, n_jobs=n_jobs, scoring=score_func, verbose=verbose)
    else:
        gs = GridSearchCV(clf, param_grid=parameters, n_jobs=n_jobs, cv=n_folds, verbose=verbose)
    gs.fit(X, y)
    print("BEST", gs.best_params_, gs.best_score_, gs.grid_scores_, gs.scorer_)
    print("Best score: ", gs.best_score_)
    best = gs.best_estimator_
    return best


# ---------------------------
# load data
# nrows = 356500
iter_csv = pd.read_csv(
    'non-compliance-in-personal-insolvencies.csv',
    iterator=True,
    chunksize=1000000,
)
df = pd.concat([chunk for chunk in iter_csv])
print(df.head())

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
df['State of Debtor'] = df['State of Debtor'].astype(int)
df['Sex of Debtor'] = df['Sex of Debtor'].astype(int)
df['Family Situation'] = df['Family Situation'].astype(int)
df['Debtor Occupation Name (ANZSCO)'] = df['Debtor Occupation Name (ANZSCO)'].astype(int)
df['Debtor Income'] = df['Debtor Income'].astype(int)
df['Primary Income Source'] = df['Primary Income Source'].astype(int)
df['Unsecured Debts'] = df['Unsecured Debts'].astype(int)
df['Value of Assets'] = df['Value of Assets'].astype(int)
print(df.dtypes)

# prepare the target
df['Non-Compliance Type'] = df['Non-Compliance Type'].fillna('Inactive')

le = preprocessing.LabelEncoder()
le.fit(df["Non-Compliance Type"])
df["Non-Compliance Type"] = le.transform(df['Non-Compliance Type'])
df['Non-Compliance Type'] = df['Non-Compliance Type'].astype(int)

target_names = le.classes_

# split train and test sets
X = df[feature_columns]
y = df['Non-Compliance Type']

# build model
ros = RandomOverSampler()
X, y = ros.fit_resample(X, y)
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y,
                                                    random_state=0)
tree = DecisionTreeClassifier()
tree.fit(X_train, y_train)
y_pred_tree = tree.predict(X_test)

print('Decision tree classifier performance:')
print('Balanced accuracy: {:.2f} - Geometric mean {:.2f}'
      .format(balanced_accuracy_score(y_test, y_pred_tree),
              geometric_mean_score(y_test, y_pred_tree)))

print(classification_report_imbalanced(y_test, y_pred_tree, target_names=target_names))

# save the model
filename = 'model.pkl'
pickle.dump(tree, open(filename, 'wb'))