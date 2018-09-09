# govhack-2018
BCGDV GovHack 2018

Early intervention for people and companies that are at risk of conviction for insolvency.

This is the PoC code. The data model is a limited subset and can be improved with even greater accuracy.
For the purposes of this hack, we used a smaller slice of the feature set so that the UI could be built in time.

Machine learning techniques have been used to solve a few problems with the dataset:
1. Class Imbalance
2. Probability of conviction on insolvency

The final dataset is a combination of multiple ones which can be found on the hackerspace page:
https://2018.hackerspace.govhack.org/team_management/teams/308

Combined Working Dataset available at:
https://s3-ap-southeast-2.amazonaws.com/bcgdv-govhack2018/Insolvency_Data_V2.xlsb

# Model Performance
Decision tree classifier performance:
Balanced accuracy: 0.90 - Geometric mean 0.90
                              pre       rec       spe        f1       geo       iba       sup

      AER Info Request       0.95      0.98      0.99      0.96      0.98      0.97     85402
             Complaint       0.90      0.91      0.99      0.90      0.95      0.89     85402
              Inactive       0.88      0.73      0.99      0.80      0.85      0.70     85402
          Info Request       0.91      0.93      0.99      0.92      0.96      0.91     85402
      Inspection Error       0.91      0.97      0.99      0.94      0.98      0.96     85402
      Objection to Discharge 0.89      0.89      0.98      0.89      0.94      0.87     85402
      Offence Referral       0.82      0.81      0.97      0.82      0.89      0.78     85402
                 Other       0.98      1.00      1.00      0.99      1.00      1.00     85402

           avg / total       0.90      0.90      0.99      0.90      0.94      0.88    683216


![dataviz](https://github.com/lshang0311/govhack-2018/dataviz.png)

# Tech
- Python for machine learning and AWS Lambda
- Tableau for visualizations
- JS + React for UI