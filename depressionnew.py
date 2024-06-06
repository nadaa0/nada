import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt 
import seaborn as sns 
import missingno as ms 
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle

df = pd.read_csv("C:/Users/PC'S/Desktop/PFA/newsurvey.csv")

df.head()
df.info()
ms.matrix(df)
df.max()
df.describe()
df.shape

sns.swarmplot(y="Age", x=" Risque", data=df)
plt.show()

df.info()
train = df.drop(['Nom','score',' Risque','Age'], axis=1)
train= np.asarray(train, dtype='float64')
test = df[[' Risque']]
test= np.asarray(test, dtype='float64')
test.shape

X_train, X_test, y_train, y_test = train_test_split(train,test, test_size=0.3, random_state=2)

reg = LogisticRegression()
reg.fit(X_train, y_train)
pred = reg.predict(X_test)
pred

n =[[0,1,1,0]]
o = reg.predict(n)
o

pred.shape
reg.score(X_test, y_test)
X_test.shape

# pour creer au debut un empty 'model.pkl'
#open("model.pkl", "wb").close()

pickle.dump(reg,open('model.pkl','wb'))
model=pickle.load(open('model.pkl','rb'))
